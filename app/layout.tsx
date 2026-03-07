import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SoundShare - Connect Two AirPods to One MacBook',
  description:
    'SoundShare is a macOS audio sharing app that helps you connect two AirPods or multiple Bluetooth headphones to one Mac with synchronized playback.',
  keywords: [
    'connect two AirPods to one MacBook',
    'how to connect two AirPods to one MacBook',
    'connect two Bluetooth headphones on Mac',
    'play audio through multiple Bluetooth devices Mac',
    'audio sharing macOS',
    'share audio on Mac',
    'macOS audio sharing app',
    'multi output audio Mac',
    'Bluetooth audio splitter Mac',
  ],
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
