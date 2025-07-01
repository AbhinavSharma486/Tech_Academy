import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import javaFullPng from '../../../assets/LandingPageImage/courses/java full.png';
import analyticsPng from '../../../assets/LandingPageImage/courses/data a.png';
import datasciencePng from '../../../assets/LandingPageImage/courses/data sci.png';
import mernPng from '../../../assets/LandingPageImage/courses/mern.png';

// Configuration Data
const LIVE_TABS = [
  { key: 'fullstack', label: 'Full Stack Development' },
  { key: 'analytics', label: 'Data Analytics' },
  { key: 'datascience', label: 'Data Science & AI' },
];

const SELF_TABS = [
  { key: 'javafull', label: 'JAVA- Full Stack Development With Gen AI' },
  { key: 'mernfull', label: 'MERN- Full Stack Development With Gen AI (Self Paced)' },
];

const LIVE_COURSES = {
  fullstack: [
    {
      title: 'JAVA- Full Stack Development With Gen AI',
      duration: '8 MONTHS',
      link: '/JavaFullStack',
      image: javaFullPng,
      type: 'java'
    },
    {
      title: 'MERN- Full Stack Development With Gen AI',
      duration: '8 MONTHS',
      link: '/mern-fullstack',
      image: mernPng,
      type: 'mern'
    },
  ],
  analytics: [
    {
      title: 'Data Analytics Course',
      duration: '6 MONTHS',
      link: '/data-analytics',
      image: analyticsPng,
      type: 'analytics'
    },
  ],
  datascience: [
    {
      title: 'Data Science & AI Course',
      duration: '8 MONTHS',
      link: '/datascience&ai',
      image: datasciencePng,
      type: 'datascience'
    },
  ],
};

const SELF_COURSES = {
  javafull: [
    {
      title: 'JAVA- Full Stack Development With Gen AI',
      duration: '8 MONTHS',
      link: '/JavaFullStack',
      image: javaFullPng,
      type: 'java'
    },
  ],
  mernfull: [
    {
      title: 'MERN- Full Stack Development With Gen AI (Self Paced)',
      duration: '8 MONTHS',
      link: '/mern-fullstack',
      image: mernPng,
      type: 'mern'
    },
  ],
};

const TECH_ICONS = {
  java: [
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", alt: "Java" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", alt: "MySQL" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", alt: "Spring" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", alt: "Python" },
  ],
  mern: [
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt: "Node.js" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript" },
    { src: "https://img.icons8.com/color/48/000000/data-configuration.png", alt: "DSA" },
  ],
  analytics: [
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", alt: "Python" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", alt: "SQL" },
    { src: "https://img.icons8.com/color/48/000000/microsoft-excel-2019--v2.png", alt: "Excel" },
    { src: "https://img.icons8.com/color/48/000000/power-bi.png", alt: "Power BI" },
  ],
  datascience: [
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", alt: "Python" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg", alt: "Jupyter" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", alt: "TensorFlow" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", alt: "Pandas" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg", alt: "NumPy" },
  ],
};

const COURSE_DESCRIPTIONS = {
  analytics: 'Master Excel, SQL, Python, Power BI & more for real-world analytics.',
  datascience: 'Learn Python, ML, AI, and data tools for top data science roles.',
};

// Components
const AnimatedTitle = () => (
  <div className="text-center mb-6">
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2 tracking-wide bg-gradient-to-r from-blue-800 via-blue-400 to-blue-800 bg-[length:200%_200%] animate-pulse bg-clip-text text-transparent">
      COURSES
    </h1>
    <div className="flex justify-center mb-3 sm:mb-4">
      <div className="w-16 sm:w-24 h-1 bg-blue-400 rounded-full"></div>
    </div>
  </div>
);

const SubTitle = () => (
  <div className="text-center mb-6 sm:mb-8">
    <h2 className="text-lg sm:text-2xl md:text-4xl font-semibold mb-2 text-black mt-2">
      <span className="bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent font-extrabold">
        Offline
      </span>
      , Live Online and Self Paced courses tailored for you!
    </h2>
    <p className="text-gray-700 text-xs sm:text-base">
      Courses and placement assistance with 60+ hiring drives each month to help you land your dream tech job!
    </p>
  </div>
);

const ModeToggle = ({ activeMode, setActiveMode }) => (
  <div className="flex justify-center mb-3 sm:mb-4">
    <div className="flex bg-gray-100 rounded-full px-1 py-1 shadow-sm">
      <button
        className={`px-3 sm:px-6 py-2 rounded-full font-semibold text-xs sm:text-base transition-all duration-200 focus:outline-none ${activeMode === 'live'
          ? 'bg-blue-500 text-white shadow'
          : 'bg-transparent text-gray-700'
          }`}
        onClick={() => setActiveMode('live')}
      >
        Live Online Courses
      </button>
      <button
        className={`px-3 sm:px-6 py-2 rounded-full font-semibold text-xs sm:text-base transition-all duration-200 focus:outline-none ${activeMode === 'self'
          ? 'bg-blue-500 text-white shadow'
          : 'bg-transparent text-gray-700'
          }`}
        onClick={() => setActiveMode('self')}
      >
        Self Paced Courses
      </button>
    </div>
  </div>
);

