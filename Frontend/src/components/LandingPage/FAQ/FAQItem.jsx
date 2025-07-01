import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const FAQItem = ({ question, answer, isOpen, onToggle, variants }) => {
  return (
    <motion.div
      layout
      variants={variants}
      className="bg-white rounded-xl shadow p-5"
    >
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={onToggle}
      >
        <span className="text-lg font-medium text-gray-800">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDownIcon className="w-5 h-5 text-gray-500" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { height: "auto", opacity: 1 },
              collapsed: { height: 0, opacity: 0 },
            }}
            transition={{
              duration: 0.5, 
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="overflow-hidden mt-3"
          >
            <p className="text-sm text-gray-600">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FAQItem;