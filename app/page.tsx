'use client'

import 'aos/dist/aos.css'

import AOS from 'aos'
import HomeListing from '@/components/HomeListing'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1100 })
  }, [])
  return (
    <main className="flex min-h-screen flex-col p-24">
      <HomeHero />
      <HomeListing />
    </main>
  )
}

function HomeHero() {
  return (
    <section>
      <h1 className="text-5xl font-bold">
        Real Estate in Prague & Czech Republic
      </h1>
      <h2 className="text-md">
        Thousands of quality properties for Rent and Sale.
      </h2>
    </section>
  )
}
