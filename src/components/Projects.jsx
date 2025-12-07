"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowRight, ArrowLeft } from "lucide-react";

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 2;

  // Project Data
  const projectsData = [
    {
      id: 1,
      title: "TechBazar – Full Stack eCommerce Application",
      image: "/assets/project1.png",
      description:
        "Next.js 15 frontend with Express.js backend for secure, modern eCommerce with polished UI/UX.",
      techStack: ["Next.js", "Tailwind", "NextAuth.js", "Express.js", "MongoDB"],
      github: "https://github.com/iamshahriarkabir/TechBazar-nextJS-Full-Stack.git",
      demo: "https://techbazar-woad.vercel.app",
    },
    {
      id: 2,
      title: "ToyTopia – A Local Kids Toy Store Platform",
      image: "/assets/project2.png",
      description:
        "A responsive SPA marketplace for kids’ toys with filters, sorting, and secure authentication.",
      techStack: ["React", "Tailwind", "Firebase", "Vercel"],
      github: "https://github.com/iamshahriarkabir/ToyTopia-Upgradation.git",
      demo: "https://toytopiaz4code.netlify.app",
    },
    {
      id: 3,
      title: "EducareHub – Full-stack Online Learning Platform",
      image: "/assets/project3.png",
      description:
        "EducareHub backend: Node.js/Express/MongoDB REST API for managing users, courses, and enrollments.",
      techStack: ["Node.js", "Express.js", "MongoDB", "CORS"],
      github: "https://github.com/iamshahriarkabir/educarehub-client.git",
      demo: "https://educarehub-5b51c.web.app/",
    },
    {
      id: 4,
      title: "Portfolio – MERN Stack Developer",
      image: "/assets/project4.png",
      description:
        "Next.js 14 & Tailwind CSS portfolio with dark/light mode, animations, and contact form.",
      techStack: ["Next.js", "Tailwind", "EmailJS", "Vercel"],
      github: "https://github.com/iamshahriarkabir/first-portfolio-shahriar.git",
      demo: "https://first-portfolio-shahriar.vercel.app/",
    },
    {
      id: 5,
      title: "Afiya Travels – Travel Agency WordPress Site",
      image: "/assets/project5.png",
      description:
        "Developed a WordPress site with custom tour packages, ACF listings, and a Booking System.",
      techStack: ["Booking Systems", "ACF", "CPT UI", "Dynamic Content"],
      github: "#",
      demo: "https://afiyatravels.com/",
    },
    {
      id: 6,
      title: "Portfolio – Veterinarian Doctor WordPress Site",
      image: "/assets/project6.png",
      description:
        "SaaS application that generates images from text using OpenAI DALL-E API.",
      techStack: ["Elementor Pro", "ACF", "CPT UI", "WooCommerce"],
      github: "#",
      demo: "https://mosharof.com/",
    },
  ];

  // Position Logic
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projectsData.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  // page change function
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="portfolio"
      className="section py-20 px-4 bg-body dark:bg-darkBody transition-colors"
    >
      <div className="container">
        {/* ============ SECTION TITLE ============ */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-title"
          >
            Projects
          </motion.h2>
          <span className="text-sm text-text block mt-2">Recent Projects</span>
        </div>

        {/* ============ PROJECTS GRID ============ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-10">
          {currentProjects.map((project) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-container dark:bg-darkContainer rounded-3xl p-5 shadow-sm hover:shadow-card border border-gray-100 dark:border-gray-800 transition-all duration-300 group"
            >
              {/* Image Area */}
              <div className="relative h-[220px] w-full rounded-2xl overflow-hidden mb-5 bg-gray-200 dark:bg-gray-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src =
                      "https://i.ibb.co.com/bj3Qj2t5/pexels-mikhail-nilov-8654527.jpg";
                  }}
                />
              </div>

              {/* Content Area */}
              <div className="px-2">
                <h3 className="text-xl font-bold text-title mb-2">
                  {project.title}
                </h3>

                <p className="text-text text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="text-[10px] font-medium text-title px-2 py-1 rounded-md border border-gray-200 dark:border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    className="flex-1 bg-title text-background hover:bg-text py-3 rounded-xl flex items-center justify-center gap-2 text-sm font-medium transition-colors"
                  >
                    Live Demo
                    <ExternalLink size={16} />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex-1 bg-transparent border border-title text-title hover:bg-title hover:text-background py-3 rounded-xl flex items-center justify-center gap-2 text-sm font-medium transition-colors"
                  >
                    GitHub
                    <Github size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ============ PAGINATION (1, 2, 3) ============ */}
        <div className="flex justify-center items-center gap-4 mt-16">
          {/* Page 1 */}
          <button
            onClick={() => paginate(1)}
            className={`w-10 h-10 rounded-xl flex items-center justify-center font-medium transition-all duration-300 ${
              currentPage === 1
                ? "bg-title text-background shadow-lg scale-110"
                : "bg-transparent text-title dark:hover:text-gray-200 hover:text-background hover:bg-gray-200 dark:hover:bg-gray-800"
            }`}
          >
            1
          </button>

          {/* Page 2 */}
          <button
            onClick={() => paginate(2)}
            className={`w-10 h-10 rounded-xl flex items-center justify-center font-medium transition-all duration-300 ${
              currentPage === 2
                ? "bg-title text-background shadow-lg scale-110"
                : "bg-transparent text-title dark:hover:text-gray-200 hover:text-background hover:bg-gray-200 dark:hover:bg-gray-800"
            }`}
          >
            2
          </button>

          {/* Page 3 */}
          <button
            onClick={() => paginate(3)}
            className={`w-10 h-10 rounded-xl flex items-center justify-center font-medium transition-all duration-300 ${
              currentPage === 3
                ? "bg-title text-background shadow-lg scale-110"
                : "bg-transparent text-title dark:hover:text-gray-200 hover:text-background hover:bg-gray-200 dark:hover:bg-gray-800"
            }`}
          >
            3
          </button>

          {/* Next Button (Arrow) */}
          <button
            onClick={() => paginate(currentPage < 3 ? currentPage + 1 : 1)}
            className="w-10 h-10 rounded-xl flex items-center justify-center text-title dark:hover:text-gray-200 hover:text-background hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
