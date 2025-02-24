"use client"

import type React from "react"
import { motion } from "framer-motion"

const AnimatedLogo: React.FC = () => {
  return (
    <div className="w-40 h-40 relative">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7dd3fc" />
            <stop offset="50%" stopColor="#fcd34d" />
            <stop offset="100%" stopColor="#7dd3fc" />
          </linearGradient>
        </defs>
        <motion.circle
          cx="50"
          cy="50"
          r="45"
          stroke="url(#logoGradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.path
          d="M20,50 Q50,20 80,50 T20,50"
          stroke="url(#logoGradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear", delay: 0.5 }}
        />
        <motion.path
          d="M30,70 L50,30 L70,70"
          stroke="url(#logoGradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear", delay: 1 }}
        />
      </svg>
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <span className="text-2xl font-bold text-accent-400">EP</span>
      </motion.div>
    </div>
  )
}

export default AnimatedLogo

