'use client'
import { useState } from 'react'
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineMail
} from 'react-icons/ai'

import { IoReorderThreeOutline, IoCloseOutline } from 'react-icons/io5'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className="fixed left-0 top-0 z-10 flex w-full flex-row items-center justify-between bg-white pb-8 pl-8 pr-8 pt-10 sm:pb-8 sm:pl-8 sm:pr-8 sm:pt-20">
        <IoReorderThreeOutline
          onClick={() => setOpen(!open)}
          className="transform cursor-pointer text-4xl
        transition
        duration-500
        hover:scale-110"
        />
        <header className="text-2xl sm:text-4xl">
          <a href="/">LUIGI SAKAMOTO</a>
        </header>
        <div className="hidden sm:flex sm:flex-row sm:gap-3">
          <AiOutlineInstagram
            className="transform cursor-pointer text-2xl
        transition
        duration-500
        hover:scale-110"
          />
          <AiOutlineLinkedin
            className="transform cursor-pointer text-2xl
        transition
        duration-500
        hover:scale-110"
          />
          <AiOutlineMail
            className="transform cursor-pointer text-2xl
        transition
        duration-500
        hover:scale-110"
          />
        </div>
      </div>
      <div
        className={`absolute left-0 top-0 z-40 flex h-full transform flex-col
        gap-10 pb-8 pl-8 pr-8 pt-20 transition-all duration-300 ${
          open ? 'visible w-80' : 'invisible w-0'
        } bg-gray-300`}
      >
        <IoCloseOutline
          onClick={() => setOpen(!open)}
          className={`transform cursor-pointer text-3xl
        transition
        duration-200
        hover:scale-110
        ${!open && 'scale-0'}`}
        />
        <a
          href="/"
          onClick={() => setOpen(!open)}
          className={`transform cursor-pointer text-xl
        transition
        duration-200
        hover:scale-110
        ${!open && 'text-transparent'}`}
        >
          PROJETOS
        </a>
        <a
          href="/about"
          onClick={() => setOpen(!open)}
          className={`transform cursor-pointer text-xl
        transition
        duration-200
        hover:scale-110
        ${!open && 'text-transparent'}`}
        >
          SOBRE
        </a>
        <a
          href="/contact"
          onClick={() => setOpen(!open)}
          className={`transform cursor-pointer text-xl
        transition
        duration-200
        hover:scale-110
        ${!open && 'text-transparent'}`}
        >
          CONTATO
        </a>
        <div className="flex flex-row gap-3 sm:hidden">
          <AiOutlineInstagram
            className="transform cursor-pointer text-2xl
        transition
        duration-500
        hover:scale-110"
          />
          <AiOutlineLinkedin
            className="transform cursor-pointer text-2xl
        transition
        duration-500
        hover:scale-110"
          />
          <AiOutlineMail
            className="transform cursor-pointer text-2xl
        transition
        duration-500
        hover:scale-110"
          />
        </div>
      </div>
    </>
  )
}
