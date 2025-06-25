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

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const applicationData = {
      ...formData,
      course: 'Java Full Stack Development',
      timestamp: new Date().toISOString()
    };

    console.log('Application data:', applicationData);
    alert(`Application submitted!\nName: ${formData.fullName}\nPhone: ${formData.phoneNumber}`);
    setFormData({ fullName: '', phoneNumber: '' });
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

      <div className="max-w-6xl mx-auto min-h-screen flex flex-col relative z-10">
        <div className="h-[30vh]"></div>

        <div className="h-[30vh] px-5 flex gap-16 items-center max-md:flex-col max-md:h-auto max-md:gap-8 relative">
          <div className="flex-1 pr-8 max-md:pr-0 max-md:text-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-lg blur opacity-25"></div>
              <h1 className="relative text-4xl font-normal mb-5 text-white leading-tight max-md:text-3xl">
                Master <span className="font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">JAVA Full Stack Development</span>, Data Structures & Algorithms to Land Your Dream Job at Top Tech Companies.
              </h1>
            </div>
            <p className="text-base opacity-90 leading-relaxed backdrop-blur-sm bg-white/5 p-4 rounded-lg border border-white/10">
              Comprehensive curriculum designed and taught by Alumni from IITs & Leading Tech Companies. 
              Master Java, Spring Boot, React, Data Structures, Algorithms, and System Design. 
              Get job-ready with real-world projects, coding challenges, and interview preparation. 
              Join thousands of successful graduates working at top tech companies.
            </p>
          </div>

          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 ml-1 z-10 max-md:hidden">
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

          <div className="flex-1 pl-8 max-md:pl-0">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-white/15 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-2xl max-md:mx-2 max-md:p-5 hover:bg-white/20 transition-all duration-300">
                <div className="absolute top-4 right-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <h2 className="text-2xl font-bold text-center mb-5">
                  Apply Now - Start Your journey for <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">FREE</span>
                </h2>
                <div>
                  <div className="mb-6">
                    <label htmlFor="fullName" className="block mb-2 font-medium text-sm flex items-center gap-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
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
                  <div className="mb-6">
                    <label htmlFor="phoneNumber" className="block mb-2 font-medium text-sm flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
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
                    onClick={handleSubmit}
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

        <div className="h-auto min-h-[25vh] flex items-center justify-center relative overflow-hidden mt-25 px-4">
          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-4 sm:p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-white/15 max-w-3xl w-full">
            <div className="flex items-center justify-center gap-10 sm:gap-12 md:gap-16 lg:gap-20 flex-wrap">
              <div className="flex flex-col items-center min-w-0 flex-shrink-0">
                <div className="w-3 h-3 bg-green-400 rounded-full mb-2"></div>
                <span className="text-lg sm:text-xl md:text-2xl font-bold whitespace-nowrap">2000+</span>
                <span className="text-xs sm:text-sm opacity-80 text-center">Students Placed</span>
              </div>
              <div className="flex flex-col items-center min-w-0 flex-shrink-0">
                <div className="w-3 h-3 bg-red-400 rounded-full mb-2"></div>
                <span className="text-lg sm:text-xl md:text-2xl font-bold whitespace-nowrap">41 LPA</span>
                <span className="text-xs sm:text-sm opacity-80 text-center">Highest Salary</span>
              </div>
              <div className="flex flex-col items-center min-w-0 flex-shrink-0">
                <div className="w-3 h-3 bg-orange-400 rounded-full mb-2"></div>
                <span className="text-lg sm:text-xl md:text-2xl font-bold whitespace-nowrap">500+</span>
                <span className="text-xs sm:text-sm opacity-80 text-center">Partner Companies</span>
              </div>
              <div className="flex flex-col items-center min-w-0 flex-shrink-0">
                <div className="w-3 h-3 bg-blue-400 rounded-full mb-2"></div>
                <span className="text-lg sm:text-xl md:text-2xl font-bold whitespace-nowrap">7.4 LPA</span>
                <span className="text-xs sm:text-sm opacity-80 text-center">Average Salary</span>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[10vh]"></div>
      </div>
    </div>
  );
};

export default Hero;
