"use client";

import React from 'react';

const brands = [
  {
    name: "Acme Corp",
    logo: (
      <svg className="h-6 w-6 mr-2.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18M5.5 5.5l13 13M18.5 5.5l-13 13" />
      </svg>
    )
  },
  {
    name: "Initech",
    logo: (
      <svg className="h-6 w-6 mr-2.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    )
  },
  {
    name: "Hooli",
    logo: (
      <svg className="h-6 w-6 mr-2.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
      </svg>
    )
  },
  {
    name: "Stark Ind",
    logo: (
      <svg className="h-6 w-6 mr-2.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    name: "Globex",
    logo: (
      <svg className="h-6 w-6 mr-2.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8M12 3a15.3 15.3 0 014 9 15.3 15.3 0 01-4 9 15.3 15.3 0 01-4-9 15.3 15.3 0 014-9z" />
      </svg>
    )
  },
  {
    name: "Umbrella Corp",
    logo: (
      <svg className="h-6 w-6 mr-2.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2V22M2 12H22" />
      </svg>
    )
  },
  {
    name: "Massive Dynamic",
    logo: (
      <svg className="h-6 w-6 mr-2.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    name: "Nexa Tech",
    logo: (
      <svg className="h-6 w-6 mr-2.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
      </svg>
    )
  }
];

const Marque = () => {
  return (
    <section className="relative w-full py-10 bg-zinc-50/50 dark:bg-black/20 border-y border-zinc-200/50 dark:border-zinc-800/30 overflow-hidden">
      
      {/* Inline styles for keyframes to keep it self-contained */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-slow {
          animation: marquee 30s linear infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 md:px-8 mb-6 text-center">
        <span className="text-xs font-bold tracking-widest text-zinc-400 dark:text-zinc-500 uppercase">
          Trusted by Industry Leaders & Innovators
        </span>
      </div>

      {/* Fade Gradients left and right */}
      <div className="relative w-full flex items-center overflow-hidden py-4
        before:absolute before:left-0 before:top-0 before:z-20 before:h-full before:w-24 before:bg-gradient-to-r before:from-zinc-50 dark:before:from-zinc-950/20 before:to-transparent before:pointer-events-none
        after:absolute after:right-0 after:top-0 after:z-20 after:h-full after:w-24 after:bg-gradient-to-l after:from-zinc-50 dark:after:from-zinc-950/20 after:to-transparent after:pointer-events-none"
      >
        <div className="flex w-[200%] gap-12 items-center animate-marquee-slow hover:[animation-play-state:paused]">
          
          {/* First loop container */}
          <div className="flex justify-around w-1/2 items-center gap-12">
            {brands.map((brand, i) => (
              <div
                key={`${brand.name}-1`}
                className="flex items-center text-zinc-450 dark:text-zinc-450 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 select-none cursor-pointer"
              >
                {brand.logo}
                <span className="text-sm font-bold tracking-tight">{brand.name}</span>
              </div>
            ))}
          </div>

          {/* Second loop container for seamless repeat */}
          <div className="flex justify-around w-1/2 items-center gap-12">
            {brands.map((brand, i) => (
              <div
                key={`${brand.name}-2`}
                className="flex items-center text-zinc-450 dark:text-zinc-450 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 select-none cursor-pointer"
              >
                {brand.logo}
                <span className="text-sm font-bold tracking-tight">{brand.name}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
      
    </section>
  );
};

export default Marque;
