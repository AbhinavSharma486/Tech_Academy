import React from 'react';

const Enrollment = () => {
    return (
        <div className='bg-blue-100'>
            <div className="px-6 py-10 max-w-5xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <span className="block text-sm text-blue-600 font-semibold uppercase">
                        Your Path Forward
                    </span>
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-800 via-purple-600 to-blue-500 bg-clip-text text-transparent">
                        Our Enrollment Methods
                    </h2>
                </div>

                {/* Enrollment Cards */}
                <div className="grid md:grid-cols-2 gap-8 items-start">
                    {EnrollmentCard.map((item, index) => (
                        <div
                            key={index}
                            className={`rounded-lg shadow-md p-6 text-white ${item.bgColor}`}
                        >
                            {/* Card Header */}
                            <div className="mb-6">
                                <h3 className="text-2xl font-semibold mb-2">{item.Heading}</h3>
                                <p className="text-sm">{item.desc}</p>
                            </div>


                            <div className='my-3'>
                                <span>{item.detailesHeading}</span>
                            </div>

                            {/* Steps */}
                            <div className="space-y-4">
                                {item.process.map((section, idx) => (
                                    <div key={idx} className="p-4 bg-white/20 rounded-md">
                                        <h4 className="text-lg font-medium">{section.pHeading}</h4>
                                        <ul className="list-disc list-inside text-sm">
                                            <li>{section.pDesc}</li>
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default Enrollment;

// Data Source
const EnrollmentCard = [
    {
        Heading: 'Pay After Placement',
        bgColor: 'bg-blue-900',
        desc: 'Limited seats for top performers in the selection process with 0 upfront cost!',
        detailesHeading: 'Selection process for PAP',
        process: [
            {
                pHeading: 'Step 1: Solve Assignments',
                pDesc: 'You need to solve assignments & meet a certain score to be eligible for the coding test.'
            },
            {
                pHeading: 'Step 2: Take Coding Test',
                pDesc: 'Qualify in the coding test to advance to the interview round.'
            },
            {
                pHeading: 'Step 3: Final Interview',
                pDesc: 'Crack the interview to enroll in the Pay After Placement program.'
            }
        ]
    },
    {
        Heading: 'SEMI-Pay After Placement',
        bgColor: 'bg-blue-500',
        desc: 'Pay a minimal tuition fee in monthly installments and the rest after placement.',
        detailesHeading: 'Just follow the steps below & avail scholarship',
        process: [
            {
                pHeading: 'Step 1: Apply with Resume',
                pDesc: 'Submit your application and resume for initial screening.'
            },
            {
                pHeading: 'Step 2: Scholarship Test',
                pDesc: 'Appear for the scholarship test to determine tuition fee reduction.'
            }
        ]
    }
];
