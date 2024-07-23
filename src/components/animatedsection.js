// AnimatedSection.js
import { motion } from 'framer-motion';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

const AnimatedSection = ({ children }) => {
  const [ref, controls] = useInViewAnimation();

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
