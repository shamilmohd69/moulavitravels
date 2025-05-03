import About from '@/components/About'
import Hero from '@/components/Hero'
import NavBar from '@/components/NavBar'
import Services from '@/components/Services'
import WhyChoose from '@/components/WhyChoose'
import React from 'react'

const page = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <WhyChoose />
      <Services />
    </div>
  )
}

export default page