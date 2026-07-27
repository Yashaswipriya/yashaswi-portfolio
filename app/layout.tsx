import type { Metadata } from 'next';
import { Inter, Silkscreen } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
});

// Silkscreen provides clean 8-bit pixel rendering at both small & large sizes
const silkscreen = Silkscreen({
  weight: ['400', '700'],
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
    <html lang="en" className={`${inter.variable} ${silkscreen.variable}`}>
      <body className="bg-[#FAF8ED] text-[#1E2B24] font-sans antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}