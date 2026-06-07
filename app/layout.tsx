import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://soundshare.app'),
  title: {
    default: 'SoundShare - Share Audio on Mac with Two AirPods',
    template: '%s | SoundShare',
  },
  description:
    'SoundShare is a Mac audio sharing app for connecting two AirPods or multiple Bluetooth headphones to one Mac with synchronized sound for movies, music, calls, and podcasts.',
  alternates: {
    canonical: '/',
  },
  keywords: [
    'connect multiple AirPods to Mac',
    'connect two AirPods to one MacBook',
    'how to connect two AirPods to one MacBook',
    'how to connect multiple AirPods to Mac',
    'connect two Bluetooth headphones on Mac',
    'play audio through multiple Bluetooth devices Mac',
    'audio sharing macOS',
    'share audio on Mac',
    'macOS audio sharing app',
    'multi output audio Mac',
    'Bluetooth audio splitter Mac',
  ],
  openGraph: {
    type: 'website',
    url: 'https://soundshare.app/',
    siteName: 'SoundShare',
    title: 'SoundShare - Share Audio on Mac with Two AirPods',
    description:
      'Share Mac audio with two AirPods or multiple Bluetooth headphones at the same time.',
    images: [
      {
        url: '/soundshare-hero-1200.jpg',
        width: 1200,
        height: 780,
        alt: 'SoundShare macOS app for sharing audio with multiple Bluetooth devices',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SoundShare - Share Audio on Mac with Two AirPods',
    description:
      'Share Mac audio with two AirPods or multiple Bluetooth headphones at the same time.',
    images: ['/soundshare-hero-1200.jpg'],
  },
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
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="apple-itunes-app" content="app-id=6742040464" />
        <link
          rel="preload"
          as="image"
          href="/soundshare-hero-1200.webp"
          imageSrcSet="/soundshare-hero-800.webp 800w, /soundshare-hero-1200.webp 1200w, /soundshare-hero-1600.webp 1600w"
          imageSizes="(max-width: 1023px) min(90vw, 350px), 600px"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
