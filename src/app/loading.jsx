import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-white dark:bg-zinc-950 px-4">
      <div className="relative flex flex-col items-center gap-4">
        {/* Loading Spinner with Logo Centerpiece */}
        <div className="relative flex items-center justify-center">
          {/* Outer Rotating Ring */}
          <div className="h-16 w-16 rounded-full border-[3px] border-slate-100 dark:border-zinc-800/80 border-t-blue-700 dark:border-t-blue-500 animate-spin" />
          
          {/* Inner Dot Accent */}
          <div className="absolute h-3 w-3 rounded-full bg-blue-700 dark:bg-blue-500" />
        </div>

        {/* Loading Text */}
        <span className="text-sm font-semibold tracking-wide text-slate-550 dark:text-zinc-400 animate-pulse">
          Loading...
        </span>
      </div>
    </div>
  );
}
