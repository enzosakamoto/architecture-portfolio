'use client'
import Navbar from '../components/navbar/Navbar'
import useLanguage from '../utils/language'
import Image from 'next/image'
import avatar from '../assets/avatar.png'

export default function About() {
  const { english } = useLanguage()
  return (
    <main className="flex h-screen flex-col gap-32 bg-gradient-to-b from-white via-blue-100 to-blue-200 py-40">
      <Navbar english={english} />
      <section className="flex flex-col items-center justify-center gap-5">
        <p className="text-bold text-3xl font-bold sm:text-5xl">
          {english ? 'About me' : 'Sobre mim'}
        </p>
        <div className="flex flex-col items-center justify-center gap-10 px-8 sm:px-16 md:px-32 xl:flex-row">
          <Image
            className="flex w-1/2 max-w-lg justify-center drop-shadow-md sm:w-1/3 xl:w-10/12"
            src={avatar}
            alt="Profile picture"
          />
          <article className="flex flex-col justify-center gap-3 text-base sm:text-justify lg:text-lg">
            <p>
              {english
                ? 'My name is Enzo Yuji Sakamoto, I am 21 years old and I am from São Paulo, SP.'
                : 'Me chamo Enzo Yuji Sakamoto, tenho 21 anos e sou de São Paulo, SP.'}
            </p>
            <p>
              {english
                ? 'I am enthusiastic and a lover of programming and computer science. Since I was a child, I always knew that I would follow my professional career working with technologies, always trying to keep myself tuned in.'
                : 'Sou entusiasta e amante da programação e informática. Desde pequeno sempre soube que seguiria minha carreira profissional trabalhando com tecnologias, procurando sempre me manter antenado sobre.'}
            </p>
            <p className="font-bold">
              {english
                ? 'I am a Computer Engineering student at Instituto Mauá de Tecnologia. I am focused on learning, more precisely, Python, Next.js, Typescript and others developments technologies.'
                : 'Estudante de Engenharia de Computação no Instituto Mauá de Tecnologia. Estou focado em aprender, mais precisamente, Python, Next.js, Typescript, além de outras tecnologias de desenvolvimento.'}
            </p>
            <p>
              {english
                ? 'I consider myself competent, agile and extremely good humored!'
                : 'Me considero competente, ágil e extremamente bem humorado!'}
            </p>
            <p className="font-bold">
              {english
                ? 'Currently, I am looking for an internship position as a Junior Front-End Developer.'
                : 'Atualmente, estou a procura de uma vaga de estágio como Desenvolvedor Júnior Front-End.'}
            </p>
          </article>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center gap-5">
        <p className="text-bold text-2xl font-bold sm:text-5xl">
          {english ? 'My experiences' : 'Minhas experiências'}
        </p>
      </section>
    </main>
  )
}
