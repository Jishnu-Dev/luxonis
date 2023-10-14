import { LocateIcon, MapPin } from 'lucide-react'

import Image from 'next/image'

interface PropertyCardProps {
  title: string
  location: string
  image: string
}

export default function PropertyCard({
  title,
  location,
  image
}: PropertyCardProps) {
  function appendDomain(imgUrl: string) {
    const domain = 'https://www.expats.cz/'
    return domain + imgUrl
  }

  return (
    <article className="bg-white grid grid-flow-row gap-4 group">
      <figure className="h-72 w-full relative overflow-hidden rounded-xl">
        <Image
          fill
          src={appendDomain(image)}
          alt={title}
          className="object-cover group-hover:scale-125 transition-all duration-500 ease-in-out"
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
