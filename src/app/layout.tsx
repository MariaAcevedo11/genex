import type { Metadata } from "next";
import { Cinzel, Cinzel_Decorative } from "next/font/google";

import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const cinzelDeco = Cinzel_Decorative({
  variable: "--font-cinzel-deco",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "GENEX",

  description: "Discover your tribe and character in the world of GENEX.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${cinzel.variable} ${cinzelDeco.variable} h-full antialiased`}
    >
      <body className="overflow-x-hidden bg-black text-white">{children}</body>
    </html>
  );
}
