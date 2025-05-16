
import AboutAdsSection from '@/components/about/adAbout-section'
import HeroSection from '@/components/about/hero-section'
import FAQSection from '@/components/home/faq-section'
import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F9F9F9] md:p-2 p-0">
       <HeroSection/>
       <AboutAdsSection/>
       <FAQSection/>
    </div>
  )
}

export default About