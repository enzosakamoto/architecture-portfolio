'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import Navbar from './components/navbar/Navbar'

import useLanguage from './utils/language'

import avatar from './assets/profile.jpeg'

export default function Home() {
  const { english, changeLanguage } = useLanguage()
  const [fade, setFade] = useState<boolean>(false)
  useEffect(() => {
    setTimeout(() => {
      setFade(true)
    }, 200)
  }, [])

  return (
    <main className="h-screen bg-gradient-to-b from-white via-blue-100 to-blue-200 py-44 md:h-screen md:py-0">
      <Navbar english={english} />
      <section className="flex h-full w-full flex-col items-center justify-center gap-8 px-10 md:flex-row xl:gap-16">
        <div className="flex flex-col items-center gap-0 sm:items-start">
          <p
            className={`transform text-2xl transition-all duration-500 ${
              fade ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            {english ? 'Hi, my name is' : 'Oi, meu nome é'}
          </p>
          <p
            className={`relative transform text-3xl font-bold transition-all delay-500 duration-500 sm:text-4xl xl:-left-1 xl:text-7xl ${
              fade ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            ENZO SAKAMOTO
          </p>
          <p
            className={`transform text-center text-xl transition-all delay-700 duration-500 sm:text-left lg:text-2xl ${
              fade ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            {english
              ? 'I am a Front-End Web Developer'
              : 'Eu sou um Desenvolvedor Web Front-End'}
          </p>
          <div
            className={`mt-8 transform transition-all delay-1000 duration-500 sm:mt-4 ${
              fade ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <button
              className={`transform rounded-full px-4 py-2 font-bold transition-all duration-500 ${
                !english && 'bg-blue-50 drop-shadow-md'
              } hover:scale-105`}
              onClick={() => changeLanguage(false)}
            >
              Português
            </button>
            <button
              className={`transform rounded-full px-4 py-2 font-bold transition-all duration-500 ${
                english && 'bg-blue-50 drop-shadow-md'
              } hover:scale-105`}
              onClick={() => changeLanguage(true)}
            >
              English
            </button>
          </div>
        </div>
        <aside
          className={`flex w-8/12 transform justify-center transition-all delay-1000 duration-500 ${
            fade ? 'opacity-100' : 'opacity-0'
          } md:w-1/3 lg:w-1/4`}
        >
          <Image
            className="w-full rounded-full drop-shadow-md sm:w-10/12"
            src={avatar}
            alt="Profile picture"
          />
        </aside>
      </section>
    </main>
  )
}
