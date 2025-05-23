import WordRotate from "../components/WordRotate";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const [windowSize, setWindowSize] = useState({ width: 1000, height: 800 });
  const { scrollY } = useScroll();
  
  // Create parallax effect values
  const imageY = useTransform(scrollY, [0, 500], [0, -150]);
  const textY = useTransform(scrollY, [0, 500], [0, -50]);
  const fadeOut = useTransform(scrollY, [0, 1000], [1, 0]);

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
    <section className="w-full min-h-[150vh] sm:min-h-screen sm:px-10 px-3 py-6 sm:py-8 md:py-10 relative font-secondary overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black z-10"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 h-full z-0">
        {/* Tech Grid Background */}
        <div className="absolute inset-0">
          {/* Base grid */}
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(147, 51, 234, 0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: 'clamp(15px, 3vw, 40px) clamp(15px, 3vw, 40px)'
            }}
          />
          
          {/* Animated grid lines */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`horizontal-${i}`}
              className="absolute h-[1px] sm:h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"
              style={{
                top: `${(i * 100) / 15}%`,
                left: '0',
                right: '0',
                width: '100%'
              }}
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{
                opacity: [0, 0.5, 0],
                scaleX: [0, 1, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}

          {/* Vertical scanning lines */}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={`vertical-${i}`}
              className="absolute w-[2px] bg-gradient-to-b from-transparent via-blue-500 to-transparent"
              style={{
                left: `${(i * 100) / 10}%`,
                top: '0',
                bottom: '0',
                height: '100%'
              }}
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{
                opacity: [0, 0.3, 0],
                scaleY: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
            />
          ))}

          {/* Glowing dots at grid intersections */}
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={`dot-${i}`}
              className="absolute w-1 h-1 bg-purple-500 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Existing background elements */}
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

      <div className="max-w-[1500px] mx-auto w-full flex md:flex-row flex-col relative z-10 h-full">
        <div className="w-full md:w-1/2 flex flex-col">
          <motion.ul 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex gap-3 xs:gap-4 sm:gap-6 md:gap-10 w-fit sm:mx-0 mx-auto mb-4 sm:mb-6 md:mb-8 text-xs xs:text-sm sm:text-base"
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

          {/* Hero Images - Now with parallax effect */}
          <div className="relative mt-6 sm:mt-10 md:mt-48 md:ml-32 mx-auto md:mx-0">
            <motion.div 
              className="relative w-fit overflow-hidden group mb-2 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ y: imageY }}
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src="/Hero/Hero 1.png" 
                alt="Hero Image 1" 
                className="w-full max-w-[200px] xs:max-w-[240px] sm:max-w-[280px] md:max-w-md rounded-lg shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-purple-500/10"
              />
              <motion.div
                className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"
              />
            </motion.div>
            {/* Word Rotate for mobile */}
            <div className="md:hidden mb-4 text-center">
              <WordRotate
                className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-semibold text-black dark:text-white whitespace-nowrap"
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
          </div>
        </div>

        <div className="sm:w-full w-fit mx-auto sm:mx-0 md:w-1/2">
          <div className="ml-auto w-fit relative mt-4 md:mt-16">
            <motion.h1 
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-semibold relative text-center md:text-left"
              style={{ y: textY, opacity: fadeOut }}
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
            <div className="absolute -left-[20rem] sm:-left-[30rem] md:-left-[42rem] top-16 -translate-y-1/2 z-20 hidden md:block">
              <WordRotate
                className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-semibold text-black dark:text-white whitespace-nowrap"
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
            <div className="flex flex-col md:flex-row items-center md:items-start">
              <motion.h1 
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-semibold relative text-center md:text-left"
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
                className="m-2 sm:m-3 md:m-4 md:ml-6 relative group text-center md:text-left text-xs xs:text-sm sm:text-base"
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
            
            {/* Bio text with parallax */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-6 sm:mt-8 md:mt-12 lg:mt-16 mb-12 sm:mb-16 md:mb-24 lg:mb-32 max-w-3xl text-gray-300 text-xs xs:text-sm sm:text-base md:text-lg leading-relaxed relative z-10 mx-auto text-center md:text-justify px-3 sm:px-4 md:px-0"
              style={{ 
                y: textY, 
                opacity: useTransform(scrollY, 
                  [0, 400, 800],
                  [1, 1, 0]
                ) 
              }}
            >
              <p className="mb-12 sm:mb-16 md:mb-24 lg:mb-0">
                I'm a BS Information Systems student specializing in Business Analytics at the University of Santo Tomas. As a passionate and versatile UI/UX Designer, Analyst, and Full-Stack Developer, I thrive in creating visually appealing, intuitive designs and developing user-centric web applications. Beyond coding and design, I also express my creativity through digital artworks, including pubmats, illustrations, and graphic design pieces—bringing both technical and artistic perspectives into every project I take on.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        className="fixed bottom-16 xs:bottom-20 sm:bottom-24 md:bottom-10 left-1/2 -translate-x-1/2 z-20 cursor-pointer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        style={{
          opacity: useTransform(scrollY,
            [0, 400],
            [1, 0]
          )
        }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="flex flex-col items-center"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-[10px] xs:text-xs sm:text-sm text-gray-400 mb-1 sm:mb-2">Scroll Down</span>
          <motion.div
            animate={{ 
              boxShadow: [
                "0 0 10px rgba(168, 85, 247, 0.4)", 
                "0 0 20px rgba(168, 85, 247, 0.6)", 
                "0 0 10px rgba(168, 85, 247, 0.4)"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-full border border-purple-500"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-purple-500"
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
