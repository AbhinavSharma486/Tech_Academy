import React from 'react'
import Hero_section from './components/Hero_section'
import Course_curriculum from './components/Course_curriculum'
import Enrollment from './components/Enrollment'
import Faq from './components/Faq'
import { TimelineDemo } from './components/TimeLine'

const Mern_LandingPage = () => {
  return (
    <div>
      <Hero_section />
      <Course_curriculum />
      <Enrollment />
      <TimelineDemo />
      <Faq />
    </div>
  )
}

export default Mern_LandingPage
