import React from "react";
import ContactForm from "../components/ContactUs/ContactForm";
import ContactInfo from "../components/ContactUs/ContactInfo";
import SocialMedia from "../components/ContactUs/SocialMedia";
import MapSection from "../components/ContactUs/MapSection";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 px-6 sm:px-10 lg:px-20 relative flex flex-col">

      {/* Hero Section - One-third Screen */}
      <section
        className="relative w-full h-[47vh] bg-gradient-to-br from-white via-blue-50 to-blue-100 flex flex-col items-center justify-center text-center px-4 sm:px-8 py-10 rounded-b-[60px] shadow-md"
        style={{
          backgroundImage:
            "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)",
        }}
      >

        {/* Message Logo */}
        <div className="mb-4">
          <span className="inline-flex items-center justify-center rounded-full bg-white/80 shadow-md p-3">
            <img
              src="https://cdn-icons-png.flaticon.com/512/542/542638.png"
              alt="Message Icon"
              className="w-16 h-16 object-contain"
            />
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold text-blue-900 mb-4">
          Interested in Working <span className="text-blue-600">Together ?</span>
        </h1>
        <p className="text-blue-500 text-base sm:text-lg max-w-xl">
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