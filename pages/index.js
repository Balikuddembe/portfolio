import About from '@/components/About'
import HomePage from '@/components/HomePage'
import Sidebar from '@/components/Sidebar'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import Portfolio from '@/components/Portfolio'

export default function Home() {
  return (
    <main>
      <HomePage /> 
      <Sidebar /> 
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  )
}
