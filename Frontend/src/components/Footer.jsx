import React from "react";
import { CiMail } from "react-icons/ci";
import { FiLinkedin } from "react-icons/fi";
import { IoLocationOutline, IoMail } from "react-icons/io5";
import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-white w-full">
      <div className="sm:py-10 sm:px-16 lg:pl-10 lg:pr-5 py-9 px-12">
        <div className="h-fit grid sm:grid-cols-2 grid-cols-1 gap-10 lg:grid-cols-5 xl:pl-4 lg:gap-10 lg:flex-row md:justify-between flex-col justify-center items-center sm:items-start md:space-y-0 md:text-xl lg:text-sm 2xl:text-xl text-black">

          {/* tech academy logo */}
          <div>
            <div className="flex flex-col space-y-2 lg:items-center lg:w-fit">
              <div className="space-x-3 flex justify-center items-center">
                <img src={logo} alt="Logo" className="sm:w-10 sm:h-10 w-8 h-8" />
                <p className="font-bold text-xl text-blue-600">TEN Academy</p>
              </div>
              <div className="space-x-2 flex justify-center items-center opacity-85 text-xs lg:w-fit text-center">
                <IoLocationOutline className="w-4 h-4 text-blue-600" />
                <p>Noida 201301, UP, India</p>
              </div>
              <div className="space-x-2 flex justify-center items-center opacity-85 text-xs lg:w-fit">
                <IoMail className="w-4 h-4 text-blue-600" />
                <p>indo@entrepreneurshipnetwork.net</p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="lg:ml-14 xl:ml-8">
            <ul className="text-black text-center lg:text-left lg:ml-4 xl:ml-0">
              <li className="sm:mb-3 mb-2 font-bold">SERVICES</li>
              <li className="mb-1 hover:text-blue-700 transition-transform duration-300 hover:translate-x-2 hover:scale-105 cursor-pointer">Industries</li>
              <li className="mb-1 hover:text-blue-700 transition-transform duration-300 hover:translate-x-2 hover:scale-105 cursor-pointer">Insights</li>
              <li className="mb-1 hover:text-blue-700 transition-transform duration-300 hover:translate-x-2 hover:scale-105 cursor-pointer">About</li>
            </ul>
          </div>

          {/* Internship */}
          <div className="lg:ml-4 xl:ml-0">
            <ul className="text-black text-center lg:text-left">
              <li className="sm:mb-3 mb-2 font-bold">INTERNSHIP</li>
              <li className="mb-1 hover:text-blue-700 transition-transform duration-300 hover:translate-x-2 hover:scale-105 cursor-pointer">Apply for Internship</li>
            </ul>
          </div>

          {/* Free content */}
          <div className="lg:ml-4 xl:ml-0">
            <ul className="text-black text-center lg:text-left">
              <li className="sm:mb-3 mb-2 font-bold">FREE CONTENT</li>
              <li className="mb-1 hover:text-blue-700 transition-transform duration-300 hover:translate-x-2 hover:scale-105 cursor-pointer">Training</li>
              <li className="mb-1 hover:text-blue-700 transition-transform duration-300 hover:translate-x-2 hover:scale-105 cursor-pointer">About</li>
            </ul>
          </div>

          {/* Our Websites */}
          <div>
            <ul className="text-black text-center lg:text-left">
              <li className="sm:mb-3 mb-2 font-bold">OUR WEBSITES</li>
              <li className="mb-1 hover:text-blue-700 transition-transform duration-300 hover:translate-x-2 hover:scale-105 cursor-pointer">Resume Building</li>
              <li className="mb-1 hover:text-blue-700 transition-transform duration-300 hover:translate-x-2 hover:scale-105 cursor-pointer">Ten Mentor</li>
              <li className="mb-1 hover:text-blue-700 transition-transform duration-300 hover:translate-x-2 hover:scale-105 cursor-pointer">Ten AI consulting labs</li>
              <li className="mb-1 hover:text-blue-700 transition-transform duration-300 hover:translate-x-2 hover:scale-105 cursor-pointer">Ten Hrms</li>
              <li className="mb-1 hover:text-blue-700 transition-transform duration-300 hover:translate-x-2 hover:scale-105 cursor-pointer">Ten AI Labs</li>
            </ul>
          </div>
        </div>

        <div className="text-black">
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
