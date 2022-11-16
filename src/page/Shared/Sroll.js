import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const Sroll = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.div className="progress-bar z-50" style={{ scaleX }}>
      <div className="p-1 bg-orange-700 "></div>
    </motion.div>
  );
};

export default Sroll;
