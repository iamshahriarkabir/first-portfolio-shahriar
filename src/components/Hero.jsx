"use client";

import { motion } from "framer-motion";
import { Send, Mouse, Facebook, Linkedin, Github, Layout, Server, Database } from "lucide-react";
import Image from "next/image";
import { Link } from "react-scroll";

const Hero = () => {
  // socialIcons
  const socialLinks = [
    { icon: <Facebook size={20} />, href: "https://www.facebook.com/shariarkabirz4" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/shahriar-kabir-z4" },
    { icon: <Github size={20} />, href: "https://github.com/iamshahriarkabir" },
  ];

  // এনিমেশন ভেরিয়েন্ট (Reusable)
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-[var(--header-height)] pb-12 overflow-hidden">
      <div className="container grid md:grid-cols-[100px_1.5fr_1fr] gap-10 items-center">
        
        {/* ============ 1. SOCIAL ICONS (LEFT SIDE) ============ */}
        <div className="hidden md:flex flex-col gap-6 items-center">
          {socialLinks.map((item, index) => (
            <a 
              key={index} 
              href={item.href} 
              target="_blank" 
              className="text-title hover:text-text transform hover:scale-110 transition-all duration-300"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* ============ 2. TEXT CONTENT (CENTER) ============ */}
        <div className="order-2 md:order-1 flex flex-col gap-6 text-center md:text-left items-center md:items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex items-center gap-2"
          >
            <span className="text-xl font-medium text-title">Hey, I'm</span>
            <motion.span 
              animate={{ rotate: [0, 20, 0] }} 
              transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 1 }}
              className="text-2xl"
            >
              👋
            </motion.span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold text-title"
          >
            Shahriar
          </motion.h1>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            className="flex items-center gap-2 text-lg font-medium text-text pl-1"
          >
            <span className="w-10 h-px bg-text/50 inline-block align-middle"></span>
            <span>MERN Stack Developer</span>
          </motion.div>

          <motion.p 
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            className="text-text max-w-md text-sm md:text-base leading-relaxed"
          >
            🚀 Building Modern & High-Performance Websites <br/>💻 MERN & WordPress Specialist | Open to Work 🌟
          </motion.p>

          <motion.div
             initial={{ opacity: 0, scale: 0.8 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.3 }}
          >
            <a 
              href="#contact" 
              className="bg-title text-background hover:bg-text px-7 py-4 rounded-2xl flex items-center gap-3 transition-all duration-300 shadow-lg hover:gap-4 group"
            >
              Say Hello 
              <Send size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </motion.div>

          {/* Mobile Social Icons (Only visible on Mobile) */}
          <div className="flex md:hidden gap-6 mt-4">
             {socialLinks.map((item, index) => (
                <a key={index} href={item.href} className="text-title hover:text-text">
                  {item.icon}
                </a>
             ))}
          </div>
        </div>

        {/* ============ 3. IMAGE PROFILE (RIGHT SIDE) ============ */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="order-1 md:order-2 flex justify-center relative"
        >
          {/* Main Profile Image Container */}
          <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px]">
             <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-profile overflow-hidden border-5 border-container/50 shadow-inner">
               
                <Image 
                  src="/assets/profile.jpg" 
                  alt="Shahriar"
                  fill
                  className="object-cover"
                />
             </div>

             {/* Floating Badge 1: Experience */}
             <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity }}
               className="absolute top-4 -left-4 md:-left-10 bg-container dark:bg-darkContainer p-3 rounded-2xl shadow-card flex items-center gap-3 border border-gray-100 dark:border-gray-700"
             >
                <Layout size={24} className="text-title" />
                <div>
                   <h3 className="font-bold text-title text-sm">2 Years</h3>
                   <span className="text-[10px] text-text">Experience</span>
                </div>
             </motion.div>

             {/* Floating Badge 2: Projects */}
             <motion.div 
               animate={{ y: [0, 10, 0] }}
               transition={{ duration: 5, repeat: Infinity, delay: 1 }}
               className="absolute bottom-8 -right-4 md:right-0 bg-container dark:bg-darkContainer p-3 rounded-2xl shadow-card flex items-center gap-3 border border-gray-100 dark:border-gray-700"
             >
                <Server size={24} className="text-title" />
                <div>
                   <h3 className="font-bold text-title text-sm">30+</h3>
                   <span className="text-[10px] text-text">Projects</span>
                </div>
             </motion.div>

          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 cursor-pointer"
      >
        <Link to="about" smooth={true} duration={500}>
           <Mouse size={32} className="text-title hover:text-text transition-colors" />
        </Link>
        <span className="text-xs text-text">Scroll Down</span>
        <ArrowDown size={14} className="text-title" />
      </motion.div>
    </section>
  );
};

// Helper component for Scroll Icon
const ArrowDown = ({size, className}) => (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M12 5v14M19 12l-7 7-7-7"/>
    </svg>
)

export default Hero;