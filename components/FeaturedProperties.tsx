import PropertyCard from '@/components/PropertyCard'
import SectionTitle from '@/components/SectionTitle'

interface PropertyCardProps {
  title: string
  location: string
  image_url: string
}

interface FeaturedPropertiesProps {
  properties: PropertyCardProps[]
}

export default function FeaturedProperties({
  properties
}: FeaturedPropertiesProps) {
  if (!properties?.length) return null
  return (
    <section>
      <SectionTitle title="Featured Properties" />
      <section
        data-aos="fade-up"
        className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-8">
        {properties.map(
          ({ title, location, image_url }: PropertyCardProps, index) => (
            <PropertyCard
              key={index}
              featured
              title={title}
              image_url={image_url}
              location={location}
            />
          )
        )}
      </section>
    </section>
  )
}
