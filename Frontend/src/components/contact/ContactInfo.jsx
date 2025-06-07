import React from "react";

const ContactInfo = () => {
  return (
    <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-6 sm:p-8 transform hover:scale-[1.02] transition-all duration-300 border border-blue-100">
      <h2 className="text-base xs:text-lg sm:text-xl font-semibold text-blue-800 mb-4 sm:mb-6 flex items-center">
        <span className="w-7 h-7 bg-blue-100 rounded-full flex items-center justify-center mr-2">
          <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </span>
        Contact Information
      </h2>
      <div className="space-y-4 sm:space-y-6">
        <div className="flex items-start space-x-2 xs:space-x-3 sm:space-x-4 group">
          <div className="bg-blue-100 p-1.5 xs:p-2 sm:p-3 rounded-full group-hover:bg-blue-200 transition-colors duration-300 flex-shrink-0">
            <svg className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="min-w-0">
            <h3 className="font-medium text-gray-800 text-sm xs:text-base">Email</h3>
            <a href="mailto:info@entrepreneurshipnetwork.net" className="text-blue-600 hover:text-blue-800 transition-colors duration-300 text-xs xs:text-sm sm:text-base break-words">
              info@entrepreneurshipnetwork.net
            </a>
          </div>
        </div>

        <div className="flex items-start space-x-2 xs:space-x-3 sm:space-x-4 group">
          <div className="bg-blue-100 p-1.5 xs:p-2 sm:p-3 rounded-full group-hover:bg-blue-200 transition-colors duration-300 flex-shrink-0">
            <svg className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div className="min-w-0">
            <h3 className="font-medium text-gray-800 text-sm xs:text-base">Phone</h3>
            <a href="tel:+911234567890" className="text-blue-600 hover:text-blue-800 transition-colors duration-300 text-xs xs:text-sm sm:text-base">
              +91 123 456 7890
            </a>
          </div>
        </div>

        <div className="flex items-start space-x-2 xs:space-x-3 sm:space-x-4 group">
          <div className="bg-blue-100 p-1.5 xs:p-2 sm:p-3 rounded-full group-hover:bg-blue-200 transition-colors duration-300 flex-shrink-0">
            <svg className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div className="min-w-0">
            <h3 className="font-medium text-gray-800 text-sm xs:text-base">Location</h3>
            <p className="text-gray-600 text-xs xs:text-sm sm:text-base">
              India Accelerator<br />
              Noida 201301 UP, India
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
