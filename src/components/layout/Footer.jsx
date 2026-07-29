import React from 'react';
import Link from 'next/link';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ChevronRight 
} from 'lucide-react';

const FacebookIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Footer = () => {
  const menuLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Our Strength', href: '/strength' },
    { name: 'Gallery', href: '/gallery' },
  ];

  const quickLinks = [
    { name: 'Our Clients', href: '/testimonials' },
    { name: 'Recruitments', href: '/recruitments' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact Us', href: '/#contact' },
  ];

  const presence = [
    'Telangana',
    'Andhra Pradesh',
    'Karnataka',
    'Tamilnadu',
    'Odisha',
  ];

  const socialLinks = [
    { icon: FacebookIcon, href: '#', label: 'Facebook' },
    { icon: TwitterIcon, href: '#', label: 'Twitter' },
    { icon: LinkedinIcon, href: '#', label: 'LinkedIn' },
    { icon: InstagramIcon, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="relative w-full bg-slate-50 dark:bg-zinc-950 border-t border-slate-100 dark:border-zinc-800/80 pt-16 pb-8 overflow-hidden mt-auto">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-500/5 dark:bg-teal-500/2 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Column 1: Company Profile */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800/50 shadow-sm">
                <img
                  src="https://i.ibb.co.com/C35WN3Q9/logo.png"
                  alt="logo"
                  className="w-5 h-5 object-contain"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-zinc-950 dark:text-white">
                Amaze
              </span>
            </div>
            
            <p className="text-sm font-bold text-zinc-800 dark:text-zinc-200 leading-snug">
              Amaze Property Management Solutions Pvt Ltd
            </p>
            <p className="text-xs text-zinc-555 dark:text-zinc-400 leading-relaxed max-w-sm font-normal">
              Providing premium property management services. Committed to efficiency, safety, and excellence across portfolios PAN India.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 text-slate-500 hover:text-blue-700 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-zinc-800 transition-all duration-200 shadow-sm cursor-pointer"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Menu */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">
              Menu
            </h3>
            <ul className="flex flex-col gap-2.5">
              {menuLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-1 text-sm text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                  >
                    <ChevronRight className="h-3 w-3 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-1 text-sm text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                  >
                    <ChevronRight className="h-3 w-3 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Our Presence */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">
              Our Presence
            </h3>
            <ul className="flex flex-col gap-2.5">
              {presence.map((place) => (
                <li key={place} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 font-medium">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-500 shrink-0" />
                  <span>{place}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">
              Contact
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-2.5 items-start">
                <MapPin className="h-4 w-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <span className="text-xs text-zinc-550 dark:text-zinc-400 leading-normal font-normal">
                  4th floor, High Mark Chambers, Khajaguda X road, Cyberabad, Hyderabad-500008
                </span>
              </li>
              <li className="flex gap-2.5 items-center">
                <Phone className="h-4 w-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <a 
                  href="tel:9100694137" 
                  className="text-xs text-zinc-550 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-normal"
                >
                  9100694137
                </a>
              </li>
              <li className="flex gap-2.5 items-center">
                <Mail className="h-4 w-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <a 
                  href="mailto:Info@amazepms.com" 
                  className="text-xs text-zinc-550 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-normal"
                >
                  Info@amazepms.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 border-t border-slate-200/60 dark:border-zinc-800/60 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-500 dark:text-zinc-400 text-center md:text-left font-normal">
            Copyright © Amaze Property Management | All Right Reserved
          </p>
          <div className="flex gap-4 text-xs text-zinc-550 dark:text-zinc-400 font-normal">
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
