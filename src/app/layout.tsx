import type { Metadata } from 'next'
import { Inter, Oswald, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { LenisProvider } from '@/components/LenisProvider'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const oswald = Oswald({ subsets: ['latin'], variable: '--font-oswald', display: 'swap' })
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' })

export const metadata: Metadata = {
  title: 'Saurabh Chavan — Software Engineer',
  description: 'Cinematic portfolio of Saurabh Chavan — software engineer focused on Java, backend systems and product-minded engineering.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${inter.variable} ${oswald.variable} ${mono.variable}`}><LenisProvider>{children}</LenisProvider></body></html>
}
