import React from "react";
import { CiMail } from "react-icons/ci";
import { FiLinkedin } from "react-icons/fi";
import { IoLocationOutline, IoMail } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-white w-full">
      <div className="sm:py-10 sm:px-16 lg:pl-7 lg:pr-2 py-9 px-12 xl:px-0">
        <div className="h-fit grid sm:grid-cols-2 grid-cols-1 gap-10 lg:grid-cols-3 xl:pl-4 lg:gap-12 xl:gap-10  md:justify-between flex-col justify-center items-center sm:items-start md:space-y-0 md:text-xl lg:text-sm 2xl:text-xl text-black">

          {/* tech academy logo */}
          <div>
            <div className="flex flex-col space-y-2 lg:items-center  ">
              <div className="space-x-3 flex justify-center items-center">
                <img src={logo} alt="Logo" className="sm:w-10 sm:h-10 w-8 h-8" />
                <p className="font-bold text-xl text-blue-600">TEN Academy</p>
              </div>
              <div className="text-xs text-center">
                <p>Empowering students with real-world tech skills for future careers.</p>
              </div>
              <div className="space-x-1 flex justify-center items-center opacity-85 text-xs lg:w-fit text-center">
                <IoLocationOutline className="w-4 h-4 text-blue-600" />
                <p>Noida 201301, UP, India</p>
              </div>
              <div className="space-x-1 flex justify-center items-center opacity-85 text-xs lg:w-fit">
                <IoMail className="w-4 h-4 text-blue-600" />
                <p>indo@entrepreneurshipnetwork.net</p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <ul className="text-black text-center">
              <li className="sm:mb-3 mb-2 font-bold">CERTIFIED COURSES</li>

              <li className="mb-1 lg:text-sm flex justify-center">
                <Link
                  to="/JavaFullStack"
                  className="hover:text-blue-700 transition-transform duration-300 hover:translate-x-1 hover:scale-105 cursor-pointer w-fit"
                >
                  JAVA Full Stack
                </Link>
              </li>

              <li className="mb-1 lg:text-sm flex justify-center">
                <Link
                  to="/mern-fullstack"
                  className="hover:text-blue-700 transition-transform duration-300 hover:translate-x-1 hover:scale-105 cursor-pointer w-fit"
                >
                  MERN Full Stack
                </Link>
              </li>

              <li className="mb-1 lg:text-sm flex justify-center">
                <Link
                  to="/data-analytics"
                  className="hover:text-blue-700 transition-transform duration-300 hover:translate-x-1 hover:scale-105 cursor-pointer w-fit"
                >
                  Data Analytics
                </Link>
              </li>

              <li className="mb-1 lg:text-sm flex justify-center">
                <Link
                  to="/data-science-ai"
                  className="hover:text-blue-700 transition-transform duration-300 hover:translate-x-1 hover:scale-105 cursor-pointer w-fit"
                >
                  Data Science & AI
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="">
            <ul className="text-black text-center ">
              <li className="sm:mb-3 mb-2 font-bold">COMPANY</li>
              <li className="mb-1 lg:text-sm flex justify-center"><p className=" hover:text-blue-700 transition-transform duration-300 hover:translate-x-1 hover:scale-105 cursor-pointer w-fit">Become A Mentor</p></li>
              <li className="mb-1 lg:text-sm flex justify-center"><p className=" hover:text-blue-700 transition-transform duration-300 hover:translate-x-1 hover:scale-105 cursor-pointer w-fit">Careers</p></li>
              <li className="mb-1 lg:text-sm flex justify-center"><p className=" hover:text-blue-700 transition-transform duration-300 hover:translate-x-1 hover:scale-105 cursor-pointer w-fit">Terms & Conditions</p></li>
              
              <li className="mb-1 lg:text-sm flex justify-center">
                <Link
                  to='/privacy-policy'
                  className=" hover:text-blue-700 transition-transform duration-300 hover:translate-x-1 hover:scale-105 cursor-pointer w-fit">
                  Privacy Policy
                </Link>
              </li>

              <li className="mb-1 lg:text-sm flex justify-center"><p className=" hover:text-blue-700 transition-transform duration-300 hover:translate-x-1 hover:scale-105 cursor-pointer w-fit">Cancellation/Refund Policy</p></li>
            </ul>
          </div>

        </div>

        <div className="text-black  lg:px-7 xl:px-14">
          <hr className="border-gray-300 mt-10 mb-6" />
          <div className="flex flex-col sm:flex-row items-center sm:justify-between space-y-4 sm:space-y-0">
            <div className="flex flex-col text-xs space-y-1 opacity-90">
              <p>2025 TEN Academy, All rights reserved</p>
              <p>Powered by the TEN Academy Team</p>
            </div>
            {/* Social icons */}
            <div className="flex text-xl sm:text-2xl sm:space-x-3 space-x-2 cursor-pointer">
              <CiMail className="hover:text-blue-600" />
              <FiLinkedin className="opacity-75 hover:text-blue-600 duration-200" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
