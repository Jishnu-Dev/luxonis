// 'use client'

import { useCallback, useEffect, useState } from 'react'

import FeaturedProperties from './FeaturedProperties'
import PropertyListing from '@/components/PropertyListing'
import { getAdsData } from '@/api'

// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'luxo_task_db',
//   password: 'docker',
//   port: 5432
// })

export default function HomeListing() {
  const [isLoading, setIsLoading] = useState(true)
  const [properties, setProperties] = useState([])

  // const fetchData = useCallback(async () => {
  //   const client = await pool.connect()
  //   try {
  //     setIsLoading(true)
  //     const result = await client.query('SELECT * FROM ads')
  //     console.log('result.rows::', result.rows)
  //     return result.rows

  //     // const resp = await fetch('/ads.json')
  //     // const properties = await resp.json()
  //     setProperties(properties)
  //   } catch (e) {
  //     console.error(e)
  //   } finally {
  //     client.release()
  //     setIsLoading(false)
  //   }
  // }, [])
  // useEffect(() => {
  //   fetchData()
  // }, [fetchData])

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true)
      // const resp = await getAdsData()
      // console.log('resp::', resp)
    } catch (e) {
      console.error(e)
    } finally {
      setIsLoading(false)
    }
  }, [])

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
