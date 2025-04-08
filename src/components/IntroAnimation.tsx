import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const IntroAnimation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      // Add a small delay before actually removing the component
      setTimeout(() => {
        setIsVisible(false);
      }, 800);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden"
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Animated lines */}
        <div className="absolute inset-0 flex items-center justify-center">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-[1px] bg-gradient-to-r from-transparent via-white to-transparent"
              style={{ width: `${100 + i * 50}%` }}
              initial={{ 
                opacity: 0,
                scale: 0,
                x: i % 2 === 0 ? -100 : 100
              }}
              animate={{ 
                opacity: isExiting ? 0 : 1,
                scale: isExiting ? 0 : 1,
                x: isExiting ? (i % 2 === 0 ? 100 : -100) : 0
              }}
              transition={{ 
                duration: 0.6, 
                delay: i * 0.1,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Animated dots */}
        <div className="absolute inset-0 flex items-center justify-center">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-white"
              initial={{ 
                opacity: 0,
                scale: 0,
                y: -20
              }}
              animate={{ 
                opacity: isExiting ? 0 : 1,
                scale: isExiting ? 0 : 1,
                y: isExiting ? 20 : 0
              }}
              transition={{ 
                duration: 0.5, 
                delay: 0.2 + i * 0.1,
                ease: "easeInOut"
              }}
              style={{
                left: `${20 + i * 15}%`,
                top: '50%',
                transform: 'translate(-50%, -50%)'
              }}
            />
          ))}
        </div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: isExiting ? 0 : 1, 
            y: isExiting ? -20 : 0,
            scale: isExiting ? 0.8 : 1
          }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeInOut" }}
          className="text-center z-10"
        >
          <h1 className="text-4xl font-bold text-white tracking-wider">
            Jaika<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500"> Sangual</span>
          </h1>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default IntroAnimation; 