"use client";

import { motion } from "framer-motion";

import React from "react";

const MotionDiv = ({ classname, children }) => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className={classname}
    >
      {children}
    </motion.div>
  );
};

export default MotionDiv;
