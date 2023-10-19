import { HeartIcon } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full border-t flex justify-between text-base text-black/50 page-container py-6">
      <p className="text-sm flex gap-2">
        Made with <HeartIcon className="text-red-500" /> by{' '}
        <span className="font-mono">Jishnu Raj</span>
      </p>
    </footer>
  )
}
