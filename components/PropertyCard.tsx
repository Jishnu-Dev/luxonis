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
    console.log('URL:', domain + imgUrl)
    return domain + imgUrl
  }

  return (
    <article
      className="bg-white grid grid-flow-row gap-4 group"
      data-aos="fade-up">
      <figure
        className={classNames({
          'h-96': featured,
          'h-40 md:h-72': !featured,
          'w-full relative overflow-hidden rounded-xl': true
        })}>
        <Image
          fill
          alt={title}
          priority={featured}
          src={appendDomain(image_url)}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
          className="object-cover group-hover:scale-125 transition-all duration-700 ease-in-out"
        />
      </figure>
      <section className="grid grid-flow-row gap-1">
        <h2 className="text-sm md:text-md font-medium">{title}</h2>
        <h3 className="text-xs md:text-sm text-black/80 font-medium flex gap-1.5 items-center">
          <MapPin size={16} />
          {location}
        </h3>
      </section>
    </article>
  )
}
