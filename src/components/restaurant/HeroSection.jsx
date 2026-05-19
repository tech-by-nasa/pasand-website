import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, MapPin, Clock } from 'lucide-react';
import BiryaniHeroScene from './BiryaniHeroScene';

const BIRYANI_IMG = 'https://media.base44.com/images/public/6a0c9cc47b354f861ae1b8e7/3147b0d20_generated_image.png';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Deep obsidian background */}
      <div className="absolute inset-0 bg-[#0D0D0D]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_70%_50%,_rgba(229,169,60,0.07)_0%,_transparent_70%)]" />

      {/* Biryani 2D Canvas Scene — right side */}
      <div className="absolute right-0 top-0 w-full md:w-[58%] h-full">
        <BiryaniHeroScene biryaniImage={BIRYANI_IMG} />
      </div>

      {/* Horizontal divider line glow */}
      <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent pointer-events-none hidden md:block" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-36 md:py-0 w-full">
        <div className="max-w-xl">

          {/* Top badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-10"
          >
            <div className="flex -space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 text-primary fill-primary" />
              ))}
            </div>
            <span className="text-sm font-body text-foreground/90 font-medium">4.3 on Google</span>
            <span className="text-xs text-muted-foreground">•</span>
            <span className="text-xs text-muted-foreground">3,000+ Reviews</span>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            <h1 className="font-heading leading-[0.92] tracking-tight">
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.55, ease: [0.22,1,0.36,1] }}
                className="block text-foreground text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light"
              >
                The
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.22,1,0.36,1] }}
                className="block text-gold-gradient text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-extrabold"
              >
                Grandeur
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.85, ease: [0.22,1,0.36,1] }}
                className="block text-foreground text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium"
              >
                of Flavor
              </motion.span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-7 text-lg text-muted-foreground font-body font-light max-w-md leading-relaxed"
          >
            Premium Multicuisine Dining — Biryani, Tandoori, Chinese, North Indian & more. Habsiguda's most loved dining destination.
          </motion.p>

          {/* Micro details */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="flex flex-wrap items-center gap-4 mt-4"
          >
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground/60 font-body">
              <MapPin className="w-3 h-3 text-primary/60" /> Habsiguda, Hyderabad
            </span>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground/60 font-body">
              <Clock className="w-3 h-3 text-primary/60" /> 11 AM – 11 PM Daily
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-wrap items-center gap-4 mt-10"
          >
            <Link
              to="/book"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body text-sm font-semibold rounded-full pulse-cta hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20"
            >
              Reserve a Table
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 px-8 py-4 glass text-foreground font-body text-sm font-medium rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Explore Menu
            </Link>
          </motion.div>

          {/* Social proof strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-14 pt-8 border-t border-border/20 flex items-center gap-6"
          >
            {[
              { val: '4.3★', label: 'Google Rating' },
              { val: '7+', label: 'Cuisines' },
              { val: '200+', label: 'Menu Items' },
            ].map((stat, i) => (
              <div key={i} className={i > 0 ? 'pl-6 border-l border-border/20' : ''}>
                <p className="font-heading text-xl font-bold text-primary">{stat.val}</p>
                <p className="text-[10px] text-muted-foreground font-body tracking-wider uppercase">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border border-muted-foreground/20 flex items-start justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
