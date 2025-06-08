import React from 'react'
// import { Link } from 'react-router-dom'
// import HeroCard from '../card/3DCard/HeroCard'

// hero images :

// import Image_one from '../../assets/LandingPageImage/HeroImages/tech_image_1.webp';
// import Image_two from '../../assets/LandingPageImage/HeroImages/tech_image_2.jpg';
// import Logo from '../../assets/Logo/Logo';
import { BackgroundBoxesDemo } from '../LandingPage/BoxBackground/BoxBackground';


const HomePage = () => {
  return (
    <div className='flex flex-col justify-start items-start' >
      {/* <div className='flex mx-10' >
        <Logo />
      </div> */}
      <BackgroundBoxesDemo />
    </div>
  )
}

export default HomePage
