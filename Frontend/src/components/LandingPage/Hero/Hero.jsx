import React from "react";
import { Link } from 'react-router-dom';
import mentor from '../../../assets/LandingPageImage/HeroImages/mentor-image.webp';
import HeroCard from '../card/3DCard/HeroCard';
import { AiOutlineArrowRight } from "react-icons/ai";
import { motion } from "framer-motion";
import HeroImage1 from "../../../assets/LandingPageImage/HeroImages/heroImage1.webp";
import { AnimatedTooltipPreview } from "../card/tooltip/UsersTooltip";

export function Hero() {

  return (
    <div className="min-h-screen relative w-full overflow-hidden">
      {/* Animated Box Background */}
      <img
        alt="hero image"
        src={HeroImage1}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      {/* <HeroSectionBackground /> */}
      {/* Content Area */}
      <div className="relative mt-10 md:mt-0 z-20 px-4 md:px-10 py-24 md:py-36 flex flex-col items-center justify-center ">
        <div className="grid grid-cols-1 mt-10 xl:grid-cols-2 gap-y-20 lg:gap-x-0 items-center justify-center w-full max-w-8xl mx-auto">

          {/* Text Content */}
          <div className="flex flex-col gap-5 mx-5 text-left lg:px-0 max-w-4xl">

            <div className=" flex items-start justify-start " >
              <AnimatedTooltipPreview />
            </div>

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
                  Your <span className="block md:inline">Future with&nbsp;</span>

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
                    className="p-[0.3vw] pl-[2vw] pr-[2vw] gap-[1.5vw] flex items-center relative overflow-hidden group 
                    text-white font-semibold text-[2vw] rounded-full 
                      bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 
                      transition-all duration-300 ease-in-out 
                      group-hover:shadow-xl group-hover:scale-105 group-hover:opacity-95 
                      hover:bg-gradient-to-r hover:from-blue-800 hover:via-blue-600 hover:to-blue-400">
                    <span className="flex p-1 items-center justify-between gap-[3vw] w-full">
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
          <div className="flex flex-col md:flex-row xl:flex-col flex-wrap items-center md:items-end justify-center gap-5">
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <HeroCard
                src={mentor}
                title="Web Development"
                des="Join a platform that turns knowledge into growth."
              />
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <HeroCard
                src={mentor}
                title="Data Analytics."
                des="Achieve more with every lesson."
              />
            </motion.section>
          </div>


        </div>
      </div>
    </div >
  );
}
