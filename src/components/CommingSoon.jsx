import React from 'react';
import Link from 'next/link';
import { Clock, ArrowLeft } from 'lucide-react';

const CommingSoon = () => {
  return (
    <div className="relative w-full min-h-[70vh] flex flex-col items-center justify-center bg-white dark:bg-zinc-950 px-4 pt-36 pb-24">
      {/* Background ambient blobs */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-teal-500/5 dark:bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-md w-full text-center space-y-6 p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800/80 shadow-xl shadow-slate-100/80 dark:shadow-none">
        {/* Visual Icon */}
        <div className="flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 dark:bg-zinc-800 text-blue-700 dark:text-blue-400 border border-blue-100/50 dark:border-zinc-700/50">
            <Clock className="h-8 w-8" />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-2">
          <h2 className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-zinc-950 via-zinc-800 to-zinc-950 dark:from-white dark:via-zinc-200 dark:to-white bg-clip-text text-transparent">
            Under Construction
          </h2>
          <p className="text-sm text-slate-500 dark:text-zinc-400 leading-relaxed font-normal">
            We are currently developing this section to bring you comprehensive details about our integrated property management services.
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex h-10 items-center justify-center px-5 py-2 rounded-xl bg-blue-700 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 text-white text-sm font-semibold shadow-md shadow-blue-500/20 transition-all duration-200 cursor-pointer gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CommingSoon;
