import { usePathname } from 'next/navigation'
import Link from 'next/link'

type NavbarProps = {
  english: boolean
}

export default function Navbar({ english }: NavbarProps) {
  const path = usePathname()

  return (
    <div className="fixed left-0 top-0 z-10 mt-10 flex w-screen justify-center">
      <nav className="flex w-72 justify-between rounded-full bg-blue-50 px-4 py-4 text-sm drop-shadow-md sm:w-96 sm:px-6 sm:text-lg">
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
          href="/projects"
          className={`transform cursor-pointer select-none transition-all duration-200 ${
            path.match('/projects') ? 'rounded-full bg-white pl-2 pr-2' : ''
          } hover:scale-105`}
        >
          {english ? 'Projects' : 'Projetos'}
        </Link>
        <Link
          href="/contact"
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
