import React from 'react'
import LogoSvg from './LogoSvg'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <div className='flex gap-1 w-auto justify-center items-center'>
      <Link to={'/'} className='flex items-center justify-center' >
        <LogoSvg
          className=" w-[9vw] sm:w-[9vw] md:w-[7vw] lg:w-[3vw] h-[5vh] sm:h-[5vw] md:h-[5vw] lg:h-[4vh] rounded-2xl"
          Textcolor={'blue'}
        />
        <span className='block text-[5vw] sm:text-[4vw]  md:text-[3vw] lg:text-[1.2rem] font-bold bg-gradient-to-r from-blue-900  to-blue-400 bg-clip-text text-transparent'>
          Tech Academy
        </span>
      </Link>
    </div>
  )
}

export default Logo
