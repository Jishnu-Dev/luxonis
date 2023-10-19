'use client'

import 'aos/dist/aos.css'

import { useCallback, useEffect, useState } from 'react'

import AOS from 'aos'
import AdsPerPage from '@/components/AdsPerPage'
import FeaturedProperties from '@/components/FeaturedProperties'
import HomeHero from '@/components/HomeHero'
import LoadingSkeleton from '@/components/LoadingSkeleton'
import Pagination from '@/components/Pagination'
import PropertyListing from '@/components/PropertyListing'
import Render from '@/components/Render'

export const dynamic = 'force-dynamic'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [ads, setAds] = useState([])

  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(20)
  const [totalPages, setTotalPages] = useState(0)

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true)
      const resp = await fetch(`/api?page=${page}&limit=${limit}`)
      const { rows, totalPages } = await resp.json()
      setAds(rows)
      setTotalPages(totalPages)
    } catch (e) {
      console.error(e)
    } finally {
      setIsLoading(false)
    }
  }, [page, limit])

  useEffect(() => {
    AOS.init({ duration: 1100 })
    fetchData()
  }, [fetchData])

  return (
    <main className="flex min-h-screen flex-col p-24">
      <HomeHero />
      <section className="my-12 w-full">
        <Render when={isLoading}>
          <LoadingSkeleton />
        </Render>
        <Render when={!isLoading && ads?.length > 0}>
          <section className="grid grid-flow-row gap-8">
            <FeaturedProperties properties={ads.slice(0, 2)} />
            <PropertyListing properties={ads} />
            <div className="flex justify-between items-center mt-12">
              <Pagination
                currentPage={page}
                totalPages={totalPages}
                setPage={setPage}
              />
              <AdsPerPage limit={limit} setLimit={setLimit} />
            </div>
          </section>
        </Render>
        <Render when={!isLoading && !ads?.length}>
          <p className="italic text-black/80">No data found</p>
        </Render>
      </section>
    </main>
  )
}
