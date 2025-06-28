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
                {MernCourseFaq.map((item, index) => (
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


const MernCourseFaq = [
    {
        heading: "What is the duration of the MERN Stack course?",
        desc: "The course lasts approximately 16 to 24 weeks, depending on your chosen learning pace (regular or accelerated)."
    },
    {
        heading: "Do I need prior coding experience to join?",
        desc: "No prior coding experience is required. The course starts from the basics and gradually builds up to advanced full-stack development."
    },
    {
        heading: "Is this course beginner-friendly?",
        desc: "Absolutely. The course is designed for beginners, with step-by-step lessons, hands-on projects, and mentor support throughout."
    },
    {
        heading: "Will I get placement support after completing the course?",
        desc: "Yes. Our career support includes resume building, mock interviews, and connections with hiring partners to help you land your first tech job."
    },
    {
        heading: "What kind of projects will I build?",
        desc: "You’ll build real-world applications like a social media app, e-commerce site, and a job portal using the full MERN stack."
    },
    {
        heading: "Is there a certificate provided after completion?",
        desc: "Yes, you'll receive an industry-recognized certificate after successfully completing all modules and the final capstone project."
    }
];
