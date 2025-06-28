import React from "react";
import { motion } from "framer-motion";

// Image imports
import image1 from "../../../assets/Success_stories/1.png";
import image2 from "../../../assets/Success_stories/2.png";
import image3 from "../../../assets/Success_stories/3.png";

// Testimonials with individual color gradients
const testimonials = [
  {
    name: "Kabita Mondal",
    title: "Application Developer, ThoughtWorks",
    description:
      "I had a low CGPA and lacked confidence in my coding skills. TechAcademy focused on real-world applications, pair programming, and project-based learning. With constant mentor feedback and mock interviews, I saw a huge improvement in my problem-solving ability. Within months, I secured a developer role at ThoughtWorks.",
    image: image1,
    gradient: "from-pink-400 via-pink-300 to-pink-200",
  },
  {
    name: "Akash Ingoley",
    title: "Software Developer, PayGlocal",
    description:
      "After a 2-year career break, I struggled to find opportunities. TechAcademy's beginner-friendly curriculum helped me restart with confidence. I worked on capstone projects, participated in live coding sessions, and eventually transitioned into a software development role. The career gap became irrelevant thanks to my skillset.",
    image: image3,
    gradient: "from-blue-400 via-blue-300 to-blue-200",
  },
  {
    name: "Abdullah Farhan Safwi",
    title: "Software Developer, Maersk",
    description:
      "Being from a Tier-3 college, I found it difficult to stand out. TechAcademy taught me not only how to code, but also how to think like a developer. Their mentorship, resume-building sessions, and coding practice helped me land a role in a global tech company where I now thrive as a backend engineer.",
    image: image2,
    gradient: "from-purple-400 via-purple-300 to-purple-200",
  },
];

// CSS animations and media queries
const injectStyles = `
@keyframes scrollX {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@media (max-width: 1023.98px) {
  .auto-scroll-container {
    overflow: hidden;
    position: relative;
    display: block;
  }

  .auto-scroll-track {
    display: flex;
    width: fit-content;
    gap: 1.5rem;
    animation: scrollX 25s linear infinite;
    padding: 0 1rem;
  }

  .static-container {
    display: none !important;
  }
}

@media (min-width: 1024px) {
  .auto-scroll-container {
    display: none !important;
  }

  .static-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
  }
}
`;

const StudentReviews = () => {
  const scrollCards = [...testimonials, ...testimonials];

  return (
    <div className="relative max-w-7xl mx-auto px-4 py-20 text-center bg-gradient-to-b from-blue-50 via-white to-purple-100 rounded-xl shadow-inner overflow-hidden">
      <style>{injectStyles}</style>
<h2 className="text-xl md:text-3xl font-extrabold tracking-widest uppercase mb-6">
  <span className="relative inline-block mr-2">  {/* Added inline-block and margin */}
    <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
      Student
    </span>
    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-purple-600"></span>
  </span>
  <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
    Reviews
  </span>
</h2>
      <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-4">
        <span className="text-purple-600">Transform</span> Your Career with TechAcademy
      </h1>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-base md:text-lg">
        Learn, build, and grow with real-world projects and industry mentorship. Here's what our alumni have to say.
      </p>

      {/* Auto-scroll for <1024px */}
      <div className="auto-scroll-container">
        <div className="auto-scroll-track">
          {scrollCards.map((item, index) => (
            <div
              key={index}
              className={`min-w-[280px] max-w-xs bg-gradient-to-br ${item.gradient} border border-gray-200 rounded-3xl shadow-lg p-6 mx-2 hover:scale-105 transition-transform duration-300`}
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full border-2 border-blue-500 object-cover shadow-md"
                />
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                  <h4 className="text-xs text-blue-700">{item.title}</h4>
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Static layout for ≥1024px */}
      <div className="static-container mt-10">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className={`w-[300px] bg-gradient-to-br ${item.gradient} border border-gray-200 rounded-3xl shadow-xl p-6 hover:scale-105 transition-all duration-300`}
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-full border-2 border-purple-500 object-cover shadow-md"
              />
              <div>
                <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                <h4 className="text-xs text-purple-700">{item.title}</h4>
              </div>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StudentReviews;
