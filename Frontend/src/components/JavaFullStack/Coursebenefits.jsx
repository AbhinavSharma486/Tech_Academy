import React from 'react';
import { Package, Scale, Briefcase } from 'lucide-react';

export default function CourseBenefits() {
  return (
    <div className="bg-sky-50 px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-8 items-start" style={{
          flexDirection: window.innerWidth >= 1024 ? 'row' : 'column'
        }}>
          {/* Left side - Headline - 30% width */}
          <div className="w-full flex-shrink-0" style={{
            width: window.innerWidth >= 1024 ? '30%' : '100%'
          }}>
            <div className="mb-4">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide inline-block">
                IDEAL FOR
              </p>
              <div className="w-20 h-0.5 bg-gradient-to-r from-blue-900 to-blue-500 mt-1"></div>
            </div>
            <h2 className="relative text-4xl md:text-4xl lg:text-4xl font-normal leading-tight">
              <span className="font-bold bg-gradient-to-r from-blue-900 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">Our course is ideal for you if you want to</span>
            </h2>  
          </div>

          {/* Right side - Benefits cards - 70% width divided into 3 equal parts */}
          <div className="w-full flex gap-6" style={{
            width: window.innerWidth >= 1024 ? '70%' : '100%',
            flexDirection: window.innerWidth >= 660 ? 'row' : 'column'
          }}>
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative flex-1" style={{
              maxWidth: '450px'
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
                <p className="text-gray-600 text-sm">
                  No fixed schedule - you decide when & how fast you learn.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative flex-1" style={{
              maxWidth: '450px'
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
                <p className="text-gray-600 text-sm">
                  Perfect if you're a working professional or a student with limited time.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative flex-1" style={{
              maxWidth: '450px'
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
                <p className="text-gray-600 text-sm">
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