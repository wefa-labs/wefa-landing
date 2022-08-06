import React from "react";

import { motion, MotionProps } from "framer-motion";

export const PageTransition: React.FC<MotionProps> = (props): JSX.Element => (
  <motion.div
    initial={{ y: 5, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.4 }}
    {...props}
  />
);
