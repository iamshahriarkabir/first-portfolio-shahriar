"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, Send, Linkedin, Facebook } from "lucide-react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false); 

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        'service_6uln28a',    // Service ID
        'template_8it2fkh',   // Template ID 
        form.current,
        {
          publicKey: '__iWfpAg_BCmCRBnv', // Public Key
        }
      )
      .then(
        () => {
          setLoading(false);
          alert("Message sent successfully! ✅");
          e.target.reset(); 
        },
        (error) => {
          setLoading(false);
          console.log('FAILED...', error.text);
          alert("Failed to send message. Please try again later. ❌");
        }
      );
  };

  return (
    <section id="contact" className="section py-20 px-4 bg-body dark:bg-darkBody transition-colors">
      <div className="container">
        
        {/* ============ SECTION TITLE ============ */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-title"
          >
            Get in Touch
          </motion.h2>
          <span className="text-sm text-text block mt-2">Contact Me</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] lg:grid-cols-[300px_1fr] gap-10 items-start">
          
          {/* ============ LEFT SIDE: INFO CARDS ============ */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-medium text-title text-center mb-2">Talk to me</h3>

            {/* Email Card */}
            <ContactCard 
              icon={<Mail size={24} />} 
              title="Email" 
              data="z4codelearn@gmail.com" 
              link="mailto:z4codelearn@gmail.com" 
              variants={fadeUp}
            />

            {/* LinkedIn Card */}
            <ContactCard 
              icon={<Linkedin size={24} />} 
              title="LinkedIn" 
              data="Shahriar Kabir (Zafor)" 
              link="https://www.linkedin.com/in/shahriar-kabir-z4" 
              variants={fadeUp}
            />

            {/* Facebook Card */}
            <ContactCard 
              icon={<Facebook size={24} />} 
              title="Facebook" 
              data="Shariar Kabir" 
              link="https://www.facebook.com/shariarkabirz4" 
              variants={fadeUp}
            />
          </div>

          {/* ============ RIGHT SIDE: FORM ============ */}
          <div className="flex flex-col">
             <h3 className="text-lg font-medium text-title text-center mb-6">Write me your project</h3>

             <motion.form 
                ref={form}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                onSubmit={sendEmail}
                className="flex flex-col gap-6"
             >
                {/* Name Input */}
                <div className="relative">
                  <label className="absolute -top-3 left-4 bg-background px-2 text-sm text-text transition-colors z-10">
                    Name
                  </label>
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Insert your name" 
                    className="w-full h-14 rounded-2xl border border-gray-400 dark:border-gray-800 px-6 text-sm text-title outline-none dark:focus:border-text transition-colors relative z-0 placeholder:text-gray-400"
                    required
                  />
                </div>

                {/* Email Input */}
                <div className="relative">
                  <label className="absolute -top-3 left-4 bg-background px-2 text-sm text-text transition-colors z-10">
                    Email
                  </label>
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Insert your email" 
                    className="w-full h-14 rounded-2xl border border-gray-400 dark:border-gray-800 bg-transparent px-6 text-sm text-title outline-none focus:border-text transition-colors relative z-0 placeholder:text-gray-400"
                    required
                  />
                </div>

                {/* Project/Message Input */}
                <div className="relative">
                  <label className="absolute bg-background -top-3 left-4 px-2 text-sm text-text transition-colors z-10">
                    Project
                  </label>
                  <textarea 
                    name="project" 
                    placeholder="Write your project" 
                    className="w-full h-40 rounded-2xl border border-gray-400 dark:border-gray-800 p-6 text-sm text-title outline-none resize-none focus:border-text transition-colors relative z-0 placeholder:text-gray-400"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit"
                  disabled={loading} 
                  className="text-background hover:opacity-90 w-max group mt-2 bg-title hover:bg-text px-7 py-4 rounded-2xl flex items-center gap-2 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Send Message"} 
                  {!loading && <Send size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" />}
                </button>

             </motion.form>
          </div>

        </div>
      </div>
    </section>
  );
};

// Reusable Small Card Component
const ContactCard = ({ icon, title, data, link, variants }) => {
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variants}
      className="bg-container dark:bg-darkContainer p-4 rounded-xl border border-gray-200 dark:border-gray-800 text-center shadow-sm hover:shadow-md transition-all w-full"
    >
      <div className="text-title mb-1 flex justify-center">{icon}</div>
      <h4 className="font-bold text-title text-sm">{title}</h4>
      <span className="text-xs text-text block mb-3">{data}</span>
      <a href={link} target="_blank" className="text-xs font-medium text-title inline-flex items-center gap-1 hover:gap-2 transition-all group">
        Write me <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
      </a>
    </motion.div>
  );
};

export default Contact;