export default function AdsPerPage({
  limit,
  setLimit
}: {
  limit: number
  setLimit: (limit: number) => void
}) {
  return (
    <div data-aos="fade-up" className="mb-4">
      <label htmlFor="adsPerPage" className="font-semibold">
        Ads Per Page:
      </label>
      <select
        id="adsPerPage"
        className="ml-2 p-2"
        value={limit}
        onChange={e => setLimit(Number(e.target.value))}>
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={30}>30</option>
        <option value={50}>50</option>
      </select>
    </div>
  )
}
