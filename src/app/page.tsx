'use client'
import { useState } from 'react'
import Navbar from './components/navbar/page'

export default function Home() {
  const [count, setCount] = useState<number>(0)

  return (
    <>
      <Navbar />
      <div className="flex h-screen flex-col items-center justify-center gap-5">
        <h1 className="text-2xl">Clique no botão</h1>
        <button
          className="w-20 rounded-lg border-2 border-black p-2 text-xl"
          onClick={() => setCount(count + 1)}
        >
          {count}
        </button>
      </div>
    </>
  )
}
