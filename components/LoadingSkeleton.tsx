export default function LoadingSkeleton() {
  const cardClasses =
    'bg-gray-200 animate-pulse rounded-xl bg-gray-200 animate-pulse rounded-xl'
  return (
    <section className="grid grid-flow-row gap-8">
      <div className="grid grid-cols-2 gap-8">
        {[...Array(2)].map((_, i) => (
          <div key={i} className={`h-96 w-full ${cardClasses}`} />
        ))}
      </div>
      <div className="grid grid-cols-4 gap-x-8 gap-y-14">
        {[...Array(10)].map((_, i) => (
          <div key={i} className={`w-full h-72 ${cardClasses}`} />
        ))}
      </div>
    </section>
  )
}
