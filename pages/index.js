import About from '@/components/About'
import HomePage from '@/components/HomePage'
import Sidebar from '@/components/Sidebar'
import { Inter } from 'next/font/google'

export default function Home() {
  return (
    <main>
      <HomePage />
      <Sidebar />
      <About />
    </main>
  )
}
