import { Fragment, useState } from 'react'
import { Grid2X2, Grid3X3Icon } from 'lucide-react'

import PropertyCard from '@/components/PropertyCard'
import SectionTitle from '@/components/SectionTitle'
import classNames from 'classnames'

interface PropertyCardProps {
  title: string
  location: string
  image_url: string
  is4xGrid: boolean
  setGrid: Function
}

interface PropertiesProps {
  properties: PropertyCardProps[]
}

export default function PropertyListing({ properties }: PropertiesProps) {
  const [is4xGrid, setIs4xGrid] = useState(true)

  return (
    <Fragment>
      <div className="flex justify-between">
        <SectionTitle title="All Properties" />
        <GridPicker is4xGrid={is4xGrid} setGrid={setIs4xGrid} />
      </div>
      <section
        className={classNames({
          'xl:grid-cols-4': is4xGrid,
          'xl:grid-cols-3': !is4xGrid,
          'grid grid-cols-1 lg:grid-cols-3 gap-x-4 md:gap-x-8 gap-y-7 md:gap-y-14':
            true
        })}>
        {properties.map(
          ({ title, location, image_url }: PropertyCardProps, index) => (
            <PropertyCard
              key={index}
              title={title}
              featured={false}
              image_url={image_url}
              location={location}
            />
          )
        )}
      </section>
    </Fragment>
  )
}

function GridPicker({
  is4xGrid,
  setGrid
}: {
  is4xGrid: boolean
  setGrid: Function
}) {
  const toggleGrid = () => setGrid((is4x: boolean) => !is4x)
  return (
    <button
      data-aos="fade-up"
      className="px-2 py-1 border bg-black/5 rounded-lg text-black/60 hover:text-black"
      onClick={toggleGrid}>
      {is4xGrid ? <Grid2X2 /> : <Grid3X3Icon />}
    </button>
  )
}
