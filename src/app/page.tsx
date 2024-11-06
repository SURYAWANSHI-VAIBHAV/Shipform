import Faq from '@/components/Sections/Faq/faq'
import Features from '@/components/Sections/Features/features'
import Hero from '@/components/Sections/HeroSection/hero'
import Pricing from '@/components/Sections/Pricing/pricing'
import React from 'react'

function page() {
  return (
    <div className='bg-white dark:bg-black'>
      <Hero/>
      <Features/>
      <Pricing/>
      <Faq/>
    </div>
  )
}

export default page
