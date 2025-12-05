"use client";

import { motion } from "framer-motion";
import {
  Award,
  Briefcase,
  Headphones,
  FileText,
  ArrowDown,
} from "lucide-react";

const About = () => {
  // animation
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="about"
      className="section py-20 px-4 md:py-28 bg-body dark:bg-darkBody transition-colors"
    >
      <div className="container">
        {/* ============ SECTION TITLE ============ */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-title"
          >
            About Me
          </motion.h2>
          <span className="text-sm text-text block mt-2">My Introduction</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
          {/* ============ LEFT SIDE (IMAGE) ============ */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative w-[300px] h-[300px] md:w-[350px] md:h-[350px] rounded-3xl overflow-hidden shadow-lg border-4 border-container dark:border-gray-800">
              <img
                src="/assets/profile.png"
                alt="About Image"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>

          {/* ============ RIGHT SIDE (CONTENT) ============ */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            {/* Info Cards Grid */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="grid grid-cols-3 gap-4 mb-8 w-full"
            >
              {/* Card 1: Experience */}
              <div className="bg-container dark:bg-darkContainer p-4 rounded-xl border border-gray-100 dark:border-gray-800 text-center shadow-sm hover:shadow-md transition-shadow">
                <Award className="mx-auto text-title mb-2" size={24} />
                <h3 className="font-bold text-title text-sm">Experience</h3>
                <span className="text-[10px] text-text block">
                  3 Years Working
                </span>
              </div>

              {/* Card 2: Completed */}
              <div className="bg-container dark:bg-darkContainer p-4 rounded-xl border border-gray-100 dark:border-gray-800 text-center shadow-sm hover:shadow-md transition-shadow">
                <Briefcase className="mx-auto text-title mb-2" size={24} />
                <h3 className="font-bold text-title text-sm">Completed</h3>
                <span className="text-[10px] text-text block">
                  50+ Projects
                </span>
              </div>

              {/* Card 3: Support */}
              <div className="bg-container dark:bg-darkContainer p-4 rounded-xl border border-gray-100 dark:border-gray-800 text-center shadow-sm hover:shadow-md transition-shadow">
                <Headphones className="mx-auto text-title mb-2" size={24} />
                <h3 className="font-bold text-title text-sm">Support</h3>
                <span className="text-[10px] text-text block">Online 24/7</span>
              </div>
            </motion.div>

            {/* Description Text */}
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-text mb-8 leading-7 max-w-lg"
            >
              Proficient in React.js, Next.js, Redux, Node.js, and Docker. I
              build scalable, high-performance applications. Skilled in Prisma,
              Socket.IO, and Kubernetes, with expertise in MongoDB, PostgreSQL.
              I deliver innovative real-time systems.
            </motion.p>

            {/* Download CV Button */}
            <motion.a
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              href="assets/Resume_of_SHAHRIAR_KABIR.pdf"
              download="Resume of SHAHRIAR KABIR"
              className="bg-title text-background hover:bg-text px-7 py-4 rounded-2xl flex items-center gap-2 transition-all duration-300 shadow-lg group"
            >
              Download Resume
              <FileText size={20} className="group-hover:animate-bounce" />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
