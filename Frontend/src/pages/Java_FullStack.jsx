import React from 'react'
import Hero from '../components/JavaFullStack/Hero';
import CourseCurriculum from '../components/JavaFullStack/CourseCurriculum';
import Brochure from '../components/JavaFullStack/About_the_Course';
import CourseBenefits from '../components/JavaFullStack/Coursebenefits';

const Java_FullStack = () => {
  return (
    <div>
      <Hero />
      <CourseBenefits />
      <Brochure />
      <CourseCurriculum />
    </div>
  )
}

export default Java_FullStack;
