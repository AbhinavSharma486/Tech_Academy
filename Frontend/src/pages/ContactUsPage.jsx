import React from "react";
import ContactForm from "../components/ContactUs/ContactForm";
import ContactInfo from "../components/ContactUs/ContactInfo";
import SocialMedia from "../components/ContactUs/SocialMedia";
import MapSection from "../components/ContactUs/MapSection";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4 sm:px-6 md:px-10 lg:px-20 relative flex flex-col">
      {/* Hero Section - One-third Screen */}
      <section className="relative w-full min-h-[350px] h-[50vh] sm:h-[55vh] md:h-[60vh] lg:h-[60vh] xl:h-[55vh]
                  bg-gradient-to-br from-white via-blue-50 to-blue-100
                  flex flex-col items-center justify-center text-center
                  px-4 sm:px-8 py-8 sm:py-10 pt-[120px]
                  rounded-b-[40px] sm:rounded-b-[60px] md:rounded-b-[80px] lg:rounded-b-[100px]"
        style={{
          backgroundImage:
            "linear-gradient(180deg, #a1c4fd 0%, #c2e9fb 100%)",
        }}
      >
        {/* Message Logo */}
        <div className="mb-4 mt-8 sm:mt-12 md:mt-16 lg:mt-20">
          <span className="inline-flex items-center justify-center rounded-full bg-white/80 shadow-md p-2 sm:p-3">
            <img
              src="https://cdn-icons-png.flaticon.com/512/542/542638.png"
              alt="Message Icon"
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 object-contain"
            />
          </span>
        </div>

        {/* Heading Text */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-3 sm:mb-4 leading-tight">
          Interested in Working <span className="text-blue-600">Together ?</span>
        </h1>
        {/* Paragraph Text */}
        <p className="text-sm sm:text-base md:text-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl px-2 sm:px-0">
          We’d love to learn more about how we can design and build together.
        </p>
      </section>

      {/* Contact Sections */}
      <div className="mx-auto relative w-full max-w-full sm:max-w-full md:max-w-[600px] lg:max-w-[1024px] z-10 mt-12 pb-16">
        {/* Small and Medium Screens */}
        <div className="space-y-6 block md:block lg:hidden px-2 sm:px-6">
          <div className="w-full" id="contact-form">
            <ContactForm />
          </div>
          <div className="w-full">
            <ContactInfo />
          </div>
          <div className="w-full">
            <SocialMedia />
          </div>
          <div className="w-full">
            <MapSection />
          </div>
        </div>

        {/* Large Screens */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <div id="contact-form">
            <ContactForm />
          </div>
          <div className="space-y-6">
            <ContactInfo />
            <SocialMedia />
            <MapSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;