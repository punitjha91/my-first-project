"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      if (!response.ok) throw new Error('Failed to send message');

      setIsSuccess(true);
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative z-20 bg-[#0a0a0a] py-32 px-4 md:px-12 overflow-hidden" id="contact">

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
              Let's build <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-500">
                quality systems.
              </span>
            </h2>

            <p className="text-gray-400 text-lg mb-10 max-w-md leading-relaxed">
              Open to QA leadership roles, test automation consulting, and enterprise projects.
              I specialize in delivering high-quality, scalable solutions across banking and large-scale systems.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col gap-6 mb-12">
              <a href="mailto:Punitjha1991@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10">
                  ✉️
                </div>
                <span className="text-lg">Punitjha1991@gmail.com</span>
              </a>

              <div className="flex items-center gap-4">
                <SocialLink
                  href="https://github.com/punitjha91"
                  icon={<GithubIcon />}
                  label="GitHub"
                />
                <SocialLink
                  href="https://www.linkedin.com/in/punitjha91"
                  icon={<LinkedinIcon />}
                  label="LinkedIn"
                />
              </div>
            </div>

            {/* Resume */}
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-all hover:-translate-y-1"
            >
              ⬇ Download Resume
            </a>
          </motion.div>

          {/* RIGHT - FORM */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">

              <InputField
                label="Name"
                value={formState.name}
                onChange={(v) => setFormState({ ...formState, name: v })}
                placeholder="Your Name"
              />

              <InputField
                label="Email"
                value={formState.email}
                onChange={(v) => setFormState({ ...formState, email: v })}
                placeholder="your@email.com"
                type="email"
              />

              <div>
                <label className="text-sm text-gray-400 mb-2 block">Message</label>
                <textarea
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  rows={4}
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                  placeholder="Tell me about your project or opportunity..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-linear-to-r from-blue-600 to-purple-600 rounded-xl text-white font-bold flex justify-center items-center gap-2"
              >
                {isSubmitting ? "Sending..." : isSuccess ? "Message Sent!" : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <footer className="mt-24 pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Punit Jha. All rights reserved.
        </footer>
      </div>
    </section>
  );
}

/* Reusable Input */
interface InputFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
}

function InputField({ label, value, onChange, placeholder, type = "text" }: InputFieldProps) {
  return (
    <div>
      <label className="text-sm text-gray-400 mb-2 block">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500"
        placeholder={placeholder}
        required
      />
    </div>
  );
}

/* Social */
function SocialLink({ href, icon, label }: any) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:-translate-y-1 transition-all"
      aria-label={label}
    >
      {icon}
    </a>
  );
}

/* Icons */
const GithubIcon = () => <span>🐙</span>;
const LinkedinIcon = () => <span>💼</span>;