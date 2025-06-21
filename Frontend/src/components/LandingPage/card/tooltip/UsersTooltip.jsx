import React from "react";
import { AnimatedTooltip } from "../../../ui/animated-tooltip/Users";
import one from '../../../../assets/LandingPageImage/HeroImages/review_one.avif'
import two from '../../../../assets/LandingPageImage/HeroImages/review_two.jpg'
import three from '../../../../assets/LandingPageImage/HeroImages/review_three.jpg'
import four from '../../../../assets/LandingPageImage/HeroImages/review_four.jpg'
import five from '../../../../assets/LandingPageImage/HeroImages/review_five.jpg'
import six from '../../../../assets/LandingPageImage/HeroImages/review_six.jpg'
import {motion} from 'framer-motion'

const people = [
  {
    id: 1,
    name: "Arjun Desai",
    designation: "Product Manager at Zentech Solutions",
    image: one
  },
  {
    id: 2,
    name: "Rohan Mehta",
    designation: "Operations Head at CloudVista India",
    image: two
  },
  {
    id: 3,
    name: "Ananya Iyer",
    designation: "Lead Engineer at DataNest",
    image: three
  },
  {
    id: 4,
    name: "Vikram Patel",
    designation: "CTO at NexaByte Technologies",
    image: four
  },
  {
    id: 5,
    name: "Sneha Reddy",
    designation: "Customer Success Manager at Digitronix",
    image: five
  },
  {
    id: 6,
    name: "Priya Sharma",
    designation: "Head of Innovation at InfiTech Labs",
    image: six
  }
];


export function AnimatedTooltipPreview() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="bg-blue-200 p-2 py-1 pr-15 rounded-full flex flex-row items-start justify-start md:ml-5 mb-2 w-fit ">
        <div className="flex items-center justify-center gap-6 text-sm " >
          <span className="flex" > <AnimatedTooltip items={people} /> </span> 35k + happy students
        </div>
      </div>
    </motion.section>
  );
}
