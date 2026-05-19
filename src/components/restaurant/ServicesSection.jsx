import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Car, PartyPopper, Zap, UtensilsCrossed, Clock, Wifi } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const services = [
  {
    icon: Car,
    title: 'Ample Parking & Valet Service',
    description: 'Spacious parking with complimentary valet for a hassle-free dining experience.',
  },
  {
    icon: PartyPopper,
    title: 'Grand Banquet Hall',
    description: 'Host memorable events in our elegant banquet hall for up to 200 guests.',
  },
  {
    icon: Zap,
    title: 'Lightning-Fast Delivery',
    description: 'Get your favorite dishes delivered hot and fresh to your doorstep.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Multicuisine Excellence',
    description: 'From Biryani to Chinese, savour diverse cuisines crafted by expert chefs.',
  },
  {
    icon: Clock,
    title: 'Open Till Late',
    description: 'Serving from 11 AM to 11 PM, seven days a week for your convenience.',
  },
  {
    icon: Wifi,
    title: 'Free Wi-Fi',
    description: 'Stay connected while enjoying your meal with complimentary high-speed Wi-Fi.',
  },
];

export default function ServicesSection() {
  const scrollRef = useRef(null);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(229,169,60,0.04)_0%,_transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">
            Our Services
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Beyond <span className="text-gold-gradient">Dining</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-md mb-12">
            A complete hospitality experience designed for your comfort and convenience.
          </p>
        </AnimatedSection>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div
          ref={scrollRef}
          className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {services.map((service, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="min-w-[280px] md:min-w-0 snap-center glass rounded-2xl p-8 group cursor-pointer hover:glow-gold transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
