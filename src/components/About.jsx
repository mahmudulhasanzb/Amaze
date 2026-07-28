'use client';

import React from 'react';
import { Button } from '@heroui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Check } from 'lucide-react';

const About = () => {
  const stats = [
    'Strong 15000+ Work Force',
    '200+ Clients',
    'Presence PAN INDIA',
  ];

  return (
    <section className="relative w-full py-20 px-4 md:px-8 overflow-hidden bg-zinc-50/50 dark:bg-black/30">
      {/* Background Ambient Glow Blobs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative max-w-6xl mx-auto rounded-3xl bg-white/40 dark:bg-zinc-900/35 backdrop-blur-2xl border border-white/30 dark:border-zinc-800/40 p-6 md:p-10 shadow-2xl shadow-zinc-200/20 dark:shadow-none"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="space-y-2">
              <span className="text-xs font-bold tracking-wider text-blue-600 dark:text-blue-450 uppercase">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-zinc-950 via-zinc-800 to-zinc-950 dark:from-white dark:via-zinc-200 dark:to-white bg-clip-text text-transparent">
                About Us
              </h2>
            </div>

            <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed text-justify font-normal">
              Amaze PMS Pvt Ltd (AMAZE) is a Property Management division of
              ACTION GROUP of Companies founded in the year 2001 by Mr. Subhani
              Abdul a veteran from the Indian Navy, a Certified Security
              Practitioner, and a renowned name in the Service Industry. Amaze
              has its Head Quarters in Cyberabad, Telangana - INDIA, providing
              Property Management Solutions PAN INDIA, partnering with leading
              clientele with 15000 + strong strength of professionals. We
              specialize in offering comprehensive integrated Property
              Management Services such as Housekeeping, MEP (Mechanical,
              Electrical, Plumbing), Security, Pest Control, Gardening, STP &
              WTP, Parking, Swimming Pool Maintenance, office support services,
              deep cleaning services etc all these services are inhouse.
            </p>

            {/* Checklist stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-2">
              {stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 dark:bg-blue-500 text-white">
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                    {stat}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-4">
              <Link href="/about">
                <Button className="h-11 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-650 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-200 cursor-pointer">
                  Know More
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-5">
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-2xl p-3 bg-white/20 dark:bg-zinc-800/10 border border-white/40 dark:border-zinc-700/20 backdrop-blur-md shadow-inner flex items-center justify-center group"
            >
              <img
                src="https://i.ibb.co.com/xbmRHjq/about1.png"
                alt="Amaze Team"
                className="w-full h-auto rounded-xl object-cover shadow-md border border-white/20 dark:border-zinc-800/40"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
