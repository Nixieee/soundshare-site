import './globals.css';
import './landing.css';
import type { Metadata } from 'next';
import { APP_STORE_URL, SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'SoundShare — Share Mac Audio Across Multiple Headphones',
    template: '%s | SoundShare',
  },
  description: 'SoundShare is a macOS menu-bar app for sharing one Mac audio output across two AirPods or multiple Bluetooth headphones.',
  applicationName: 'SoundShare',
  authors: [{ name: 'Nikolay Kalchev', url: `${SITE_URL}/about/` }],
  creator: 'Nikolay Kalchev',
  publisher: 'SoundShare',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const providerToken = process.env.NEXT_PUBLIC_APP_STORE_PROVIDER_TOKEN;
  const analyticsScriptUrl = process.env.NEXT_PUBLIC_PLAUSIBLE_SCRIPT_URL;
  const affiliateData = providerToken ? `, affiliate-data=pt=${providerToken}&ct=smart-banner&mt=12` : '';

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="apple-itunes-app" content={`app-id=6742040464${affiliateData}, app-argument=${APP_STORE_URL}`} />
        {analyticsScriptUrl ? (
          <>
            <script dangerouslySetInnerHTML={{ __html: "window.plausible=window.plausible||function(){(window.plausible.q=window.plausible.q||[]).push(arguments)}" }} />
            <script async src={analyticsScriptUrl} />
          </>
        ) : null}
      </head>
      <body className="font-sans">
        <script
          dangerouslySetInnerHTML={{
            __html: "try{var t=localStorage.getItem('soundshare-theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d);document.documentElement.style.colorScheme=d?'dark':'light'}catch(e){}",
          }}
        />
        {children}
      </body>
    </html>
  );
}
