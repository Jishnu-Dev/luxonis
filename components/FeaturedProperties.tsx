import PropertyCard from '@/components/PropertyCard'
import SectionTitle from '@/components/SectionTitle'

interface PropertyCardProps {
  title: string
  location: string
  image_url: string
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
