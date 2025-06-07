import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border-b bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full text-left px-5 py-4 flex justify-between items-center"
      >
        <span className="font-medium text-gray-800 text-base">{question}</span>
        <ChevronDownIcon
          className={`h-5 w-5 text-gray-500 transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="px-5 pb-4 pt-1">
          <p className="text-gray-600 text-sm leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQItem;
