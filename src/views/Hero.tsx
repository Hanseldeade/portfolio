import WordRotate from "../components/WordRotate";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const [windowSize, setWindowSize] = useState({ width: 1000, height: 800 });

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navList = [
    {
      title: "About",
      link: "about",
    },
    {
      title: "Projects",
      link: "projects",
    },
    {
      title: "Contact",
      link: "contact",
    },
  ];

  return (
    <section className="w-full min-h-screen sm:px-10 px-5 py-10 relative font-secondary overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-transparent to-black z-10"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-3xl animate-pulse top-0 -left-64 mix-blend-screen"></div>
        <div className="absolute w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-3xl animate-pulse bottom-0 right-0 mix-blend-screen"></div>
        <div className="absolute w-[300px] h-[300px] bg-pink-500/20 rounded-full blur-2xl animate-pulse top-1/2 left-1/2 mix-blend-screen"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              initial={{
                x: Math.random() * windowSize.width,
                y: Math.random() * windowSize.height,
                opacity: Math.random() * 0.5 + 0.3,
                scale: Math.random() * 0.5 + 0.5,
              }}
              animate={{
                y: [0, Math.random() * -50, 0],
                x: [0, Math.random() * 50 - 25, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-[1500px] mx-auto w-full flex md:flex-row flex-col relative z-10">
        <div className="w-full">
          <motion.ul 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex gap-10 w-fit sm:mx-0 mx-auto"
          >
            {navList.map((items, index) => (
              <motion.a 
                href={`#${items.link}`}
                key={items.title}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <li className="relative group">
                  <span className="relative z-10">{items.title}</span>
                  <motion.span 
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </li>
              </motion.a>
            ))}
          </motion.ul>
        </div>
        <div className="sm:w-full w-fit mx-auto sm:mx-0">
          <div className="ml-auto w-fit relative">
            <motion.h1 
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:text-9xl sm:text-7xl text-6xl font-semibold relative"
            >
              JAIKA
              <motion.div 
                className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-lg blur-sm"
                animate={{ 
                  scale: [1, 1.02, 1],
                  opacity: [0.5, 0.7, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.h1>
            <div className="absolute -left-[45rem] top-1/2 -translate-y-1/2">
              <WordRotate
                className="text-4xl font-semibold text-black dark:text-white sm:text-5xl md:text-7xl whitespace-nowrap"
                words={[
                  "Hello I'm",
                  "Hola, soy",
                  "Bonjour, je suis",
                  "Hallo, ich bin",
                  "Ciao, sono",
                  "Olá, eu sou",
                  "你好, 我是",
                  "こんにちは、私は",
                  "안녕하세요, 저는",
                  "Привет, я",
                  "مرحبًا، أنا",
                ]}
              />
            </div>
            <div className="flex">
              <motion.h1 
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="sm:text-7xl lg:text-9xl text-6xl font-semibold relative"
              >
                SANGUAL
                <motion.div 
                  className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg blur-sm"
                  animate={{ 
                    scale: [1, 1.02, 1],
                    opacity: [0.5, 0.7, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.h1>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="m-4 ml-6 relative group"
              >
                <motion.div
                  className="relative z-10"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="relative z-10">Business</p>
                  <p className="relative z-10">Analyst</p>
                </motion.div>
                <motion.div 
                  className="absolute -inset-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-lg"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
