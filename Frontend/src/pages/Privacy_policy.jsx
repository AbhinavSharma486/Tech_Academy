import React from 'react';
import Privacy_policy_Page from '../components/privacy_&_policy/Privacy_policy_Page';

const Privacy_policy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4 sm:px-6 md:px-10 lg:px-20 flex flex-col">
      
      {/* Hero Section */}
      <section
        className="relative w-full min-h-[300px] h-[45vh] sm:h-[50vh] md:h-[55vh] lg:h-[60vh] xl:h-[55vh]
        bg-gradient-to-br from-white via-blue-50 to-blue-100
        flex flex-col items-center justify-center text-center
        px-4 sm:px-8 py-8 sm:py-10 pt-[100px]
        rounded-b-[40px] sm:rounded-b-[60px] md:rounded-b-[80px] lg:rounded-b-[100px]"
        style={{
          backgroundImage: "linear-gradient(180deg, #a1c4fd 0%, #c2e9fb 100%)",
        }}
      >
        {/* Icon */}
        <div className="mb-4 sm:mt-30">
          <span className="inline-flex items-center justify-center rounded-full bg-white/80 shadow-md p-3">
            <img
              src="https://cdn-icons-png.flaticon.com/512/633/633816.png"
              alt="Privacy Icon"
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain"
            />
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-3 leading-snug">
          Our <span className="text-blue-700">Privacy Policy</span>
        </h1>

        {/* Subtext */}
        <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl">
          Learn how we collect, use, and safeguard your information when you use Tech Academy’s services.
        </p>
      </section>

      {/* Privacy Policy Content Section */}
      <div className="mx-auto relative w-full max-w-full sm:max-w-full md:max-w-[700px] lg:max-w-[1024px] z-10 mt-12 pb-16">
        <div id="privacy-policy-content">
          <Privacy_policy_Page />
        </div>
      </div>
    </div>
  );
};

export default Privacy_policy;
