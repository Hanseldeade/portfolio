import About from "./views/About";
import Contact from "./views/Contact";
import Project from "./views/Project";
import Hero from "./views/Hero";
import { motion, AnimatePresence } from "framer-motion";
import IntroAnimation from "./components/IntroAnimation";
import { useState, useEffect } from "react";

const App = () => {
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    // Set intro as complete after the intro animation finishes
    const timer = setTimeout(() => {
      setIntroComplete(true);
    }, 2000); // 1.2s for intro + 0.8s for exit animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-auto bg-black text-white">
      <AnimatePresence mode="wait">
        <IntroAnimation />
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: introComplete ? 1 : 0,
          y: introComplete ? 0 : 20
        }}
        transition={{ 
          duration: 0.8, 
          delay: 0.2,
          ease: "easeOut"
        }}
        className=""
      >
        <Hero />
        <div className="relative">
          <About />
          <Project />
        </div>
        <Contact />
      </motion.div>
    </div>
  );
};

export default App;
