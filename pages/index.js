import About from '@/components/About'
import HomePage from '@/components/HomePage'
import Sidebar from '@/components/Sidebar'
import Contact from '@/components/Contact'
import { Inter } from 'next/font/google'

export default function Home() {
  return (
    <main>
      <HomePage /> 
      <Sidebar /> 
      <About />
      <Contact />
    </main>
  )
}
