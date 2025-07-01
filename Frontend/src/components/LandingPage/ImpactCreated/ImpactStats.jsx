import React from "react";
import CountUp from "react-countup";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Smooth variants
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.25,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};

const ImpactStats = () => {
    const stats = [
        { label: "HAPPY LEARNERS", value: 1000, suffix: "+", duration: 3 },
        { label: "HIGHEST SALARY", value: 25, suffix: " LPA", duration: 5 },
        { label: "AVERAGE SALARY", value: 10, suffix: " LPA", duration: 5 },
        { label: "MONTHLY VIEWS", value: 10000, suffix: "+", duration: 3 },
    ];

    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    React.useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [inView, controls]);

    return (
        <div className="bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white py-16 px-4">
            <h2 className="text-center text-3xl font-semibold mb-12 uppercase tracking-wide">
                <span className="border-b-2 border-white pb-1">Impact Created</span>
            </h2>

            <motion.div
                className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={controls}
            >
                {stats.map((stat, idx) => (
                    <motion.div
                        key={idx}
                        className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center transition duration-300 hover:scale-105 shadow-[0_0_15px_rgba(255,255,255,0.2)] ring-2 ring-blue-300/40 hover:ring-blue-200/70"
                        variants={cardVariants}
                    >
                        <div className="border border-white/30 rounded-xl p-4 shadow-[0_0_15px_2px_rgba(255,255,255,0.2)]">
                            <p className="text-sm font-medium uppercase tracking-widest mb-2 text-white">
                                {stat.label}
                            </p>
                            <h3 className="lg:text-4xl text-2xl sm:text-2xl font-bold text-white">
                                <CountUp
                                    end={stat.value}
                                    duration={stat.duration}
                                    suffix={stat.suffix}
                                />
                            </h3>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default ImpactStats;