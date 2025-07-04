import React, { useState, useEffect } from 'react';
import { Package, Scale, Briefcase } from 'lucide-react';

export default function CourseBenefits() {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isDesktop = windowWidth >= 1024;
  const isTablet = windowWidth >= 700;
  const isMobile = windowWidth < 700;

  return (
    <div className="bg-sky-50" style={{
      padding: isMobile ? '2rem 1rem' : isTablet ? '3rem 1.5rem' : '4rem 2rem'
    }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-start" style={{
          flexDirection: isDesktop ? 'row' : 'column',
          gap: isMobile ? '1.5rem' : isTablet ? '2rem' : '2.5rem'
        }}>
          {/* Left side - Headline */}
          <div className="w-full flex-shrink-0" style={{
            width: isDesktop ? '30%' : '100%',
            marginBottom: isMobile ? '1rem' : '0'
          }}>
            <div className="mb-4">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide inline-block">
                IDEAL FOR
              </p>
              <div className="w-20 h-0.5 bg-gradient-to-r from-blue-900 to-blue-500 mt-1"></div>
            </div>
            <h2 className="relative font-normal leading-tight" style={{
              fontSize: isMobile ? '1.75rem' : isTablet ? '2.25rem' : '2.5rem'
            }}>
              <span className="font-bold bg-gradient-to-r from-blue-900 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
                Our course is ideal for you if you want to
              </span>
            </h2>  
          </div>

          {/* Right side - Benefits cards */}
          <div className="w-full flex" style={{
            width: isDesktop ? '70%' : '100%',
            flexDirection: isTablet ? 'row' : 'column',
            gap: isMobile ? '1rem' : isTablet ? '1.5rem' : '2rem',
            justifyContent: isTablet ? 'space-between' : 'center',
            alignItems: isTablet ? 'stretch' : 'center'
          }}>
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 relative flex-1" style={{
              maxWidth: isTablet ? '450px' : '400px',
              width: isTablet ? 'auto' : '100%',
              padding: isMobile ? '1.5rem' : '2rem',
              minWidth: isTablet ? '200px' : 'auto'
            }}>
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                1
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Learn at your own pace
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  No fixed schedule - you decide when & how fast you learn.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 relative flex-1" style={{
              maxWidth: isTablet ? '450px' : '400px',
              width: isTablet ? 'auto' : '100%',
              padding: isMobile ? '1.5rem' : '2rem',
              minWidth: isTablet ? '200px' : 'auto'
            }}>
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                2
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scale className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Balance learning with work or college
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Perfect if you're a working professional or a student with limited time.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 relative flex-1" style={{
              maxWidth: isTablet ? '450px' : '400px',
              width: isTablet ? 'auto' : '100%',
              padding: isMobile ? '1.5rem' : '2rem',
              minWidth: isTablet ? '200px' : 'auto'
            }}>
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                3
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Get job-ready
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  You're serious about gaining real skills & building a solid tech portfolio to get job ready.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}