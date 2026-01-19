"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// Project Data with Media & Layout Configuration
const projects = [
  {
    id: "elite-hotel",
    title: "Elite Hotel",
    category: "Full Stack • Microservices",
    description: "Scalable hotel management system with 5+ Node.js services.",
    longDescription: "A comprehensive Microservices-based Hotel Management System designed to streamline reservations, billing, and housekeeping. Built with a focus on scalability and service isolation.",
    techStack: ["Node.js", "Docker", "Kubernetes", "Redis", "RabbitMQ", "Next.js"],
    repo: "https://github.com/fawaz-v/elite-hotel-backend",
    demo: "#",
    color: "from-blue-600/20 to-cyan-500/20",
    hoverColor: "group-hover:from-blue-600/40 group-hover:to-cyan-500/40",
    span: "md:col-span-2 md:row-span-2",
    mediaType: "video",
    mediaUrl: "https://cdn.pixabay.com/video/2019/04/23/23011-332483109_large.mp4" // Abstract Tech Network
  },
  {
    id: "nxtcart",
    title: "Nxtcart",
    category: "E-Commerce",
    description: "Modern shopping platform with automated workflows.",
    longDescription: "A modern e-commerce application featuring secure authentication, payment processing with Stripe/PayPal, and a robust admin dashboard for product management.",
    techStack: ["Next.js", "TypeScript", "Stripe", "MongoDB", "Shadcn UI"],
    repo: "https://github.com/fawaz-v/nxtcart",
    demo: "#",
    color: "from-purple-600/20 to-pink-500/20",
    hoverColor: "group-hover:from-purple-600/40 group-hover:to-pink-500/40",
    span: "md:col-span-1 md:row-span-2",
    mediaType: "video",
    mediaUrl: "https://cdn.pixabay.com/video/2020/05/25/40149-423985179_large.mp4" // Shopping/Future Retail abstract
  },
  {
    id: "dropbox-clone",
    title: "Dropbox Clone",
    category: "Cloud Storage",
    description: "Secure file storage with drag-and-drop & metadata.",
    longDescription: "A functional clone of Dropbox allowing users to upload, organize, and manage files in the cloud. Features real-time updates and secure authentication.",
    techStack: ["React", "Firebase", "Tailwind CSS"],
    repo: "https://github.com/fawaz-v/dropbox-clone",
    demo: "#",
    color: "from-orange-500/20 to-red-500/20",
    hoverColor: "group-hover:from-orange-500/40 group-hover:to-red-500/40",
    span: "md:col-span-1 md:row-span-1",
    mediaType: "video",
    mediaUrl: "https://cdn.pixabay.com/video/2023/10/12/184734-873923034_large.mp4" // Cloud/Data abstract
  },
  {
    id: "blog-microservices",
    title: "Blog Platform",
    category: "Microservices",
    description: "Event-driven architecture with RabbitMQ.",
    longDescription: "Built User, Post, and Comment services with API Gateway and RabbitMQ communication. Containerized with Docker Compose and automated pipeline via GitHub Actions.",
    techStack: ["Node.js", "RabbitMQ", "Docker"],
    repo: "https://github.com/fawaz-v/blog-microservices",
    demo: "#",
    color: "from-green-600/20 to-teal-500/20",
    hoverColor: "group-hover:from-green-600/40 group-hover:to-teal-500/40",
    span: "md:col-span-1 md:row-span-1",
    mediaType: "video",
    mediaUrl: "https://cdn.pixabay.com/video/2020/05/11/38466-419793732_large.mp4" // Code/Typing abstract
  },
  {
    id: "bookstore-app",
    title: "Bookstore",
    category: "MERN Stack",
    description: "Book management with separate Frontend/Backend.",
    longDescription: "Built RESTful APIs with Express.js and MongoDB for complete book management (CRUD). Developed a responsive React frontend integrated with Axios.",
    techStack: ["MongoDB", "Express", "React"],
    repo: "https://github.com/fawaz-v/bookstore-app",
    demo: "#",
    color: "from-indigo-600/20 to-purple-500/20",
    hoverColor: "group-hover:from-indigo-600/40 group-hover:to-purple-500/40",
    span: "md:col-span-1 md:row-span-1",
    mediaType: "video",
    mediaUrl: "https://cdn.pixabay.com/video/2021/08/04/83896-583526610_large.mp4" // Books/Learning abstract
  },
  {
    id: "pixabay-gallery",
    title: "Pixabay Gallery",
    category: "API Integration",
    description: "Image search gallery using Pixabay API.",
    longDescription: "Implemented image search and responsive grid gallery using React, Tailwind CSS, and Axios. Integrated Pixabay API for fetching images.",
    techStack: ["React", "Vite", "Tailwind"],
    repo: "https://github.com/fawaz-v/react-pixabay-gallery",
    demo: "#",
    color: "from-pink-600/20 to-rose-500/20",
    hoverColor: "group-hover:from-pink-600/40 group-hover:to-rose-500/40",
    span: "md:col-span-1 md:row-span-1",
    mediaType: "video",
    mediaUrl: "https://cdn.pixabay.com/video/2022/03/09/110237-686940388_large.mp4" // Gallery/Images abstract
  },
  {
    id: "room-upload",
    title: "Room Upload",
    category: "Cloudinary",
    description: "Secure image upload service details.",
    longDescription: "Built secure image upload flow using Express, Multer, and Cloudinary SDK with TypeScript backend. Developed responsive React + Vite frontend.",
    techStack: ["React", "Multer", "Cloudinary"],
    repo: "https://github.com/fawaz-v/room-image-upload",
    demo: "#",
    color: "from-yellow-600/20 to-orange-500/20",
    hoverColor: "group-hover:from-yellow-600/40 group-hover:to-orange-500/40",
    span: "md:col-span-1 md:row-span-1",
    mediaType: "video",
    mediaUrl: "https://cdn.pixabay.com/video/2020/04/16/36294-413753736_large.mp4" // Data transfer abstract
  },
];

