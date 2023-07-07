'use client'
import Navbar from './components/navbar/page'
import { useState } from 'react'

export default function Home() {
  const [english, setEnglish] = useState(false)
  return (
    <>
      <Navbar english={english} />
    </>
  )
}
