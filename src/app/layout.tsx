import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Exo_2, Roboto } from 'next/font/google';
import { ThemeProvider } from 'next-themes';

export const metadata: Metadata = {
  title: 'The Cyber Sentinels',
  description: 'Guarding the Digital Frontier',
};

const exo2 = Exo_2({
  subsets: ['latin'],
  variable: '--font-exo2',
  weight: ['400', '700', '900'],
});

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['400', '500', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${exo2.variable} ${roboto.variable} font-body antialiased relative`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