const INITIAL_VISIBLE_COUNT = 6;

export default function Projects() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  const selectedProject = projects.find((p) => p.id === selectedId);
  const visibleProjects = projects.slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;

  return (
    <section className="relative z-20 bg-[#0a0a0a] min-h-screen py-32 px-4 md:px-12 overflow-hidden" id="projects">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Selected <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">Works</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
             A curated selection of projects demonstrating full-stack capabilities, 
             microservices architecture, and modern interface design.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">
            <AnimatePresence mode="popLayout">
                {visibleProjects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        layoutId={project.id}
                        onClick={() => setSelectedId(project.id)}
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        className={`group relative rounded-3xl overflow-hidden cursor-pointer border border-white/10 bg-white/5 backdrop-blur-md ${project.span}`}
                        whileHover={{ scale: 1.015 }}
                    >
                        {/* Media Background */}
                        {project.mediaType === "video" ? (
                             <video 
                                autoPlay 
                                loop 
                                muted 
                                playsInline 
                                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700"
                             >
                                <source src={project.mediaUrl} type="video/mp4" />
                             </video>
                        ) : (
                             // Fallback or Image type
                             <div className="absolute inset-0 w-full h-full bg-gray-800" />
                        )}

                        {/* Gradient Overlay */}
                        <div className={`absolute inset-0 bg-linear-to-br ${project.color} ${project.hoverColor} transition-all duration-500 opacity-60 group-hover:opacity-80 mix-blend-overlay`} />
                        
                        {/* Darkener for text readability */}
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

                        {/* Noise Texture Overlay */}
                        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                        <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                            <div className="flex justify-between items-start">
                                 <span className="inline-block px-3 py-1 rounded-full bg-black/40 border border-white/10 text-xs font-mono text-blue-300 backdrop-blur-md">
                                    {project.category}
                                 </span>
                                 <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white transform -rotate-45 group-hover:rotate-0 transition-transform duration-300">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                 </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2 leading-tight group-hover:translate-x-1 transition-transform drop-shadow-lg">{project.title}</h3>
                                <p className="text-gray-200 text-sm line-clamp-3 leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-md">
                                    {project.description}
                                </p>
                                
                                {/* Tags visible on large cards or hover */}
                                <div className="flex flex-wrap gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                                    {project.techStack.slice(0, 3).map(t => (
                                        <span key={t} className="text-[10px] uppercase tracking-wider text-white/80 bg-black/40 px-2 py-1 rounded backdrop-blur-sm border border-white/5">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>

        {/* Load More Button */}
        {hasMore && (
             <div className="flex justify-center mt-12">
                 <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setVisibleCount(prev => prev + 6)}
                    className="px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors backdrop-blur-md flex items-center gap-2 group"
                 >
                    View More Projects
                    <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                 </motion.button>
             </div>
        )}

        {/* Enhanced Modal */}
        <AnimatePresence>
            {selectedId && selectedProject && (
                <>
                    <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedId(null)}
                        className="fixed inset-0 bg-black/80 backdrop-blur-xl z-60"
                    />
                    <div className="fixed inset-0 flex items-center justify-center z-70 pointer-events-none p-4 md:p-8">
                        <motion.div
                           layoutId={selectedId}
                           className="bg-[#121212] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-4xl border border-white/10 pointer-events-auto shadow-2xl relative scrollbar-hide"
                        >
                           <button 
                                onClick={() => setSelectedId(null)}
                                className="absolute top-6 right-6 z-20 p-2 bg-black/50 hover:bg-black/80 rounded-full text-white/70 hover:text-white transition-colors border border-white/10"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                           </button>

                           <div className="flex flex-col md:flex-row h-full">
                                {/* Visual Side */}
                                <div className={`w-full md:w-2/5 min-h-[300px] relative overflow-hidden flex flex-col justify-end p-8`}>
                                   {selectedProject.mediaType === "video" && (
                                        <video 
                                            autoPlay 
                                            loop 
                                            muted 
                                            playsInline 
                                            className="absolute inset-0 w-full h-full object-cover opacity-60"
                                        >
                                            <source src={selectedProject.mediaUrl} type="video/mp4" />
                                        </video>
                                   )}
                                   <div className={`absolute inset-0 bg-linear-to-b ${selectedProject.color} mix-blend-overlay opacity-80`} />
                                   <div className="absolute inset-0 bg-black/20" />
                                   
                                   <motion.span 
                                     initial={{ opacity: 0, y: 10 }}
                                     animate={{ opacity: 1, y: 0 }}
                                     transition={{ delay: 0.2 }}
                                     className="relative z-10 inline-block px-3 py-1 rounded-full bg-black/40 text-xs font-mono text-white mb-4 w-fit border border-white/10 backdrop-blur-md"
                                   >
                                     {selectedProject.category}
                                   </motion.span>
                                   <motion.h3 
                                     initial={{ opacity: 0, y: 10 }}
                                     animate={{ opacity: 1, y: 0 }}
                                     transition={{ delay: 0.3 }}
                                     className="relative z-10 text-4xl font-bold text-white leading-none tracking-tight drop-shadow-xl"
                                   >
                                     {selectedProject.title}
                                   </motion.h3>
                                </div>

                                {/* Content Side */}
                                <div className="w-full md:w-3/5 p-8 md:p-12 bg-[#121212]">
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.4 }}
                                    >
                                        <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">About the project</h4>
                                        <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                                            {selectedProject.longDescription}
                                        </p>

                                        <div className="mb-10">
                                            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Core Technologies</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedProject.techStack.map((tech, i) => (
                                                    <motion.span 
                                                        key={tech} 
                                                        initial={{ opacity: 0, scale: 0.9 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ delay: 0.5 + (i * 0.05) }}
                                                        className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-sm text-gray-200 border border-white/5 transition-colors cursor-default"
                                                    >
                                                        {tech}
                                                    </motion.span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex gap-4 pt-4 border-t border-white/10">
                                            <a 
                                                href={selectedProject.repo} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="flex-1 py-4 rounded-xl bg-white text-black font-bold text-center hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                                            >
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                                View Code
                                            </a>
                                            <a 
                                                href={selectedProject.demo} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="flex-1 py-4 rounded-xl bg-white/5 text-white font-bold text-center hover:bg-white/10 transition-colors border border-white/10 flex items-center justify-center gap-2"
                                            >
                                                Live Demo
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                            </a>
                                        </div>
                                    </motion.div>
                                </div>
                           </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
      </div>
    </section>
  );
}
