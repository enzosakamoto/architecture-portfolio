'use client'
import Navbar from '../components/navbar/Navbar'
import useLanguage from '../utils/language'
import Image from 'next/image'
import avatar from '../assets/avatar.png'
import { useEffect, useState } from 'react'

export default function About() {
  useEffect(() => {
    setTimeout(() => {
      setFade(true)
    }, 200)
  }, [])
  const [container, setContainer] = useState<number>(1)
  const [fade, setFade] = useState<boolean>(false)
  const { english } = useLanguage()
  return (
    <main className="flex h-auto flex-col gap-32 bg-gradient-to-b from-white via-blue-100 to-blue-200 py-0">
      <Navbar english={english} />
      <section className="mt-32 flex h-screen flex-col items-center justify-center gap-10 xl:mt-0 xl:gap-5">
        <p className="text-bold text-3xl font-bold sm:text-5xl">
          {english ? 'About me' : 'Sobre mim'}
        </p>
        <div className="flex flex-col items-center justify-center gap-10 px-8 sm:px-16 md:px-32 xl:flex-row">
          <Image
            className="flex w-1/2 max-w-lg justify-center drop-shadow-md sm:w-1/3 xl:w-1/2"
            src={avatar}
            alt="Profile picture"
          />
          <article
            className={`flex transform flex-col justify-center gap-3 text-base transition-all duration-500 sm:text-justify lg:text-lg ${
              fade ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <p>
              {english
                ? 'My name is Enzo Yuji Sakamoto, I am 21 years old and I am from São Paulo, SP.'
                : 'Me chamo Enzo Yuji Sakamoto, tenho 21 anos e sou de São Paulo, SP.'}
            </p>
            <p>
              {english
                ? 'I am an enthusiastic and a lover of programming and computer science. Since I was a child, I always knew that I would follow my professional career working with technologies, always trying to keep myself tuned in.'
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
      <section className="mb-10 flex flex-col items-center justify-center gap-10 sm:mb-0 sm:h-screen sm:gap-20">
        <p className="text-bold text-2xl font-bold sm:text-3xl lg:text-5xl">
          {english ? 'My experiences' : 'Minhas experiências'}
        </p>
        <div className="flex w-full flex-col items-center justify-center gap-10 px-5 md:h-1/3 md:flex-row md:px-20 xl:px-60">
          <div className="flex w-1/2 flex-col justify-center gap-5 text-sm sm:w-full sm:flex-row md:w-1/5 md:flex-col xl:text-base">
            <button
              onClick={() => setContainer(1)}
              className={`transform rounded-full bg-blue-50 px-4 py-2 font-bold drop-shadow-md transition-all duration-500 hover:scale-105 ${
                container == 1 && 'bg-blue-100'
              }`}
            >
              {english ? 'IMT Internship' : 'Estágio IMT'}
            </button>
            <button
              onClick={() => setContainer(2)}
              className={`transform rounded-full bg-blue-50 px-4 py-2 font-bold drop-shadow-md transition-all duration-500 hover:scale-105 ${
                container == 2 && 'bg-blue-100'
              }`}
            >
              {english ? 'IMT Monitor' : 'Monitor IMT'}
            </button>
            <button
              onClick={() => setContainer(3)}
              className={`transform rounded-full bg-blue-50 px-4 py-2 font-bold drop-shadow-md transition-all duration-500 hover:scale-105 ${
                container == 3 && 'bg-blue-100'
              }`}
            >
              Dev. Community Mauá
            </button>
          </div>
          <div className="flex w-4/5 flex-row">
            {/* <!-- IMT Internship --> */}
            <div
              className={`flex w-full select-none flex-col gap-2 text-justify text-base transition-all duration-500 xl:text-lg ${
                container == 1
                  ? 'translate-x-0'
                  : 'absolute -left-96 -top-96 translate-x-10 opacity-0'
              }`}
            >
              <p className="text-xl font-bold">
                {english
                  ? 'March 2023 - Until now'
                  : 'Março 2023 - Até o momento'}
              </p>
              <p>
                {english
                  ? 'Internship of DIQ-CP (Innovation and Quality Division of Research Center) at Instituto Mauá de Tecnologia, I am contributing to the project of curricularization of university extension.'
                  : 'Estagiário do DIQ-CP (Divisão de Inovação e Qualidade do Centro de Pesquisas) do Instituto Mauá de Tecnologia, contribuindo para o projeto de curricularização de extensão universitária.'}
              </p>
              <p>
                {english
                  ? 'Project in development by professors and course coordinators of IMT.'
                  : 'Projeto em desenvolvimento por professores e coordenadores de cursos do IMT.'}
              </p>
              <p>
                {english
                  ? 'I have as a function the organization of operational control of data, creation of spreadsheets and forms, in addition to technological creations for the research center.'
                  : 'Tenho como função a organização de controle operacional de dados, criação de planilhas, formulários, além de criações de tecnológicas para o centro de pesquisa.'}
              </p>
            </div>
            {/* <!-- IMT Monitor --> */}
            <div
              className={`flex w-full select-none flex-col gap-2 text-justify text-lg transition-all duration-500 ${
                container == 2
                  ? 'translate-x-0'
                  : 'absolute -left-96 -top-96 translate-x-10 opacity-0'
              }`}
            >
              <p className="text-xl font-bold">
                {english
                  ? 'September 2022 - March 2023'
                  : 'Setembro 2022 - Março 2023'}
              </p>
              <p>
                {english
                  ? 'Monitor at Instituto Mauá de Tecnologia, I am contributing to the project of curricularization of university extension.'
                  : 'Monitor do Instituto Mauá de Tecnologia, contribuindo para o projeto de curricularização de extensão universitária.'}
              </p>
              <p>
                {english
                  ? 'Project in development by professors and course coordinators of IMT.'
                  : 'Projeto em desenvolvimento por professores e coordenadores de cursos do IMT.'}
              </p>
              <p>
                {english
                  ? 'Before starting my internship, I was a monitor for the same group of professors assiting them with data control, spreadsheets and forms.'
                  : 'Antes de começar a estagiar, fui monitor do mesmo grupo de professores auxiliando-os com organização de dados planilhas e formulários.'}
              </p>
            </div>
            {/* <!-- Dev. Community Mauá --> */}
            <div
              className={`flex w-full select-none flex-col gap-2 text-justify text-lg transition-all duration-500 ${
                container == 3
                  ? 'translate-x-0'
                  : 'absolute -left-96 -top-96 translate-x-10 opacity-0'
              }`}
            >
              <p className="text-xl font-bold">
                {english
                  ? 'March 2022 - Until now'
                  : 'Março 2022 - Até o momento'}
              </p>
              <p>
                {english
                  ? 'The Dev. Community Mauá is an entity for the development and creation of computational solutions of Instituto Mauá de Tecnologia.'
                  : 'A Dev. Community Mauá é uma entidade de desenvolvimento e criação de soluções computacionais do Instituto Mauá de Tecnologia.'}
              </p>
              <p>
                {english
                  ? 'Actually, I am working as a Front-End Developer in the project of the Internal Portal of the entity.'
                  : 'Atualmente, estou exercendo função de Desenvolvedor Front-End no projeto do Portal Interno da entidade.'}
              </p>
              <p>
                {english
                  ? 'I worked as a Fullstack Developer of the integrator project of the library system with the institution website, called MauáLib, using Dart with Flutter framework.'
                  : 'Atuei como Desenvolvedor Fullstack do projeto integrador do sistema da biblioteca com o site da instituição, chamado MauáLib, utilizando a linguagem de programação Dart com framework Flutter.'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
