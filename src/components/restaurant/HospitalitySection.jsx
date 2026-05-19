import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Gem, Heart, Zap, Star, ChefHat } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const pillars = [
  {
    icon: Crown,
    title: 'Royal Treatment',
    desc: 'Every guest is royalty here. From the moment you arrive, white-glove attentiveness and personalized service is our promise — not a privilege.',
  },
  {
    icon: Gem,
    title: 'Beyond Expectations',
    desc: 'We don\'t just meet expectations — we exceed them. Our service has no script, no limit. We respond to what you need before you ask.',
  },
  {
    icon: Heart,
    title: 'Served with Soul',
    desc: 'Every plate carries the warmth of home cooking elevated to fine dining. Our chefs pour emotion and mastery into every dish they create.',
  },
  {
    icon: Zap,
    title: 'Swift & Seamless',
    desc: 'Efficient service without ever feeling rushed. We strike the perfect balance between attentiveness and giving you space to savour.',
  },
  {
    icon: Star,
    title: 'Impeccable Standards',
    desc: 'FSSAI certified. Hygiene-first kitchen. Premium ingredients sourced daily. We hold ourselves to Michelin-level standards in everything we do.',
  },
  {
    icon: ChefHat,
    title: 'Master Craftsmen',
    desc: 'Our chefs are storytellers with spices. Trained in the art of Hyderabadi, North Indian, and Asian cuisines — each dish is a chapter of culinary heritage.',
  },
];

const testimonialHighlight = {
  quote: "You don't come to Pasand Grand just for the food. You come for the feeling — the feeling of being celebrated, welcomed, and genuinely cared for. It's hospitality in its truest, most royal form.",
  name: "Chef's Philosophy",
  role: "The Pasand Grand Promise",
};

export default function HospitalitySection({ interiorImage }) {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* bg accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(229,169,60,0.06)_0%,_transparent_55%)]" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="text-center mb-20">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">Our Promise</p>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            You Come for <span className="text-gold-gradient">Royal Treatment</span>,<br />
            <span className="text-foreground/70">Not Just the Food</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto text-base leading-relaxed">
            At Pasand Grand, hospitality isn't a department — it's our culture. Every team member is trained in the art of making you feel celebrated, seen, and cherished.
          </p>
        </AnimatedSection>

        {/* Large quote + image */}
        <AnimatedSection className="mb-20">
          <div className="relative rounded-3xl overflow-hidden">
            <img
              src={interiorImage}
              alt="Pasand Grand Hospitality"
              className="w-full h-[420px] sm:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-xl px-10 sm:px-16 py-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9 }}
                >
                  <div className="text-5xl text-primary/40 font-heading mb-4 leading-none">"</div>
                  <p className="font-heading text-xl sm:text-2xl font-medium text-foreground italic leading-relaxed mb-6">
                    {testimonialHighlight.quote}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-0.5 bg-primary" />
                    <div>
                      <p className="font-body text-sm font-semibold text-primary">{testimonialHighlight.name}</p>
                      <p className="font-body text-xs text-muted-foreground">{testimonialHighlight.role}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ duration: 0.35 }}
                className="glass rounded-3xl p-8 group hover:glow-gold transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <p.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">{p.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{p.desc}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Seating capacity callout */}
        <AnimatedSection delay={0.2} className="mt-12">
          <div className="glass rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-primary font-body text-xs tracking-[0.2em] uppercase mb-2">Restaurant Capacity</p>
              <h3 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
                300+ Guests <span className="text-gold-gradient">Simultaneously</span>
              </h3>
              <p className="text-muted-foreground font-body text-sm mt-2">
                Spacious main dining hall + private banquet wing — perfect for every occasion, big or intimate.
              </p>
            </div>
            <div className="flex gap-8 flex-shrink-0">
              <div className="text-center">
                <p className="font-heading text-4xl font-bold text-primary">200+</p>
                <p className="text-xs text-muted-foreground font-body mt-1">Banquet Capacity</p>
              </div>
              <div className="w-px bg-border" />
              <div className="text-center">
                <p className="font-heading text-4xl font-bold text-primary">100+</p>
                <p className="text-xs text-muted-foreground font-body mt-1">Main Dining</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
