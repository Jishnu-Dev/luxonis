import Image from 'next/image'
import { MapPin } from 'lucide-react'
import classNames from 'classnames'

interface PropertyCardProps {
  title: string
  location: string
  image_url: string
  featured: boolean
}

export default function PropertyCard({
  title,
  image_url,
  location,
  featured
}: PropertyCardProps) {
  function appendDomain(imgUrl: string) {
    const domain = 'https://www.expats.cz'
    return domain + imgUrl
  }

  return (
    <article
      data-aos="fade-up"
      className="w-full grid grid-flow-row gap-4 group">
      <figure
        className={classNames({
          'h-96': featured,
          'h-72': !featured,
          'w-full relative overflow-hidden rounded-xl': true
        })}>
        <Image
          fill
          sizes=""
          alt={title}
          priority={featured}
          src={appendDomain(image_url)}
          className="object-cover group-hover:scale-125 transition-all duration-700 ease-in-out"
        />
      </figure>
      <section className="grid grid-flow-row gap-1">
        <h2 className="text-md font-medium">{title}</h2>
        <h3 className="text-sm text-black/80 font-medium flex gap-1.5 items-center">
          <MapPin size={16} />
          {location}
        </h3>
      </section>
    </article>
  )
}
