import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dantown Frontend',
  description: 'Frontend assement by wokoma osborn',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter}>{children}</body>
    </html>
  )
}
