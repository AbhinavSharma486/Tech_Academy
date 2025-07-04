import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Code, Database, Search, Users, Globe, Shield, Zap, BookOpen, Server, Layers, Download } from 'lucide-react';

const CourseCurriculum = () => {
  const [selectedTrack, setSelectedTrack] = useState('JAVA');
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const textRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const javaCurriculum = [
    {
      id: 1,
      title: "Intro to Programming in Java",
      color: "bg-green-100 border-green-200",
      topics: [
        "Java Basics",
        "Patterns & Functions", 
        "Data Structures",
        "Strings & Optimization",
        "Time & Space Complexity"
      ],
      icon: <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 text-green-600" />
    },
    {
      id: 2,
      title: "Fundamental DSA Constructs",
      color: "bg-blue-100 border-blue-200", 
      topics: [
        "Recursion",
        "Linked Lists",
        "Backtracking", 
        "Object Oriented Programming (OOP)",
        "Advanced OOP"
      ],
      icon: <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" />
    },
    {
      id: 3,
      title: "Prominent Algorithms and Data Structures",
      color: "bg-purple-100 border-purple-200",
      topics: [
        "Stacks",
        "Queues", 
        "Hashing",
        "Trees",
        "Binary Search"
      ],
      icon: <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 text-purple-600" />
    },
    {
      id: 4,
      title: "Essential Data Structures",
      color: "bg-green-100 border-green-200",
      topics: [
        "Two-Pointer & Sliding Window",
        "Prefix Sum, Kadane's Algorithm",
        "String Searching",
        "Bitwise Operations, Heaps", 
        "SQL Basic"
      ],
      icon: <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 text-green-600" />
    },
    {
      id: 5,
      title: "Basics of Spring & Spring Boot",
      color: "bg-blue-100 border-blue-200",
      topics: [
        "Backend Development Fundamentals",
        "Spring Framework Core",
        "Advanced API Development",
        "Database Management",
        "Spring Data JPA"
      ],
      icon: <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" />
    },
    {
      id: 6,
      title: "Advanced Spring Implementation",
      color: "bg-purple-100 border-purple-200",
      topics: [
        "JPA Deep Dive",
        "Data Transactions",
        "Advanced Security",
        "Integration Patterns",
        "Advanced Microservices"
      ],
      icon: <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 text-purple-600" />
    },
    {
      id: 7,
      title: "HTML & CSS ",
      color: "bg-orange-100 border-orange-200",
      topics: [
        "Core HTML Concepts",
        "Style with CSS",
        "Enhance & Animate",
        "Building Real Projects",
        "Version Control"
      ],
      icon: <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 text-orange-600" />
    },
    {
      id: 8,
      title: "Basic & Advanced JS",
      color: "bg-red-100 border-red-200",
      topics: [
        "Core Concepts",
        "Data Structures & OOP",
        "Strings & Debugging",
        "DOM & Events, Async JavaScript",
        "Advanced Concepts, Storage & APIs"
      ],
      icon: <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 text-red-600" />
    }
  ];

  const mernCurriculum = [
    {
      id: 1,
      title: "Intro to HTML & CSS",
      color: "bg-yellow-100 border-yellow-200",
      topics: [
        "Core HTML Concepts",
        "Style with CSS", 
        "Enhance & Animate",
        "Building Real Projects",
        "Version Control"
      ],
      icon: <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-600" />
    },
    {
      id: 2,
      title: "Programming Fundamentals in JavaScript",
      color: "bg-cyan-100 border-cyan-200", 
      topics: [
        "Fundamentals & Control Flow",
        "Functions & Arrays",
        "Strings & Manipulation", 
        "Sorting & Complexity",
        "Recursion Essentials"
      ],
      icon: <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-600" />
    },
    {
      id: 3,
      title: "Prominent Algorithms and Data Structures",
      color: "bg-indigo-100 border-indigo-200",
      topics: [
        "Stacks",
        "Queues", 
        "Hashing",
        "Trees",
        "Binary Search"
      ],
      icon: <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 text-indigo-600" />
    },
    {
      id: 4,
      title: "Basic JavaScript",
      color: "bg-green-100 border-green-200",
      topics: [
        "Core Concepts",
        "Data Structures & OOP",
        "Strings & Debugging",
        "DOM & Events", 
        "Execution in JavaScript"
      ],
      icon: <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 text-green-600" />
    },
    {
      id: 5,
      title: "Advanced JavaScript",
      color: "bg-emerald-100 border-emerald-200",
      topics: [
        "Async JavaScript",
        "APIs & Fetch",
        "Advanced Concepts",
        "Prototypes & OO",
        "Web Storage & Cookies"
      ],
      icon: <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-600" />
    },
    {
      id: 6,
      title: "Advanced Spring and Implementation",
      color: "bg-red-100 border-red-200",
      topics: [
        "JPA Deep Dive",
        "Data Transfer Objects (DTOs)",
        "Advanced JPA",
        "Integration with Java EE",
        "Advanced API Development"
      ],
      icon: <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 text-red-600" />
    },
    {
      id: 7,
      title: "React & Redux",
      color: "bg-purple-100 border-purple-200",
      topics: [
        "React & Components Essentials",
        "State, Props & Conditional UI",
        "Routing, Refs & Performance",
        "Redux & State Management",
        "Styling, Node & Deployment"
      ],
      icon: <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 text-purple-600" />
    },
    {
      id: 8,
      title: "Backend development in NodeJS",
      color: "bg-orange-100 border-orange-200",
      topics: [
        "Intro to Node",
        "Asynchronous Programming",
        "Middlewares",
        "Data Validation & MongoDB",
        "Auth & Advanced MongoDB"
      ],
      icon: <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 text-orange-600" />
    }
  ];

  const currentCurriculum = selectedTrack === 'JAVA' ? javaCurriculum : mernCurriculum;

  const switchTrack = (track) => {
    setSelectedTrack(track);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="relative inline-block">
            <p 
              ref={textRef}
              className="text-2xl sm:text-3xl lg:text-3xl uppercase tracking-wider mb-3 font-bold"
            >
              <span className="relative bg-gradient-to-r from-blue-800 via-blue-500 to-blue-900 bg-clip-text text-transparent">
                COURSE CURRICULUM
              </span>
            </p>
            <div 
              className="absolute bottom-0 bg-gradient-to-r from-blue-800 via-blue-500 to-blue-900"
              style={{
                width: '100%',
                height: windowWidth <= 640 ? '2px' : windowWidth <= 1024 ? '3px' : '4px',
                left: '0'
              }}
            />
          </div>
          <h1 className="text-sxl sm:text-2xl lg:text-2xl font-semibold text-gray-800 mb-3">
            What Will You <span className="text-blue-600">Learn</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-7 px-4 leading-relaxed">
            The curriculum that makes you Industry Ready with Hands on Implementation
          </p>
          
          {/* Tech Stack Selection - Joined Round Buttons */}
          <div className="flex justify-center items-center mb-3">
            <div className="flex bg-gray-100 rounded-full p-1 shadow-sm">
              <button
                onClick={() => switchTrack('JAVA')}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  selectedTrack === 'JAVA'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
              >
                JAVA STACK
              </button>
              <button
                onClick={() => switchTrack('MERN')}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  selectedTrack === 'MERN'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
              >
                MERN STACK
              </button>
            </div>
          </div>
        </div>

        {/* Cards Container - Horizontal Scrollable Layout */}
        <div className="relative">
          <div className="overflow-x-auto pb-6">
            <div className="flex gap-4 sm:gap-6 min-w-max px-4">
              {currentCurriculum.map((unit) => (
                <div
                  key={`${selectedTrack}-${unit.id}`}
                  className={`${unit.color} rounded-2xl p-5 sm:p-6 border-2 shadow-lg flex-shrink-0 w-72 sm:w-80 h-auto min-h-90 flex flex-col`}
                >
                  <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <div className="flex items-center gap-2 sm:gap-3">
                      {unit.icon}
                      <span className="text-xs sm:text-sm font-semibold text-gray-600">
                        Unit {unit.id}
                      </span>
                    </div>
                    <div className="text-xs px-2 py-1 bg-white rounded-full text-gray-600 font-semibold shadow-sm">
                      {selectedTrack}
                    </div>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-5 leading-tight">
                    {unit.title}
                  </h3>
                  
                  <div className="space-y-3 sm:space-y-4 flex-1">
                    {unit.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="flex items-start gap-3">
                        <span className="text-xs font-semibold text-gray-500 mt-1 flex-shrink-0 bg-white px-2 py-1.5 rounded-full shadow-sm">
                          Topic {topicIndex + 1}
                        </span>
                        <span className="text-sm sm:text-base text-gray-700 flex-1 leading-relaxed font-medium">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Download Button - Right Corner */}
        <div className="mt-8 mb-8 flex justify-end px-4">
          {selectedTrack === 'JAVA' ? (
            <button
              className="flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-semibold text-sm shadow-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              Download Java Curriculum
            </button>
          ) : (
            <button
              className="flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full font-semibold text-sm shadow-lg hover:from-green-700 hover:to-green-800 transform hover:scale-105 transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              Download MERN Curriculum
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCurriculum;