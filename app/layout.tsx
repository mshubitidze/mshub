import type { Metadata } from 'next';
import './globals.css';
import { GeistMono } from 'geist/font/mono';

export const metadata: Metadata = {
  title: 'mshub',
  description: 'i use vim btw',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={GeistMono.className}>{children}</body>
    </html>
  );
}
