"use client";
import React from "react";
import { useState } from "react";
import { AnimatePresence, easeOut, motion } from "motion/react";
import Logo from "../../../assets/Logo/Logo";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from 'react-icons/hi';
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  hasDropdown = false,
  children,
}) => {
  const isOpen = active === item;

  return (
    <div
      onMouseEnter={() => {
        clearTimeout(window.leaveTimeout);
        setActive(item); 
      }}
      onMouseLeave={() => {
        window.leaveTimeout = setTimeout(() => setActive(null), 300); // hide after 0.3s
      }}

      className="relative flex items-center gap-1 cursor-pointer"
    >
      <motion.p
        transition={{ duration: 0.3 }}
        className="flex items-center text-xl text-black hover:text-blue-800"
      >
        {item}
        {hasDropdown &&
          (isOpen ? (
            <FiChevronUp className="ml-1 mt-0.5 text-lg" />
          ) : (
            <FiChevronDown className="ml-1 mt-0.5 text-lg" />
          ))}
      </motion.p>

      {/* Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.25 }}
          className="absolute left-1/2 top-full mt-10 -translate-x-1/2 z-50"
        >
          <div className="bg-white backdrop-blur-sm rounded-xl overflow-hidden border border-blue-100 shadow-xl p-4 w-max">
            {children}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({ setActive, children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);


  return (

    <nav className={`mt-5 md:mx-auto z-30 rounded-[3rem] lg:rounded-full border border-gray-300 shadow-xl shadow-gray-500 px-5 py-2 md:px-2 md:py-2 w-fit
      ${isMobileMenuOpen ? "bg-white" : "bg-white"}
    `}>
      <div className="flex flex-wrap md:flex-nowrap items-center justify-between w-auto gap-15 sm:gap-50 md:gap-70 lg:gap-20">
        {/* Logo Placeholder */}
        <div className="flex items-start justify-start">
          <div className="text-xl font-bold">
            <Logo />
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex font-semibold items-center justify-center gap-6">
          {children}
        </div>

        {/* Start Button + Hamburger */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:block">
            <Link to="/">
              <div className="group inline-block transition-all duration-300">
                <button className="text-white font-bold text-lg px-3 py-2 rounded-full bg-gradient-to-r from-blue-500 via-blue-700 to-black 
      transition-all duration-300 ease-in-out 
      group-hover:shadow-xl group-hover:opacity-95 
      hover:bg-gradient-to-r hover:from-black hover:via-blue-500 hover:to-blue-700">
                  Get Started
                </button>
              </div>
            </Link>
          </div>

          {/* Mobile Icon */}
          <div className="block  lg:hidden">

            <motion.button
              whileTap={{ y: 0.1 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-black flex items-center justify-center focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <HiX size={35} /> : <HiMenu size={35} />}
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence initial={false}>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0, y: -5 }}
            animate={{ opacity: 1, scale: 1, y: 5 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            exit={{ opacity: 0, scale: 0, y: 0 }}
            className="absolute top-full right-10 left-10 z-40 mt-2 backdrop-blur-lg bg-blue-200/35 rounded-xl shadow-xl p-4 flex flex-col gap-4 lg:hidden transition-all duration-700 ease-in-out"
          >

            {React.Children.map(children, (child, index) => {
              // If child has a submenu prop (array of links), show a toggle button for dropdown
              if (child?.props?.submenu) {
                const isOpen = index === activeDropdown;
                return (
                  <div key={index}>
                    <button
                      onClick={() => setActiveDropdown(isOpen ? null : index)}
                      className="flex justify-between items-center w-full text-lg md:text-2xl text-left font-medium rounded-md"
                      aria-expanded={isOpen}
                    >
                      {child.props.label || child.props.item || "Menu"}
                      <span className="text-2xl" >{isOpen ? <FiChevronDown /> : <FiChevronUp />}</span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="dropdown"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="pl-6 mt-2 flex flex-col gap-2 overflow-hidden"
                        >
                          {child.props.submenu.map((item, idx) => (
                            <Link
                              key={idx}
                              to={item.href}
                              className="text-md md:text-xl text-black hover:underline hover:text-blue-500"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </div>
                );
              }

              // Regular nav item (no submenu)
              return <div key={index} className="text-2xl font-medium text-black"  >{child}</div>;
            })}

            {/* Start Now Button for mobile */}
            <div className="flex items-center justify-center" >
              <Link to="/">
                <div className="group inline-block transition-all duration-300">
                  <button className="text-white font-bold text-lg md:text-xl px-3 py-2 rounded-full bg-gradient-to-r from-blue-500 via-blue-700 to-black 
                     transition-all duration-300 ease-in-out 
                     group-hover:shadow-xl group-hover:scale-105 group-hover:opacity-95 
                     hover:bg-gradient-to-r hover:from-black hover:via-blue-500 hover:to-blue-700">
                    Get Started
                  </button>
                </div>
              </Link>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
};

export const ProductItem = ({ title, description, href, src }) => {
  return (
    <a href={href} className="flex space-x-2">
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black ">
          {title}
        </h4>
        <p className="text-gray-700 text-sm max-w-[10rem]">
          {description}
        </p>
      </div>
    </a>
  );
};


export const HoveredLink = ({ children, ...rest }) => {
  return (
    <a
      {...rest}
      className="text-black  hover:text-blue-800"
    >
      {children}
    </a>
  );
};


export const DirectNavigate = ({ route, RouteName }) => {
  return (
    <Link
      className="text-lg md:text-xl text-black hover:text-blue-800"
      to={route}
    >
      {RouteName}
    </Link>
  )
}