'use client'
import Navbar from '../components/navbar/Navbar'
import useLanguage from '../utils/language'
import { BiSolidMap } from 'react-icons/bi'
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineGithub
} from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'

export default function Contact() {
  const { english } = useLanguage()
  return (
    <main className="flex flex-col overflow-x-hidden bg-gradient-to-b from-white via-blue-100 to-blue-200 py-20">
      <Navbar english={english} />
      <section className="flex w-full flex-col items-center justify-center gap-28 py-32  ">
        <p className="text-5xl font-bold">{english ? 'Contact' : 'Contato'}</p>
        <div className="flex w-full flex-col gap-8 px-10 lg:flex-row">
          <form className="flex w-full flex-col items-center gap-8 rounded-2xl bg-blue-50 p-10 drop-shadow-md lg:w-2/3">
            <div className="flex w-full flex-col gap-2 text-xl">
              <label htmlFor="">{english ? 'Name' : 'Nome'}</label>
              <input
                type="text"
                className="transform border-b-2 border-blue-400 bg-transparent outline-none transition-all duration-500 focus:border-blue-800"
              />
            </div>
            <div className="flex w-full flex-col gap-2 text-xl">
              <label htmlFor="">E-mail</label>
              <input
                type="text"
                className="transform border-b-2 border-blue-400 bg-transparent outline-none transition-all duration-500 focus:border-blue-800"
              />
            </div>
            <div className="flex w-full flex-col gap-2 text-xl">
              <label htmlFor="">{english ? 'Message' : 'Mensagem'}</label>
              <textarea className="h-20 transform resize-none border-b-2 border-blue-400 bg-transparent outline-none transition-all duration-500 focus:border-blue-800" />
            </div>
            <button className="transform place-content-center rounded-xl bg-blue-200 px-2 py-2 text-lg font-medium drop-shadow-md transition-all duration-500 hover:scale-105 hover:bg-blue-500 sm:w-1/6 sm:px-0">
              Enviar
            </button>
          </form>
          <div className="flex w-full flex-col justify-center p-4 lg:w-1/3">
            <div className="flex flex-col gap-8">
              <div className="flex w-full flex-row items-center justify-start gap-4">
                <BiSolidMap className="text-5xl" />
                <p className="text-base sm:text-xl">
                  {english ? 'São Paulo, Brazil' : 'São Paulo, Brasil'}
                </p>
              </div>
              <div className="flex w-full flex-row items-center justify-start gap-4">
                <MdEmail className="text-5xl" />
                <p className="text-base sm:text-xl">enzo.sak@hotmail.com</p>
              </div>
              <div className="flex w-full flex-row items-center justify-start gap-4">
                <AiOutlineLinkedin className="text-5xl" />
                <p className="text-base sm:text-xl">Linkedin</p>
              </div>
              <div className="flex w-full flex-row items-center justify-start gap-4">
                <AiOutlineGithub className="text-5xl" />
                <p className="text-base sm:text-xl">Github</p>
              </div>
              <div className="flex w-full flex-row items-center justify-start gap-4">
                <AiOutlineInstagram className="text-5xl" />
                <p className="text-base sm:text-xl">Instagram</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
