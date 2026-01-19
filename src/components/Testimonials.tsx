"use client";

import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    quote: "Fawaz delivered exceptional code on the Elite Hotel project. His understanding of microservices is top-notch.",
    name: "Alex Morgan",
    role: "Project Manager, Elite Hotel",
    initials: "AM",
  },
  {
    quote: "The Nxtcart platform is blazing fast. Fawaz's optimization skills significantly improved our conversion rates.",
    name: "Sarah Chen",
    role: "CTO, Nxtcart",
    initials: "SC",
  },
  {
    quote: "A true professional. He transformed our messy codebase into a clean, scalable architecture.",
    name: "David Smith",
    role: "Lead Dev, TechStart",
    initials: "DS",
  },
  {
    quote: "Incredible attention to detail. The UI animations he implemented made our app feel world-class.",
    name: "Emily Davis",
    role: "Product Designer",
    initials: "ED",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#121212] overflow-hidden relative z-10" id="testimonials">
       <div className="container mx-auto px-6 mb-16 text-center">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
                Kind Words
            </motion.h2>
            <p className="text-gray-400 max-w-xl mx-auto">
                Feedback from clients and collaborators I've had the pleasure of working with.
            </p>
       </div>

      <div className="relative w-full overflow-hidden mask-linear-fade">
         {/* Mask gradient for fade effect on edges */}
         <div className="absolute top-0 left-0 w-32 h-full z-20 bg-linear-to-r from-[#121212] to-transparent" />
         <div className="absolute top-0 right-0 w-32 h-full z-20 bg-linear-to-l from-[#121212] to-transparent" />

        <div className="flex w-max">
          <motion.div
            className="flex gap-8 px-4"
            animate={{ x: "-50%" }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((item, index) => (
              <div
                key={index}
                className="w-[350px] md:w-[450px] p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm shrink-0"
              >
                 <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-linear-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                        {item.initials}
                    </div>
                    <div>
                        <h4 className="text-white font-bold text-lg">{item.name}</h4>
                        <p className="text-sm text-gray-400">{item.role}</p>
                    </div>
                 </div>
                 <p className="text-gray-300 italic leading-relaxed">
                    "{item.quote}"
                 </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
