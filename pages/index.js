import Head from 'next/head'
import Hero from './Components/Hero'
import HowTo from './Components/HowTo'
import About from './Components/About'

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <HowTo />
    </div>
  )
}
