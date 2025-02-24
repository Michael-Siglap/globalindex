"use client"

import type React from "react"
import { motion } from "framer-motion"

const DynamicTitle: React.FC = () => {
  return (
    <div className="relative w-full h-32 mb-8 flex items-center justify-center">
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">
          Economic Pulse
        </span>
      </motion.h1>
      <motion.p
        className="absolute -bottom-6 text-sm md:text-base text-muted-foreground"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Global Economic Indices
      </motion.p>
    </div>
  )
}

export default DynamicTitle

