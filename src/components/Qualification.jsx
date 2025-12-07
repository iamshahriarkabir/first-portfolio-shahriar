"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="qualification" className="section py-20 px-4 bg-body dark:bg-darkBody transition-colors">
      <div className="container">
        
        {/* ============ SECTION TITLE ============ */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-title"
          >
            Qualification
          </motion.h2>
          <span className="text-sm text-text block mt-2">My personal journey</span>
        </div>

        {/* ============ TABS (Experience First, then Education) ============ */}
        <div className="flex justify-center gap-8 mb-12">
          
          {/* Experience Tab Button (Now #1) */}
          <div 
            className={`flex items-center gap-2 cursor-pointer text-xl font-medium transition-colors ${toggleState === 1 ? "text-title" : "text-text"}`}
            onClick={() => toggleTab(1)}
          >
            <Briefcase size={24} />
            Experience
          </div>

          {/* Education Tab Button (Now #2) */}
          <div 
            className={`flex items-center gap-2 cursor-pointer text-xl font-medium transition-colors ${toggleState === 2 ? "text-title" : "text-text"}`}
            onClick={() => toggleTab(2)}
          >
            <GraduationCap size={24} />
            Education
          </div>

        </div>

        {/* ============ TIMELINE CONTENT ============ */}
        <div className="max-w-3xl mx-auto">
          
          {/* EXPERIENCE CONTENT (Show when toggleState === 1) */}
          {toggleState === 1 && (
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="grid grid-cols-[1fr_max-content_1fr] gap-x-6"
            >
              
              {/* Exp Item 1 */}
              <div className="text-right">
                <h3 className="font-semibold text-title">Front-End Developer</h3>
                <span className="text-sm text-text block mb-2">Inihub</span>
                <div className="text-xs text-text flex items-center justify-end gap-1">
                   <Calendar size={14} /> Oct 2025 - Dec 2025
                </div>
              </div>

              <div className="flex flex-col items-center">
                <span className="inline-block w-[13px] h-[13px] rounded-full bg-title"></span>
                <span className="block w-px h-full bg-title translate-y-[-7px]"></span>
              </div>

              <div></div>

              {/* Exp Item 2 */}
              <div></div>

              <div className="flex flex-col items-center">
                <span className="inline-block w-[13px] h-[13px] rounded-full bg-title"></span>
                <span className="block w-px h-full bg-title translate-y-[-7px]"></span>
              </div>

              <div>
                <h3 className="font-semibold text-title">WordPress Support Engineer</h3>
                <span className="text-sm text-text block mb-2">99BinaryLab</span>
                <div className="text-xs text-text flex items-center gap-1">
                   <Calendar size={14} /> Jun 2025 – Oct 2025
                </div>
              </div>

              {/* Exp Item 3 */}
              <div className="text-right">
                <h3 className="font-semibold text-title">WordPress Developer</h3>
                <span className="text-sm text-text block mb-2">Pouch Care Digital Marketing Agency</span>
                <div className="text-xs text-text flex items-center justify-end gap-1">
                   <Calendar size={14} /> Jan 2025 – Jun 2025
                </div>
              </div>

              <div className="flex flex-col items-center">
                <span className="inline-block w-[13px] h-[13px] rounded-full bg-title"></span>
              </div>

              <div></div>

            </motion.div>
          )}

          {/* EDUCATION CONTENT (Show when toggleState === 2) */}
          {toggleState === 2 && (
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="grid grid-cols-[1fr_max-content_1fr] gap-x-6"
            >


              {/* Edu Item 1 */}
              <div className="text-right">
                <h3 className="font-semibold text-title">MERN Stack Developer</h3>
                <span className="text-sm text-text block mb-2">Programming-Hero</span>
                <div className="text-xs text-text flex items-center justify-end gap-1">
                   <Calendar size={14} /> 2025
                </div>
              </div>

              <div className="flex flex-col items-center">
                <span className="inline-block w-[13px] h-[13px] rounded-full bg-title"></span>
                <span className="block w-px h-full bg-title translate-y-[-7px]"></span>
              </div>

              <div></div>

              {/* Edu Item 2 */}
              <div></div>

              <div className="flex flex-col items-center">
                <span className="inline-block w-[13px] h-[13px] rounded-full bg-title"></span>
                <span className="block w-px h-full bg-title translate-y-[-7px]"></span>
              </div>

              <div>
                <h3 className="font-semibold text-title">Advanced WordPress Development</h3>
                <span className="text-sm text-text block mb-2">SoftTech-IT Institute</span>
                <div className="text-xs text-text flex items-center gap-1">
                   <Calendar size={14} /> 2024
                </div>
              </div>
              
              {/* Edu Item 3 */}
              <div className="text-right">
                <h3 className="font-semibold text-title">BA (Hons)</h3>
                <span className="text-sm text-text block mb-2">Uttara University</span>
                <div className="text-xs text-text flex items-center justify-end gap-1">
                   <Calendar size={14} /> 2016 - 2020
                </div>
              </div>

              <div className="flex flex-col items-center">
                <span className="inline-block w-[13px] h-[13px] rounded-full bg-title"></span>
                <span className="block w-px h-full bg-title translate-y-[-7px]"></span>
              </div>

              <div></div>

              {/* Edu Item 4 */}
              <div></div>

              <div className="flex flex-col items-center">
                <span className="inline-block w-[13px] h-[13px] rounded-full bg-title"></span>
                <span className="block w-px h-full bg-title translate-y-[-7px]"></span>
              </div>

              <div>
                <h3 className="font-semibold text-title">HSC Accounting </h3>
                <span className="text-sm text-text block mb-2">Haluaghat Technical BM College</span>
                <div className="text-xs text-text flex items-center gap-1">
                   <Calendar size={14} /> 2014 - 2015
                </div>
              </div>

              {/* Edu Item 5 */}
              <div className="text-right">
                <h3 className="font-semibold text-title">SSC Accounting</h3>
                <span className="text-sm text-text block mb-2">St. Andrew's High School</span>
                <div className="text-xs text-text flex items-center justify-end gap-1">
                   <Calendar size={14} /> 2010 - 2011
                </div>
              </div>

              <div className="flex flex-col items-center">
                <span className="inline-block w-[13px] h-[13px] rounded-full bg-title"></span>
              </div>

              <div></div>

            </motion.div>
          )}

        </div>
      </div>
    </section>
  );
};

export default Qualification;