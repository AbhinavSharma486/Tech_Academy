import React from "react";
import {
    FaClipboardList,
    FaBriefcase,
    FaUsers,
    FaComments,
} from "react-icons/fa";
import walmartImg from "../../assets/DataAnalytics/walmart.webp";
import iplImg from "../../assets/DataAnalytics/ipl.jpeg";
import youtubeImg from "../../assets/DataAnalytics/youtube.jpg";
import covid19 from "../../assets/DataAnalytics/covid19.jpeg";

const benefits = [
    {
        icon: <FaClipboardList />,
        text: "Learn practical & real-world applications.",
    },
    { icon: <FaBriefcase />, text: "Develop diverse business knowledge" },
    { icon: <FaComments />, text: "Enhance verbal & communication skills" },
    { icon: <FaUsers />, text: "Projects designed by Industry Experts" },
];

const projects = [
    {
        image: walmartImg,
        title: "E-Commerce Analysis",
        desc: "Unlock the Power of E-Commerce:",
        points: [
            "Identify Sales Patterns",
            "Track Customer Trends",
            "Boost Business",
        ],
    },
    {
        image: iplImg,
        title: "Sports Analysis",
        desc: "Team performance optimization:",
        points: [
            "Track player performance",
            "Analyze team statistics",
            "Predict match outcomes",
        ],
    },
    {
        image: youtubeImg,
        title: "OTT Analytics",
        desc: "Potential of Youtube & OTT Platforms:",
        points: [
            "Gain Insights on Viewership",
            "Personalize Recommendations",
            "Drive Engagement",
        ],
    },
    {
        image: covid19,
        title: "Covid19 Analysis",
        desc: "Reveal the true Impact of COVID:",
        points: [
            "Uncover Patterns in Spread",
            "Study Resource Strain",
            "Find Patterns in New Variants",
        ],
    },
];

const IndustryProjects = () => {
    return (
        <section className="bg-white py-16 px-4 md:px-20">
            <div className="text-center mb-10">
                <p className="text-sm text-purple-600 font-semibold uppercase">
                    Gain Industry Knowledge by Experts
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold mt-2">
                    Learn by doing, build{" "}
                    <span className="text-blue-600">Industry level</span>{" "}
                    projects
                </h2>
                <p className="text-gray-600 mt-2">
                    6+ projects to gain hands-on experience by working on latest
                    data analytics tools
                </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 mb-12">
                {benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-4">
                        <div className="bg-blue-100 text-blue-600 p-3 rounded-md text-lg">
                            {benefit.icon}
                        </div>
                        <p className="text-gray-800 text-sm md:text-base">
                            {benefit.text}
                        </p>
                    </div>
                ))}
            </div>

            <div className="overflow-x-auto">
                <div className="flex gap-6 min-w-max pb-4">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="border rounded-xl shadow-sm p-4 min-w-[280px] max-w-sm"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-36 object-cover rounded-md mb-4"
                            />
                            <h3 className="text-lg font-bold text-gray-900 mb-1">
                                {project.title}
                            </h3>
                            <p className="text-sm text-gray-600 mb-2">
                                {project.desc}
                            </p>
                            <ul className="text-sm text-gray-700 space-y-1">
                                {project.points.map((point, i) => (
                                    <li key={i} className="flex items-start">
                                        <span className="text-blue-500 mr-2">
                                            ✔
                                        </span>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustryProjects;
