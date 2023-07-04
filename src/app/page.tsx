import Navbar from './components/navbar/page'
import maru from './assets/maru.png'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="mt-64 flex flex-col items-center justify-center">
        <a className="w-1/2 grayscale duration-500 hover:text-white hover:grayscale-0">
          <Image src={maru} alt="Maru" />
          <p className="absolute top-0 text-5xl">MARU</p>
        </a>
      </div>
    </>
  )
}
