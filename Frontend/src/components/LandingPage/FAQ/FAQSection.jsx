import React, { useState } from "react";
import FAQItem from "./FAQItem";
import {
  BookOpenIcon,
  LightBulbIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

const data = {
  Courses: [
    {
      question: "What types of courses are available?",
      answer:
        "Ten Tech offers a variety of learning formats including Offline Classroom Courses, Live Online Classes, and Self-Paced Programs...",
    },
    {
      question: "What is the fee for Ten Tech courses?",
      answer: "Course fees vary depending on the format and duration...",
    },
    {
      question:
        "Can I switch between different learning modes after enrollment?",
      answer: "Yes, students can request a mode switch...",
    },
    {
      question: "Are there any prerequisites for the courses?",
      answer: "Most courses are beginner-friendly...",
    },
    {
      question: "How long do the courses last?",
      answer: "Course duration varies; check specific course details.",
    },
    {
      question: "What is the course curriculum?",
      answer:
        "The curriculum includes coding, data structures, and algorithms.",
    },
    {
      question: "Are there any live sessions in the courses?",
      answer: "Yes, live sessions are included in online courses.",
    },
  ],
  Learning: [
    {
      question: "How are offline and online courses different?",
      answer: "Offline courses involve in-person sessions...",
    },
    {
      question: "What study materials and resources will I get access to?",
      answer: "Students receive structured notes, video lectures...",
    },
    {
      question: "Is there mentor support for doubt resolution?",
      answer: "Yes, mentor support is available...",
    },
    {
      question: "How do I access the course materials?",
      answer: "Materials are accessible through our platform.",
    },
    {
      question: "Are there any assessments or quizzes?",
      answer: "Yes, assessments and quizzes are included.",
    },
    {
      question: "Can I learn at my own pace?",
      answer: "Yes, self-paced courses are available.",
    },
  ],
  Placements: [
    {
      question: "Is placement guaranteed?",
      answer: "Placements depend on performance and eligibility.",
    },
    {
      question: "What kind of companies hire from Ten Tech?",
      answer: "Top tech companies and startups hire from Ten Tech.",
    },
    {
      question: "How does the placement process work?",
      answer: "The process includes assessments, interviews...",
    },
    {
      question: "What is the average salary of placed students?",
      answer: "Average salary varies; check our placement statistics.",
    },
    {
      question: "Do you provide resume building and interview preparation?",
      answer: "Yes, we offer resume building and mock interview prep.",
    },
    {
      question: "Can I get placement assistance after course completion?",
      answer: "Yes, we support placements even after course completion.",
    },
  ],
};


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, 
      delayChildren: 0.1, 
    },
  },
  exit: {
    opacity: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1, 
      staggerDirection: -1,
      duration: 0.4, 
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -50 }, 
  visible: {
    opacity: 1,
    y: 0, 
    transition: {
      duration: 0.8, 
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -20, 
    transition: {
      duration: 0.5, 
      ease: "easeIn",
    },
  },
};

const FAQSection = () => {
  const [activeTab, setActiveTab] = useState("Courses");
  const [openIndex, setOpenIndex] = useState(null);
  const tabs = Object.keys(data);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const iconMap = {
    Courses: BookOpenIcon,
    Learning: LightBulbIcon,
    Placements: BriefcaseIcon,
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-inner sm:px-6 md:px-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-8 mb-10">
        <div className="px-4 sm:px-6 md:px-0">
          <span className="inline-block text-xs md:text-sm text-white bg-gradient-to-r from-blue-600 to-cyan-400 px-4 py-2 rounded-full mb-4 shadow-sm">
            Have any doubts?
          </span>
          <h1 className="text-center md:text-left text-[2.7rem] sm:text-5xl font-bold text-gray-800 mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-sky-400 to-cyan-400 bg-clip-text text-transparent">
              Frequently
            </span>{" "}
            Asked Questions
          </h1>
          <p className="text-center md:text-left text-gray-600 max-w-2xl mx-auto mb-10 font-sans">
            Work hard with us, with dedication and commitment, and watch
            multiple opportunities grab you and transform your future!
          </p>
        </div>

        <img
          src="/src/assets/z.svg"
          alt="FAQ Illustration"
          className=" hidden md:block w-56 sm:w-64 md:w-80 lg:w-96 xl:w-[24rem] max-w-full h-auto"
          loading="lazy"
        />
      </div>

      {/* Mobile Buttons */}
      <div className=" md:hidden flex-wrap justify-center gap-3 mb-8 flex">
        {tabs.map((tab) => {
          const Icon = iconMap[tab];
          return (
            <motion.button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setOpenIndex(null);
              }}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border flex items-center ${activeTab === tab
                ? "bg-blue-500 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-blue-100"
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon
                className={`w-5 h-5 mr-2 ${activeTab === tab ? "text-white" : "text-gray-700"
                  }`}
              />
              {tab}
            </motion.button>
          );
        })}
      </div>

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row gap-10">
        {/* Sidebar Tabs */}
        <div className="hidden md:block md:w-1/4">
          <div className="bg-white shadow-md rounded-xl p-4 space-y-3">
            {tabs.map((tab) => {
              const Icon = iconMap[tab];
              return (
                <motion.button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setOpenIndex(null);
                  }}
                  className={`w-full flex items-center gap-2 text-left px-4 py-2 rounded-lg font-medium transition-all duration-200 ${activeTab === tab
                    ? "bg-blue-500 text-white shadow border-l-4 border-blue-700"
                    : "bg-gray-50 text-gray-800 hover:bg-blue-100"
                    }`}
                  whileHover={{ x: 5 }}
                >
                  <Icon
                    className={`w-5 h-5 ${activeTab === tab ? "text-white" : "text-gray-700"
                      }`}
                  />
                  {tab}
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* FAQ Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={containerVariants}
            className="md:w-3/4 w-full"
          >
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center rounded-full mr-3">
                {React.createElement(iconMap[activeTab], {
                  className: "w-4 h-4 text-white",
                })}
              </div>
              <h2 className="text-2xl font-semibold text-gray-700">
                {activeTab} FAQs
              </h2>
            </div>


            <div className="space-y-4">
              {(data[activeTab] || []).map((item, index) => (
                <FAQItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openIndex === index}
                  onToggle={() => handleToggle(index)}
                  variants={itemVariants}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default FAQSection;