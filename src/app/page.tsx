'use client'
import Navbar from './components/navbar/Navbar'
import useLanguage from './utils/language'
import Image from 'next/image'
import avatar from './assets/avatar.png'

export default function Home() {
  const { english, changeLanguage } = useLanguage()

  return (
    <main className="h-screen bg-gradient-to-b from-white via-blue-100 to-blue-200 py-44 md:h-screen md:py-0">
      <Navbar english={english} />
      <section className="flex h-full w-full flex-col items-center justify-center gap-8 px-10 md:flex-row xl:gap-16">
        <div className="flex flex-col gap-0">
          <p className="text-2xl">
            {english ? 'Hi, my name is' : 'Oi, meu nome é'}
          </p>
          <p className="relative text-4xl font-bold xl:-left-1 xl:text-7xl">
            ENZO SAKAMOTO
          </p>
          <p className="text-xl lg:text-2xl">
            {english
              ? 'I am a Front-End Web Developer'
              : 'Eu sou um Desenvolvedor Web Front-End'}
          </p>
          <div className="mt-4">
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
        <aside className="flex w-8/12 justify-center md:w-1/3 lg:w-1/4">
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
