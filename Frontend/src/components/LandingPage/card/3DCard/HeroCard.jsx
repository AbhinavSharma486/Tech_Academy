import React from 'react'
import image from '../../../../assets/LandingPageImage/HeroImages/mentor-image.webp'
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from "react-icons/ai";

const HeroCard = ({ src, title, des }) => {

  return (
    <div className="flex items-center justify-center w-full sm:w-[80vw] md:w-[70vw] max-w-[90vw] lg:max-w-[45vw] xl:max-w-[35vw] h-[30vh] md:h-[35vh] xl:h-[30vh] bg-gray-100 rounded-2xl">
      <div className="relative group w-full h-full p-4 bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 rounded-2xl flex flex-col md:flex-row items-center justify-between overflow-hidden transition-all duration-300 hover:shadow-xl">

        {/* Left: Text */}
        <div className="flex flex-col justify-between py-5 gap-5 h-full w-full md:w-[60%] z-10">
          {/* Top: Heading and Paragraph */}
          <div>
            <h2 className="text-[4vw] sm:text-[3vw] md:text-[3vw] lg:text-[2vw] xl:text-[1.5vw] text-white font-bold mb-1">
              {title}
            </h2>
            <p className="text-[3vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1vw] text-white">
              {des}
            </p>
          </div>

          {/* Bottom: View Courses Link */}
          <div className="w-fit mt-auto mb-3">
            <Link to={src}>
              <span className="flex items-center justify-between text-[3vw] sm:text-[2vw] md:text-[2vw] lg:text-[1.7vw] xl:text-[1vw] px-4 py-2 rounded-2xl bg-white font-medium hover:bg-gray-200 transition">
                View Courses&nbsp;
                <AiOutlineArrowRight className="-rotate-45" />
              </span>
            </Link>
          </div>

        </div>


        {/* Right: Image */}
        <div className="absolute bottom-0 right-4 md:static">
          <img
            src={image}
            alt="mentor"
            className="h-[20vh] sm:h-[25vh] md:h-[30vh] xl:h-[26vh] w-auto object-cover transition-transform duration-500 transform group-hover:scale-130"
          />
        </div>

      </div>
    </div>


  );
};

export default HeroCard;
