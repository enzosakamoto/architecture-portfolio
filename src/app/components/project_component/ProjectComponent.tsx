import Link from 'next/link'
import Image from 'next/image'
import { ProjectComponentProps } from './types'

function formatTechs(techs: string[]) {
  let techsString = '💻:'
  techs.forEach((tech, index) => {
    techsString += ` ${tech}`
    if (index < techs.length - 1) techsString += ','
  })
  return techsString
}

export default function ProjectComponent({
  image,
  title,
  text,
  techs,
  link
}: ProjectComponentProps) {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-full transform cursor-pointer transition-all duration-500 hover:scale-105"
    >
      <div className="flex flex-col items-center justify-center rounded-r-xl border-l-2 border-blue-400 bg-blue-50 py-8 drop-shadow-md transition-all duration-500 hover:border-blue-800 sm:flex-row sm:items-start sm:justify-start">
        <Image
          src={image}
          alt={title}
          className="max-h-xs ml-4 mr-4 w-56 sm:mr-0 sm:max-w-xs"
        />
        <div className="mx-8 flex h-full flex-col justify-around gap-4 text-sm sm:gap-2 sm:text-lg xl:gap-0">
          <p className="text-2xl font-bold">{title}</p>
          <p>{text}</p>
          <p className="font-bold">{formatTechs(techs)}</p>
        </div>
      </div>
    </Link>
  )
}
