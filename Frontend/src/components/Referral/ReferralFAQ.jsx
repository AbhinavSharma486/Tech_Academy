import React, { useState } from "react";
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import FAQItem from "../LandingPage/FAQ/FAQItem";
import faqIllustration from "../../assets/Refer/faq.png";

const faqData = [
  {
    question: "What’s the reward structure for referring a friend?",
    answer: (
      <div className="overflow-x-auto">
        <p className="mb-4">
          Below is the referral reward and friend discount structure for each course:
        </p>
        <table className="min-w-full text-sm border border-gray-300 rounded-md">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="border px-3 py-2">Course Type</th>
              <th className="border px-3 py-2">Course</th>
              <th className="border px-3 py-2">Referral Cash</th>
              <th className="border px-3 py-2">Friend’s Discount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-3 py-2" rowSpan={4}>Online Live Courses</td>
              <td className="border px-3 py-2">JAVA / MERN Full Stack</td>
              <td className="border px-3 py-2">₹ 6,000</td>
              <td className="border px-3 py-2">₹ 6,000</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">Data Science & AI</td>
              <td className="border px-3 py-2">₹ 6,000</td>
              <td className="border px-3 py-2">₹ 6,000</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">Data Analytics</td>
              <td className="border px-3 py-2">₹ 3,000</td>
              <td className="border px-3 py-2">₹ 3,000</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">Cybersecurity</td>
              <td className="border px-3 py-2">₹ 6,000</td>
              <td className="border px-3 py-2">₹ 6,000</td>
            </tr>

            <tr>
              <td className="border px-3 py-2" rowSpan={4}>Offline Classroom Courses</td>
              <td className="border px-3 py-2">JAVA / MERN Full Stack (Noida)</td>
              <td className="border px-3 py-2">₹ 5,000</td>
              <td className="border px-3 py-2">₹ 5,000</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">DSA / Frontend / Data Analytics (Noida)</td>
              <td className="border px-3 py-2">₹ 3,000</td>
              <td className="border px-3 py-2">₹ 3,000</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">JAVA / MERN Full Stack (Hyderabad & Pune)</td>
              <td className="border px-3 py-2">₹ 10,000</td>
              <td className="border px-3 py-2">₹ 10,000</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">DSA / Frontend / Data Analytics (Hyderabad & Pune)</td>
              <td className="border px-3 py-2">₹ 5,000</td>
              <td className="border px-3 py-2">₹ 5,000</td>
            </tr>

            <tr>
              <td className="border px-3 py-2">Self-Paced Online</td>
              <td className="border px-3 py-2">JAVA / MERN Full Stack</td>
              <td className="border px-3 py-2">₹ 3,000</td>
              <td className="border px-3 py-2">₹ 3,000</td>
            </tr>
          </tbody>
        </table>
        <p className="text-sm text-gray-600 mt-4 italic">
          *For course prices, kindly request a callback.
        </p>
      </div>
    )
  },
  {
    question: "Who can I refer?",
    answer: "Anyone interested in learning and joining our program.",
  },
  {
    question: "Can I refer friends even if I haven’t enrolled in any course?",
    answer: "Yes! Just signing up on the website gives you access to the “Refer & Earn” feature.",
  },
  {
    question: "Are there any restrictions on who I can refer?",
    answer: "Yes. You cannot refer yourself or someone who has already joined a course before your referral code was generated."
  },
  {
    question: "When am I eligible to get the bonus?",
    answer: "After your referred friend successfully joins and completes enrollment.",
  },
  {
    question: "Does my referral code expire?",
    answer: "Yes, it’s valid for 60 days from when your friend signs up using your code. If they enroll and complete payment within that time, you get the reward. The countdown starts from their signup date, not when you shared the code.",
  },
  {
    question: "My friend forgot to enter the referral code — what now?",
    answer: "In that case, the referral won’t be counted, and we won’t be able to process any rewards.",
  },
  {
    question: "Is there any limit to the number of people I can refer?",
    answer: "No, you can refer unlimited people.",
  },
];

const ReferralFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Horizontal Line Above FAQ Section */}
      <hr className="border-t-2 border-gray-300" />

      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">

          {/* Top Banner with Illustration */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-14">
            <div className="text-center md:text-left">
              <span className="inline-block bg-gradient-to-r from-blue-600 to-cyan-400 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                Have any doubts?
              </span>
              <h2 className="text-4xl font-bold mb-2">
                <span className="text-blue-600">Frequently</span> Asked Questions
              </h2>
              <p className="text-gray-600 max-w-md">
                Work hard with us, with dedication and commitment, and watch multiple opportunities grab you and transform your future!
              </p>
            </div>

            <img
              src={faqIllustration}
              alt="FAQ Illustration"
              className="max-w-xs md:max-w-md w-full"
            />
          </div>

          {/* Collapsible FAQ Section */}
          <div className="space-y-4">
  {faqData.map((faq, index) => (
    <div key={index}>
      <FAQItem
        question={faq.question}
        answer={faq.answer}
        isOpen={openIndex === index}
        onToggle={() => handleToggle(index)}
      />
    </div>
  ))}
</div>

        </div>
      </section>

      {/* Horizontal Line Below FAQ Section (before footer) */}
      <hr className="border-t-2 border-gray-300" />
    </>
  );
};

export default ReferralFAQ;
