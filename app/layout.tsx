import './globals.css'

import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

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
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  )
}

function NavBar() {
  return (
    <nav className="w-full bg-white border-b px-24 py-6">
      <h1 className="text-2xl font-black text-blue-700">LUXO PROPERTIES</h1>
    </nav>
  )
}
