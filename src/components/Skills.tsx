"use client";

import { motion } from "framer-motion";

const skills = [
  { category: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux"] },
  { category: "Backend", items: ["Node.js", "Express", "Microservices", "PostgreSQL", "MongoDB", "RabbitMQ"] },
  { category: "DevOps & Cloud", items: ["Docker", "Kubernetes", "AWS EC2", "AWS S3", "CI/CD", "Nginx"] },
];

export default function Skills() {
  return (
    <section className="bg-[#121212] py-24 px-4 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Technical Arsenal</h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            A comprehensive stack enabling end-to-end development of scalable applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {skills.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <h3 className="text-xl font-bold text-blue-400 mb-6 uppercase tracking-wider">{group.category}</h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-4 py-2 bg-white/5 rounded-full text-sm text-gray-300 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
