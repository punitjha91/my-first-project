"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const CERTIFICATIONS = [
    {
        title: "ISTQB Certified Tester – Foundation Level",
        org: "ISTQB",
        year: "2021",
        logo: "/certs/istqb.png",
        link: "#",
        highlight: "Quality Engineering",
    },
    {
        title: "TOSCA Automation Specialist",
        org: "Tricentis",
        year: "2022",
        logo: "/certs/tosca.png",
        link: "#",
        highlight: "Test Automation",
    },
    {
        title: "AWS Certified Cloud Practitioner",
        org: "Amazon Web Services",
        year: "2023",
        logo: "/certs/aws.png",
        link: "#",
        highlight: "Cloud",
    },
    {
        title: "Agile & Scrum Certification",
        org: "Scrum Alliance",
        year: "2022",
        logo: "/certs/scrum.png",
        link: "#",
        highlight: "Agile Delivery",
    },
    {
        title: "Mastering AI Software Testing-Level 1 Certification",
        org: "TestGrid",
        year: "2026",
        logo: "/certs/CoTester.png",
        link: "#",
        highlight: "AI Testing",
    },
    {
        title: "Mastering AI Software Testing-Level 2 Certification",
        org: "TestGrid",
        year: "2026",
        logo: "/certs/CoTester.png",
        link: "#",
        highlight: "AI Testing",
    }

];

export default function Certifications() {
    return (
        <section
            className="relative z-20 bg-[#0a0a0a] py-32 px-4 md:px-12 overflow-hidden"
            id="certifications"
        >
            {/* Ambient Glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-20%] right-[10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
                        Professional{" "}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-500">
                            Certifications
                        </span>
                    </h2>

                    <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Industry-recognized credentials demonstrating expertise in QA leadership,
                        automation engineering, and cloud technologies.
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {CERTIFICATIONS.map((cert, index) => (
                        <motion.a
                            key={index}
                            href={cert.link}
                            target="_blank"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.15, // stagger animation
                                ease: "easeOut",
                            }}
                            whileHover={{ y: -10, scale: 1.03 }}
                            className="group relative block"
                        >
                            {/* Glow Effect */}
                            <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 blur-xl transition duration-500" />

                            {/* Card */}
                            <div className="relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl group-hover:border-white/20 transition-all duration-300">

                                {/* Top Row */}
                                <div className="flex items-center justify-between mb-6">

                                    {/* Logo + Year */}
                                    <div className="flex items-center gap-4">
                                        <motion.div
                                            animate={{ scale: [1, 1.05, 1] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center overflow-hidden"
                                        >
                                            <Image
                                                src={cert.logo}
                                                alt={cert.title}
                                                width={40}
                                                height={40}
                                                className="object-contain"
                                            />
                                        </motion.div>

                                        <span className="text-xs text-gray-400 font-mono">
                                            {cert.year}
                                        </span>
                                    </div>

                                    <ExternalLinkIcon className="text-gray-500 group-hover:text-white transition-colors" />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                    {cert.title}
                                </h3>

                                {/* Org */}
                                <p className="text-purple-300 text-sm font-medium uppercase tracking-wider mb-4">
                                    {cert.org}
                                </p>

                                {/* Badge */}
                                <span className="inline-block px-3 py-1 text-xs rounded-full bg-white/10 text-gray-300 border border-white/10 group-hover:bg-white/20 transition">
                                    {cert.highlight}
                                </span>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}

function AwardIcon({ className = "" }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} width="20" height="20">
            <path d="M12 2l2.39 6.86L22 9.24l-5 4.87L18.18 22 12 18.89 5.82 22 7 14.11 2 9.24l7.61-0.38L12 2z" />
        </svg>
    );
}

function ExternalLinkIcon({ className = "" }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} width="18" height="18">
            <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <path d="M15 3h6v6" />
            <path d="M10 14L21 3" />
        </svg>
    );
}