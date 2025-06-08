import React from 'react'
import LogoSvg from './LogoSvg'

const Logo = () => {
  return (
    <div className='flex gap-1 w-auto justify-center items-center'>
      <LogoSvg
        className=" w-[9vw] sm:w-[9vw] md:w-[9vw] lg:w-[4vw] h-[5vh] sm:h-[5vw] md:h-[5vw] lg:h-[5vh] rounded-2xl"
        Textcolor={'blue'}
      />

      <span className='block text-[5vw] sm:text-[4vw]  md:text-[3vw] lg:text-[1.5rem] font-bold bg-gradient-to-r from-blue-700 via-black to-blue-400 bg-clip-text text-transparent'>
        Tech Academy
      </span>
    </div>
  )
}

export default Logo
