import { usePathname } from 'next/navigation'
import Link from 'next/link'

type NavbarProps = {
  english: boolean
}

export default function Navbar({ english }: NavbarProps) {
  const path = usePathname()

  return (
    <div className="fixed left-0 top-0 z-10 mt-10 flex w-full justify-center">
      <nav className="flex w-auto justify-center gap-6 rounded-full bg-gray-100 pb-4 pl-6 pr-6 pt-4 text-lg drop-shadow-md">
        <Link
          href="/"
          className={`transform cursor-pointer select-none transition-all duration-200 hover:scale-105`}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`transform cursor-pointer select-none transition-all duration-200 ${
            path.match('/about') ? 'rounded-full bg-white pl-2 pr-2' : ''
          } hover:scale-105`}
        >
          {english ? 'About' : 'Sobre'}
        </Link>
        <Link
          href="/"
          className={`transform cursor-pointer select-none transition-all duration-200 ${
            path.match('/projects') ? 'rounded-full bg-white pl-2 pr-2' : ''
          } hover:scale-105`}
        >
          {english ? 'Projects' : 'Projetos'}
        </Link>
        <Link
          href="/"
          className={`transform cursor-pointer select-none transition-all duration-200 ${
            path.match('/contact') ? 'rounded-full bg-white pl-2 pr-2' : ''
          } hover:scale-105`}
        >
          {english ? 'Contact' : 'Contato'}
        </Link>
      </nav>
    </div>
  )
}
