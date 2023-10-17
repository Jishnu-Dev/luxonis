import './globals.css'

import { HeartIcon, UserIcon } from 'lucide-react'

import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Luxonis App - Jishnu Raj',
  description:
    'An app made with Next.Js 13 App router for the UI, TypeScript for type safety, Postgres for schema, Vercel for deployment, and cheerio for web scrapping. Created by Jishnu Raj.'
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
        <Footer />
      </body>
    </html>
  )
}

function NavBar() {
  return (
    <nav className="w-full bg-white border-b flex justify-between items-center md:page-container px-6 py-5">
      <h1 className="text-2xl font-black text-blue-700">LUXO PROPERTIES</h1>
      <button className="p-2 rounded-lg hover:bg-gray-50 border">
        <UserIcon className="text-black/50" />
      </button>
    </nav>
  )
}

function Footer() {
  return (
    <footer className="w-full border-t flex justify-between text-base text-black/50 page-container py-6">
      <p className="text-sm flex gap-2">
        Made with <HeartIcon className="text-red-500" /> by{' '}
        <span className="font-mono">Jishnu Raj</span>
      </p>
    </footer>
  )
}
