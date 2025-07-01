// CustomDropdown.jsx
import React, { useState, useRef, useEffect } from 'react';


const CustomDropdown = ({ options = [], selected, icon: Icon , setSelected, placeholder = "Select an option" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
        
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between px-3 py-3 border border-gray-300 rounded-lg bg-white text-sm text-gray-700 cursor-pointer" >
            
        <div className="flex space-x-2">
            <Icon className='text-gray-500 text-xl'/>      
            <span>{selected !== "" ? options[selected]?.name || options[selected] : placeholder}</span>
        </div>

        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {isOpen && (
        <div className="absolute z-50 mt-2 w-full max-h-48 overflow-y-auto bg-white border border-gray-300 rounded-lg shadow-lg">
            
          {options.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setSelected(index);
                setIsOpen(false);
              }}
              className={`px-4 py-2 text-sm hover:bg-blue-100 cursor-pointer ${
                selected === index ? "bg-blue-100 font-semibold" : ""
              }`}
            >
              {item.name || item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
