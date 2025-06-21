import React from "react";
import {
  FaUserPlus,
  FaUserCheck,
  FaRupeeSign,
  FaChalkboardTeacher,
  FaTools,
  FaLaptopCode,
  FaUserGraduate,
  FaChartLine,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaUserPlus className="text-blue-600 text-4xl" />,
    title: "Invite a Friend",
    description:
      "Recommend Tech Academy’s Full Stack Development Program to your friends.",
  },
  {
    icon: <FaUserCheck className="text-purple-600 text-4xl" />,
    title: "They Enroll",
    description: "Your friend signs up using your referral code or link.",
  },
  {
    icon: <FaRupeeSign className="text-green-600 text-4xl" />,
    title: "Earn Rewards",
    description: "Get up to ₹10,000 once their admission is successful.",
  },
];

const features = [
  {
    icon: <FaChalkboardTeacher className="text-yellow-500 text-3xl mb-3" />,
    title: "Top-Class Mentors",
    description: "Guidance from developers with real-world tech expertise.",
  },
  {
    icon: <FaTools className="text-green-500 text-3xl mb-3" />,
    title: "Skill-Oriented Curriculum",
    description: "Build job-ready skills through hands-on development.",
  },
  {
    icon: <FaLaptopCode className="text-pink-500 text-3xl mb-3" />,
    title: "Live Classes & Projects",
    description: "Collaborate in real time and build portfolio-worthy apps.",
  },
  {
    icon: <FaUserGraduate className="text-blue-400 text-3xl mb-3" />,
    title: "Career Guidance",
    description: "Get placement help, resume reviews & mock interviews.",
  },
  {
    icon: <FaChartLine className="text-indigo-500 text-3xl mb-3" />,
    title: "Learning Dashboard",
    description: "Track your learning journey with performance insights.",
  },
];

const ReferalSteps = () => {
  return (
    <div className="bg-[#0c1a3b] text-white font-sans">
      {/* How It Works Section */}
      <section className="py-16 px-4 bg-[#0b163f] text-white relative">
        <h2 className="text-4xl font-bold text-center mb-4">
          How It <span className="text-yellow-300">Works?</span>
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto text-center mb-16">
          Invite your friends to sign up and earn rewards when they enroll!
        </p>

        <div className="relative max-w-6xl mx-auto">
          {/* Mobile vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-yellow-400 block md:hidden z-0" />

          <div className="flex flex-col md:flex-row md:justify-between items-stretch gap-16 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative text-center md:w-[30%] w-full flex flex-col items-center"
              >
                {/* Step Card */}
                <div className="bg-white text-blue-900 rounded-xl shadow-md px-6 py-8 hover:scale-105 transition-all duration-300 z-10 relative flex flex-col h-full w-full max-w-xs mx-auto md:max-w-none">
                  <div className="mb-4">{step.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-700">{step.description}</p>
                </div>

                {/* Desktop horizontal line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 left-full w-[100px] h-[2px] bg-yellow-400">
                    <div className="w-3 h-3 bg-yellow-400 rotate-45 absolute -right-1 top-1/2 transform -translate-y-1/2" />
                  </div>
                )}

                {/* Mobile vertical line */}
                {index < steps.length - 1 && (
                  <div className="block md:hidden absolute top-full mt-4 h-[40px] w-1 bg-yellow-400 z-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Tech Academy Section */}
      <section className="bg-white text-blue-900 py-16 px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">
            Why <span className="text-blue-600">Tech Academy?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-3">
            We prepare aspiring developers for real-world success with top-tier training, live mentoring, and full placement support.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              {feature.icon}
              <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
              <p className="text-sm text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg font-medium text-blue-900 mb-4">
            Share the opportunity. Help others grow while you get rewarded!
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-700 hover:scale-105 hover:shadow-lg transform transition-all duration-300 ease-in-out">
            Refer Now 🚀
          </button>
        </div>
      </section>
    </div>
  );
};

export default ReferalSteps;
