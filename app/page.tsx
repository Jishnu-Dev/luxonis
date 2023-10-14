import PropertiesListing from '@/components/PropertiesListing'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <HomeHero />
      <PropertiesListing />
    </main>
  )
}

function HomeHero() {
  return (
    <section>
      <h1 className="text-5xl font-bold">
        Real Estate in Prague & Czech Republic
      </h1>
      <h2 className="text-md">
        Thousands of quality properties for Rent and Sale.
      </h2>
    </section>
  )
}
