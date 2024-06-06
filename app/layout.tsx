import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { SiteHeader } from './components/site-header'
import { SiteFooter } from './components/site-footer'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://mshub.dev'),
  title: {
    default: 'Misho Shubitidze',
    template: '%s | Misho Shubitidze',
  },
  description: 'i use vim btw',
  openGraph: {
    title: 'Misho Shubitidze',
    description: 'i use vim btw',
    images: '/og',
    url: 'https://mshub.dev',
    siteName: 'Misho Shubitidze',
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
    title: 'Misho Shubitidze',
    card: 'summary_large_image',
  },
}

function cx(...classNames: string[]) {
  return classNames.filter(Boolean).join(' ')
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cx(
          geistSans.variable,
          geistMono.variable,
          'container mx-auto max-w-2xl antialiased'
        )}
      >
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
