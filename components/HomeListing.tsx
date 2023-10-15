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
      const { rows, totalPages } = await resp.json()
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
      {isLoading && <p>Loading...</p>}
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
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)
  return (
    <section className="flex flex-wrap gap-3 mt-12">
      {pages.map(pageNum => {
        const isActive = currentPage === pageNum
        return (
          <button
            key={pageNum}
            onClick={() => setPage(pageNum)}
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
