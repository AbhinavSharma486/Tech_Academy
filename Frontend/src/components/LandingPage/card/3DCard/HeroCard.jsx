import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from "react-icons/ai";
import mentor from '../../../../assets/LandingPageImage/HeroImages/mentor-image.webp';

const heroCardData = [
  {
    src: mentor,
    title: 'Web Development',
    des: 'Master HTML, CSS, JavaScript, and modern frameworks like React and Next.js.',
  },
  {
    src: mentor,
    title: 'UI/UX Design',
    des: 'Learn the principles of design, prototyping, and user experience with real-world tools.',
  }
];

const HeroCard = () => {
  return (
    <div className="flex flex-col gap-6 items-center justify-center md:flex-col w-full max-w-[90vw] sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[70vw] xl:max-w-[35vw] mx-auto">
      {heroCardData.map((item, index) => (
        <div
          key={index}
          className="group w-full p-4 bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 rounded-2xl flex flex-col-reverse sm:flex-row items-center gap-4 overflow-hidden transition-all duration-300 hover:shadow-xl"
        >
          {/* Text Section */}
          <div className="flex flex-col justify-between gap-5 w-full md:w-[60%] z-10">
            <div>
              <h2 className="text-[6vw] sm:text-[3vw] md:text-[3vw] lg:text-[2.5vw] xl:text-[1.5vw] text-white font-bold mb-3">
                {item.title}
              </h2>
              <p className="text-[4vw] sm:text-[2vw] md:text-[2vw] lg:text-[1.8vw] xl:text-[1vw] text-white">
                {item.des}
              </p>
            </div>

            <div className='w-fit' >
              <Link to="/">
                <span className="flex items-center text-[4vw] sm:text-[2vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1vw] px-4 py-2 rounded-2xl bg-white font-medium hover:bg-gray-200 transition">
                  View Courses&nbsp;
                  <AiOutlineArrowRight className="-rotate-45" />
                </span>
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-[40%] flex justify-center items-center sm:justify-end sm:items-end">
            <img
              src={item.src}
              alt={item.title}
              className="h-[35vh] sm:h-[28vh] md:h-[25vh] xl:h-[26vh] w-auto object-contain transition-transform duration-500 transform group-hover:scale-105"
            />
          </div>
        </div>
      ))}
    </div>


  );
};

export default HeroCard;
