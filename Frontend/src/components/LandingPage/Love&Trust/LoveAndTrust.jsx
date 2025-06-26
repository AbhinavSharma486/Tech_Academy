import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import qi from "/src/assets/qi.jpg";

const stats = [
  { value: "50.3K+", label: "Followers" },
  { value: "93%", label: "Placement Rate" },
  { value: "4.9+", label: "Course Rating" },
  { value: "30+", label: "Hiring Partners" },
  { value: "5K+", label: "Learners" },
];

export const LoveAndTrust = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getIndexes = () => {
    const len = stats.length;
    return [
      (index - 2 + len) % len,
      (index - 1 + len) % len,
      index,
      (index + 1) % len,
      (index + 2) % len,
    ];
  };

  return (
    <div className="w-full bg-gradient-to-r from-[#0B1E5B] to-[#0F3BAA] py-16 px-4 flex flex-col items-center">

      {/* Heading */}
      <div className="text-center mb-12">
        <div className="inline-block">
          <h2 className="text-4xl md:text-5xl font-bold text-white inline-block">
            <span className="bg-white text-[#071952] px-5 py-1 rounded-md shadow">
              Love
            </span>{" "}
            And Trust
          </h2>
          <div className="h-[4px] w-full mt-4 rounded-full bg-gradient-to-r from-transparent via-white to-transparent" />
        </div>
      </div>


      {/* Main Layout */}
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-20 w-full max-w-6xl mx-auto">

        {/* Left Card */}
        <div className="bg-white p-6 rounded-2xl shadow-xl max-w-md w-full">
          <img src={qi} alt="TechAcademy" className="mb-4 rounded-lg w-full h-auto object-cover" />
          <h3 className="text-xl font-semibold mb-2 text-[#071952]">TechAcademy —</h3>
          <p className="text-gray-700 text-sm">
            Empowering Learners To Build Their Tech Careers With Industry-Oriented Training.
          </p>
          <p className="text-gray-700 text-sm mt-1">
            Bridging The Gap Between Education And Employment With Practical Skill Development.
          </p>

        </div>

        {/* Glowy Boxes - Only visible from md screen and up */}
        <div className="hidden md:flex flex-col gap-4 w-full max-w-xs h-[520px] overflow-hidden relative">
          <motion.div
            key={index}
            initial={{ y: 40 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex flex-col absolute top-0 left-0 w-full gap-4"
          >
            {getIndexes().map((i, idx) => {
              const isMiddle = idx === 2;

              return (
                <motion.div
                  key={i}
                  initial={{ height: 80 }}
                  animate={{
                    height: isMiddle ? 110 : 80,
                    scale: isMiddle ? 1.05 : 1,
                    opacity: isMiddle ? 1 : 0.4,
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className={`bg-gradient-to-r from-[#1836a8] to-[#1649bf]
        rounded-2xl shadow-lg text-white text-center 
        backdrop-blur-md w-full px-4 flex items-center justify-center`}
                >
                  {isMiddle && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="text-3xl font-bold">{stats[i].value}</div>
                      <div className="text-sm mt-1">{stats[i].label}</div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};