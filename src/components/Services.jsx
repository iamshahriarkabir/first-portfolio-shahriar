"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layout,
  Code,
  Server,
  Database,
  ArrowRight,
  X,
  CheckCircle2,
  LayoutTemplate,
  Globe,
} from "lucide-react";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const servicesData = [
    {
      id: 1,
      title: "Frontend\nDevelopment",
      icon: <Layout size={28} />,
      description:
        "Crafting delightful user interfaces with Tailwind CSS, JavaScript, React, and Next.js. ✨",
      modalPoints: [
        "User Interfaces: Engaging, intuitive designs.",
        "Responsive Layouts: Adapt to all devices.",
        "Performance Optimization: Fast-loading pages.",
        "Accessibility: Inclusive for all users.",
        "Browser Compatibility: Consistent across browsers.",
      ],
    },
    {
      id: 2,
      title: "Backend\nDevelopment",
      icon: <Server size={28} />,
      description:
        "Creating robust server-side logic, secure APIs, and scalable architecture. 🚀",
      modalPoints: [
        "API Development: RESTful & GraphQL APIs.",
        "Security: Auth, JWT & Data protection.",
        "Server Logic: Node.js & Express efficient coding.",
        "Integration: Seamless frontend-backend link.",
        "Scalability: Handling high traffic efficiently.",
      ],
    },
    {
      id: 3,
      title: "Full Stack\nDevelopment",
      icon: <Code size={28} />,
      description:
        "Handling both frontend and backend to build complete web solutions from scratch. 🌐",
      modalPoints: [
        "End-to-End Development: From UI to DB.",
        "Database Design: Efficient schema modeling.",
        "API Integration: Connecting 3rd party services.",
        "Deployment: Vercel, Netlify, VPS management.",
        "Maintenance: Bug fixing & updates.",
      ],
    },
    {
      id: 4,
      title: "WordPress\nDevelopment",
      icon: <LayoutTemplate size={28} />,
      description:
        "Custom themes, plugins, and Elementor solutions for dynamic websites. 🪄",
      modalPoints: [
        "Theme Customization: Tailored to your brand.",
        "Elementor Pro: Pixel-perfect page building.",
        "Plugin Development: Custom functionalities.",
        "Speed Optimization: 90+ PageSpeed score.",
        "WooCommerce: Complete E-commerce setup.",
      ],
    },
    {
      id: 5,
      title: "Database\nManagement",
      icon: <Database size={28} />,
      description:
        "Designing and managing optimized databases using MongoDB, PostgreSQL & SQL. 🧑‍💻",
      modalPoints: [
        "Schema Design: Organized data structure.",
        "Data Migration: Safe transfer of data.",
        "Query Optimization: Faster data retrieval.",
        "Backup & Recovery: Data safety assurance.",
        "NoSQL & SQL: MongoDB & MySQL expertise.",
      ],
    },
    {
      id: 6,
      title: "Web\nDesign",
      icon: <Globe size={28} />,
      description:
        "Creating modern, clean, and user-friendly web designs that convert. 🎴",
      modalPoints: [
        "Wireframing: Blueprints of the layout.",
        "Prototyping: Interactive mockups.",
        "Modern Trends: Clean & aesthetic visuals.",
        "User Experience: Smooth navigation flow.",
        "Brand Identity: Consistent color & typography.",
      ],
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  return (
    <section
      id="services"
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
            Services
          </motion.h2>
          <span className="text-sm text-text block mt-2">What I offer</span>
        </div>

        {/* ============ SERVICES GRID ============ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-container dark:bg-darkContainer p-8 pt-12 rounded-[1.5rem] shadow-sm hover:shadow-card border border-gray-100 dark:border-gray-800 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="text-title mb-5">{service.icon}</div>

              <h3 className="text-xl font-semibold text-title mb-4 whitespace-pre-line leading-tight">
                {service.title}
              </h3>

              <span
                onClick={() => setSelectedService(service)}
                className="flex items-center gap-2 text-sm text-text cursor-pointer group-hover:text-title transition-colors"
              >
                View More
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>

              <div className="absolute bottom-0 left-0 w-0 h-1 bg-title transition-all duration-300 group-hover:w-full"></div>
            </motion.div>
          ))}
        </div>

        {/* ============ MODAL (POPUP) - DYNAMIC THEME ============ */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedService(null)}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              ></motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 50 }}
                className="relative bg-container dark:bg-darkContainer w-full max-w-[500px] p-6 md:p-8 rounded-3xl shadow-2xl z-10 border border-transparent dark:border-gray-700"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-500 dark:text-gray-400"
                >
                  <X size={24} />
                </button>

                {/* Title */}
                <h3 className="text-center text-xl md:text-2xl font-bold text-title mb-4">
                  {selectedService.title.replace("\n", " ")}
                </h3>

                {/* Description */}
                <p className="text-center text-sm text-text mb-8 px-4">
                  {selectedService.description} 
                </p>

                {/* Points List */}
                <ul className="space-y-4">
                  {selectedService.modalPoints.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-title"
                    >
                      <CheckCircle2
                        size={18}
                        className="text-title min-w-[18px] mt-0.5"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Services;
