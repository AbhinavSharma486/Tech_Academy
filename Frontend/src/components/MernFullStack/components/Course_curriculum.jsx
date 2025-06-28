import React, { useEffect, useState } from 'react'
import { FaChevronDown, FaArrowRight } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';


const Course_curriculum = () => {

    const [activeIndex, setActiveIndex] = useState(null);
    const [index, setIndex] = useState(0);

    // toggle cource module section
    const toggleSection = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    // word switching 
    useEffect(() => {
        const cycle = setInterval(() => {
            setIndex((prev) => (prev + 1) % sentences.length);
        }, 2000);

        return () => clearInterval(cycle);
    }, [sentences.length]);



    return (
        <>

            <div className="flex flex-col xl:flex-row items-center justify-evenly mt-10 gap-10 px-4">
                {/* Left Text Content */}
                <div className="flex flex-col items-start justify-center max-w-2xl">
                    <span className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-800 via-purple-600 to-blue-500 bg-clip-text text-transparent">
                        Instructor & Mentors Invested in Your Success
                    </span>

                    <div className="flex flex-col mt-4">
                        <span className="text-3xl sm:text-3xl lg:text-4xl font-semibold mb-3">
                            Learn From The Best
                        </span>
                        <p className="text-base sm:text-lg lg:text-xl text-gray-500">
                            Learn from the Top 1% of the tech industry—exceptional professionals from top MNCs who have not only taught thousands but transformed their careers.
                        </p>
                    </div>
                </div>

                {/* Right Animated Section */}
                <div className="flex items-center relative ">
                    <div className="flex items-center justify-center gap-10">
                        <span className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-800 via-purple-600 to-blue-500 bg-clip-text text-transparent">
                            Expert
                        </span>
                        <FaArrowRight className="text-blue-600 text-2xl mt-2" />
                    </div>

                    <div className="relative w-60 sm:w-70 h-12 flex items-center justify-center text-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="absolute w-auto text-blue-500 text-2xl sm:text-3xl font-semibold px-4"
                            >
                                {sentences[index]}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>


            <div className=' mt-10'>
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <div className='flex items-center justify-center flex-col p-5 ' >
                        <span className="text-xl sm:text-lg md:text-md lg:text-3xl font-bold bg-gradient-to-r from-blue-800 via-purple-600 to-blue-500 bg-clip-text text-transparent">
                            Course Curriculum
                        </span>
                        <div className='flex items-start justify-start md:items-center md:justify-center flex-col mt-5' >
                            <p className='text-3xl sm:text-xl md:text-2xl lg:text-4xl font-semibold' >In Depth Syllabus to make you Industry Ready with </p>
                            <span className="text-3xl sm:text-xl md:text-2xl lg:text-4xl font-bold bg-blue-500 my-2 bg-clip-text text-transparent">
                                Hands on Implementation
                            </span>
                        </div>
                    </div>
                </motion.section>
            </div>
            <div>
                <div className="">
                    <div className="max-w-[80%] mx-auto bg-white rounded my-10">
                        {mernCourse.map((section, index) => (
                            <div
                                key={index}
                                className={`border-b-2 px-3 py-1 transition-all duration-300 ${activeIndex === index ? 'border-green-500 border-b-4' : 'border-blue-500'
                                    }`}
                            >
                                <button
                                    onClick={() => toggleSection(index)}
                                    className="w-full flex justify-between items-center py-2 text-left cursor-pointer"
                                >
                                    <div>
                                        <p className="text-sm text-gray-500">{section.module}</p>
                                        <h3 className="text-lg font-semibold">{section.title}</h3>
                                    </div>
                                    <motion.div
                                        animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <FaChevronDown className="text-gray-500" />
                                    </motion.div>
                                </button>

                                <AnimatePresence initial={false}>
                                    {activeIndex === index && (
                                        <motion.div
                                            key="content"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            {section.data.map((info, i) => (
                                                <div key={i} className="mb-5 pl-5 md:pl-10">
                                                    <h4 className="font-medium text-md mt-2">{info.heading}</h4>
                                                    <p className="text-sm text-gray-600 mb-2">{info.desc}</p>
                                                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                                                        {info.topics.map((topicItem, j) => (
                                                            <li key={j}>
                                                                <strong className="text-blue-700">{topicItem.heading}:</strong> {topicItem.topic}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </>
    )
}

export default Course_curriculum;



const mernCourse = [
    {
        module: 'Module 1',
        title: 'Fundamentals of Programming and Aptitude',
        data: [
            {
                heading: 'What you’ll learn 📚',
                desc: 'This module is designed to introduce you to programming basics and logic.',
                topics: [
                    { heading: 'Week 1', topic: 'Hello World, Variables & Data Types, Taking Input, Conditionals and Loops' },
                    { heading: 'Week 2', topic: 'Functions, Arrays, Strings, and Problem Solving' },
                ],
            },
        ],
    },
    {
        module: 'Module 2',
        title: 'Web Basics – HTML, CSS & Git',
        data: [
            {
                heading: 'What you’ll learn 🌐',
                desc: 'This module covers front-end structure and styling along with version control.',
                topics: [
                    { heading: 'Week 1', topic: 'HTML Tags, Forms, Semantic HTML' },
                    { heading: 'Week 2', topic: 'CSS Selectors, Flexbox, Grid, Git Basics' },
                ],
            },
        ],
    },
    {
        module: 'Module 3',
        title: 'JavaScript Programming',
        data: [
            {
                heading: 'What you’ll learn ⚙️',
                desc: 'Master client-side scripting with modern JavaScript.',
                topics: [
                    { heading: 'Week 1', topic: 'Variables, Functions, Objects, Arrays' },
                    { heading: 'Week 2', topic: 'DOM Manipulation, Events, Async JS' },
                ],
            },
        ],
    },
    {
        module: 'Module 4',
        title: 'Advanced JavaScript & ES6+',
        data: [
            {
                heading: 'What you’ll learn 🚀',
                desc: 'Deep dive into modern JavaScript including ES6+, promises, and more.',
                topics: [
                    { heading: 'Week 1', topic: 'Arrow Functions, Destructuring, Spread/Rest' },
                    { heading: 'Week 2', topic: 'Async/Await, Modules, Classes, Fetch API' },
                ],
            },
        ],
    },
    {
        module: 'Module 5',
        title: 'React.js Essentials',
        data: [
            {
                heading: 'What you’ll learn ⚛️',
                desc: 'Learn how to build reactive interfaces with React.',
                topics: [
                    { heading: 'Week 1', topic: 'Components, Props, State, Events' },
                    { heading: 'Week 2', topic: 'Hooks (useState, useEffect), Conditional Rendering' },
                ],
            },
        ],
    },
    {
        module: 'Module 6',
        title: 'Node.js and Express.js',
        data: [
            {
                heading: 'What you’ll learn 🔧',
                desc: 'Understand backend architecture with Node and Express.',
                topics: [
                    { heading: 'Week 1', topic: 'Node Basics, File System, NPM' },
                    { heading: 'Week 2', topic: 'Express Routing, Middleware, REST API' },
                ],
            },
        ],
    },
    {
        module: 'Module 7',
        title: 'MongoDB & Mongoose',
        data: [
            {
                heading: 'What you’ll learn 🗄️',
                desc: 'Learn to work with NoSQL databases and ORM with Mongoose.',
                topics: [
                    { heading: 'Week 1', topic: 'Collections, Documents, CRUD with MongoDB' },
                    { heading: 'Week 2', topic: 'Mongoose Schemas, Models, Validation' },
                ],
            },
        ],
    },
    {
        module: 'Module 8',
        title: 'MERN Full Stack Project',
        data: [
            {
                heading: 'What you’ll learn 💼',
                desc: 'Apply everything in a full-stack capstone project.',
                topics: [
                    { heading: 'Week 1', topic: 'Frontend + Backend Integration' },
                    { heading: 'Week 2', topic: 'Deployment & Hosting' },
                ],
            },
        ],
    },
];




const sentences = [
    "MERN Stack",
    "Frontend Mastery",
    "Backend Skills",
    "Database Design",
    "Full-Stack Power"
];
