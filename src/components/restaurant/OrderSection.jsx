import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const INTERIOR_FALLBACK = 'https://media.base44.com/images/public/6a0c9cc47b354f861ae1b8e7/7ee08a965_generated_image.png';

export default function OrderSection({ interiorImage }) {
  const img = interiorImage || INTERIOR_FALLBACK;
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(229,169,60,0.06)_0%,_transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Book a Table */}
          <AnimatedSection>
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="relative rounded-3xl overflow-hidden min-h-[360px] group cursor-pointer"
            >
              <img
                src={img}
                alt="Restaurant interior"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
              <div className="relative z-10 flex flex-col justify-end h-full p-10">
                <p className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-2">
                  Reserve Your Spot
                </p>
                <h3 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Book a Table
                </h3>
                <p className="text-muted-foreground font-body text-sm mb-6 max-w-sm">
                  Secure your perfect dining experience. Choose your date, time, and let us handle the rest.
                </p>
                <Link
                  to="/book"
                  className="group/btn inline-flex items-center gap-2 w-fit px-8 py-3.5 bg-primary text-primary-foreground font-body text-sm font-semibold rounded-full pulse-cta hover:bg-primary/90 transition-all duration-300"
                >
                  Reserve Now
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </AnimatedSection>

          {/* Order Online */}
          <AnimatedSection delay={0.15}>
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="relative rounded-3xl overflow-hidden min-h-[360px] glass group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
              <div className="relative z-10 flex flex-col justify-center items-center h-full p-10 text-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-colors">
                  <ExternalLink className="w-8 h-8 text-primary" />
                </div>
                <p className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-2">
                  Delivery & Takeaway
                </p>
                <h3 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Order Online
                </h3>
                <p className="text-muted-foreground font-body text-sm mb-8 max-w-sm">
                  Can't visit? No worries. Order via Zomato and enjoy our flavors at home.
                </p>
                <a
                  href="https://www.zomato.com/hyderabad/pasand-grand-habsiguda?amp=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center gap-2 px-8 py-3.5 glass text-foreground font-body text-sm font-semibold rounded-full hover:bg-white/10 transition-all duration-300 border border-primary/30"
                >
                  Order on Zomato
                  <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
