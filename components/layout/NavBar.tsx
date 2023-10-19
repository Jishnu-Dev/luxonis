import { UserIcon } from 'lucide-react'

export default function NavBar() {
  return (
    <nav className="w-full bg-white border-b page-container flex justify-between items-center py-5">
      <h1 className="text-2xl font-black text-blue-700">LUXO PROPERTIES</h1>
      <button className="p-2 rounded-lg hover:bg-gray-50 border">
        <UserIcon className="text-black/50" />
      </button>
    </nav>
  )
}
