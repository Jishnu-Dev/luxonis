import { GithubIcon } from 'lucide-react'
import Link from 'next/link'

export default function NavBar() {
  return (
    <nav className="w-full bg-white border-b px-3 lg:page-container flex justify-between items-center py-5 lg:py-5">
      <h1 className="text-2xl font-black text-blue-700">LUXO PROPERTIES</h1>
      <Link
        target="_blank"
        href="https://github.com/Jishnu-Dev"
        className="hidden lg:flex gap-1 items-center font-medium text-black/60 hover:text-orange-700">
        <GithubIcon />
        GitHub
      </Link>
    </nav>
  )
}
