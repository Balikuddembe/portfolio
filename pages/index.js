import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className=' bg-blue-500 font-bold'>Home page</div>
    </main>
  )
}
