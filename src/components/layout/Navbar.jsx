"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Sparkles, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Recruitments', href: '#recruitments' },
    { name: 'Our Strength', href: '#strength' },
    { name: 'Our Clients', href: '#clients' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Careers', href: '#careers' },
  ];

  return (
    <header
      className={`fixed top-4 left-4 right-4 z-50 mx-auto max-w-7xl transition-all duration-300 ${
        scrolled ? 'translate-y-0' : 'translate-y-1'
      }`}
    >
      <nav
        className={`relative w-full rounded-2xl border transition-all duration-300 px-6 py-3.5 md:py-4 flex items-center justify-between ${
          scrolled
            ? 'bg-white/80 dark:bg-zinc-900/80 backdrop-blur-lg border-zinc-200/80 dark:border-zinc-800/80 shadow-md shadow-zinc-250/10 dark:shadow-none'
            : 'bg-white/40 dark:bg-zinc-900/40 backdrop-blur-md border-zinc-205/50 dark:border-zinc-800/50 shadow-sm'
        }`}
      >
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl  text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200">
            <img
              src="https://i.ibb.co.com/C35WN3Q9/logo.png" alt='logo'
              className='w-5 h-5'
            />
          </div>
          <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-zinc-950 via-zinc-800 to-zinc-950 dark:from-white dark:via-zinc-200 dark:to-white bg-clip-text text-transparent">
            Amaze
          </span>
        </Link>

        {/* Desktop Nav Items */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map(item => (
            <Link
              key={item.name}
              href={item.href}
              className="px-3.5 py-2 text-sm font-medium text-zinc-650 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-450 rounded-xl hover:bg-zinc-500/5 dark:hover:bg-zinc-800/50 transition-all duration-200"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA Button / Contact Us */}
        <div className="hidden lg:block">
          <Link
            href="#contact"
            className="inline-flex h-10 items-center justify-center px-5 py-2 rounded-xl bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-100 text-sm font-semibold shadow-sm hover:shadow transition-all duration-200"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden items-center gap-2">
          <Link
            href="#contact"
            className="inline-flex h-9 items-center justify-center px-4 rounded-lg bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 text-xs font-semibold"
          >
            Contact
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile menu panel */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 p-4 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl shadow-xl flex flex-col gap-1 lg:hidden animate-in fade-in slide-in-from-top-2 duration-200">
            {navItems.map(item => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
              >
                <span>{item.name}</span>
                <ChevronRight className="h-4 w-4 opacity-50" />
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 flex h-11 items-center justify-center rounded-xl bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 text-sm font-semibold shadow"
            >
              Contact Us
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
