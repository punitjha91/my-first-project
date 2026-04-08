"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const TIMELINE_DATA = [
  {
    year: "2025 - Present",
    title: "Test Lead – ANZ App Migration",
    org: "Capgemini Australia",
    description:
      "Leading end-to-end testing for ANZ migration program. Validating data mapping, transformation, and reconciliation across mobile and web platforms. Driving automation using Appium.",
    type: "work",
    kpis: {
      team: "12+ Engineers",
      impact: "Zero Migration Defects",
      tools: ["Appium", "JIRA", "SQL"],
    },
  },
  {
    year: "2021 - 2025",
    title: "Test Lead – Commercial Lending Platform",
    org: "Capgemini Australia",
    description:
      "Led QA delivery for Fenergo platform. Managed 16 QA engineers, drove automation strategy using TOSCA, and ensured high-quality releases.",
    type: "work",
    kpis: {
      team: "16 QA Engineers",
      impact: "High-Quality Releases",
      tools: ["TOSCA", "JIRA"],
    },
  },
  {
    year: "2018 - 2021",
    title: "Associate Consultant",
    org: "Atos Syntel",
    description:
      "Handled TNT-FedEx integration testing across UK & India. Designed test cases and ensured seamless integration.",
    type: "work",
    kpis: {
      team: "10+ Engineers",
      impact: "Seamless Integration",
      tools: ["Selenium", "JIRA"],
    },
  },
  {
    year: "2014 - 2018",
    title: "Software Test Engineer",
    org: "SLK Software",
    description:
      "Performed functional & regression testing for US banking systems. Worked closely with dev teams.",
    type: "work",
    kpis: {
      team: "5+ Engineers",
      impact: "Robust Testing Framework",
      tools: ["Selenium", "JIRA"],
    },
  },
  {
    year: "2022 - 2024",
    title: "MBA (IT & Finance)",
    org: "Subharti University",
    description:
      "Strengthened business + tech alignment for enterprise systems.",
    type: "education",
  },
  {
    year: "2009 - 2013",
    title: "B.E (CSE)",
    org: "Anna University",
    description:
      "Built strong foundations in programming & systems.",
    type: "education",
  },
];

export default function Timeline() {
  const [view, setView] = useState<"timeline" | "cards" | "list">("timeline");
  const [filter, setFilter] = useState<"all" | "work" | "education">("all");

  const filteredData =
    filter === "all"
      ? TIMELINE_DATA
      : TIMELINE_DATA.filter((item) => item.type === filter);

  return (
    <section className="bg-[#0a0a0a] py-32 px-4 md:px-12" id="journey">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            My <span className="text-blue-400">Journey</span>
          </h2>

          {/* Controls */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {["timeline", "cards", "list"].map((v) => (
              <button
                key={v}
                onClick={() => setView(v as any)}
                className={`px-4 py-2 rounded-full text-sm border ${view === v
                    ? "bg-blue-500 text-white"
                    : "text-gray-400 border-white/10"
                  }`}
              >
                {v}
              </button>
            ))}

            {["all", "work", "education"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f as any)}
                className={`px-4 py-2 rounded-full text-sm border ${filter === f
                    ? "bg-purple-500 text-white"
                    : "text-gray-400 border-white/10"
                  }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* ===== TIMELINE VIEW ===== */}
        {view === "timeline" && (
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500/20 via-purple-500/50 to-blue-500/20 md:-translate-x-1/2" />

            <div className="space-y-12">
              {filteredData.map((item, index) => (
                <TimelineItem key={index} item={item} index={index} />
              ))}
            </div>
          </div>
        )}

        {/* ===== CARD VIEW ===== */}
        {view === "cards" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10"
              >
                <span className="text-xs text-blue-400">{item.year}</span>
                <h3 className="text-xl font-bold text-white mt-2">
                  {item.title}
                </h3>
                <p className="text-purple-300 text-sm">{item.org}</p>
                <p className="text-gray-400 text-sm mt-3">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        )}

        {/* ===== LIST VIEW ===== */}
        {view === "list" && (
          <div className="space-y-6 max-w-3xl mx-auto">
            {filteredData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="border-l-2 border-blue-500 pl-6"
              >
                <h3 className="text-white font-bold">{item.title}</h3>
                <p className="text-sm text-gray-400">
                  {item.org} • {item.year}
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function TimelineItem({ item, index }: any) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative flex flex-col md:flex-row items-start ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Spacer */}
      <div className="hidden md:block w-1/2" />

      {/* Center Dot */}
      <div className="absolute left-4 md:left-1/2 top-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-[#121212] transform -translate-x-1/2 -translate-y-1/2 z-10 shadow-[0_0_15px_rgba(59,130,246,0.6)]">
        <div className="absolute inset-0 bg-blue-400 blur-sm opacity-70" />
      </div>

      {/* Card Container */}
      <div
        className={`w-full md:w-1/2 min-w-0 pl-12 md:pl-0 flex ${
          isEven
            ? "md:justify-end md:pr-16"
            : "md:justify-start md:pl-16"
        }`}
      >
        <div
          className="w-full max-w-md min-w-0 p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition duration-300 text-left"
        >
          {/* Header */}
          <span className="text-xs text-blue-400 font-mono mb-1 inline-block">
            {item.year}
          </span>

          <h3 className="text-white font-bold text-lg">
            {item.title}
          </h3>

          <p className="text-purple-300 text-sm mb-3">
            {item.org}
          </p>

          <p className="text-gray-400 text-sm mb-4 leading-relaxed">
            {item.description}
          </p>

          {/* KPI BADGES */}
          {item.kpis && (
            <div
              className={`flex flex-wrap gap-2 ${
                isEven ? "md:justify-end" : "md:justify-start"
              }`}
            >
              {/* Team */}
              <span className="px-3 py-1 text-xs bg-blue-500/10 text-blue-300 border border-blue-500/20 rounded-full">
                👥 {item.kpis.team}
              </span>

              {/* Impact */}
              <span className="px-3 py-1 text-xs bg-green-500/10 text-green-300 border border-green-500/20 rounded-full">
                ⚡ {item.kpis.impact}
              </span>

              {/* Tools */}
              {item.kpis.tools.map((tool: string, i: number) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs bg-purple-500/10 text-purple-300 border border-purple-500/20 rounded-full"
                >
                  🛠 {tool}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}