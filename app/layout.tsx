import './globals.css'
import { Inter, Comfortaa } from 'next/font/google'

const comfortaa = Comfortaa({ subsets: ['latin'] })
export const metadata = {
  title: 'Anthony Matignon',
  description: 'Développeur Web Fullstack Symfony VueJS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={comfortaa.className}>{children}</body>
    </html>
  )
}
