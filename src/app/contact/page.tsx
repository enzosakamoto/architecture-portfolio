'use client'
import Navbar from '../components/navbar/Navbar'
import useLanguage from '../utils/language'
import { BiSolidMap } from 'react-icons/bi'
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineGithub
} from 'react-icons/ai'
import { BiLoaderAlt } from 'react-icons/bi'
import { MdEmail } from 'react-icons/md'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export interface Form {
  name: string
  email: string
  message: string
}

export default function Contact() {
  const { english } = useLanguage()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [forms, setForms] = useState<Form>({
    name: '',
    email: '',
    message: ''
  })
  const [fade, setFade] = useState<boolean>(false)
  useEffect(() => {
    setTimeout(() => {
      setFade(true)
    }, 200)
  }, [])

  // function handleValidation() {
  //   // TODO
  //   // Forms validation
  //   // Name validation
  // }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    setIsLoading(true)

    try {
      await fetch('/api/email', {
        method: 'POST',
        body: JSON.stringify({
          name: forms.name,
          email: forms.email,
          message: forms.message
        })
      })

      toast.success('E-mail enviado! 😃', {
        position: 'top-right',
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: 'colored'
      })

      setIsLoading(false)

      setForms({
        name: '',
        email: '',
        message: ''
      })
    } catch (error) {
      toast.error('E-mail não enviado, tente novamente! 😥', {
        position: 'top-right',
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: 'colored'
      })
      console.log(error)
    }
  }

  return (
    <main className="flex flex-col overflow-x-hidden bg-gradient-to-b from-white via-blue-100 to-blue-200 py-20">
      <ToastContainer />
      <Navbar english={english} />
      <section className="flex w-full transform flex-col items-center justify-center gap-28 py-32 transition-all duration-500">
        <p className="text-5xl font-bold">{english ? 'Contact' : 'Contato'}</p>
        <div
          className={`flex w-full transform flex-col gap-8 px-10 transition-all duration-500 lg:flex-row ${
            fade ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}
        >
          <form
            onSubmit={handleSubmit}
            className="flex w-full flex-col items-center gap-8 rounded-2xl bg-blue-50 p-10 drop-shadow-md lg:w-2/3"
          >
            <div className="flex w-full flex-col gap-2 text-xl">
              <label htmlFor="" className="font-medium">
                {english ? 'Name' : 'Nome'}
              </label>
              <input
                type="text"
                value={forms.name}
                onChange={(e) => setForms({ ...forms, name: e.target.value })}
                className="transform border-b-2 border-blue-400 bg-transparent outline-none transition-all duration-500 focus:border-blue-800"
              />
            </div>
            <div className="flex w-full flex-col gap-2 text-xl">
              <label htmlFor="" className="font-medium">
                E-mail
              </label>
              <input
                type="text"
                value={forms.email}
                onChange={(e) => setForms({ ...forms, email: e.target.value })}
                className="transform border-b-2 border-blue-400 bg-transparent outline-none transition-all duration-500 focus:border-blue-800"
              />
            </div>
            <div className="flex w-full flex-col gap-2 text-xl">
              <label htmlFor="" className="font-medium">
                {english ? 'Message' : 'Mensagem'}
              </label>
              <textarea
                value={forms.message}
                onChange={(e) =>
                  setForms({ ...forms, message: e.target.value })
                }
                className="h-20 transform resize-none border-b-2 border-blue-400 bg-transparent outline-none transition-all duration-500 focus:border-blue-800"
              />
            </div>
            <button
              type="submit"
              disabled={
                forms.name === '' || forms.email === '' || forms.message === ''
              }
              className="transform place-content-center rounded-xl bg-blue-200 px-2 py-2 text-lg font-medium drop-shadow-md transition-all duration-500 hover:scale-105 hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500 disabled:hover:scale-100 sm:w-1/6 sm:px-0"
            >
              {isLoading ? (
                <div className="flex w-full flex-row items-center justify-center gap-2">
                  <BiLoaderAlt className="animate-spin" />
                  <p>{english ? 'Sending' : 'Enviando'}</p>
                </div>
              ) : english ? (
                'Send'
              ) : (
                'Enviar'
              )}
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
              <Link
                href="https://www.linkedin.com/in/enzosakamoto/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full transform flex-row items-center justify-start gap-4 transition-all duration-500 hover:scale-105"
              >
                <AiOutlineLinkedin className="text-5xl" />
                <p className="text-base sm:text-xl">Linkedin</p>
              </Link>
              <Link
                href="https://github.com/enzosakamoto"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full transform flex-row items-center justify-start gap-4 transition-all duration-500 hover:scale-105"
              >
                <AiOutlineGithub className="text-5xl" />
                <p className="text-base sm:text-xl">Github</p>
              </Link>
              <Link
                href="https://www.instagram.com/sakamoto1g/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full transform flex-row items-center justify-start gap-4 transition-all duration-500 hover:scale-105"
              >
                <AiOutlineInstagram className="text-5xl" />
                <p className="text-base sm:text-xl">Instagram</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
