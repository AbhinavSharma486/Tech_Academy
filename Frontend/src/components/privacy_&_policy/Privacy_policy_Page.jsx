import React from 'react';
import image_1 from '../../assets/privacy_policy/privacy_policy_1.webp';
import image_2 from '../../assets/privacy_policy/privacy_policy_2.jpg';
import image_3 from '../../assets/privacy_policy/privacy_policy_3.jpg';
import image_4 from '../../assets/privacy_policy/privacy_policy_4.png';
import image_5 from '../../assets/privacy_policy/privacy_policy_5.jpg';
import image_6 from '../../assets/privacy_policy/privacy_policy_6.jpg';
import image_7 from '../../assets/privacy_policy/privacy_policy_7.jpg';
import image_8 from '../../assets/privacy_policy/privacy_policy_8.jpg';
import image_9 from '../../assets/privacy_policy/privacy_policy_9.svg';
import image_10 from '../../assets/privacy_policy/privacy_policy_10.png';
import { motion } from 'framer-motion';


const privacyPolicy = [
  {
    heading: "Introduction",
    image: image_1,
    description:
      "This Privacy Policy explains the policies of Tech Academy Private Limited on the collection and use of the information we collect when you access our Service. This Privacy Policy describes your privacy rights and how you are protected under privacy laws. By using our Service, you are consenting to the collection and use of your information in accordance with this Privacy Policy. Please do not access or use our Service if you do not consent to the collection and use of your information as outlined in this Privacy Policy."
  },
  {
    heading: "Policy Changes",
    image: image_2,
    description:
      "Tech Academy Private Limited is authorized to modify this Privacy Policy at any time without prior notice. The revised Privacy Policy will be posted on our website."
  },
  {
    heading: "Collection and Use of Your Personal Information",
    image: image_3,
    description:
      "When using our Service, you will be prompted to provide us with personal information used to contact or identify you. We collect the following information: Usage Data, Email, Mobile Number, Name. Usage Data includes IP address, web page requests, referring pages, browser information, and access time and date."
  },
  {
    heading: "How We Collect Information",
    image: image_4,
    description:
      "We collect information when you fill out a registration form or otherwise submit your personal information. Your information will be stored for up to 30 days after it is no longer required to provide you services, and may be retained longer for legal or reporting purposes. Non-identifiable information may be stored indefinitely."
  },
  {
    heading: "How We Use Your Information",
    image: image_5,
    description:
      "We may use your information for purposes such as providing and maintaining the Service, analyzing data to identify usage trends, improving services and marketing efforts, targeted advertising, managing your account, and displaying testimonials or feedback you provide."
  },
  {
    heading: "How We Share Your Information",
    image: image_6,
    description:
      "We may share your information with your explicit consent. Information may also be disclosed to comply with laws, respond to claims, or enforce agreements."
  },
  {
    heading: "Third-party Sharing",
    image: image_7,
    description:
      "Your information may be disclosed to comply with applicable laws, respond to claims that your use of the Service violates rights, or enforce our policies and agreements."
  },
  {
    heading: "Cookies",
    image: image_8,
    description:
      "Cookies are small text files placed on your computer. Some cookies are essential for site operation and are set without consent. Others require consent. Types of cookies include: strictly necessary, performance, targeting, and functionality cookies. You can change your cookie consent at any time."
  },
  {
    heading: "Security",
    image: image_9,
    description:
      "We use various security measures to protect your information, but cannot guarantee complete security. Use the Service at your own risk. We are not responsible for third-party websites or their privacy practices."
  },
  {
    heading: "Contact Us",
    image: image_10,
    description:
      "For any questions or concerns, contact Tech Academy Private Limited at:\nAddress: 4th & 5th Floor, Building 145, 91 SpringBoard, Sector 44, Gurugram, Haryana 122003\nEmail: contactus@techacademy.com\nPhone: 91+ 000 000 0000\nTo delete your account, email us at contactus@techacademy.com with your account details and deletion request."
  }
];

const Privacy_policy_Page = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-12">Privacy & Policy</h2>

      {privacyPolicy.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
          className={`flex flex-col md:flex-row shadow-2xl p-5 rounded-2xl ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''
            } items-center mb-16 gap-8`}
        >
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={item.image}
              alt={item.heading}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm h-auto rounded-xl shadow-lg object-contain"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">{item.heading}</h3>
            <p className="text-gray-600 whitespace-pre-line leading-relaxed">
              {item.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>

  );
};

export default Privacy_policy_Page;
