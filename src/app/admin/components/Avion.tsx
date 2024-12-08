"use client";
import React from "react";
import { motion } from "framer-motion";
type Props = {};

function Avion({}: Props) {
  const isToggled = true;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={` p-6  w-full min-h-screen  ${isToggled ? "pl-72" : "pl-24"}`}
    >
      hello word
    </motion.div>
  );
}

export default Avion;
