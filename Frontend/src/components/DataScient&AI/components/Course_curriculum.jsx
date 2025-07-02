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

                    <div className="relative w-35 sm:w-70 h-12 flex items-center justify-center text-center">
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
    title: 'Microsoft Excel: Beginner to Advanced',
    data: [
      {
        heading: 'What you’ll learn 📚',
        desc: 'Build strong foundations in Excel for data analysis, including formulas, charts, data cleaning, and dashboard creation.',
        topics: [
          { heading: 'Week 1', topic: 'Introduction to Excel, Basic & Arithmetic Functions' },
          { heading: 'Week 2', topic: 'Logical Functions, Charts & Lookup Functions' },
          { heading: 'Week 3', topic: 'Pivot Tables & Techniques, Data Cleaning' },
          { heading: 'Week 4', topic: 'Data Validation & Data Cleaning Techniques' },
          { heading: 'Week 5', topic: 'Exploratory Data Analysis (EDA)' },
          { heading: 'Week 6', topic: 'Making Dashboards in Excel, Interview Questions' },
        ],
      },
    ],
  },
  {
    module: 'Module 2',
    title: 'SQL: Beginner to Advanced',
    data: [
      {
        heading: 'What you’ll learn 🌐',
        desc: 'Gain expertise in writing SQL queries, managing databases, and extracting insights using advanced SQL functions.',
        topics: [
          { heading: 'Week 1', topic: 'Introduction to SQL, RDBMS, SQL Servers, Data Storages & Normalisation' },
          { heading: 'Week 2', topic: 'Basic Data Types and SQL Queries & Commands' },
          { heading: 'Week 3', topic: 'Logical Functions, Aggregate Functions, Joins' },
          { heading: 'Week 4', topic: 'Union & Nested Queries' },
          { heading: 'Week 5', topic: 'Window Functions and Partition Functions' },
        ],
      },
    ],
  },
  {
    module: 'Module 3',
    title: 'Microsoft Power BI: Beginner to Advanced',
    data: [
      {
        heading: 'What you’ll learn ⚙️',
        desc: 'Learn to build interactive dashboards and visualize data insights using Power BI with DAX and advanced charts.',
        topics: [
          { heading: 'Week 1', topic: 'Introduction to Business Intelligence, Data Connections, Power Query' },
          { heading: 'Week 2', topic: 'Data Modelling & Data Visualization' },
          { heading: 'Week 3', topic: 'Introduction to DAX Functions & Measures' },
          { heading: 'Week 4', topic: 'Advanced Visualization Topics, Building Dashboards' },
        ],
      },
    ],
  },
  {
    module: 'Module 4',
    title: 'Python Programming: Beginner to Advanced',
    data: [
      {
        heading: 'What you’ll learn 🚀',
        desc: 'Start programming with Python and build data-centric applications using libraries like NumPy and Pandas.',
        topics: [
          { heading: 'Week 1', topic: 'Python Basics, Print, Data Types, Flowcharts, Conditionals, Loops' },
          { heading: 'Week 2', topic: 'String, Lists, Sets, Tuples, Dictionary, Arrays' },
          { heading: 'Week 3', topic: 'Functions, Problem Solving, Lambda, OOP (Object Oriented Programming)' },
          { heading: 'Week 4', topic: 'NumPy, Pandas, Data Exploration and Manipulation' },
        ],
      },
    ],
  },
  {
    module: 'Module 5',
    title: 'Introduction to Machine Learning',
    data: [
      {
        heading: 'What you’ll learn ⚛️',
        desc: 'Understand ML models like regression and classification and implement them with real-world datasets.',
        topics: [
          { heading: 'Week 1', topic: 'Introduction to ML Concepts, Regression, Classification, Clustering, Linear Regression' },
          { heading: 'Week 2', topic: 'Logistic Regression and Clustering Algorithms' },
          { heading: 'Week 3', topic: 'Unsupervised Learning, Clustering Applications, Random Forests, Trees' },
          { heading: 'Week 4', topic: 'EDA and ML Projects, Data Visualizations' },
        ],
      },
    ],
  },
  {
    module: 'Module 6',
    title: 'Introduction to Generative AI',
    data: [
      {
        heading: 'What you’ll learn 🔧',
        desc: 'Explore cutting-edge Generative AI techniques including LLMs, Prompt Engineering, and chatbot deployment.',
        topics: [
          { heading: 'Week 1', topic: 'Basics and Applications of Generative AI, Challenges, Fundamentals of LLMs' },
          { heading: 'Week 2', topic: 'Prompt Engineering: Basics to Advanced, Techniques, Customizing LLMs' },
          { heading: 'Week 3', topic: 'Applications of LLMs, Data Science Use Cases of Prompt Engineering' },
          { heading: 'Week 4', topic: 'Building the Chatbot Backend, Frontend Integration, Deploying Chatbot' },
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
