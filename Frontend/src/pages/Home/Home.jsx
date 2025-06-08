import React from 'react'
import HomePage from '../../components/LandingPage/HomePage'
import NavbarDemo from '../../components/Navbar'
import '../../App.css';
// import { AnimatedTestimonialsDemo } from '../../components/LandingPageComponents/card/ReviewCard/Review'

const Home = () => {

  return (
    <div className="mb-10 w-full">
      <div className="absolute">
        <NavbarDemo />
      </div>

      <HomePage />

      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mt-10 mb-5">
        User Reviews
      </h1>
      <div className='flex flex-col justify-center items-center mx-5' >  
       {/* <AnimatedTestimonialsDemo />       */}
      </div>


    </div>
  )
}

export default Home
