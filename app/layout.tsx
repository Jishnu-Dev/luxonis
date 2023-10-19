import './globals.css'

import Footer from '@/components/layout/Footer'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import NavBar from '@/components/layout/NavBar'
import ScrollProgress from '@/components/layout/ScrollProgress'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Luxonis App - Jishnu Raj',
  description: 'Created by Jishnu Raj'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ScrollProgress />
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
