import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Flame } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Menu', path: '/menu' },
  { label: 'Banquet', path: '/#banquet' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

function PasandLogo({ compact = false }) {
  return (
    <Link to="/" className="flex items-center gap-3 group">
      {/* Emblem */}
      <div className="relative flex-shrink-0">
        <div className="w-11 h-11 rounded-full border border-primary/40 bg-primary/5 flex items-center justify-center group-hover:border-primary/70 transition-all duration-500 group-hover:bg-primary/10">
          {/* Inner filigree ring */}
          <div className="absolute inset-1 rounded-full border border-primary/15" />
          {/* Crown + P */}
          <div className="relative z-10 flex flex-col items-center">
            <Flame className="w-2.5 h-2.5 text-primary/70 -mb-0.5" />
            <span className="font-heading text-primary text-lg font-bold leading-none">P</span>
          </div>
          {/* Glow pulse */}
          <div className="absolute inset-0 rounded-full bg-primary/0 group-hover:bg-primary/5 transition-all duration-500" />
        </div>
        {/* Gold dot accent */}
        <div className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-primary shadow-lg shadow-primary/50" />
      </div>

      {/* Wordmark */}
      {!compact && (
        <div className="flex flex-col">
          <span className="font-heading text-foreground text-[17px] font-semibold tracking-wide leading-tight">
            Pasand <span className="text-primary">Grand</span>
          </span>
          <span className="text-[8px] text-muted-foreground tracking-[0.28em] uppercase font-body leading-none mt-0.5">
            Multicuisine Restaurant
          </span>
        </div>
      )}
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-strong shadow-2xl shadow-black/60' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <PasandLogo />

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative text-sm font-body tracking-wide transition-colors duration-300 ${
                location.pathname === link.path
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {link.label}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary rounded-full"
                />
              )}
            </Link>
          ))}
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            to="/book"
            className="hidden sm:inline-flex items-center px-6 py-2.5 bg-primary text-primary-foreground font-body text-sm font-semibold rounded-full pulse-cta hover:bg-primary/90 transition-all duration-300 shadow-md shadow-primary/20"
          >
            Book a Table
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-strong border-t border-border/20"
          >
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block text-base font-body py-1 ${
                    location.pathname === link.path ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/book"
                className="block text-center mt-6 px-6 py-3.5 bg-primary text-primary-foreground font-body text-sm font-semibold rounded-full"
              >
                Book a Table
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
