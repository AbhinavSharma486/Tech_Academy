import React, { useState } from "react";
import {
    FaChartBar,
    FaDatabase,
    FaProjectDiagram,
    FaCheckCircle,
} from "react-icons/fa";

const HeroSection = () => {
    const [formData, setFormData] = useState({ fullName: "", phoneNumber: "" });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const applicationData = {
            ...formData,
            course: "Data Analytics",
            timestamp: new Date().toISOString(),
        };
        console.log("Application data:", applicationData);
        alert(
            `Application submitted!\nName: ${formData.fullName}\nPhone: ${formData.phoneNumber}`
        );
        setFormData({ fullName: "", phoneNumber: "" });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#14213d] to-[#6b7c8d] text-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 pt-16">
                <div className="flex-1 w-full">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-center lg:text-left">
                        Become a{" "}
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Data Analyst
                        </span>
                    </h1>
                    <p className="text-base sm:text-lg mb-8 text-white/90 text-center lg:text-left">
                        Master Excel, SQL, Power BI, Python, Statistics &
                        Business Analysis and become job-ready for roles like
                        Data Analyst, Business Analyst, and more.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-start sm:items-center gap-4">
                            <FaChartBar className="text-cyan-400 text-lg sm:text-xl mt-1 sm:mt-0" />
                            <span>
                                Live sessions by experts from top companies &
                                IITs
                            </span>
                        </div>
                        <div className="flex items-start sm:items-center gap-4">
                            <FaDatabase className="text-cyan-400 text-lg sm:text-xl mt-1 sm:mt-0" />
                            <span>
                                Gain expertise in SQL, Python, Excel & Data
                                Visualization
                            </span>
                        </div>
                        <div className="flex items-start sm:items-center gap-4">
                            <FaProjectDiagram className="text-cyan-400 text-lg sm:text-xl mt-1 sm:mt-0" />
                            <span>
                                Work on real-world business case studies &
                                dashboards
                            </span>
                        </div>
                        <div className="flex items-start sm:items-center gap-4">
                            <FaCheckCircle className="text-cyan-400 text-lg sm:text-xl mt-1 sm:mt-0" />
                            <span>
                                Dedicated placement support & mock interviews
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex-1 w-full max-w-md bg-white/10 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-white/20 shadow-2xl">
                    <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">
                        Apply Now – Start for{" "}
                        <span className="text-cyan-400">FREE</span>
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label
                                htmlFor="fullName"
                                className="block mb-2 text-sm font-medium"
                            >
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                required
                                placeholder="Enter your full name"
                                className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:border-cyan-400"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="phoneNumber"
                                className="block mb-2 text-sm font-medium"
                            >
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phoneNumber"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleInputChange}
                                required
                                placeholder="Enter your phone number"
                                className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:border-cyan-400"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg text-white font-semibold hover:from-blue-500 hover:to-cyan-400 transition-all duration-300"
                        >
                            Submit Application
                        </button>
                    </form>
                </div>
            </div>
            <div className="mt-16 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                    <h3 className="text-xl sm:text-2xl font-bold">3000+</h3>
                    <p className="text-sm sm:text-base text-white/70">
                        Learners Trained
                    </p>
                </div>
                <div>
                    <h3 className="text-xl sm:text-2xl font-bold">12 LPA</h3>
                    <p className="text-sm sm:text-base text-white/70">
                        Highest Package
                    </p>
                </div>
                <div>
                    <h3 className="text-xl sm:text-2xl font-bold">400+</h3>
                    <p className="text-sm sm:text-base text-white/70">
                        Hiring Partners
                    </p>
                </div>
                <div>
                    <h3 className="text-xl sm:text-2xl font-bold">6.8 LPA</h3>
                    <p className="text-sm sm:text-base text-white/70">
                        Average Salary
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
