import About from '@/components/About'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import TechStack from '@/components/TechStack'
import React from 'react'

const Home = () => {
  return (
    <main className='relative bg-slate-950 text-slate-100 overflow-hidden'>

      <div className="absolute top-0 left-1/2 -translate-x-1/2
                w-[400px] h-[400px]
                md:w-[800px] md:h-[800px]
                bg-blue-500/10 blur-[120px]
                rounded-full -z-10" />

      <Navbar />

      <section id="hero">
        <Hero />
      </section>

      <div className='py-4'>
        <hr className="w-full max-w-6xl mx-auto h-[2px] bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 rounded-full border-0 opacity-40" />
      </div>

      <section id="skills" className='py-24'>
        <TechStack />
      </section>

      <Projects />

      <div className='px-6'>
        <hr className="w-full max-w-6xl mx-auto h-[1px] bg-slate-700/50 rounded-full border-0" />
      </div>

      <About />

      <div className='px-6'>
        <hr className="w-full max-w-6xl mx-auto h-[1px] bg-slate-700/50 rounded-full border-0" />
      </div>

      <Contact />

    </main>
  )
}

export default Home
