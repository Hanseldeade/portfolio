import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface WordRotateProps {
  words: string[];
  className?: string;
}

const WordRotate = ({ words, className = "" }: WordRotateProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Set up the interval to continuously rotate words
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1500);

    // Clean up the interval when component unmounts
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className={`${className} overflow-hidden`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ 
            duration: 0.5,
            ease: "easeInOut"
          }}
          className="inline-block"
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default WordRotate; 