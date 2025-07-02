import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-10 ">
            {/* FAQ Header */}
            <div className="text-center mb-10">
                <span className="block text-blue-600 font-semibold uppercase text-sm">Have Any Doubts?</span>
                <p className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-800 via-purple-600 to-blue-500 bg-clip-text text-transparent">
                    Frequently Asked Questions
                </p>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
                {DataScienceAIFaq.map((item, index) => (
                    <div
                        key={index}
                        className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm "
                    >
                        <div
                            onClick={() => toggleFaq(index)}
                            className="flex justify-between items-center cursor-pointer"
                        >
                            <h3 className="text-lg font-medium text-gray-800">{item.heading}</h3>
                            <motion.div
                                animate={{ rotate: openIndex === index ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                className='p-2'
                            >
                                <FaChevronDown className="text-gray-500" />
                            </motion.div>
                        </div>

                        <AnimatePresence initial={false}>
                            {openIndex === index && (
                                <motion.div
                                    key="content"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <p className="mt-3 text-gray-600 text-sm">{item.desc}</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default Faq;


const DataScienceAIFaq = [
  {
    heading: "What is the duration of the Data Science & AI course?",
    desc: "The course spans approximately 20 to 24 weeks, depending on your chosen learning track and personal pace."
  },
  {
    heading: "Do I need prior technical or coding experience to join?",
    desc: "No prior experience is needed. We start from the basics of programming, statistics, and gradually build up to advanced AI and ML concepts."
  },
  {
    heading: "Is this course suitable for beginners?",
    desc: "Yes. The course is beginner-friendly and includes step-by-step guidance, real-world datasets, and practical assignments."
  },
  {
    heading: "Will I get placement or job assistance after completion?",
    desc: "Yes. We offer dedicated placement support including resume reviews, interview preparation, and connections with hiring partners in the data science industry."
  },
  {
    heading: "What kind of projects will I work on?",
    desc: "You'll work on hands-on projects such as data analysis dashboards, machine learning models, predictive analytics, and AI chatbot development."
  },
  {
    heading: "Do I get a certificate after completing the course?",
    desc: "Yes. You'll receive a course completion certificate that is recognized by industry partners after successfully finishing all modules and the capstone project."
  }
];
