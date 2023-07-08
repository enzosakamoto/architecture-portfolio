import { useState, useEffect } from 'react'

export default function useLanguage() {
  const [english, setEnglish] = useState<boolean>(false)

  useEffect(() => {
    const storagedLanguage = localStorage.getItem('language')

    if (storagedLanguage) setEnglish(storagedLanguage === 'true')
    else setEnglish(false)
  }, [])

  function changeLanguage(isEnglish: boolean) {
    setEnglish(isEnglish)
    localStorage.setItem('language', String(isEnglish))
  }

  return { english, changeLanguage }
}
