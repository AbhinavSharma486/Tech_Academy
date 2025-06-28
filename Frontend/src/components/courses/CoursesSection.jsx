import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import javaFullPng from '../../assets/courses/java full.png';
import analyticsPng from '../../assets/courses/data a.png';
import datasciencePng from '../../assets/courses/data sci.png';
import mernPng from '../../assets/courses/mern.png';
import { motion, AnimatePresence } from 'framer-motion';

const deliveryModes = [
  { key: 'live', label: 'Live Online Courses' },
  { key: 'self', label: 'Self Paced Courses' },
];

const courses = [
  {
    key: 'fullstack',
    label: 'Full Stack Development',
    icon: null,
    programs: [
      {
        title: 'JAVA- Full Stack Development With Gen AI',
        duration: '8 MONTHS',
        icons: ['☕', '🗄️', '🐍'],
        link: '/JavaFullStack',
        image: javaFullPng,
        mode: 'live',
      },
      {
        title: 'JAVA- Full Stack (Self Paced)',
        duration: '8 MONTHS',
        icons: ['☕', '🗄️', '🐍'],
        link: '/JavaFullStack',
        image: javaFullPng,
        mode: 'self',
      },
    ],
  },
  {
    key: 'analytics',
    label: 'Data Analytics',
    icon: null,
    programs: [
      {
        title: 'Data Analytics Course',
        duration: '6 MONTHS',
        icons: ['📊', '🐍'],
        link: '/data-analytics',
        image: analyticsPng,
        mode: 'live',
      },
      {
        title: 'Data Analytics (Self Paced)',
        duration: '6 MONTHS',
        icons: ['📊', '🐍'],
        link: '/data-analytics',
        image: analyticsPng,
        mode: 'self',
      },
    ],
  },
  {
    key: 'datascience',
    label: 'Data Science & AI',
    icon: null,
    programs: [
      {
        title: 'Data Science & AI Course',
        duration: '8 MONTHS',
        icons: ['🤖', '🐍'],
        link: '/data-science',
        image: datasciencePng,
        mode: 'live',
      },
      {
        title: 'Data Science & AI (Self Paced)',
        duration: '8 MONTHS',
        icons: ['🤖', '🐍'],
        link: '/data-science',
        image: datasciencePng,
        mode: 'self',
      },
    ],
  },
  {
    key: 'mern',
    label: 'MERN Stack',
    icon: null,
    programs: [
      {
        title: 'MERN- Full Stack Development With Gen AI',
        duration: '8 MONTHS',
        icons: ['🟩', '⚛️', '🟨', '🟩'],
        link: '/mern-stack',
        image: mernPng,
        mode: 'live',
      },
    ],
  },
];

