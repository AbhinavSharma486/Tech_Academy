import React from "react";
import { AnimatedTestimonials } from "../../ui/ReviewCard/Review";
import one from '../../../assets/LandingPageImage/HeroImages/review_one.avif';
import two from '../../../assets/LandingPageImage/HeroImages/review_two.jpg';
import three from '../../../assets/LandingPageImage/HeroImages/review_three.jpg';
import four from '../../../assets/LandingPageImage/HeroImages/review_four.jpg';
import five from '../../../assets/LandingPageImage/HeroImages/review_five.jpg';
import six from '../../../assets/LandingPageImage/HeroImages/review_six.jpg';

export function Review() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have streamlined our operations. It’s exactly what our team needed.",
      name: "Arjun Desai",
      designation: "Product Manager at Zentech Solutions",
      src: one,
    },
    {
      quote:
        "This platform has drastically improved our team's efficiency. The user-friendly interface is a major plus.",
      name: "Rohan Mehta",
      designation: "Operations Head at CloudVista India",
      src: two,
    },
    {
      quote:
        "Exceptional support and powerful features. Rare to see such dedication in a SaaS platform.",
      name: "Ananya Iyer",
      designation: "Lead Engineer at DataNest",
      src: three,
    },
    {
      quote:
        "The performance and scalability have made it easier for us to scale our services across regions. Highly recommended.",
      name: "Vikram Patel",
      designation: "CTO at NexaByte Technologies",
      src: four,
    },
    {
      quote:
        "Easy to integrate and very reliable. We've seen a 30% improvement in our delivery timelines.",
      name: "Sneha Reddy",
      designation: "Customer Success Manager at Digitronix",
      src: five,
    },
    {
      quote:
        "Among all the tools we've tried, this one truly delivers consistent results with great flexibility.",
      name: "Priya Sharma",
      designation: "Head of Innovation at InfiTech Labs",
      src: six,
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
