"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const slides = [
    {
      image: "https://i.ibb.co.com/MxmVW1ht/buildingbanner2.png",
      eyebrow: "Amaze Property Management Solutions",
      title: "Elevating Facility Management Services",
      description: "Delivering integrated property solutions with precision, safety, and operational excellence for diverse portfolios.",
      cta: "Explore Our Strength",
      href: "#strength"
    },
    {
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80",
      eyebrow: "Operational Scale",
      title: "Managing 20M+ Sq.Ft of Portfolios",
      description: "Backed by a certified, skilled workforce of 15,000+ experts keeping your infrastructure operating at absolute peak efficiency.",
      cta: "Learn More About Us",
      href: "#about"
    },
    {
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=80",
      eyebrow: "PAN India Service",
      title: "Trusted Partner of 200+ Clients",
      description: "From security audits to MEP systems, we coordinate, manage, and scale facilities operations with zero downtime.",
      cta: "Contact Our Team",
      href: "#contact"
    }
  ];

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Autoplay functionality
  useEffect(() => {
    const timer = setInterval(handleNext, 6000);
    return () => clearInterval(timer);
  }, [handleNext]);

  // Slide variants for smooth slider animations
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir) => ({
      x: dir < 0 ? '100%' : '-100%',
      opacity: 0
    })
  };

  return (
    <header className="relative w-full h-[550px] md:h-[650px] lg:h-[750px] overflow-hidden bg-zinc-950">
      
      {/* Slider Images with AnimatePresence */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 1 }
            }}
            className="absolute inset-0 w-full h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-900/50 to-transparent z-10" />
            <div className="absolute inset-0 bg-zinc-950/20 z-10" />
            <img
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-6 md:px-8 flex items-center">
        <div className="max-w-2xl space-y-6 text-white">
          
          {/* Eyebrow Label */}
          <motion.div
            key={`eyebrow-${currentIndex}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-semibold tracking-wider uppercase backdrop-blur-md"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>{slides[currentIndex].eyebrow}</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            key={`title-${currentIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none drop-shadow-sm"
          >
            {slides[currentIndex].title}
          </motion.h1>

          {/* Description */}
          <motion.p
            key={`desc-${currentIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-sm md:text-base text-zinc-300 leading-relaxed font-normal max-w-xl drop-shadow"
          >
            {slides[currentIndex].description}
          </motion.p>

          {/* CTA Link/Button */}
          <motion.div
            key={`cta-${currentIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="pt-2"
          >
            <Link
              href={slides[currentIndex].href}
              className="inline-flex h-11 items-center justify-center px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-500/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              {slides[currentIndex].cta}
            </Link>
          </motion.div>

        </div>
      </div>

      {/* Manual Sliding Navigation Controls */}
      <div className="absolute bottom-8 right-8 z-30 flex items-center gap-3">
        <button
          onClick={handlePrev}
          className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white backdrop-blur-md transition-all duration-200 cursor-pointer"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={handleNext}
          className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white backdrop-blur-md transition-all duration-200 cursor-pointer"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Slide Pagination Indicator Dots */}
      <div className="absolute bottom-8 left-8 z-30 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > currentIndex ? 1 : -1);
              setCurrentIndex(i);
            }}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              i === currentIndex
                ? 'w-8 bg-blue-500 shadow-md shadow-blue-500/30'
                : 'w-2.5 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

    </header>
  );
};

export default Banner;
