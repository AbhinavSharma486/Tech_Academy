import React from 'react'
import image from '../../../../assets/LandingPageImage/HeroImages/mentor-image.webp'
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from "react-icons/ai";


const HeroCard = ({ src, title, des }) => {

  return (
    <div className="flex items-center justify-center w-[100vw] sm:w-[80vw] md:w-[70vw] max-w-[90vw] lg:max-w-[45vw] xl:max-w-[35vw] h-[30vh] md:h-[35vh] xl:h-[30vh] bg-gray-100 rounded-2xl">
      <div className="relative group w-full h-full p-4 bg-gradient-to-r from-black via-blue-700 to-blue-900 rounded-2xl flex items-center justify-between overflow-hidden transition-all duration-300 hover:shadow-xl">

        {/* Left: Text */}
        <div className="flex flex-col justify-between py-5 h-full w-[60%] z-10">
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
          <div className="w-fit">
            <Link to={src}>
              <span className="flex items-center justify-between text-[3vw] sm:text-[2vw] md:text-[2vw] lg:text-[1.7vw] xl:text-[1vw] px-4 py-2 rounded-2xl bg-white font-medium hover:bg-gray-200 transition">
                View Courses&nbsp;
                <AiOutlineArrowRight className="-rotate-45" />
              </span>
            </Link>
          </div>

        </div>


        {/* Right: Image */}
        <div className="absolute bottom-0 right-4">
          <img
            src={image}
            alt="mentor"
            className="h-[20vh] sm:h-[22vh] md:h-[30vh] xl:h-[26vh] w-auto object-cover transition-transform duration-500 transform group-hover:scale-130"
          />
        </div>

      </div>
    </div>


  );
};

//   return (
//     <div>
//       <CardContainer className="inter-var">
//         <CardBody
//           className="bg-white relative group/card dark:hover:shadow-3xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[28rem] h-auto rounded-xl p-3 border"
//         >
//           <CardItem translateZ="50" className="text-lg font-semibold text-blue-700">
//             {title}
//           </CardItem>
//           <CardItem
//             as="p"
//             translateZ="60"
//             className="text-gray-500 text-sm max-w-sm mt-1"
//           >
//             {des}
//           </CardItem>

//           <CardItem translateZ="100" className="w-full mt-3">
//             <img
//               src={src}
//               height="480"
//               width="480"
//               className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-lg"
//               alt="thumbnail"
//             />
//           </CardItem>
//         </CardBody>
//       </CardContainer>
//     </div>
//   );
// };

export default HeroCard;
