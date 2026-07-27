import type { Metadata } from "next";

import { Geist } from "next/font/google";

import { Silkscreen } from "next/font/google";

import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const silkscreen = Silkscreen({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pixel",
});

export const metadata: Metadata = {
  title: "Yashaswi Priya",
  description:
    "Software Engineer building scalable backend systems and polished web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${silkscreen.variable}`}>
        {children}
      </body>
    </html>
  );
}