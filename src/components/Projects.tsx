"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Elite Hotel",
    category: "Microservices Architecture",
    description: "Scalable hotel management system with 5+ Node.js services, Docker, Kubernetes, and RabbitMQ.",
  },
  {
    title: "Nxtcart",
    category: "E-Commerce Platform",
    description: "Full-stack shopping app with Next.js, Stripe payments, and automated order workflows.",
  },
  {
    title: "Dropbox Clone",
    category: "Cloud Storage App",
    description: "Secure file storage solution using Firebase, featuring drag-and-drop and metadata management.",
  },
];

export default function Projects() {
  return (
    <section className="relative z-20 bg-[#121212] min-h-screen py-24 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-16 text-white"
        >
            Selected Works
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="group relative h-[400px] rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors"
                >
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent p-8 flex flex-col justify-end">
                        <span className="text-sm font-mono text-gray-400 mb-2">{project.category}</span>
                        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">
                            {project.description}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
