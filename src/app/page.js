import About from '@/components/About'
import Hero from '@/components/Hero'
import NavBar from '@/components/NavBar'
import React from 'react'

const page = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
    </div>
  )
}

export default page