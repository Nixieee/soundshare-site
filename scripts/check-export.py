"""Verify crawlable metadata and local links in the production static export."""
import json
from collections import Counter
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1] / 'out'
ORIGIN = 'https://soundshare.app'

class Page(HTMLParser):
    def __init__(self, path):
        super().__init__()
        self.path, self.tags, self.title, self.schema = path, [], '', []
        self.in_title = self.in_schema = False
        self.feed(path.read_text())
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        self.tags.append((tag, attrs))
        if tag == 'title': self.in_title = True
        if tag == 'script' and attrs.get('type') == 'application/ld+json':
            self.in_schema = True
            self.schema.append('')
    def handle_endtag(self, tag):
        if tag == 'title': self.in_title = False
        if tag == 'script': self.in_schema = False
    def handle_data(self, data):
        if self.in_title: self.title += data
        if self.in_schema: self.schema[-1] += data
    def attr(self, tag, key, value, attribute):
        return next((a.get(attribute) for t, a in self.tags if t == tag and a.get(key) == value), None)

assert ROOT.exists(), 'Run npm run build first.'
sitemap = ET.parse(ROOT / 'sitemap.xml')
urls = [node.text for node in sitemap.findall('.//{*}loc')]
assert len(urls) == len(set(urls)), 'Duplicate sitemap URLs'
pages = {}
for url in urls:
    path = ROOT / urlsplit(url).path.lstrip('/') / 'index.html'
    assert path.exists(), f'Sitemap destination missing: {url}'
    pages[urlsplit(url).path] = Page(path)
errors, counts, titles = [], Counter(), []
for route, page in pages.items():
    def check(condition, message):
        if not condition: errors.append(f'{route}: {message}')
    check('SoundShare' in page.title, 'title missing brand')
    titles.append(page.title)
    check(bool(page.attr('meta', 'name', 'description', 'content')), 'missing description')
    check(page.attr('link', 'rel', 'canonical', 'href') == ORIGIN + route, 'canonical mismatch')
    check(sum(t == 'h1' for t, _ in page.tags) == 1, 'expected exactly one h1')
    check('noindex' not in (page.attr('meta', 'name', 'robots', 'content') or ''), 'sitemap page marked noindex')
    check(bool(page.attr('meta', 'property', 'og:image', 'content')), 'missing OG image')
    for raw in page.schema:
        json.loads(raw)
        counts['valid_json_ld_blocks'] += 1
    for tag, attrs in page.tags:
        reference = attrs.get('href') if tag in ('a', 'link') else attrs.get('src') if tag == 'img' else None
        if not reference: continue
        parsed = urlsplit(reference)
        if parsed.netloc and parsed.netloc != 'soundshare.app': continue
        if parsed.scheme and parsed.scheme not in ('http', 'https'): continue
        if not parsed.path and not parsed.fragment: continue
        target_route = unquote(parsed.path) if parsed.path else route
        target = ROOT / target_route.lstrip('/')
        if target.is_dir(): target = target / 'index.html'
        check(target.exists(), f'missing local destination {reference}')
        counts['local_references'] += 1
        if parsed.fragment and target_route in pages:
            ids = [a.get('id') for _, a in pages[target_route].tags]
            check(unquote(parsed.fragment) in ids, f'missing anchor {reference}')
            counts['anchors'] += 1
        if tag == 'img':
            check('alt' in attrs, f'image without alt: {reference}')
            check('width' in attrs and 'height' in attrs, f'image without dimensions: {reference}')
for title, count in Counter(titles).items():
    if count > 1: errors.append(f'Duplicate title: {title}')
legacy = Page(ROOT / 'sound-share/index.html')
assert 'noindex' in legacy.attr('meta', 'name', 'robots', 'content')
assert legacy.attr('link', 'rel', 'canonical', 'href') == ORIGIN + '/audio-sharing-on-mac/'
assert ORIGIN + '/sitemap.xml' in (ROOT / 'robots.txt').read_text()
assert '/sound-share/' not in [urlsplit(url).path for url in urls]
result = {'indexable_pages': len(pages), **dict(counts), 'errors': errors}
print(json.dumps(result, indent=2))
if errors: raise SystemExit(1)
