import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    state: "",
    degree: "",
    graduationYear: "",
    jobStatus: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Callback Request Submitted:", formData);
    alert("Thank you! Your callback request has been received.");
  };

  
  const fieldVariants = {
    hidden: { y: -50, opacity: 0 }, 
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50, 
        damping: 10,  
        duration: 1.2,
      },
    },
  };

  return (
    <div className="max-w-full mx-auto bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-6 sm:p-8 border border-blue-100 transform hover:scale-[1.02] transition-all duration-300">
      <h2 className="text-2xl font-semibold text-blue-800 mb-4 flex items-center justify-center">
        Request a Callback
      </h2>
      <p className="text-center text-gray-600 mb-6">
        Please fill out the form below and we will get back to you as soon as possible.
      </p>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Field 1: Your Name */}
        <motion.div
          className="relative"
          variants={fieldVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          transition={{ ...fieldVariants.visible.transition, delay: 0.5 }} 
        >
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            required
            className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          />
        </motion.div>

        {/* Field 2: WhatsApp Number */}
        <motion.div
          className="relative"
          variants={fieldVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          transition={{ ...fieldVariants.visible.transition, delay: 1.0 }}
        >
          <label htmlFor="whatsapp" className="block text-gray-700 font-medium mb-2">
            WhatsApp Number
          </label>
          <input
            type="tel"
            id="whatsapp"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            placeholder="123-456-7890"
            required
            className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          />
        </motion.div>

        {/* Field 3: Select State */}
        <motion.div
          className="relative"
          variants={fieldVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          transition={{ ...fieldVariants.visible.transition, delay: 1.5 }}
        >
          <label htmlFor="state" className="block text-gray-700 font-medium mb-2">
            Select State
          </label>
          <select
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          >
            <option value="" disabled>
              Select your state
            </option>
            <option value="State1">State 1</option>
            <option value="State2">State 2</option>
            <option value="State3">State 3</option>
          </select>
        </motion.div>

        {/* Field 4: Select Degree */}
        <motion.div
          className="relative"
          variants={fieldVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          transition={{ ...fieldVariants.visible.transition, delay: 2.0 }}
        >
          <label htmlFor="degree" className="block text-gray-700 font-medium mb-2">
            Select Degree
          </label>
          <select
            id="degree"
            name="degree"
            value={formData.degree}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          >
            <option value="" disabled>
              Select your degree
            </option>
            <option value="Bachelors">Bachelors</option>
            <option value="Masters">Masters</option>
            <option value="PhD">PhD</option>
          </select>
        </motion.div>

        {/* Field 5: Select Graduation Year */}
        <motion.div
          className="relative"
          variants={fieldVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          transition={{ ...fieldVariants.visible.transition, delay: 2.5 }} 
        >
          <label htmlFor="graduationYear" className="block text-gray-700 font-medium mb-2">
            Select Graduation Year
          </label>
          <select
            id="graduationYear"
            name="graduationYear"
            value={formData.graduationYear}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          >
            <option value="" disabled>
              Select your graduation year
            </option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
          </select>
        </motion.div>

        {/* Field 6: Job Status */}
        <motion.div
          className="relative"
          variants={fieldVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          transition={{ ...fieldVariants.visible.transition, delay: 3.0 }} 
        >
          <label htmlFor="jobStatus" className="block text-gray-700 font-medium mb-2">
            Job Status
          </label>
          <select
            id="jobStatus"
            name="jobStatus"
            value={formData.jobStatus}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          >
            <option value="" disabled>
              Select your job status
            </option>
            <option value="Employed">Employed</option>
            <option value="Unemployed">Unemployed</option>
            <option value="Student">Student</option>
          </select>
        </motion.div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          className="w-40 md:w-48 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold py-2 md:py-3 text-sm md:text-base rounded-lg hover:from-blue-700 hover:to-blue-900 transform hover:scale-[1.02] transition-all duration-300 shadow-lg mx-auto block"
          variants={fieldVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          transition={{ ...fieldVariants.visible.transition, delay: 3.5 }} 
        >
          Request Callback
        </motion.button>
      </form>
    </div>
  );
};

export default ContactForm;