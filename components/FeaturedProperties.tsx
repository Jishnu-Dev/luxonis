import PropertyCard from '@/components/PropertyCard'
import SectionTitle from '@/components/SectionTitle'

interface PropertyCardProps {
  title: string
  location: string
  image: string
  featured: boolean
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
      <section className="grid grid-cols-2 gap-8" data-aos="fade-up">
        {properties.map(
          ({ title, location, image }: PropertyCardProps, index) => (
            <PropertyCard
              key={index}
              featured
              title={title}
              image={image}
              location={location}
            />
          )
        )}
      </section>
    </section>
  )
}
