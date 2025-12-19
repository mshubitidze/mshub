import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "misho shubitidze",
  description: "design engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overscroll-none dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-foreground selection:text-background font-mono`}
      >
        {children}
      </body>
    </html>
  );
}
