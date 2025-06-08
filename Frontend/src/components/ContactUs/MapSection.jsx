import React from "react";

const MapSection = () => {
  return (
    <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-6 transform hover:scale-[1.02] transition-all duration-300 border border-blue-100">
      <h2 className="text-xl sm:text-2xl font-semibold text-blue-800 mb-2 sm:mb-4 flex items-center">
        <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
          <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
        </span>
        Our Location
      </h2>
      <div className="bg-blue-50 rounded-lg h-32 sm:h-48 flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl sm:text-3xl mb-1">🗺️</div>
          <p className="text-blue-600 font-medium text-xs sm:text-sm">Interactive Map Coming Soon</p>
        </div>
      </div>
    </div>
  );
};

export default MapSection;
