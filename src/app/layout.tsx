import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import WhatsAppButton from '@/components/WhatsAppButton'
import CookieBanner from '@/components/CookieBanner'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Nejdet Boya | Edremit Profesyonel Boya Ustası',
  description: 'Balıkesir Edremit\'te profesyonel iç ve dış cephe boya hizmetleri. 15+ yıllık tecrübe ile kaliteli ve güvenilir boyama işleri.',
  keywords: 'boya ustası, edremit boya, balıkesir boya, iç cephe boya, dış cephe boya, ev boyama, profesyonel boya',
  authors: [{ name: 'Nejdet Boya' }],
  openGraph: {
    title: 'Nejdet Boya | Edremit Profesyonel Boya Ustası',
    description: 'Balıkesir Edremit\'te profesyonel iç ve dış cephe boya hizmetleri.',
    locale: 'tr_TR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className={inter.className}>
      <body className="antialiased">
        {children}
        <WhatsAppButton />
        <CookieBanner />
      </body>
    </html>
  )
}
