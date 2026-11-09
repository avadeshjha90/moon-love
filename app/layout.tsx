import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Hind } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  style: ['normal', 'italic'],
})

const hind = Hind({
  subsets: ['latin', 'devanagari'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-hind',
})

export const metadata: Metadata = {
  title: 'Poornima, Mera Chaand | Avadesh ki taraf se',
  description: 'Poornima ke liye ek chhota sa surprise — Avadesh ki taraf se, poore dil se.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0b0d1f',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hi" className={`${playfair.variable} ${hind.variable} bg-background`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
