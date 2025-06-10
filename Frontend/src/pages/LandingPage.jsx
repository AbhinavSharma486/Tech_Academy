import React from 'react';
import { motion } from "framer-motion";
import FAQSection from "../components/LandingPage/FAQ/FAQSection";
import Home from './Home/Home';


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
};

const LandingPage = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-gradient-to-br from-gray-50 to-blue-50 relative"
    >
      <Home />
      <FAQSection />
    </motion.div>
  );
};

export default LandingPage;