'use client'
import { useState } from 'react'
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineMail
} from 'react-icons/ai'

import { IoReorderThreeOutline } from 'react-icons/io5'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <div className="fixed left-0 top-0 z-10 flex w-full flex-row items-center justify-between bg-white pb-8 pl-8 pr-8 pt-20">
      <IoReorderThreeOutline
        onClick={() => setOpen(!open)}
        className="transform cursor-pointer text-4xl
        transition
        duration-500
        hover:scale-110"
      />
      <header className="text-4xl">LUIGI SAKAMOTO</header>
      <div className="flex flex-row gap-3">
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
  )
}
