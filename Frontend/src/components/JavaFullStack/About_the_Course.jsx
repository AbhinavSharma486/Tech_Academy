import React from 'react';
import { Download, ArrowRight, GraduationCap, BookOpen, Code, Headphones } from 'lucide-react';

export default function FullStackPrograms() {
  const programs = [
    {
      id: 'mern',
      title: 'MERN FULL STACK',
      description: 'Up skill on the most in demand skills in the market - JavaScript, React.js, Node.js, MongoDB, Express.js.',
      bgColor: 'bg-gradient-to-br from-blue-400 via-blue-500 to-blue-700',
      iconBg: 'bg-blue-700',
      accentColor: 'text-blue-500',
      borderColor: 'border-blue-200',
      hoverShadow: 'hover:shadow-blue-200/50',
      order: 'order-1'
    },
    {
      id: 'java',
      title: 'JAVA FULL STACK',
      description: 'Master DSA, Java, and Spring Boot to build strong problem-solving skills and become a job-ready software developer.',
      bgColor: 'bg-gradient-to-br from-purple-400 via-purple-500 to-purple-700',
      iconBg: 'bg-purple-700',
      accentColor: 'text-purple-500',
      borderColor: 'border-purple-200',
      hoverShadow: 'hover:shadow-purple-200/50',
      order: 'order-2'
    }
  ];

  const features = [
    {
      icon: GraduationCap,
      label: 'Eligibility',
      value: 'All Degrees & Backgrounds Eligible'
    },
    {
      icon: BookOpen,
      label: 'Content',
      value: '100+ Hours'
    },
    {
      icon: Code,
      label: 'Placement Services',
      value: 'Avail anytime within 2 years post course completion.'
    },
    {
      icon: Headphones,
      label: 'Support',
      value: '24x7 Chat Doubt Support'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16 md:py-20 px-6 sm:px-8 lg:px-12 xl:px-16">
      <style jsx>{`
        @media (max-width: 610px) {
          .cards-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
            margin: 0 auto !important;
            max-width: 580px !important;
          }
          .card-header {
            height: auto !important;
            min-height: 140px !important;
            padding: 16px !important;
          }
          .card-title {
            font-size: 1.25rem !important;
            line-height: 1.3 !important;
            margin-bottom: 8px !important;
          }
          .card-description {
            font-size: 0.8rem !important;
            line-height: 1.3 !important;
          }
          .card-content {
            padding: 16px !important;
          }
          .card-buttons {
            padding: 0 16px 16px 16px !important;
          }
          .button-text {
            font-size: 0.85rem !important;
            font-weight: 600 !important;
            white-space: nowrap !important;
          }
          .button-container {
            height: 40px !important;
          }
          .feature-item {
            margin-bottom: 12px !important;
          }
        }
        @media (max-width: 320px) {
          .button-text {
            font-size: 0.8rem !important;
            font-weight: 600 !important;
            white-space: nowrap !important;
          }
          .card-buttons {
            gap: 0.5rem !important;
          }
        }
        @media (min-width: 611px) and (max-width: 1024px) {
          .cards-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.25rem !important;
            margin: 0 auto !important;
            max-width: 750px !important;
          }
          .card-header {
            min-height: 160px !important;
            padding: 18px !important;
          }
          .card-title {
            font-size: 1.15rem !important;
            line-height: 1.2 !important;
            margin-bottom: 8px !important;
          }
          .card-description {
            font-size: 0.8rem !important;
            line-height: 1.3 !important;
          }
          .card-content {
            padding: 18px !important;
          }
          .card-buttons {
            padding: 0 18px 18px 18px !important;
          }
          .button-container {
            height: 40px !important;
          }
          .feature-item {
            margin-bottom: 12px !important;
          }
        }
        @media (min-width: 1025px) {
          .cards-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            max-width: 700px !important;
            gap: 1.5rem !important;
            margin: 0 auto !important;
          }
          .card-header {
            min-height: 170px !important;
            padding: 20px !important;
          }
          .card-title {
            font-size: 1.25rem !important;
            line-height: 1.2 !important;
            margin-bottom: 10px !important;
          }
          .card-description {
            font-size: 0.85rem !important;
            line-height: 1.3 !important;
          }
          .card-content {
            padding: 20px !important;
          }
          .card-buttons {
            padding: 0 20px 20px 20px !important;
          }
          .button-container {
            height: 42px !important;
          }
          .feature-item {
            margin-bottom: 14px !important;
          }
        }
      `}</style>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-block bg-white px-4 md:px-6 py-2 rounded-full shadow-sm border border-gray-200 mb-4 md:mb-6">
            <p className="text-sm md:text-base font-semibold text-gray-600 tracking-wide uppercase">
              Learn Full-Stack Web Development
            </p>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 px-4">
            <span className="relative bg-gradient-to-r from-blue-800 via-blue-500 to-blue-900 bg-clip-text text-transparent">
             Full Stack Programs
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-800 via-blue-500 to-blue-900"></span>
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Curated by <span className="font-semibold text-gray-900">top tech professionals</span>
          </p>
        </div>

        {/* Program Cards */}
        <div className="cards-grid grid gap-6 mb-14 mx-auto">
          {programs.map((program) => (
            <div 
              key={program.id}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${program.order}`}
            >
              {/* Header Section */}
              <div className={`${program.bgColor} card-header p-5 text-white relative overflow-hidden min-h-[150px] h-auto`}>
                {/* Decorative elements */}
                <div className="absolute inset-0">
                  {/* Circuit board pattern */}
                  <div className="absolute top-6 left-6 w-16 h-16 opacity-10">
                    <div className="grid grid-cols-4 gap-1 h-full">
                      {[...Array(16)].map((_, i) => (
                        <div key={i} className="bg-white rounded-sm"></div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Geometric shapes */}
                  <div className="absolute top-8 right-8 w-12 h-12 border-2 border-white/20 rounded-full"></div>
                  <div className="absolute bottom-8 left-8 w-8 h-8 border-2 border-white/15 rotate-45"></div>
                  
                  {/* Code-like lines */}
                  <div className="absolute bottom-6 right-6 opacity-20">
                    <div className="space-y-1">
                      <div className="w-10 h-0.5 bg-white rounded"></div>
                      <div className="w-8 h-0.5 bg-white rounded"></div>
                      <div className="w-12 h-0.5 bg-white rounded"></div>
                    </div>
                  </div>
                  
                  {/* Floating dots */}
                  <div className="absolute top-12 right-4 w-1.5 h-1.5 bg-white/30 rounded-full"></div>
                  <div className="absolute top-20 right-12 w-1 h-1 bg-white/40 rounded-full"></div>
                  <div className="absolute bottom-16 left-4 w-1 h-1 bg-white/25 rounded-full"></div>
                </div>

                <div className="absolute top-3 right-3 z-20">
                  <span className="bg-white/30 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full border border-white/20">
                    LIFETIME ACCESS
                  </span>
                </div>
                <div className={`w-10 h-10 ${program.iconBg} rounded-xl flex items-center justify-center mb-3 relative z-20 shadow-lg`}>
                  <div className="w-5 h-5 bg-white rounded-lg flex items-center justify-center">
                    <div className="w-2.5 h-2.5 bg-gradient-to-br from-gray-400 to-gray-600 rounded"></div>
                  </div>
                </div>
                <h2 className="card-title text-xl font-bold mb-2 relative z-20 leading-tight drop-shadow-sm max-w-[85%]">{program.title}</h2>
                <p className="card-description text-sm text-white leading-relaxed relative z-20 drop-shadow-sm max-w-[90%]">
                  {program.description}
                </p>
              </div>

              {/* Features Section */}
              <div className="card-content p-6 space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`w-8 h-8 ${program.accentColor} bg-gray-50 rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <feature.icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">{feature.label}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{feature.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="card-buttons px-6 pb-6 flex gap-3">
                <button className="button-container flex-1 bg-gray-100 text-gray-700 font-semibold py-3 px-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-200 transition-colors h-12">
                  <span className="button-text text-sm">Brochure</span>
                  <Download className="w-4 h-4" />
                </button>
                <button className="button-container flex-1 bg-blue-600 text-white font-semibold py-3 px-2 rounded-lg flex items-center justify-center space-x-2 shadow-lg hover:bg-blue-700 transition-colors h-12">
                  <span className="button-text text-sm">Apply Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}