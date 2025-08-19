import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { CursorGlow } from '@/components/cursor-glow';

export const metadata: Metadata = {
  title: 'The Cyber Sentinels',
  description: 'Guarding the Digital Frontier',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Roboto+Mono:wght@400;700&family=Open+Sans:wght@400;600&family=Tektur:wght@400..900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased relative">
        <CursorGlow />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
