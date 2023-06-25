"use client";

import { motion } from "framer-motion";

const PageWrapper = ({ children, className, onClick }) => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
      className={className}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
