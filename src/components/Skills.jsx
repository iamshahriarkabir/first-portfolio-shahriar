"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";

const Skills = () => {
  // 1. Frontend Skills Data
  const frontendSkills = [
    { name: "HTML", level: "Expert" },
    { name: "Bootstrap", level: "Expert" },
    { name: "JavaScript", level: "Expert" },
    { name: "React", level: "Expert" },
    { name: "Next.js", level: "Intermediate" },
    { name: "Tailwind", level: "Expert" },
  ];

  // 2. Backend Skills Data
  const backendSkills = [
    { name: "Node.js", level: "Intermediate" },
    { name: "Express", level: "Intermediate" },
    { name: "MongoDB", level: "Intermediate" },
    { name: "Firebase", level: "Basic" },
    { name: "REST API", level: "Basic" },
    { name: "JWT", level: "Basic" },
  ];

  // 3. WordPress Skills Data (New)
  const wordpressSkills = [
    { name: "Elementor Pro", level: "Expert" },
    { name: "Gutenberg", level: "Expert" },
    { name: "ACF (Pro)", level: "Expert" }, // Advanced Custom Fields
    { name: "CPT UI", level: "Expert" },    // Custom Post Types
    { name: "WooCommerce", level: "Expert" },
    { name: "Dynamic Tags", level: "Expert" }, // Dynamic Templates
  ];

  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="skills" className="section py-20 px-4 bg-body dark:bg-darkBody transition-colors">
      <div className="container">
        
        {/* ============ SECTION TITLE ============ */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-title"
          >
            Skills
          </motion.h2>
          <span className="text-sm text-text block mt-2">My Technical Level</span>
        </div>

        {/* ============ SKILLS CONTAINER (Flexbox for Centering) ============ */}
        <div className="flex flex-wrap justify-center gap-5">
          
          {/* ----- Box 1: Frontend Developer ----- */}
          <SkillBox title="Frontend Developer" skills={frontendSkills} variants={fadeUp} />

          {/* ----- Box 2: Backend Developer ----- */}
          <SkillBox title="Backend Developer" skills={backendSkills} variants={fadeUp} />

          {/* ----- Box 3: WordPress Developer  ----- */}
          <SkillBox title="WordPress Developer" skills={wordpressSkills} variants={fadeUp} />

        </div>
      </div>
    </section>
  );
};

// Reusable Component for Skill Box 
const SkillBox = ({ title, skills, variants }) => {
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variants}
      
      className="w-full md:w-[450px] lg:max-w-[450px] bg-container dark:bg-darkContainer p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-card transition-all duration-300"
    >
      <h3 className="text-center font-semibold text-lg text-title mb-6">{title}</h3>

      <div className="grid grid-cols-2 gap-y-6 gap-x-4">
        {skills.map((skill, index) => (
          <div key={index} className="flex gap-2">
            <BadgeCheck size={20} className="text-title min-w-5 mt-1" />
            <div>
              <h4 className="font-medium text-title leading-tight text-sm md:text-base">
                {skill.name}
              </h4>
              <span className="text-[10px] text-text">{skill.level}</span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;