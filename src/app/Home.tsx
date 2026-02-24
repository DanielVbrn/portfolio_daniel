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

      <section className='relative'>
        <Hero />  
      </section>

      <div className='relative py-16'>
        <hr className="w-full max-w-6xl mx-auto h-[3px] bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 rounded-full mb-10 border-0" />
      </div>

      <section className='py-24'>
        <div className='max-w-6-l mx-auto px-6'>
          <TechStack />
        </div>
      </section>
      <Projects />

    </main>
  )
}

export default Home