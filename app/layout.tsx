import type { Metadata } from 'next';
import { Inter, Pixelify_Sans, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
});

const pixelifySans = Pixelify_Sans({
  weight: ['500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-pixel',
});

export const metadata: Metadata = {
  title: 'Yashaswi Priya - Portfolio',
  description: 'Software Engineer Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${pixelifySans.variable}`}>
      <body className="bg-[#FAF8ED] text-[#1E2B24] font-sans antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}