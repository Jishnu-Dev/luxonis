import PropertyCard from '@/components/PropertyCard'
import SectionTitle from '@/components/SectionTitle'

interface PropertyCardProps {
  title: string
  location: string
  image: string
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
          ({ title, location, image }: PropertyCardProps, index) => (
            <PropertyCard
              key={index}
              title={title}
              featured={false}
              image={image}
              location={location}
            />
          )
        )}
      </section>
    </section>
  )
}
