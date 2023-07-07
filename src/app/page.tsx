'use client'
import Navbar from './components/navbar/page'
import useLanguage from './utils/language'
import Image from 'next/image'
import avatar from './assets/avatar.png'

export default function Home() {
  const { english, changeLanguage } = useLanguage()

  return (
    <main className="h-auto bg-gradient-to-b from-white via-blue-100 to-blue-200 py-44 md:h-screen md:py-0">
      <Navbar english={english} />
      <section className="flex h-full w-full flex-col items-center justify-center gap-16 px-10 md:flex-row">
        <div className="flex flex-col gap-0">
          <p className="text-2xl">
            {english ? 'Hi, my name is' : 'Oi, meu nome é'}
          </p>
          <p className="relative -left-1 text-5xl font-bold lg:text-7xl">
            ENZO SAKAMOTO
          </p>
          <p className="text-2xl">
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
        <aside>
          <Image
            className="w-10/12 rounded-full drop-shadow-md"
            src={avatar}
            alt="Profile picture"
          />
        </aside>
      </section>
    </main>
  )
}
