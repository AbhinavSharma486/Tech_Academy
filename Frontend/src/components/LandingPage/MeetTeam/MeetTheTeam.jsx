import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const mentors = [
  {
    name: "Ritik Kumar",
    title: "Senior Mentor",
    image: "https://acciojob.com/static/LandingV2/instructors/ritik.webp",
    description:
      "An experienced software engineer passionate about teaching Data Structures and System Design.",
  },
  {
    name: "Anshul Sengar",
    title: "Software Engineer",
    image: "https://acciojob.com/static/LandingV2/instructors/anshul.webp",
    description:
      "NIT graduate who has mentored thousands of students on backend development and Capstone projects.",
  },
  {
    name: "Chetan Tiwari",
    title: "DSA Specialist",
    image: "https://acciojob.com/static/LandingV2/instructors/chetanSagare.webp",
    description:
      "Expert in DSA and has helped students master algorithms with a structured learning approach.",
  },
  {
    name: "Karan Patel",
    title: "Full Stack Instructor",
    image: "https://acciojob.com/static/LandingV2/instructors/karan.webp",
    description:
      "Teaches MERN stack development with a focus on practical skills and real-world projects.",
  },
  {
    name: "Jay Roy",
    title: "Frontend Mentor",
    image: "https://acciojob.com/static/LandingV2/instructors/jay.webp",
    description:
      "Helps learners build modern UIs using React, Tailwind, and accessibility best practices.",
  },
  {
    name: "Samudrala Mehta",
    title: "Backend Mentor",
    image: "https://acciojob.com/static/LandingV2/instructors/samudrala.webp",
    description:
      "Specializes in building scalable APIs using Node.js and Express.",
  },
  {
    name: "Sanidhya Desai",
    title: "UI/UX Expert",
    image: "https://acciojob.com/static/LandingV2/instructors/sanidhya.webp",
    description:
      "Focuses on creating delightful user experiences through thoughtful design.",
  },
  {
    name: "Sneha Singh",
    title: "Cloud Architect",
    image: "https://acciojob.com/static/LandingV2/instructors/sneha.webp",
    description:
      "Helps students understand cloud deployment and microservice architecture.",
  },
  {
    name: "Mayank Kapoor",
    title: "Java Mentor",
    image: "https://acciojob.com/static/LandingV2/instructors/mayank.webp",
    description:
      "Passionate about teaching core Java and Spring Boot with real-time projects.",
  },
  {
    name: "Gaurav Chauhan",
    title: "DSA Coach",
    image: "https://acciojob.com/static/LandingV2/instructors/Gaurav.webp",
    description:
      "Guides students through competitive programming and algorithm optimization.",
  },
];

export const MeetTheTeam = () => {
  const scrollRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  useEffect(() => {
    let scrollAmount = 0;
    const container = scrollRef.current;
    const speed = 20;

    const interval = setInterval(() => {
      if (!paused && container) {
        scrollAmount = (scrollAmount + 1) % (container.scrollWidth - container.offsetWidth + 1);
        container.scrollLeft = scrollAmount;
      }
    }, speed);

    return () => clearInterval(interval);
  }, [paused]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section className="py-16 bg-gradient-to-br from-[#0b5ed7] via-[#5a9cf5] to-[#eaf4ff]">
      <div className="text-center text-white mb-10 px-4">
        <h3 className="text-sm tracking-widest font-semibold uppercase">
          Empower Your Future with Tech Skills
        </h3>
        <h2 className="text-3xl sm:text-4xl font-bold mt-2">
          <span className="bg-white px-4 py-1 rounded-md inline-block">
            <span className="bg-gradient-to-r from-[#0b5ed7] via-[#5a9cf5] to-[#7b61ff] bg-clip-text text-transparent">
              Learn
            </span>
          </span>{" "}
          from Tech Academy's Mentor
        </h2>
        <p className="text-sm sm:text-base mt-4">
          Our mentors guide you through real-world projects, personalized doubt sessions.
        </p>
      </div>

      <div className="px-6 sm:px-10 lg:px-20 xl:px-28 2xl:px-36">
        <div
          className="overflow-x-auto scrollbar-hide cursor-grab"
          ref={scrollRef}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <motion.div
            ref={ref}
            className="flex gap-4 w-max"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {mentors.map((mentor, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                className={`relative flex h-72 flex-shrink-0 rounded-2xl group transition-all duration-300 overflow-hidden
                  w-[260px] hover:w-[500px]`}
                onMouseEnter={() => {
                  setPaused(true);
                  setHoveredIndex(idx);
                }}
                onMouseLeave={() => {
                  setPaused(false);
                  setHoveredIndex(null);
                }}
              >
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-[260px] h-full object-cover rounded-l-2xl flex-shrink-0"
                />

                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={
                    hoveredIndex === idx
                      ? { width: "240px", opacity: 1 }
                      : { width: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="h-full bg-white rounded-r-2xl shadow-xl p-5 overflow-hidden flex flex-col justify-center"
                >
                  <h3 className="text-lg font-bold text-[#071952] mb-1">{mentor.name}</h3>
                  <p className="text-sm mb-3 text-gray-700">{mentor.title}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{mentor.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};