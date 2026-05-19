import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ChefHat, MapPin, Clock, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const specialMessages = [
  "Chef's Table exclusive — Lamb Raan with saffron jus",
  "Coastal special — Prawn Koliwada & Malabar Fish Curry",
  "Heritage Wednesday — Royal Hyderabadi Dawat menu",
  "Sichuan Thursday — Dragon Platter limited edition",
  "Weekend Feast — Grand Biryani Mahotsav begins",
  "Sizzler Saturday — Live tandoor performances & kebab station",
  "Sunday Brunch — Family Grand Thali, unlimited servings",
];

export default function DailySpecialsSection() {
  const [today] = useState(new Date().getDay());
  const [activeDay, setActiveDay] = useState(today === 0 ? 6 : today - 1);

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(229,169,60,0.05)_0%,_transparent_65%)]" />

      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">
              Always Fresh. Always Surprising.
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Daily Menu <span className="text-gold-gradient">Specials</span><br />
              & Chef's Secrets
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-8 text-base">
              Our menu breathes. Every single day, our Chef crafts something extraordinary — seasonal specials, surprise dishes, and limited-edition creations that <strong className="text-foreground">you won't find anywhere else</strong>. The only way to discover them is to walk through our doors.
            </p>

            {/* Days */}
            <div className="flex gap-2 mb-6 flex-wrap">
              {days.map((day, i) => (
                <button
                  key={day}
                  onClick={() => setActiveDay(i)}
                  className={`w-11 h-11 rounded-full text-xs font-body font-semibold transition-all duration-300 ${
                    i === activeDay
                      ? 'bg-primary text-primary-foreground shadow-lg scale-110'
                      : i === (today === 0 ? 6 : today - 1)
                      ? 'border-2 border-primary text-primary bg-primary/5'
                      : 'glass text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeDay}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="glass rounded-2xl p-5 mb-8"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ChefHat className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-primary font-body font-medium mb-1">{days[activeDay]}'s Chef Special</p>
                    <p className="text-foreground font-body text-sm leading-relaxed">{specialMessages[activeDay]}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* The CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/book"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-body text-sm font-semibold rounded-full pulse-cta hover:bg-primary/90 transition-all"
              >
                Book Today's Table
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 px-7 py-3.5 glass text-foreground font-body text-sm font-medium rounded-full hover:bg-white/5 transition-all"
              >
                View Full Menu
              </Link>
            </div>
          </div>

          {/* Right — exciting card */}
          <AnimatedSection delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative rounded-3xl overflow-hidden glass p-0 group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 group-hover:from-primary/15 transition-all duration-500" />
              
              {/* Pattern overlay */}
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: `repeating-linear-gradient(45deg, hsl(40,75%,56%) 0, hsl(40,75%,56%) 1px, transparent 0, transparent 50%)`,
                backgroundSize: '20px 20px'
              }} />

              <div className="relative z-10 p-10 text-center">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="text-6xl mb-4"
                >
                  🍽️
                </motion.div>
                <h3 className="font-heading text-3xl font-bold text-foreground mb-3">
                  The Menu Changes.<br />
                  <span className="text-gold-gradient">The Magic Stays.</span>
                </h3>
                <p className="text-muted-foreground font-body text-sm mb-8 leading-relaxed">
                  What's today's special? Only our chef knows — and the guests who walk in. 
                  Daily specials, seasonal ingredients, and surprise dishes keep every visit unique.
                </p>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[
                    { emoji: '🕐', label: '11AM–11PM', sub: 'Every day' },
                    { emoji: '👨‍🍳', label: 'Live Cooking', sub: 'Watch the magic' },
                    { emoji: '⭐', label: 'Daily Special', sub: 'Exclusive dish' },
                  ].map((item, i) => (
                    <div key={i} className="bg-background/40 rounded-2xl p-4">
                      <div className="text-2xl mb-1">{item.emoji}</div>
                      <p className="text-xs font-body font-semibold text-foreground">{item.label}</p>
                      <p className="text-[10px] text-muted-foreground font-body">{item.sub}</p>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-center gap-2 text-primary font-body text-sm font-medium">
                  <MapPin className="w-4 h-4" />
                  <span>Visit us. Discover something extraordinary.</span>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </AnimatedSection>
      </div>
    </section>
  );
}
