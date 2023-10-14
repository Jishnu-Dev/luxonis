interface TitleType {
  title: string
}

export default function SectionTitle({ title }: TitleType) {
  return (
    <h2 className="text-xl font-semibold mb-4" data-aos="fade-up">
      {title}
    </h2>
  )
}
