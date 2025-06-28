import React from "react";
import { Timeline } from "./TimeLine_a_ui";

import image_1 from "../../../assets/CourcePage/timeline-image.png";
import image_2 from "../../../assets/CourcePage/timeline-image_1.png";
// import image_3 from "../../../assets/CourcePage/timeline-image_2.png";

import image_4 from "../../../assets/CourcePage/timeline-meeting-image-1.png";
import image_5 from "../../../assets/CourcePage/timeline-meeting-image.png";

import image_6 from "../../../assets/CourcePage/timeline-mentor-image-1.png";
import image_7 from "../../../assets/CourcePage/timeline-mentor-image.png";

import image_8 from "../../../assets/CourcePage/timeline-placement-image-1.png";
import image_9 from "../../../assets/CourcePage/timeline-placement-image.png";

import image_10 from "../../../assets/CourcePage/timeline-project-image-1.png";
import image_11 from "../../../assets/CourcePage/timeline-project-image.png";

export function TimelineDemo() {
    const data = [
        {
            title: "Module 1",
            content: (
                <div>
                    <p className="text-xl md:text-2xl mb-2" >Learn & Build Projects</p>
                    <p className="mb-6 text-sm font-normal text-black md:text-base">
                        Start your journey by mastering HTML, CSS, JavaScript, and React. Apply concepts through real-world projects from the start.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-5">
                        <img src={image_1} alt="Learning 1" className="w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60" />
                        <img src={image_2} alt="Learning 2" className="w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60" />

                    </div>
                    <RatingCard
                        rating={7.5}
                        heading="Learning Module"
                        comment="This course was extremely helpful. The content was clear and well-structured."
                    />

                </div>
            ),
        },
        {
            title: "Module 2",
            content: (
                <div>
                    <p className="text-xl md:text-2xl mb-2" > Weekly Doubt Sessions</p>
                    <p className="mb-6 text-sm font-normal text-black md:text-base">
                        Attend live weekly doubt-clearing sessions with industry experts to ensure complete concept clarity.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-5">
                        <img src={image_4} alt="Meeting 1" className="w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60" />
                        <img src={image_5} alt="Meeting 2" className="w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60" />
                    </div>
                    <RatingCard
                        rating={8.2}
                        heading="Mentorship Sessions"
                        comment="Mentors were supportive and always available to clarify doubts. Great learning experience."
                    />
                </div>
            ),
        },
        {
            title: "Module 3",
            content: (
                <div>
                    <p className="text-xl md:text-2xl mb-2" > 1:1 Mentorship</p>
                    <p className="mb-6 text-sm font-normal text-black md:text-base">
                        Get personalized guidance through 1-on-1 mentorship from experienced developers who help accelerate your learning.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-5">
                        <img src={image_6} alt="Mentor 1" className="w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60" />
                        <img src={image_7} alt="Mentor 2" className="w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60" />


                    </div>
                    <RatingCard
                        rating={9.0}
                        heading="Live Meetings"
                        comment="The live meetings helped me stay accountable and on track. Super interactive sessions!"
                    />
                </div>
            ),
        },
        {
            title: "Module 4",
            content: (
                <div>
                    <p className="text-xl md:text-2xl mb-2 " >Placement Support</p>
                    <p className="mb-6 text-sm font-normal text-black md:text-base">
                        Access resume reviews, mock interviews, and referrals to top companies for full-time or internship opportunities.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-5">
                        <img src={image_8} alt="Placement 1" className="w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60" />
                        <img src={image_9} alt="Placement 2" className="w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60" />


                    </div>
                    <RatingCard
                        rating={9.3}
                        heading="Placement Support"
                        comment="Excellent placement support! I received resume help, mock interviews, and job referrals."
                    />
                </div>
            ),
        },
        {
            title: "Module 5",
            content: (
                <div>
                    <p className="text-xl md:text-2xl mb-2 " > Build Production-Level Projects</p>

                    <p className="mb-6 text-sm font-normal text-black md:text-base">
                        Work on capstone projects that simulate real startup environments. Add impressive projects to your portfolio.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-5">
                        <img src={image_10} alt="Project 1" className="w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60" />
                        <img src={image_11} alt="Project 2" className="w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60" />


                    </div>
                    <RatingCard
                        rating={8.7}
                        heading="Hands-On Projects"
                        comment="The projects were challenging and practical. They really helped me apply what I learned."
                    />
                </div>
            ),
        },
    ];

    return (
        <div className="relative w-full overflow-clip">
            <Timeline data={data} />
        </div>
    );
}


// rating component : 

import { FaStar } from 'react-icons/fa';

const RatingCard = ({ rating, heading, comment }) => {
    const starRating = Math.floor(rating / 2); // use floor to stay consistent with full stars only

    return (
        <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-md border border-gray-200">
            {heading && (
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{heading}</h3>
            )}
            <p className="text-3xl md:text-5xl font-bold text-black mb-3">{rating.toFixed(1)}/10</p>

            <div className="flex items-center mb-4">
                {[...Array(5)].map((_, index) => (
                    <FaStar
                        key={index}
                        className={`h-5 w-5 ${index < starRating ? 'text-yellow-400' : 'text-gray-300'}`}
                        aria-hidden="true"
                    />
                ))}
            </div>

            <p className="text-gray-700 text-sm">{comment}</p>
        </div>
    );
};
