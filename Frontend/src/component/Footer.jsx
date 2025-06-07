import React from "react";
import { CiMail } from "react-icons/ci";
import { FiLinkedin } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <div className="  h-screen">
    <footer className="bg-gray-50 lg:absolute  text-white bottom-0 w-full h-fit">
      <div className="sm:py-10 sm:px-16 lg:pl-10 lg:pr-5    py-9 px-12"> 
        
        <div className="h-fit grid sm:grid-cols-2 grid-cols-1 gap-10 lg:grid-cols-5 xl:pl-4 lg:gap-10  lg:flex-row md:justify-between flex-col justify-center items-center sm:items-start  md:space-y-0  md:text-xl lg:text-sm 2xl:text-xl text-black">
            {/* tech academy logo */}
            <div className="">
              <div className="flex flex-col space-y-2  lg:items-center lg:w-fit">
                <div className="space-x-3 flex justify-center items-center ">
                  {/* TeN logo */}
                  <img src={logo} alt="Logo" className="sm:w-10 sm:h-10 w-8 h-8 "/>
                  <p className="font-bold text-xl text-blue-600">TEN Academy</p>
                </div>
                <div className="space-x-2 flex justify-center items-center opacity-85  text-xs lg:w-fit text-center ">
                  <IoLocationOutline className="w-4 h-4 text-blue-600"/>
                  <p>Noida 201301,UP.India</p>
                </div>
                <div className="space-x-2 flex justify-center items-center opacity-85 text-xs lg:w-fit">
                  <IoMail className="w-4 h-4 text-blue-600"/>
                  <p>indo@entrepreneurshipnetwork.net</p>
                </div>  
              </div>
            </div>

            {/* Services */}
            <div className="lg:ml-14 xl:ml-8"> 
            <ul className=" text-black text-center lg:text-left lg:ml-4 xl:ml-0">
              <li className="sm:mb-3 mb-2  ">
                    <a to="/" className=" cursor-pointer font-bold">SERVICES</a>
                </li>
                <li className="mb-1">
                    <a className="hover:text-blue-700 transition-transform duration-300 cursor-pointer inline-block hover:translate-x-2  hover:scale-105">Industries</a>
                </li>
                <li className="mb-1">
                    <a to="/" className="hover:text-blue-700 transition-transform duration-300 cursor-pointer inline-block hover:translate-x-2  hover:scale-105">Insights</a>
                </li>
                <li className="mb-1">
                    <a className="hover:text-blue-700 transition-transform duration-300 cursor-pointer inline-block hover:translate-x-2  hover:scale-105 ">About</a>
                </li>
            </ul>
          </div>

          {/* Internship */}
          <div className="lg:ml-4 xl:ml-0">
            <ul className=" text-black text-center lg:text-left ">
               <li className="sm:mb-3 mb-2">
                    <a to="/" className=" font-bold ">INTERNSHIP</a>
                </li>
                <li className="mb-1">
                    <a className="hover:text-blue-700 transition-transform duration-300 cursor-pointer inline-block hover:translate-x-2  hover:scale-105">Apply for Internship</a>
                </li>  
            </ul>

          </div>

          {/* Free content */}
          <div className="lg:ml-4 xl:ml-0">
            <ul className=" text-black text-center lg:text-left ">
              <li className="sm:mb-3 mb-2">
                <a className="  font-bold">FREE CONTENT</a>
              </li>
              <li className="mb-1">
                <a className="hover:text-blue-700 transition-transform duration-300 cursor-pointer inline-block hover:translate-x-2  hover:scale-105">Training</a>
              </li>
              
              <li className="mb-1">
                <a className="hover:text-blue-700 transition-transform duration-300 cursor-pointer inline-block hover:translate-x-2  hover:scale-105">About</a>
              </li>
                      
            </ul>
          </div>

          {/* Our Websites */}
          <div>
            <ul className=" text-black text-center lg:text-left ">
                <li className="sm:mb-3 mb-2">
                    <a to="/" className=" font-bold ">OUR WEBSITES</a>
                </li>
                <li className="mb-1">
                    <a className="hover:text-blue-700 transition-transform duration-300 cursor-pointer inline-block hover:translate-x-2  hover:scale-105">Resume Building</a>
                </li>
                <li className="mb-1">
                    <a to="/" className="hover:text-blue-700 transition-transform duration-300 cursor-pointer inline-block hover:translate-x-2  hover:scale-105">Ten Mentor</a>
                </li>
                <li className="mb-1">
                    <a className="hover:text-blue-700 transition-transform duration-300 cursor-pointer inline-block hover:translate-x-2  hover:scale-105">Ten AI consulting labs</a>
                </li>
                <li className="mb-1">
                    <a className="hover:text-blue-700 transition-transform duration-300 cursor-pointer inline-block hover:translate-x-2  hover:scale-105">Ten Hrms</a>
                </li>
                <li className="mb-1">
                    <a className="hover:text-blue-700 transition-transform duration-300 cursor-pointer inline-block hover:translate-x-2  hover:scale-105">Ten AI Labs</a>
                </li>
                
            </ul>
          </div>
          
        </div>
        <div className="text-black">
          <hr className="border-gray-300 mt-10 mb-6" />
          <div className="flex flex-col sm:flex-row items-center sm:justify-between space-y-4 sm:space-y-0 ">
            <div className="flex flex-col text-xs space-y-1 opacity-90">
              
                <p>2025 TEN Academy, All rights reserved</p>
              
              
                <p>Powered by the TEN Academy Team</p>
             
            </div>
             {/*social*/}
             <div className="flex  text-xl sm:text-2xl sm:space-x-3 space-x-2 cursor-pointer">
                <CiMail className="cursor-pointer hover:text-blue-600"/>
                <FiLinkedin className="opacity-75 cursor-pointer hover:text-blue-600 duration-200"/>
             </div>
          </div>
        </div>
      </div>


    </footer>

    </div>
  );
};

export default Footer;
