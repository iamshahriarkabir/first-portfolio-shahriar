"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { 
  Home, 
  User, 
  FileText, 
  Briefcase, 
  ImageIcon, 
  Send, 
  Moon, 
  Sun, 
  LayoutGrid, 
  X 
} from "lucide-react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    setMounted(true);
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 80);
    });
  }, []);

  if (!mounted) return null;

  const navItems = [
    { id: "home", icon: <Home size={18} />, label: "Home" },
    { id: "about", icon: <User size={18} />, label: "About" },
    { id: "skills", icon: <FileText size={18} />, label: "Skills" },
    { id: "services", icon: <Briefcase size={18} />, label: "Services" },
    { id: "portfolio", icon: <ImageIcon size={18} />, label: "Portfolio" },
    { id: "contact", icon: <Send size={18} />, label: "Contact" },
  ];

  return (
    <>
      {/* DESKTOP HEADER */}
      <header className={`hidden md:flex fixed px-10 w-full top-0 left-0 z-50 transition-all duration-300 ${scroll ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
        <nav className="container flex justify-between items-center h-[var(--header-height)] py-4">
          <a href="#" className="font-bold text-xl text-title hover:text-text transition-colors">
            Shahriar
          </a>

          <div className="flex items-center gap-6">
            <div className="flex gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  onSetActive={() => setActiveNav(`#${item.id}`)}
                  className={`text-sm font-medium transition-colors cursor-pointer hover:text-title ${
                    activeNav === `#${item.id}` ? "text-title font-semibold" : "text-text"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-title"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* MOBILE HEADER */}
      <div className="md:hidden fixed bottom-6 left-0 right-0 z-50 px-6 pointer-events-none">
        <div className="flex justify-between items-end">
          <a href="#" className="pointer-events-auto font-bold text-2xl text-title drop-shadow-md">
            S.
          </a>

          <div className="relative pointer-events-auto">
            <AnimatePresence>
              {toggle && (
                <motion.div
                  initial={{ scale: 0, opacity: 0, y: 20, x: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0, x: 0 }}
                  exit={{ scale: 0, opacity: 0, y: 20, x: 20 }}
                  transition={{ duration: 0.3, type: "spring", stiffness: 260, damping: 20 }}
                  className="absolute bottom-14 right-0 bg-container shadow-2xl rounded-2xl p-4 w-[200px] grid grid-cols-3 gap-4 origin-bottom-right border border-gray-200 dark:border-gray-700"
                >
                  {navItems.map((item) => (
                    <Link
                      key={item.id}
                      to={item.id}
                      spy={true}
                      smooth={true}
                      offset={-50}
                      duration={500}
                      onClick={() => {
                        setActiveNav(`#${item.id}`);
                        setToggle(false);
                      }}
                      className="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-background transition-colors cursor-pointer"
                    >
                      <span className={`text-title ${activeNav === `#${item.id}` ? "font-bold" : ""}`}>
                        {item.icon}
                      </span>
                      <span className="text-[10px] font-medium text-text">
                        {item.label}
                      </span>
                    </Link>
                  ))}

                  <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-background transition-colors"
                  >
                     <span className="text-title">
                        {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                     </span>
                     <span className="text-[10px] font-medium text-text">
                        Theme
                     </span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              onClick={() => setToggle(!toggle)}
              className="bg-title text-background p-3 rounded-xl shadow-lg hover:scale-105 transition-transform flex items-center justify-center"
            >
              {toggle ? <X size={24} /> : <LayoutGrid size={24} />}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;