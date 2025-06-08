"use client";
import React from "react";
import { Boxes } from "../../ui/BoxBackground/BoxBg";
import { cn } from "../../../lib/utils";
import { Link } from 'react-router-dom';
import Image_one from '../../../assets/LandingPageImage/HeroImages/tech_image_1.webp';
import Image_two from '../../../assets/LandingPageImage/HeroImages/tech_image_2.jpg';
import HeroCard from '../card/3DCard/HeroCard';
import { AiOutlineArrowRight } from "react-icons/ai";
import { motion } from "framer-motion";


export function BackgroundBoxesDemo() {

  return (
    <div className="h-full xxl:h-220 relative w-full overflow-hidden bg-gray-400 rounded-lg">
      {/* Animated Box Background */}
      <div className="absolute inset-0 w-full h-full z-10 pointer-events-none">
        <Boxes />
        <div className="[mask-image:radial-gradient(transparent,white)] absolute inset-0 bg-white " />
      </div>


      {/* Content Area */}
      <div className="relative z-20 px-4 md:px-10 py-24 md:py-36 flex flex-col items-center justify-center ">
        <div className="grid grid-cols-1 mt-10 xl:grid-cols-2 gap-y-20 lg:gap-x-0 items-center justify-center w-full max-w-8xl mx-auto">

          {/* Text Content */}
          <div className="flex flex-col gap-5 mx-5 text-left lg:px-0 max-w-4xl">

            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col gap-5 px-2" >
                <p className=" text-[10vw] sm:text-[8vw] md:text-[8vw] lg:text-[6vw] xl:text-[4vw] font-bold leading-tight">
                  <span className="bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent">
                    Empower&nbsp;
                  </span>
                  Your <span className="block md:inline">Future with</span>

                  <span className="bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent">
                    Knowledge
                  </span>
                </p>

                <p className="text-lg md:text-2xl mt-4 text-black">
                  Your journey to success doesn&rsquo;t start tomorrow it starts today. So take that first step, because the future belongs to the curious, the bold, and the determined.
                </p>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
            >

              <div className="mt-6">
                <Link to="/">
                  <button
                    className="p-[1vw] pl-[2vw] pr-[2vw] gap-[1.5vw] flex items-center relative overflow-hidden group 
                    text-white font-bold text-[2vw] rounded-full 
                      bg-gradient-to-r from-blue-600 via-blue-800 to-black 
                      transition-all duration-300 ease-in-out 
                      group-hover:shadow-xl group-hover:scale-105 group-hover:opacity-95 
                      hover:bg-gradient-to-r hover:from-black hover:via-blue-500 hover:to-blue-700">
                    <span className="flex p-2 items-center justify-between gap-[3vw] w-full">
                      <span className="text-[5vw] sm:text-[3vw] md:text-[2.5vw] lg:text-[2vw] xl:text-[1.5vw]">
                        Register now
                      </span>
                      <AiOutlineArrowRight
                        className="w-[6vw] h-[6vw] sm:w-[3vw] sm:h-[3vw] md:w-[2vw] md:h-[2vw] 
                       transition-transform duration-300 transform group-hover:translate-x-2"
                      />
                    </span>
                  </button>
                </Link>
              </div>

            </motion.section>

          </div>

          {/* Image Cards */}
          <div className="flex flex-col xl:flex-col md:flex-col lg:flex-row lg:gap-5 items-center lg:items-end justify-center gap-6 px-4">
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div>
                <HeroCard
                  src={Image_one}
                  title="Web Development"
                  des="Join a platform that turns knowledge into growth."
                />
              </div>
            </motion.section>
            
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div>
                <HeroCard
                  src={Image_two}
                  title="Data Analytics."
                  des="Achieve more with every lesson. "
                />
              </div>
            </motion.section>

          </div>


        </div>
      </div>
    </div >
  );
}
