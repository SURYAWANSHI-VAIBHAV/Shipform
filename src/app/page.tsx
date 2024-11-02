import React from 'react'
import Hero from './components/Sections/HeroSection/hero'
import Features from './components/Sections/Features/features'
import Pricing from './components/Sections/Pricing/pricing'
import PageFeature from './components/Sections/Features/pagefeature'
import Faq from './components/Sections/Faq/faq'

function page() {
  return (
    <div className='bg-white dark:bg-black'>
      <Hero/>
      {/* <PageFeature/> */}
      <Features/>
      <Pricing/>
      <Faq/>
    </div>
  )
}

export default page
