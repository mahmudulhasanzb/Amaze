'use client';

import React from 'react';
import {
  Check,
  Target,
  Eye,
  Shield,
  Landmark,
  Building2,
  Briefcase,
  GraduationCap,
  Home,
  HeartPulse,
  Factory,
  Hammer,
  ShoppingBag,
  Cpu,
  Sparkles,
  Warehouse,
  Activity,
  ChevronRight,
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const stats = [
    'Strong 15000+ Work Force',
    '200+ Clients',
    'Presence PAN INDIA',
  ];

  const segments = [
    { name: 'Commercial and IT Parks', icon: Building2 },
    { name: 'Corporate Offices', icon: Briefcase },
    { name: 'Educational Institutions', icon: GraduationCap },
    { name: 'Residential Communities', icon: Home },
    { name: 'Hotels and Hospitals', icon: HeartPulse },
    { name: 'Industries', icon: Factory },
    { name: 'Infrastructure and Construction Sites', icon: Hammer },
    { name: 'Malls, Multiplexes and Retail Stores', icon: ShoppingBag },
    { name: 'Manufacturing Units', icon: Cpu },
    { name: 'Special Events', icon: Sparkles },
    { name: 'Ware Houses', icon: Warehouse },
    { name: 'Pharma', icon: Activity },
  ];

  return (
    <div className="relative w-full bg-white dark:bg-zinc-950 min-h-screen pt-28 pb-16">
      {/* 1. Header & About Section */}
      <section className="relative w-full px-4 md:px-8 overflow-hidden mb-24">
        {/* Glow Blobs */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 flex flex-col gap-6"
            >
              <div className="space-y-2">
                <span className="text-xs font-bold tracking-wider text-blue-700 dark:text-blue-400 uppercase">
                  Who We Are
                </span>
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-zinc-950 via-zinc-800 to-zinc-950 dark:from-white dark:via-zinc-200 dark:to-white bg-clip-text text-transparent">
                  About Us
                </h1>
              </div>

              <p className="text-sm md:text-base text-slate-650 dark:text-zinc-300 leading-relaxed text-justify font-normal">
                Amaze PMS Pvt Ltd (AMAZE) is a Property Management division of
                ACTION GROUP of Companies founded in the year 2001 by Mr.
                Subhani Abdul a veteran from the Indian Navy, a Certified
                Security Practitioner, and a renowned name in the Service
                Industry. Amaze has its Head Quarters in Cyberabad, Telangana -
                INDIA, providing Property Management Solutions PAN INDIA,
                partnering with leading clientele with 15000 + strong strength
                of professionals. We specialize in offering comprehensive
                integrated Property Management Services such as Housekeeping,
                MEP (Mechanical, Electrical, Plumbing), Security, Pest Control,
                Gardening, STP & WTP, Parking, Swimming Pool Maintenance, office
                support services, deep cleaning services etc all these services
                are inhouse.
              </p>

              {/* Stats Checks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-2">
                {stats.map((stat, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-700 dark:bg-blue-500 text-white">
                      <Check className="h-3.5 w-3.5 stroke-[3]" />
                    </div>
                    <span className="text-sm font-semibold text-slate-800 dark:text-zinc-200">
                      {stat}
                    </span>
                  </div>
                ))}
              </div>

              {/* Get Started Button */}
              <div className="mt-4">
                <Link
                  href="#contact"
                  className="inline-flex h-11 items-center justify-center px-6 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-500/20 hover:shadow-xl transition-all duration-200 cursor-pointer gap-2 group"
                >
                  <span>GET STARTED WITH US</span>
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* Right Graphic Column: Overlay Composite */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-5 flex justify-center items-center"
            >
              <div className="relative w-full max-w-md h-[340px] md:h-[420px] flex items-center justify-center">
                {/* Back Shield Logo Card - No padding, white border */}
                <div className="absolute right-2 md:right-8 top-0 z-10 w-48 md:w-56 overflow-hidden rounded-3xl border-4 border-white dark:border-zinc-800 shadow-2xl hover:scale-[1.02] transition-transform duration-300">
                  <img
                    src="https://i.ibb.co.com/tMbv2081/aboutimgmobile.png"
                    alt="Action Group Logo Shield"
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Front Team Photo Card - Overlapping on the left */}
                <div className="absolute left-2 md:left-8 bottom-2 md:bottom-6 z-20 p-2.5 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-150/50 dark:border-zinc-800 shadow-2xl hover:scale-[1.02] transition-transform duration-300">
                  <img
                    src="https://i.ibb.co.com/xbmRHjq/about1.png"
                    alt="Amaze Team Group Photo"
                    className="w-48 md:w-56 h-auto rounded-2xl object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Mission | Vision | Values Section */}
      <section className="relative w-full px-4 md:px-8 py-16 bg-slate-50/40 dark:bg-black/20 border-y border-slate-100 dark:border-zinc-900">
        <div className="max-w-6xl mx-auto">
          {/* Section title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-zinc-950 via-zinc-800 to-zinc-950 dark:from-white dark:via-zinc-200 dark:to-white bg-clip-text text-transparent">
              Mission | Vision | Values
            </h2>
          </div>

          <div className="flex flex-col gap-12">
            {/* Card 1: Our Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white dark:bg-zinc-900/50 p-6 md:p-8 rounded-3xl border border-slate-100 dark:border-zinc-800/60 shadow-sm"
            >
              <div className="md:col-span-8 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 dark:bg-zinc-800 text-blue-700 dark:text-blue-400">
                    <Target className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Our Mission
                  </h3>
                </div>
                <p className="text-sm md:text-base text-slate-650 dark:text-zinc-350 leading-relaxed text-justify">
                  Our Mission is to be a leading provider of comprehensive
                  property management solutions in the PAN INDIA. We are
                  committed to delivering exceptional services that exceed our
                  clients expectations, while prioritizing technology,
                  sustainability, and the well being of our employees.
                </p>
              </div>
              <div className="md:col-span-4 flex justify-center">
                <div className="relative flex items-center justify-center h-28 w-28 rounded-full bg-blue-50/60 dark:bg-zinc-800/30 border border-blue-100/50 dark:border-zinc-800">
                  <div className="absolute inset-2 rounded-full border border-dashed border-blue-400/50 animate-[spin_20s_linear_infinite]" />
                  <Target className="h-10 w-10 text-blue-700 dark:text-blue-450 stroke-[1.5]" />
                </div>
              </div>
            </motion.div>

            {/* Card 2: Our Vision (Alternated visual) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white dark:bg-zinc-900/50 p-6 md:p-8 rounded-3xl border border-slate-100 dark:border-zinc-800/60 shadow-sm"
            >
              <div className="md:col-span-4 flex justify-center order-last md:order-first">
                <div className="relative flex items-center justify-center h-28 w-28 rounded-full bg-teal-50/60 dark:bg-zinc-800/30 border border-teal-100/50 dark:border-zinc-800">
                  <div className="absolute inset-2 rounded-full border border-dashed border-teal-400/50 animate-[spin_25s_linear_infinite]" />
                  <Eye className="h-10 w-10 text-teal-700 dark:text-teal-450 stroke-[1.5]" />
                </div>
              </div>
              <div className="md:col-span-8 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-50 dark:bg-zinc-800 text-teal-700 dark:text-teal-455">
                    <Eye className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Our Vision
                  </h3>
                </div>
                <p className="text-sm md:text-base text-slate-655 dark:text-zinc-350 leading-relaxed text-justify">
                  Our Vision is to transform the property management industry by
                  setting new standards of excellence and innovation. We strive
                  to be recognized for reliable, cost-effective, and sustainable
                  property management services. Through continuous enhancement
                  and a client-centric approach, we aim to enhance the value we
                  bring to our clients business.{' '}
                  <strong className="text-blue-700 dark:text-blue-400">
                    (ATHMA NIRBHAR BHARATH)
                  </strong>
                  .
                </p>
              </div>
            </motion.div>

            {/* Card 3: Our Values */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white dark:bg-zinc-900/50 p-6 md:p-8 rounded-3xl border border-slate-100 dark:border-zinc-800/60 shadow-sm"
            >
              <div className="md:col-span-8 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 dark:bg-zinc-800 text-indigo-700 dark:text-indigo-400">
                    <Shield className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Our Core Values
                  </h3>
                </div>
                <p className="text-sm md:text-base text-slate-655 dark:text-zinc-350 leading-relaxed text-justify">
                  Our Core Values include respect, integrity, excellence,
                  sustainability, and customer focus. We are committed to
                  conducting business with the highest ethical standards,
                  delivering excellence in all aspects of our work, promoting
                  sustainability in our operations, and always prioritizing the
                  needs and satisfaction of our clients.
                </p>
              </div>
              <div className="md:col-span-4 flex justify-center">
                <div className="relative flex items-center justify-center h-28 w-28 rounded-full bg-indigo-50/60 dark:bg-zinc-800/30 border border-indigo-100/50 dark:border-zinc-800">
                  <div className="absolute inset-2 rounded-full border border-dashed border-indigo-400/50 animate-[spin_15s_linear_infinite]" />
                  <Shield className="h-10 w-10 text-indigo-700 dark:text-indigo-455 stroke-[1.5]" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Segments We Cater To Section */}
      <section className="relative w-full px-4 md:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Area: Title & Grid list */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-8 space-y-8"
            >
              <div className="space-y-2">
                <span className="text-xs font-bold tracking-wider text-blue-700 dark:text-blue-400 uppercase">
                  Our Operations Range
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-zinc-950 via-zinc-800 to-zinc-950 dark:from-white dark:via-zinc-200 dark:to-white bg-clip-text text-transparent">
                  Segments We Cater To
                </h2>
              </div>

              {/* Grid of Segments */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {segments.map((segment, index) => {
                  const Icon = segment.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800/80 shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-300 group cursor-pointer"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 dark:bg-zinc-800 text-blue-700 dark:text-blue-400 group-hover:scale-105 transition-transform duration-200">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-sm font-bold text-slate-800 dark:text-zinc-200 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                        {segment.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Right Graphics Area */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4 flex justify-center"
            >
              <div className="relative w-full max-w-xs p-6 rounded-3xl bg-slate-50 dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800/80 shadow-md shadow-slate-100/50 dark:shadow-none flex flex-col gap-4 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 dark:bg-zinc-800 border border-blue-100/60 dark:border-zinc-700/50">
                  <Landmark className="h-7 w-7 text-blue-700 dark:text-blue-400" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-extrabold text-slate-900 dark:text-white">
                    Structured Compliance
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed font-normal">
                    Delivering institutional excellence across multi-faceted
                    client portfolios PAN India.
                  </p>
                </div>
                <div className="mt-2 pt-4 border-t border-slate-200/50 dark:border-zinc-800/60 flex items-center justify-around text-xs font-semibold text-slate-700 dark:text-zinc-300">
                  <span>Reliable</span>
                  <span>•</span>
                  <span>Cost-Effective</span>
                  <span>•</span>
                  <span>Sustainable</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
