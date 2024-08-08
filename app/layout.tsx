import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { siteConfig } from '@/config/site'

const geistSans = localFont({
  src: '../lib/fonts/GeistVF.woff',
  variable: '--font-geist-sans',
})
const geistMono = localFont({
  src: '../lib/fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://mshub.dev'),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    images: '/og',
    url: 'https://mshub.dev',
    siteName: siteConfig.name,
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: siteConfig.name,
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
