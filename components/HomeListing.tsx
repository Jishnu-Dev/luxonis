'use client'

import { useCallback, useEffect, useState } from 'react'

import FeaturedProperties from './FeaturedProperties'
import PropertyListing from '@/components/PropertyListing'

export default function HomeListing() {
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
      {!isLoading && properties?.length > 0 && (
        <section className="grid grid-flow-row gap-8">
          <FeaturedProperties properties={properties.slice(0, 2)} />
          <PropertyListing properties={properties} />
        </section>
      )}
    </section>
  )
}
