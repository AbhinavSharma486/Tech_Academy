import React, { useState } from 'react';

const Hero = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };


  return (
    <div className="min-h-screen text-white font-sans relative overflow-hidden" style={{background: 'linear-gradient(135deg, #14213d 0%, #2a3751 30%, #3f4e65 60%, #556579 80%, #6b7c8d 100%)'}}>
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 border border-cyan-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 rounded-lg rotate-45 animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 border-2 border-white/10 rotate-12 animate-spin"></div>
        <div className="absolute top-60 left-1/3 w-8 h-8 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full animate-ping"></div>
        <div className="absolute bottom-60 right-1/3 w-24 h-24 border border-white/5 rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto min-h-screen flex flex-col relative z-10 px-4">
        {/* Top spacer */}
        <div className="h-16 md:h-24"></div>

        {/* Main content section */}
        <div className="flex-1 flex items-center justify-center py-8">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* Left side - Description */}
            <div className="order-1 lg:order-1 text-center lg:text-left space-y-6">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-lg blur opacity-25"></div>
                <h1 className="relative text-4xl md:text-4xl lg:text-4xl font-normal text-white leading-tight">
                  Master <span className="font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">JAVA Full Stack Development</span>, Data Structures & Algorithms to Land Your Dream Job at Top Tech Companies.
                </h1>
              </div>
              <p className="text-base md:text-lg opacity-90 leading-relaxed backdrop-blur-sm bg-white/5 p-4 md:p-6 rounded-lg border border-white/10">
                Curriculum designed by IIT alumni and industry experts. Learn Java, Spring Boot, React,
                Data Structures, Algorithms, and System Design. Gain hands-on experience through projects,
                coding challenges, and interview preparation. Join a network of graduates placed in top tech firms.
              </p>
            </div>

            {/* Decorative arrow - only visible on large screens */}
            <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 ml-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 rounded-full blur-xl animate-pulse"></div>
                <svg 
                  width="80" 
                  height="60" 
                  viewBox="0 0 80 60"
                  className="relative z-10"
                >
                  <defs>
                    <linearGradient id="arrowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00d4ff" />
                      <stop offset="50%" stopColor="#0ea5e9" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                  <path 
                    d="M10 30 Q 20 15, 30 30 Q 40 45, 50 30 Q 60 15, 70 30" 
                    stroke="url(#arrowGrad)" 
                    strokeWidth="3" 
                    fill="none" 
                    strokeLinecap="round"
                    className="animate-pulse"
                  />
                  <path 
                    d="M70 30 L 75 25 L 75 35 Z" 
                    fill="url(#arrowGrad)"
                    className="animate-pulse"
                  />
                  <circle 
                    cx="12" 
                    cy="30" 
                    r="3" 
                    fill="#00d4ff" 
                    className="animate-ping"
                  />
                </svg>
              </div>
            </div>

            {/* Right side - Form */}
            <div className="order-2 lg:order-2 flex justify-center lg:justify-end">
              <div className="w-full max-w-md lg:max-w-lg">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                  <div className="relative bg-white/15 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-white/30 shadow-2xl hover:bg-white/20 transition-all duration-300">
                    <h2 className="text-xl md:text-2xl font-bold text-center mb-6">
                      Apply Now - Start Your journey for <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">FREE</span>
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <label htmlFor="fullName" className="block mb-2 font-medium text-sm">
                          Full Name
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            placeholder="Enter your full name"
                            required
                            className="w-full p-4 border-none rounded-xl bg-white/20 text-white text-base backdrop-blur-sm border-2 border-white/20 transition-all duration-300 placeholder-white/70 focus:outline-none focus:border-cyan-400 focus:bg-white/25 hover:border-white/40"
                          />
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/0 to-blue-500/0 hover:from-cyan-400/5 hover:to-blue-500/5 transition-all duration-300 pointer-events-none"></div>
                        </div>
                      </div>
                      <div>
                        <label htmlFor="phoneNumber" className="block mb-2 font-medium text-sm">
                          Phone Number
                        </label>
                        <div className="relative">
                          <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            placeholder="Enter your phone number"
                            required
                            className="w-full p-4 border-none rounded-xl bg-white/20 text-white text-base backdrop-blur-sm border-2 border-white/20 transition-all duration-300 placeholder-white/70 focus:outline-none focus:border-cyan-400 focus:bg-white/25 hover:border-white/40"
                          />
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/0 to-blue-500/0 hover:from-cyan-400/5 hover:to-blue-500/5 transition-all duration-300 pointer-events-none"></div>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="relative w-full p-4 border-none rounded-xl text-white text-lg font-semibold cursor-pointer transition-all duration-300 uppercase tracking-wide flex items-center justify-center gap-3 overflow-hidden group hover:shadow-2xl"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:from-blue-500 group-hover:to-cyan-400"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                        <span className="relative z-10">Apply Now</span>
                        <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="py-8 md:py-8">
          <div className="flex items-center justify-center">
            <div className="bg-gradient-to-r from-white/5 to-white/5 backdrop-blur-lg rounded-2xl p-4 md:p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:bg-white/15 max-w-5xl w-full">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-3 h-3 bg-green-400 rounded-full mb-2"></div>
                  <span className="text-lg md:text-xl lg:text-2xl font-bold">2000+</span>
                  <span className="text-xs md:text-sm opacity-80">Students Placed</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-3 h-3 bg-red-400 rounded-full mb-2"></div>
                  <span className="text-lg md:text-xl lg:text-2xl font-bold">41 LPA</span>
                  <span className="text-xs md:text-sm opacity-80">Highest Salary</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-3 h-3 bg-orange-400 rounded-full mb-2"></div>
                  <span className="text-lg md:text-xl lg:text-2xl font-bold">500+</span>
                  <span className="text-xs md:text-sm opacity-80">Partner Companies</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mb-2"></div>
                  <span className="text-lg md:text-xl lg:text-2xl font-bold">7.4 LPA</span>
                  <span className="text-xs md:text-sm opacity-80">Average Salary</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom spacer */}
        <div className="h-8"></div>
      </div>
    </div>
  );
};

export default Hero;