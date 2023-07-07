import './globals.css'
import { Fira_Code } from 'next/font/google'

const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['400', '500', '700']
})

export const metadata = {
  title: 'Enzo Sakamoto - Portfolio',
  description: 'Portfólio de Enzo Sakamoto'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={firaCode.className}>{children}</body>
    </html>
  )
}
