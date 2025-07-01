"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "../../../assets/Logo/Logo";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from 'react-icons/hi';
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

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
        if (window.leaveTimeout) {
          clearTimeout(window.leaveTimeout);
        }
        setActive(item);
      }}
      onMouseLeave={() => {
        window.leaveTimeout = setTimeout(() => setActive(null), 300);
      }}
      className="relative flex items-center gap-1 cursor-pointer"
    >
      <motion.p
        className="flex items-center text-xl text-black hover:text-blue-800 transition-colors duration-300"
      >
        {item}
        {hasDropdown &&
          (isOpen ? (
            <FiChevronUp className="ml-1 mt-0.5 text-lg" />
          ) : (
            <FiChevronDown className="ml-1 mt-0.5 text-lg" />
          ))}
      </motion.p>

      {/* Desktop Dropdown */}
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

export const Menu = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);


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
            <Link to="/login">
              <div className="group inline-block transition-all duration-300">
                <button className="text-white font-bold text-lg px-3 py-2 rounded-full bg-gradient-to-r from-blue-500 via-blue-700 to-black
      transition-all duration-300 ease-in-out
      group-hover:shadow-xl group-hover:opacity-95
      hover:bg-gradient-to-r hover:from-black hover:via-blue-500 hover:to-blue-700 cursor-pointer">
                  Get Started
                </button>
              </div>
            </Link>
          </div>

          {/* Mobile Icon */}
          <div className="block lg:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full right-10 left-10 z-40 mt-2 backdrop-blur-lg bg-blue-200/35 rounded-xl shadow-xl p-4 flex flex-col gap-4 lg:hidden overflow-hidden"
          >
            {/* Iterating over children for mobile menu */}
            {React.Children.map(children, (child, index) => {
              if (!React.isValidElement(child) || !child.props) {
                return null;
              }
              if (child.props.hasDropdown && child.props.submenu) {
                const isOpen = index === activeDropdown;
                return (
                  <div key={index} className="w-full">
                    <button
                      onClick={() => setActiveDropdown(isOpen ? null : index)}
                      className="flex justify-between items-center w-full text-lg md:text-xl text-left font-medium rounded-md py-2 px-2 hover:bg-blue-100 transition-colors duration-200"
                      aria-expanded={isOpen}
                    >
                      {child.props.item || "Menu"}
                      <span className="text-xl">
                        {isOpen ? <FiChevronUp /> : <FiChevronDown />}
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="dropdown-mobile"
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
                              className="text-md md:text-lg text-black hover:underline hover:text-blue-500 py-1"
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setActiveDropdown(null);
                              }}
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

              if (child.type === DirectNavigate) {
                return (
                  <Link
                    key={index}
                    to={child.props.route}
                    className="text-lg md:text-xl text-black font-medium block py-2 px-2 hover:bg-blue-100 transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {child.props.RouteName}
                  </Link>
                );
              }

              if (child.props.item && !child.props.hasDropdown) {
                return (
                  <Link
                    key={index}
                    to={`/${child.props.item.toLowerCase().replace(/\s/g, '-')}`}
                    className="text-lg md:text-xl text-black font-medium block py-2 px-2 hover:bg-blue-100 transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {child.props.item}
                  </Link>
                );
              }
              return null;
            })}

            {/* Start Now Button for mobile */}
            <div className="flex items-center justify-center mt-4">
              <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
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
    <Link to={href} className="flex space-x-2 group">
      <div className="w-[140px] h-[70px] shrink-0 rounded-md shadow-2xl overflow-hidden">
        <img
          src={src}
          alt={title}
          className="w-full h-full object-contain"
        />
      </div>
      <div>
        <h4 className="text-xl font-bold mb-1 text-black group-hover:text-blue-700 transition-colors duration-200">
          {title}
        </h4>
        <p className="text-gray-700 text-sm max-w-[10rem]">
          {description}
        </p>
      </div>
    </Link>
  );
};


export const HoveredLink = ({ children, ...rest }) => {
  return (
    <Link
      {...rest}
      to={rest.href}
      className="text-black hover:text-blue-800 transition-colors duration-200"
    >
      {children}
    </Link>
  );
};

export const DirectNavigate = ({ route, RouteName }) => {
  return (
    <Link
      className="text-lg md:text-xl text-black hover:text-blue-800 transition-colors duration-200"
      to={route}
    >
      {RouteName}
    </Link>
  );
};