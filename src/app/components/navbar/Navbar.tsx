import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'
import { IoReorderThree, IoClose } from 'react-icons/io5'

type NavbarProps = {
  english: boolean
}

export default function Navbar({ english }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const path = usePathname()

  return (
    <>
      <div
        className={`fixed left-0 top-0 ml-10 mt-10 flex w-full transform transition-all duration-300 sm:hidden ${
          isOpen ? 'z-20 ml-10 opacity-0' : 'z-40 delay-300'
        }`}
      >
        <IoReorderThree
          onClick={() => setIsOpen(!isOpen)}
          className={`h-10 w-10 transform cursor-pointer rounded-full bg-blue-50 p-1 text-sm drop-shadow-md transition-all duration-300 hover:scale-110`}
        />
      </div>
      <div
        className={`fixed left-0 top-0 z-30 mt-10 flex w-screen transform justify-center opacity-0 transition-all duration-500 sm:opacity-100 ${
          isOpen ? 'opacity-100' : 'flex justify-center opacity-0'
        }`}
      >
        <nav className="flex w-80 items-center justify-between rounded-full bg-blue-50 px-4 py-4 text-sm font-bold drop-shadow-md sm:w-96 sm:px-6 sm:text-lg">
          <Link
            onClick={() => setIsOpen(!isOpen)}
            href="/"
            className={`transform cursor-pointer select-none transition-all duration-200 hover:scale-105`}
          >
            Home<code className="ml-1 rounded-md bg-gray-300 px-1">/</code>
          </Link>
          <Link
            onClick={() => setIsOpen(!isOpen)}
            href="/about"
            className={`transform cursor-pointer select-none transition-all duration-200 ${
              path.match('/about') ? 'rounded-full bg-white pl-2 pr-2' : ''
            } hover:scale-105`}
          >
            {english ? 'About' : 'Sobre'}
          </Link>
          <Link
            onClick={() => setIsOpen(!isOpen)}
            href="/projects"
            className={`transform cursor-pointer select-none transition-all duration-200 ${
              path.match('/projects') ? 'rounded-full bg-white pl-2 pr-2' : ''
            } hover:scale-105`}
          >
            {english ? 'Projects' : 'Projetos'}
          </Link>
          <Link
            onClick={() => setIsOpen(!isOpen)}
            href="/contact"
            className={`transform cursor-pointer select-none transition-all duration-200 ${
              path.match('/contact') ? 'rounded-full bg-white pl-2 pr-2' : ''
            } hover:scale-105`}
          >
            {english ? 'Contact' : 'Contato'}
          </Link>
          <IoClose
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer text-lg sm:hidden"
          />
        </nav>
      </div>
    </>
  )
}