const CoursesSection = () => {
  const [activeMode, setActiveMode] = useState('live');
  // Tabs for each mode
  const liveTabs = [
    { key: 'fullstack', label: 'Full Stack Development' },
    { key: 'analytics', label: 'Data Analytics' },
    { key: 'datascience', label: 'Data Science & AI' },
  ];
  const selfTabs = [
    { key: 'javafull', label: 'JAVA- Full Stack Development With Gen AI' },
    { key: 'mernfull', label: 'MERN- Full Stack Development With Gen AI' },
  ];

  // Data for each tab in each mode
  const liveCourses = {
    fullstack: [
      {
        title: 'JAVA- Full Stack Development With Gen AI',
        duration: '8 MONTHS',
        icons: ['☕', '🗄️', '🐍'],
        link: '/JavaFullStack',
        image: javaFullPng,
      },
      {
        title: 'MERN- Full Stack Development With Gen AI',
        duration: '8 MONTHS',
        icons: ['🟩', '⚛️', '🟨', '🟩'],
        link: '/mern-stack',
        image: mernPng,
      },
    ],
    analytics: [
      {
        title: 'Data Analytics Course',
        duration: '6 MONTHS',
        icons: ['📊', '🐍'],
        link: '/data-analytics',
        image: analyticsPng,
      },
    ],
    datascience: [
      {
        title: 'Data Science & AI Course',
        duration: '8 MONTHS',
        icons: ['🤖', '🐍'],
        link: '/data-science',
        image: datasciencePng,
      },
    ],
  };
  const selfCourses = {
    javafull: [
      {
        title: 'JAVA- Full Stack Development With Gen AI',
        duration: '8 MONTHS',
        icons: ['☕', '🗄️', '🐍'],
        link: '/JavaFullStack',
        image: javaFullPng,
      },
    ],
    mernfull: [
      {
        title: 'MERN- Full Stack Development With Gen AI',
        duration: '8 MONTHS',
        icons: ['🟩', '⚛️', '🟨', '🟩'],
        link: '/mern-stack',
        image: mernPng,
      },
    ],
  };

  // Set default tab for each mode
  const [activeTab, setActiveTab] = useState('fullstack');
  React.useEffect(() => {
    setActiveTab(activeMode === 'live' ? 'fullstack' : 'javafull');
  }, [activeMode]);

  const tabs = activeMode === 'live' ? liveTabs : selfTabs;
  const programs = activeMode === 'live' ? liveCourses[activeTab] : selfCourses[activeTab];

  const navigate = useNavigate();

  return (
    <section className="w-full bg-[#eaf4ff] py-4 px-1 sm:py-8 sm:px-2 md:px-4">
      <style>{`
@keyframes gradient-move {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
.animated-gradient {
  background: linear-gradient(90deg, #1e3a8a, #60a5fa, #1e3a8a);
  background-size: 200% 200%;
  animation: gradient-move 3s ease-in-out infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}
`}</style>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="w-full px-1 sm:px-4 md:px-10 lg:px-20"
      >
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl pt-2 pb-4 sm:pt-3 sm:pb-6 md:pt-6 md:pb-10 px-2 sm:px-4 md:px-10" style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.10)' }}>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-2 tracking-wide animated-gradient">COURSES</h1>
          <div className="flex justify-center mb-3 sm:mb-4">
            <div className="w-16 sm:w-24 h-1 bg-blue-400 rounded-full"></div>
          </div>
          <h2 className="text-lg sm:text-2xl md:text-4xl font-semibold mb-2 text-center text-black mt-2">
            <span className="bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent font-extrabold">Offline</span>, Live Online and Self Paced courses tailored for you!
          </h2>
          <p className="text-gray-700 mb-6 sm:mb-8 text-center text-xs sm:text-base">Courses and placement assistance with 60+ hiring drives each month to help you land your dream tech job!</p>
          {/* Modern toggle/tab switcher for mode selection */}
          <div className="flex justify-center mb-3 sm:mb-4">
            <div className="flex bg-gray-100 rounded-full px-1 py-1 shadow-sm">
              <button
                className={`px-3 sm:px-6 py-2 rounded-full font-semibold text-xs sm:text-base transition-all duration-200 focus:outline-none ${activeMode === 'live' ? 'bg-blue-500 text-white shadow' : 'bg-transparent text-gray-700'}`}
                onClick={() => setActiveMode('live')}
              >
                Live Online Courses
              </button>
              <button
                className={`px-3 sm:px-6 py-2 rounded-full font-semibold text-xs sm:text-base transition-all duration-200 focus:outline-none ${activeMode === 'self' ? 'bg-blue-500 text-white shadow' : 'bg-transparent text-gray-700'}`}
                onClick={() => setActiveMode('self')}
              >
                Self Paced Courses
              </button>
            </div>
          </div>
          {/* Course type tabs (restored) */}
          <div className="flex gap-2 sm:gap-4 mb-4 justify-center flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                className={`flex items-center gap-2 px-3 sm:px-4 py-1 rounded-full font-semibold border-2 transition text-xs sm:text-base ${
                  activeTab === tab.key
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-blue-700 border-blue-300 hover:bg-blue-50'
                }`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 max-w-full">
              <AnimatePresence mode="wait">
                <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8 w-full">
                  {!programs || programs.length === 0 ? (
                    <motion.div
                      className="col-span-full text-center text-gray-500 py-12 text-xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                    >No courses available for this mode yet.</motion.div>
                  ) : (
                    programs.map((program, idx) => (
                      <motion.div
                        key={program.title}
                        className="bg-white border border-blue-100 rounded-2xl shadow-md flex flex-col items-start w-full max-w-xs sm:max-w-sm min-h-[340px] p-0 overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.96 }}
                        transition={{ duration: 0.4, delay: idx * 0.08 }}
                      >
                        {/* Top banner image */}
                        <img
                          src={program.image}
                          alt={program.title}
                          className="w-full h-24 sm:h-32 object-cover object-center"
                          loading="lazy"
                        />
                        {/* Card content */}
                        <div className="w-full flex flex-col flex-1 p-3 sm:p-4">
                          {/* Title and duration badge */}
                          <div className="flex items-center justify-between w-full mb-2">
                            <h3 className="text-base sm:text-lg font-bold text-gray-900">{program.title}</h3>
                            <span className="flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-xs font-semibold">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                              <span className="text-base font-bold">{program.duration.split(' ')[0]}</span>
                              <span className="text-xs font-semibold tracking-wide uppercase">{program.duration.split(' ')[1]}</span>
                            </span>
                          </div>
                          {/* One-line description for Data Analytics and Data Science */}
                          {program.title.includes('Data Analytics') && (
                            <p className="text-gray-600 text-xs sm:text-sm mb-2">Master Excel, SQL, Python, Power BI & more for real-world analytics.</p>
                          )}
                          {program.title.includes('Data Science') && (
                            <p className="text-gray-600 text-xs sm:text-sm mb-2">Learn Python, ML, AI, and data tools for top data science roles.</p>
                          )}
                          {/* Tech icons row */}
                          <div className="flex items-center space-x-3 sm:space-x-4 mb-4 mt-3">
                            {program.title.includes('JAVA') && (
                              <>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="w-7 h-7" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="DB" className="w-7 h-7" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring" className="w-7 h-7" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-8 h-8" />
                              </>
                            )}
                            {program.title.includes('MERN') && (
                              <>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" className="w-7 h-7" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" className="w-7 h-7" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-7 h-7" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-7 h-7" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JS" className="w-7 h-7" />
                                <img src="https://img.icons8.com/color/48/000000/data-configuration.png" alt="DSA" className="w-7 h-7 rounded-full" />
                              </>
                            )}
                            {program.title.includes('Data Analytics') && (
                              <>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-8 h-8" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" className="w-7 h-7" />
                                <img src="https://img.icons8.com/color/48/000000/microsoft-excel-2019--v2.png" alt="Excel" className="w-7 h-7" />
                                <img src="https://img.icons8.com/color/48/000000/power-bi.png" alt="Power BI" className="w-7 h-7" />
                              </>
                            )}
                            {program.title.includes('Data Science') && (
                              <>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-8 h-8" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" alt="Jupyter" className="w-8 h-8" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" alt="TensorFlow" className="w-8 h-8" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" alt="Pandas" className="w-8 h-8" />
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" alt="NumPy" className="w-8 h-8" />
                              </>
                            )}
                          </div>
                          {/* View Program Button */}
                          <button
                            className="w-full mt-auto px-3 py-2 sm:px-5 sm:py-3 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 transition flex items-center justify-center gap-2 text-xs sm:text-base shadow"
                            onClick={() => navigate(program.link)}
                          >
                            View Program <span className="ml-1">→</span>
                          </button>
                        </div>
                      </motion.div>
                    ))
                  )}
                </div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CoursesSection; 