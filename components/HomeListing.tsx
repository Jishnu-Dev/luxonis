import { useCallback, useEffect, useState } from 'react'

import FeaturedProperties from '@/components/FeaturedProperties'
import PropertyListing from '@/components/PropertyListing'
import classNames from 'classnames'

interface PaginationTypes {
  currentPage: number
  totalPages: number
  setPage: Function
}

export default function HomeListing() {
  const [isLoading, setIsLoading] = useState(true)
  const [ads, setAds] = useState([])

  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true)
      const resp = await fetch(`/api?page=${page}`)
      console.log('resp::', resp)
      const { rows, totalPages } = await resp.json()
      console.log('rows::', rows)
      setAds(rows)
      setTotalPages(totalPages)
    } catch (e) {
      console.error(e)
    } finally {
      setIsLoading(false)
    }
  }, [page])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <section className="my-12 w-full">
      {isLoading && <LoadingSkeleton />}
      {!isLoading && ads?.length > 0 && (
        <section className="grid grid-flow-row gap-8">
          <FeaturedProperties properties={ads.slice(0, 2)} />
          <PropertyListing properties={ads} />
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            setPage={setPage}
          />
        </section>
      )}
      {!isLoading && !ads?.length && (
        <p className="italic text-black/80">No data found</p>
      )}
    </section>
  )
}

function Pagination({ currentPage, totalPages, setPage }: PaginationTypes) {
  const isClient = typeof window !== 'undefined'
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  function scrollToTop() {
    if (isClient)
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
  }

  function handlePageChange(page: number) {
    scrollToTop()
    setPage(page)
  }

  return (
    <section data-aos="fade-up" className="flex flex-wrap gap-3 mt-12">
      {pages.map(pageNum => {
        const isActive = currentPage === pageNum
        return (
          <button
            key={pageNum}
            onClick={() => handlePageChange(pageNum)}
            className={classNames({
              'bg-gray-200': !isActive,
              'bg-blue-500 text-white': isActive,
              'px-4 py-2 rounded-md cursor-pointer text-sm hover:bg-opacity-50':
                true
            })}>
            {pageNum}
          </button>
        )
      })}
    </section>
  )
}

function LoadingSkeleton() {
  const cardClasses =
    'bg-gray-200 animate-pulse rounded-xl bg-gray-200 animate-pulse rounded-xl'
  return (
    <section className="grid grid-flow-row gap-8">
      <div className="grid grid-cols-2 gap-8">
        {[...Array(2)].map((_, i) => (
          <div key={i} className={`h-96 w-full ${cardClasses}`} />
        ))}
      </div>
      <div className="grid grid-cols-4 gap-x-8 gap-y-14">
        {[...Array(10)].map((_, i) => (
          <div key={i} className={`w-full h-72 ${cardClasses}`} />
        ))}
      </div>
    </section>
  )
}