const TabSelector = ({ tabs, activeTab, setActiveTab }) => (
  <div className="flex gap-2 sm:gap-4 mb-4 justify-center flex-wrap">
    {tabs.map((tab) => (
      <button
        key={tab.key}
        className={`flex items-center gap-2 px-3 sm:px-4 py-1 rounded-full font-semibold border-2 transition text-xs sm:text-base ${activeTab === tab.key
          ? 'bg-blue-600 text-white border-blue-600'
          : 'bg-white text-blue-700 border-blue-300 hover:bg-blue-50'
          }`}
        onClick={() => setActiveTab(tab.key)}
      >
        {tab.label}
      </button>
    ))}
  </div>
);

const TechIcons = ({ courseType }) => {
  const icons = TECH_ICONS[courseType] || [];

  return (
    <div className="flex items-center space-x-3 sm:space-x-4 mb-4 mt-3">
      {icons.map((icon, index) => (
        <img
          key={index}
          src={icon.src}
          alt={icon.alt}
          className={`${icon.alt === 'Python' || icon.alt === 'Jupyter' || icon.alt === 'TensorFlow' || icon.alt === 'Pandas' || icon.alt === 'NumPy'
            ? 'w-8 h-8'
            : 'w-7 h-7'
            } ${icon.alt === 'DSA' ? 'rounded-full' : ''}`}
        />
      ))}
    </div>
  );
};

const CourseCard = ({ program, index }) => {
  const getCourseType = (title) => {
    if (title.includes('JAVA')) return 'java';
    if (title.includes('MERN')) return 'mern';
    if (title.includes('Data Analytics')) return 'analytics';
    if (title.includes('Data Science')) return 'datascience';
    return program.type;
  };

  const getDescription = (title) => {
    if (title.includes('Data Analytics')) return COURSE_DESCRIPTIONS.analytics;
    if (title.includes('Data Science')) return COURSE_DESCRIPTIONS.datascience;
    return null;
  };

  const courseType = getCourseType(program.title);
  const description = getDescription(program.title);
  const [duration, unit] = program.duration.split(' ');

  return (
    <motion.div
      className="bg-white border border-blue-100 rounded-2xl shadow-md flex flex-col items-start w-full max-w-xs sm:max-w-sm min-h-[340px] p-0 overflow-hidden hover:shadow-lg transition-shadow duration-300"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      {/* Course Image */}
      <img
        src={program.image}
        alt={program.title}
        className="w-full h-24 sm:h-32 object-cover object-center"
        loading="lazy"
      />

      {/* Card Content */}
      <div className="w-full flex flex-col flex-1 p-3 sm:p-4">
        {/* Title and Duration */}
        <div className="flex items-center justify-between w-full mb-2">
          <h3 className="text-base sm:text-lg font-bold text-gray-900">
            {program.title}
          </h3>
          <span className="flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-xs font-semibold">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-base font-bold">{duration}</span>
            <span className="text-xs font-semibold tracking-wide uppercase">{unit}</span>
          </span>
        </div>

        {/* Description */}
        {description && (
          <p className="text-gray-600 text-xs sm:text-sm mb-2">
            {description}
          </p>
        )}

        {/* Tech Icons */}
        <TechIcons courseType={courseType} />

        {/* View Program Button */}
        <Link
          to={program.link}
          className="w-full mt-auto px-3 py-2 sm:px-5 sm:py-3 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 transition flex items-center justify-center gap-2 text-xs sm:text-base shadow text-center"
        >
          View Program <span className="ml-1">→</span>
        </Link>
      </div>
    </motion.div>
  );
};

const CourseGrid = ({ programs }) => {
  if (!programs || programs.length === 0) {
    return (
      <motion.div
        className="col-span-full text-center text-gray-500 py-12 text-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        No courses available for this mode yet.
      </motion.div>
    );
  }

  return (
    <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8 w-full">
      {programs.map((program, index) => (
        <CourseCard
          key={program.title}
          program={program}
          index={index}
        />
      ))}
    </div>
  );
};

// Main Component
const CoursesSection = () => {
  const [activeMode, setActiveMode] = useState('live');
  const [activeTab, setActiveTab] = useState('fullstack');

  // Update active tab when mode changes
  useEffect(() => {
    setActiveTab(activeMode === 'live' ? 'fullstack' : 'javafull');
  }, [activeMode]);

  // Get current configuration based on mode
  const tabs = activeMode === 'live' ? LIVE_TABS : SELF_TABS;
  const programs = activeMode === 'live' ? LIVE_COURSES[activeTab] : SELF_COURSES[activeTab];

  return (
    <section className="w-full bg-[#eaf4ff] py-4 px-1 sm:py-8 sm:px-2 md:px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="w-full px-1 sm:px-4 md:px-10 lg:px-20"
      >
        <div
          className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl pt-2 pb-4 sm:pt-3 sm:pb-6 md:pt-6 md:pb-10 px-2 sm:px-4 md:px-10"
          style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.10)' }}
        >
          <AnimatedTitle />
          <SubTitle />
          <ModeToggle activeMode={activeMode} setActiveMode={setActiveMode} />
          <TabSelector tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

          <div className="flex-1">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 max-w-full">
              <AnimatePresence mode="wait">
                <CourseGrid programs={programs} />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CoursesSection;