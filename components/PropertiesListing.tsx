'use client'

import { useCallback, useEffect, useState } from 'react'

import PropertyCard from '@/components/PropertyCard'

interface PropertyCardProps {
  title: string
  location: string
  images: string
}

export default function PropertiesListing() {
  const [isLoading, setIsLoading] = useState(true)
  const [properties, setProperties] = useState([])

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true)
      const resp = await fetch('/properties.json')
      const properties = await resp.json()
      setProperties(properties)
    } catch (e) {
      console.error(e)
    } finally {
      setIsLoading(false)
    }
  }, [])
  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <section className="my-12 w-full">
      {isLoading && <p>Loading...</p>}
      {!isLoading && properties.length > 0 && (
        <section className="grid grid-cols-4 gap-x-8 gap-y-14 my-10">
          {properties.map(
            ({ title, location, images }: PropertyCardProps, index) => (
              <PropertyCard
                key={index}
                title={title}
                location={location}
                image={images[0]}
              />
            )
          )}
        </section>
      )}
    </section>
  )
}
