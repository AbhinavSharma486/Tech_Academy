import React, { useState, useEffect } from "react";
import backgroundImage from "../../assets/Success_stories/sa.jpg";

// Image imports
import img1 from "../../assets/Success_stories/1.png";
import img2 from "../../assets/Success_stories/2.png";
import img3 from "../../assets/Success_stories/3.png";
import img4 from "../../assets/Success_stories/4.png";
import img5 from "../../assets/Success_stories/5.png";
import img6 from "../../assets/Success_stories/6.png";
import img7 from "../../assets/Success_stories/7.png";
import img8 from "../../assets/Success_stories/8.png";
import img9 from "../../assets/Success_stories/9.png";
import img10 from "../../assets/Success_stories/10.png";

const profileImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const cardColors = [
  "bg-rose-100", "bg-emerald-100", "bg-amber-100", "bg-sky-100", "bg-indigo-100",
  "bg-pink-100", "bg-violet-100", "bg-orange-100", "bg-lime-100", "bg-cyan-100",
];

const successStories = [
  {
    name: "Sandeep Singh",
    title: "Software Engineer, Innovaccer",
    description:
      "Coming from a Chemical Engineering background, I had zero exposure to programming. TechAcademy helped me build a strong foundation in coding through structured training, hands-on projects, and continuous mentorship. Their personalized guidance gave me the confidence to clear technical interviews and pursue a career I never imagined possible.",
  },
  {
    name: "Kabita Mondal",
    title: "Application Developer, ThoughtWorks",
    description:
      "I had a low CGPA and lacked confidence in my coding skills. TechAcademy focused on real-world applications, pair programming, and project-based learning. With constant mentor feedback and mock interviews, I saw a huge improvement in my problem-solving ability. Within months, I secured a developer role at ThoughtWorks.",
  },
  {
    name: "Akash Ingoley",
    title: "Software Developer, PayGlocal",
    description:
      "After a 2-year career break, I struggled to find opportunities. TechAcademy's beginner-friendly curriculum helped me restart with confidence. I worked on capstone projects, participated in live coding sessions, and eventually transitioned into a software development role. The career gap became irrelevant thanks to my skillset.",
  },
  {
    name: "Abdullah Farhan Safwi",
    title: "Software Developer, Maersk",
    description:
      "Being from a Tier-3 college, I found it difficult to stand out. TechAcademy taught me not only how to code, but also how to think like a developer. Their mentorship, resume-building sessions, and coding practice helped me land a role in a global tech company where I now thrive as a backend engineer.",
  },
  {
    name: "Neel Ram",
    title: "Software Developer, BharatPe x DR",
    description:
      "After multiple failed government exam attempts, I decided to switch to tech. TechAcademy's project-based learning gave me a fresh start. I learned how to build scalable apps and gained confidence through mock interviews. Today, I'm part of a fast-growing fintech company, solving real-world tech problems.",
  },
  {
    name: "Sachin Chaudhary",
    title: "Software Developer, Gainsight",
    description:
      "With a background in sales, I had no technical experience. TechAcademy's one-on-one sessions and clear learning path helped me transition smoothly. I worked on industry-level projects and got constant mentor feedback. Today, I work as a developer and feel more aligned with my career than ever before.",
  },
  {
    name: "Priya Desai",
    title: "Frontend Developer, Zomato",
    description:
      "I was a school teacher for 6 years before switching careers. TechAcademy made learning web development simple and engaging. From building responsive UIs to understanding deployment, I gained all the skills needed to break into frontend development. Now I'm proud to create user experiences for Zomato.",
  },
  {
    name: "Ravi Kumar",
    title: "Backend Developer, Ola",
    description:
      "Switching from Mechanical Engineering to tech seemed like a huge leap. But with TechAcademy's practical approach and real-world projects, I made the transition. Their focus on backend development helped me build solid skills in APIs, databases, and cloud. I now contribute to systems used at scale.",
  },
  {
    name: "Ankita Sharma",
    title: "Data Analyst, Swiggy",
    description:
      "As an Economics graduate, I had no programming experience. TechAcademy introduced me to Python, SQL, and data visualization tools. The learning was hands-on, with case studies and industry datasets. I built a strong portfolio and landed a data analyst role at Swiggy — all within six months.",
  },
  {
    name: "Nikhil Verma",
    title: "Full Stack Developer, BYJU'S",
    description:
      "As a fresher with no experience or internships, I struggled to stand out. TechAcademy guided me through both frontend and backend development. I built real-world projects, practiced coding problems daily, and received detailed interview prep. Today, I work as a full stack developer at BYJU'S.",
  }
];

export default function SuccessStories() {
  const [showAll, setShowAll] = useState(false);
  const [expandedCards, setExpandedCards] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      setIsMobile(w >= 320 && w <= 767);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    setExpandedCards(new Array(successStories.length).fill(false));
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleExpand = (idx) => {
    setExpandedCards((prev) => {
      const next = [...prev];
      next[idx] = !next[idx];
      return next;
    });
  };

  const visibleStories = showAll ? successStories : successStories.slice(0, 6);

  return (
    <section
      className="text-gray-900 py-16 px-4 md:px-8 bg-cover bg-center pt-28"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-white bg-opacity-90 rounded-3xl p-8 max-w-7xl mx-auto text-center shadow-xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
          Your <span className="text-blue-600">beginning</span> doesn't define you,
          <br className="hidden md:inline" />
          it's your destination that shapes your story.
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleStories.map((story, idx) => (
            <div
              key={idx}
              className={`${cardColors[idx]} rounded-2xl p-6 shadow-md hover:shadow-2xl transition transform hover:scale-105 flex flex-col h-full`}
            >
              <img
                src={profileImages[idx]}
                alt={story.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-lg"
              />
              <h3 className="text-lg font-bold text-center text-gray-800 mb-1">{story.name}</h3>
              <p className="text-sm text-center text-gray-500 mb-3">{story.title}</p>

              <div className="text-sm text-gray-700 text-left flex-grow">
                {isMobile ? (
                  <>
                    <p className="leading-relaxed mb-2">
                      {expandedCards[idx]
                        ? story.description
                        : `${story.description.substring(0, 100)}...`}
                    </p>
                    <button
                      className="text-blue-600 font-medium hover:underline text-sm"
                      onClick={() => toggleExpand(idx)}
                    >
                      {expandedCards[idx] ? "Read Less" : "Read More"}
                    </button>
                  </>
                ) : (
                  <p className="leading-relaxed">{story.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium shadow-md hover:bg-blue-500 transition"
          >
            {showAll ? "Show Less" : "Read More"}
          </button>
        </div>
      </div>
    </section>
  );
}