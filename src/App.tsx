import About from "./views/About";
import Contact from "./views/Contact";
import Project from "./views/Project";
import Hero from "./views/Hero";
import { motion } from "framer-motion";

const App = () => {
  return (
    <div className="w-full h-auto bg-black text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
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
