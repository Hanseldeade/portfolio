import { motion } from 'framer-motion';
import { useScrollAnimation } from '../utils/useScrollAnimation';
import { cn } from '../utils/cn';

interface AnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const FadeIn = ({ children, className, delay = 0 }: AnimationProps) => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <motion.div
      ref={elementRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const FadeInLeft = ({ children, className, delay = 0 }: AnimationProps) => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <motion.div
      ref={elementRef}
      initial={{ opacity: 0, x: -50 }}
      animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const FadeInRight = ({ children, className, delay = 0 }: AnimationProps) => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <motion.div
      ref={elementRef}
      initial={{ opacity: 0, x: 50 }}
      animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const ParallaxY = ({ children, className, delay = 0 }: AnimationProps) => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <motion.div
      ref={elementRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
      className={cn("relative", className)}
    >
      {children}
    </motion.div>
  );
};

export const ScaleIn = ({ children, className, delay = 0 }: AnimationProps) => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <motion.div
      ref={elementRef}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}; 