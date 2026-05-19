import React from 'react';
import { motion } from 'framer-motion';
import { Users, Sparkles, Crown, Wine, Camera, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';

const features = [
  { icon: Users, label: 'Seating for 200+', desc: 'Grand capacity for large gatherings' },
  { icon: Crown, label: 'Royal Décor', desc: 'Ornate chandeliers & gold accents' },
  { icon: Wine, label: 'Full-Service Catering', desc: 'Customized multicuisine menus' },
  { icon: Camera, label: 'Event Photography', desc: 'Partner photographers available' },
  { icon: Sparkles, label: 'Event Planning', desc: 'Dedicated coordinator assigned' },
  { icon: Phone, label: '24hr Support', desc: 'Dedicated event hotline' },
];

const occasions = ['Weddings', 'Corporate Events', 'Birthday Parties', 'Anniversaries', 'Engagements', 'Family Reunions'];

export default function BanquetSection({ banquetImage, diningImage }) {
  return (
    <section className="py-28 relative overflow-hidden" id="banquet">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(229,169,60,0.07)_0%,_transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">
            Grand Events
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            The Banquet <span className="text-gold-gradient">Hall</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto text-base">
            Where milestones become memories. Our grand banquet hall is designed to transform your most precious occasions into legendary experiences.
          </p>
        </AnimatedSection>

        {/* Main visual */}
        <AnimatedSection className="mb-12">
          <div className="relative rounded-3xl overflow-hidden aspect-[16/7]">
            <img
              src={banquetImage}
              alt="Pasand Grand Banquet Hall"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-lg px-10 sm:px-16">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/20 border border-primary/30 rounded-full text-primary text-xs font-body mb-4">
                    <Crown className="w-3 h-3" /> Premier Venue
                  </span>
                  <h3 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-3">
                    Host Events Worth Remembering
                  </h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
                    From intimate celebrations to grand galas — our 5,000 sq. ft. banquet hall accommodates up to 200 guests with impeccable service.
                  </p>
                  <Link
                    to="/book"
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-body text-sm font-semibold rounded-full pulse-cta hover:bg-primary/90 transition-all"
                  >
                    Book the Hall <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Features grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {features.map((f, i) => (
            <AnimatedSection key={i} delay={i * 0.07}>
              <motion.div
                whileHover={{ y: -5 }}
                className="glass rounded-2xl p-5 text-center group hover:glow-gold transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20">
                  <f.icon className="w-4 h-4 text-primary" />
                </div>
                <p className="font-body text-xs font-semibold text-foreground mb-1">{f.label}</p>
                <p className="font-body text-[10px] text-muted-foreground leading-tight">{f.desc}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Occasions + Aquarium side-by-side */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Occasions */}
          <AnimatedSection>
            <div className="glass rounded-3xl p-8 h-full">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Perfect For Every Occasion</h3>
              <p className="text-sm text-muted-foreground font-body mb-6">We've hosted it all — beautifully.</p>
              <div className="flex flex-wrap gap-3">
                {occasions.map((o, i) => (
                  <motion.span
                    key={o}
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="px-4 py-2 bg-primary/10 border border-primary/20 text-primary text-sm font-body rounded-full"
                  >
                    {o}
                  </motion.span>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-border/30">
                <p className="text-muted-foreground font-body text-sm mb-4">
                  Enquire about customized packages and early-bird discounts.
                </p>
                <a
                  href="tel:+919550116644"
                  className="inline-flex items-center gap-2 text-primary font-body text-sm font-medium hover:underline"
                >
                  <Phone className="w-4 h-4" />
                  +91 95501 16644
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Aquarium feature */}
          <AnimatedSection delay={0.15}>
            <div className="relative rounded-3xl overflow-hidden h-full min-h-[320px] group">
              <img
                src={diningImage}
                alt="Restaurant Dining & Aquarium"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/20 border border-cyan-400/30 rounded-full text-cyan-300 text-xs font-body mb-3">
                  🐠 Live Aquarium Feature
                </span>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                  Dine Beside the Ocean
                </h3>
                <p className="text-sm text-muted-foreground font-body">
                  Our stunning floor-to-ceiling live aquarium creates a mesmerizing, tranquil backdrop — an experience unlike any other in Habsiguda.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
