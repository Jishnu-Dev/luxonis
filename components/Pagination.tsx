'use client'

import classNames from 'classnames'

interface PaginationTypes {
  currentPage: number
  totalPages: number
  setPage: Function
}

export default function Pagination({
  currentPage,
  totalPages,
  setPage
}: PaginationTypes) {
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
    <div className="max-w-screen-md">
      <section
        data-aos="fade-up"
        className="md:max-w-[80%] overflow-x-scroll flex gap-3 hide-scrollbar hide-scrollbar-webkit">
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
    </div>
  )
}
