"use client";

import { motion } from "framer-motion";

const skills = [
  {
    category: "QA Leadership",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    color: "from-blue-500 to-cyan-500",
    description: "Leading enterprise QA strategy, governance, and delivery.",
    items: [
      { name: "Test Strategy", level: 95 },
      { name: "Stakeholder Mgmt", level: 90 },
      { name: "Release Mgmt", level: 92 },
    ],
  },
  {
    category: "Automation",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    color: "from-purple-500 to-pink-500",
    description: "Building scalable automation frameworks.",
    items: [
      { name: "Appium", level: 90 },
      { name: "TOSCA", level: 88 },
      { name: "Playwright", level: 85 },
    ],
  },
  {
    category: "Tools",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    color: "from-orange-500 to-red-500",
    description: "Enterprise-grade tools for quality delivery.",
    items: [
      { name: "Jira", level: 95 },
      { name: "SQL", level: 85 },
      { name: "Jenkins", level: 80 },
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
      </svg>
    ),
    color: "from-green-500 to-emerald-500",
    description: "CI/CD pipelines and cloud-native testing.",
    items: [
      { name: "AWS", level: 85 },
      { name: "Docker", level: 80 },
      { name: "CI/CD", level: 88 },
    ],
  },
];

export default function Skills() {
  return (
    <section className="relative z-20 bg-[#0a0a0a] py-32 px-4 md:px-12 overflow-hidden" id="skills">
      
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-purple-600/10 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[10%] w-[500px] h-[500px] bg-blue-600/10 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Quality Engineering{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">
              Excellence
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Delivering scalable, high-performance QA solutions across enterprise platforms.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {skills.map((group, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -12 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              {/* Glow Border */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${group.color} opacity-0 group-hover:opacity-30 blur-xl transition`} />

              <div className="relative h-full p-[1px] rounded-3xl bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl">
                
                <div className="h-full bg-[#0a0a0a]/80 rounded-3xl p-6 flex flex-col">

                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${group.color} text-white`}>
                      {group.icon}
                    </div>
                    <h3 className="text-white font-bold text-lg">
                      {group.category}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-6">
                    {group.description}
                  </p>

                  {/* Skills with Progress */}
                  <div className="space-y-4">
                    {group.items.map((skill, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-xs text-gray-400 mb-1">
                          <span>{skill.name}</span>
                          <span>{skill.level}%</span>
                        </div>

                        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: i * 0.2 }}
                            className={`h-full bg-gradient-to-r ${group.color}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}