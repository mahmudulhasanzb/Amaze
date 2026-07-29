"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, Compass, ArrowRight, AlertTriangle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-zinc-950 px-4">
      {/* Background Glow Blobs */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-teal-500/5 dark:bg-teal-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-lg w-full text-center space-y-8">
        {/* Animated Visual/Icon Container */}
        <div className="flex justify-center">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
            className="relative flex items-center justify-center h-28 w-28 rounded-3xl bg-blue-50 dark:bg-zinc-900 border border-blue-150/40 dark:border-zinc-800 shadow-lg shadow-blue-500/5 dark:shadow-none"
          >
            {/* Pulsing Outer Rings */}
            <div className="absolute inset-0 rounded-3xl border border-blue-500/20 dark:border-blue-500/10 animate-ping opacity-75" />
            <div className="absolute -inset-4 rounded-[2rem] border border-teal-500/10 dark:border-teal-500/5 animate-pulse" />
            
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
              <Compass className="h-12 w-12 text-blue-700 dark:text-blue-400 stroke-[1.5]" />
            </motion.div>
          </motion.div>
        </div>

        {/* 404 Title */}
        <div className="space-y-3">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-zinc-900 border border-slate-200/60 dark:border-zinc-800 text-slate-500 dark:text-zinc-400 text-xs font-semibold tracking-wider uppercase"
          >
            <AlertTriangle className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
            <span>Error 404</span>
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-zinc-950 via-zinc-800 to-zinc-950 dark:from-white dark:via-zinc-200 dark:to-white bg-clip-text text-transparent"
          >
            Lost in the Premises?
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-sm md:text-base text-slate-550 dark:text-zinc-450 max-w-md mx-auto leading-relaxed"
          >
            We coordinate and manage millions of square feet, but we couldn't locate this specific page. Let's get you back to the main lobby.
          </motion.p>
        </div>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4"
        >
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex h-11 items-center justify-center px-6 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-200 cursor-pointer gap-2 group"
          >
            <Home className="h-4 w-4" />
            <span>Return to Lobby</span>
          </Link>
          
          <Link
            href="/#contact"
            className="w-full sm:w-auto inline-flex h-11 items-center justify-center px-6 py-2.5 rounded-xl border border-slate-200 dark:border-zinc-800 hover:bg-slate-50 dark:hover:bg-zinc-900 text-slate-700 dark:text-zinc-300 font-semibold shadow-sm transition-all duration-200 cursor-pointer gap-2"
          >
            <span>Report an Issue</span>
            <ArrowRight className="h-4 w-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>

      {/* Decorative footer label */}
      <div className="absolute bottom-6 left-0 right-0 text-center">
        <span className="text-xs text-slate-400 dark:text-zinc-600 font-medium">
          Amaze Property Management Solutions
        </span>
      </div>
    </div>
  );
}
