"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Home, 
  Users, 
  Calendar, 
  Activity, 
  FileSpreadsheet, 
  Search, 
  Sliders, 
  Building2, 
  ShieldAlert, 
  Clock, 
  Heart 
} from 'lucide-react';

const WhyChoseUs = () => {
  const column1 = [
    {
      icon: TrendingUp,
      title: "Portfolio Scale",
      description: "Managing an area of more than 20 million Sq.ft across different portfolios."
    },
    {
      icon: Home,
      title: "Inhouse Operations",
      description: "All property management services are inhouse for maximum quality control."
    },
    {
      icon: Users,
      title: "Emergency Readiness",
      description: "Availability of back up staff to take care of emergencies at any time."
    },
    {
      icon: Calendar,
      title: "Continuous Training",
      description: "Yearly training calendar shared and conducted by a dedicated Training Officer."
    },
    {
      icon: Activity,
      title: "Risk Management",
      description: "Risk Assessment of Equipment and its Operations, recommending timely measures."
    },
    {
      icon: FileSpreadsheet,
      title: "Standard Procedures",
      description: "Site specific SOP's and checklists implemented for all active services."
    }
  ];

  const column2 = [
    {
      icon: Search,
      title: "Site Audits & Optimization",
      description: "Internal team audits site regularly to propose improvements including Power Saving and Manpower Optimization."
    },
    {
      icon: Sliders,
      title: "Shutdown Maintenance",
      description: "Coordination and Supervision towards Annual Shutdown Maintenance and mobilizing."
    },
    {
      icon: Building2,
      title: "Government Liaison",
      description: "Liaison with Government agencies for seamless regulatory approvals."
    },
    {
      icon: ShieldAlert,
      title: "Comprehensive Compliance",
      description: "Rigorous EHS, Security, Technical, Fire & Safety, Inventory, Compliance, and Customer Satisfaction audits."
    },
    {
      icon: Clock,
      title: "AMC Tracking",
      description: "AMC (Annual Maintenance Contracts) Tracking and Negotiations."
    },
    {
      icon: Heart,
      title: "Staff Welfare",
      description: "STAFF WELFARE: Diwali Sweets, Gifts/Rewards, ₹2L Insurance, ₹10k funeral expenses, ₹1L compensation, and student scholarships up to ₹1L."
    }
  ];

  const renderCard = ({ icon: Icon, title, description }, index) => (
    <motion.div
      key={title}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group flex gap-4 p-4 rounded-2xl bg-white/40 dark:bg-zinc-900/35 hover:bg-white/80 dark:hover:bg-zinc-900/60 border border-white/20 dark:border-zinc-800/40 shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 dark:bg-zinc-800/80 border border-blue-100/50 dark:border-zinc-700/50 group-hover:scale-105 transition-transform duration-200">
        <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
      </div>
      <div className="space-y-1">
        <h3 className="text-sm font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-xs md:text-sm text-zinc-550 dark:text-zinc-350 leading-relaxed font-normal">
          {description}
        </p>
      </div>
    </motion.div>
  );

  return (
    <section className="relative w-full py-20 px-4 md:px-8 overflow-hidden bg-zinc-50/50 dark:bg-black/30">
      {/* Background Ambient Glow Blobs */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold tracking-wider text-blue-600 dark:text-blue-450 uppercase">
            Our Advantage
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-zinc-950 via-zinc-800 to-zinc-950 dark:from-white dark:via-zinc-200 dark:to-white bg-clip-text text-transparent">
            Why Choose Us
          </h2>
          <p className="text-sm md:text-base text-zinc-500 dark:text-zinc-400 font-normal">
            Industry-leading property management solutions driven by experience, technology, and dedication.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: 3D Illustration Graphic */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-sm rounded-3xl p-4 bg-white/20 dark:bg-zinc-800/10 border border-white/40 dark:border-zinc-700/20 backdrop-blur-md shadow-2xl flex items-center justify-center overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src="/why_us_illustration.png"
                alt="Why Choose Us Illustration"
                className="w-full h-auto rounded-2xl object-cover hover:scale-102 transition-transform duration-500"
              />
            </motion.div>
          </div>

          {/* Right Columns: Feature List */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Column 1 list */}
            <div className="flex flex-col gap-6">
              {column1.map((item, index) => renderCard(item, index))}
            </div>

            {/* Column 2 list */}
            <div className="flex flex-col gap-6">
              {column2.map((item, index) => renderCard(item, index + 3))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoseUs;
