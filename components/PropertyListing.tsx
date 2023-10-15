import PropertyCard from '@/components/PropertyCard'
import SectionTitle from '@/components/SectionTitle'

interface PropertyCardProps {
  title: string
  location: string
  image_url: string
  featured: boolean
}

interface PropertiesProps {
  properties: PropertyCardProps[]
}

export default function PropertyListing({ properties }: PropertiesProps) {
  return (
    <section>
      <SectionTitle title="All Properties" />
      <section className="grid grid-cols-4 gap-x-8 gap-y-14">
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
    </section>
  )
}
