import { GithubIcon } from 'lucide-react'
import Link from 'next/link'

export default function NavBar() {
  return (
    <nav className="w-full bg-white border-b page-container flex justify-between items-center py-5">
      <h1 className="text-2xl font-black text-blue-700">LUXO PROPERTIES</h1>
      <Link
        target="_blank"
        href="https://github.com/Jishnu-Dev"
        className="flex gap-1 items-center font-medium text-black/60 hover:text-orange-700">
        <GithubIcon />
        GitHub
      </Link>
    </nav>
  )
}
