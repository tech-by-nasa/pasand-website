import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Train, Bus, Phone, Navigation } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const connectivityPoints = [
  { icon: Train, label: 'Habsiguda Metro Station', detail: '2 min walk' },
  { icon: Bus, label: 'Habsiguda Bus Stop', detail: '1 min walk' },
  { icon: Navigation, label: 'Easy Access from Ring Road', detail: '5 min drive' },
];

export default function LocationSection() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">
            Prime Location
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground">
            Right at <span className="text-gold-gradient">Your Doorstep</span>
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Map */}
          <AnimatedSection>
            <div className="rounded-3xl overflow-hidden glass h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.0!2d78.5459311!3d17.4142645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI0JzUxLjQiTiA3OMKwMzInNDUuNCJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.9) contrast(1.1)', minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pasand Grand Location"
              />
            </div>
          </AnimatedSection>

          {/* Info */}
          <AnimatedSection delay={0.2} className="flex flex-col gap-6">
            <div className="glass rounded-3xl p-8 flex-1">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-1">Our Address</h3>
                  <p className="text-muted-foreground font-body text-sm">
                    Shop 1-3-38, Street 8, Habsiguda,<br />
                    Hyderabad, Telangana 500007
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-body text-xs text-muted-foreground tracking-[0.2em] uppercase">
                  Connectivity
                </h4>
                {connectivityPoints.map((point, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 4 }}
                    className="flex items-center justify-between py-3 border-b border-border/50 last:border-0"
                  >
                    <div className="flex items-center gap-3">
                      <point.icon className="w-4 h-4 text-primary" />
                      <span className="text-sm font-body text-foreground">{point.label}</span>
                    </div>
                    <span className="text-xs font-body text-primary font-medium">{point.detail}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Contact */}
            <div className="glass rounded-3xl p-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-body uppercase tracking-wider">Call to Reserve</p>
                  <a href="tel:+919550116644" className="font-heading text-2xl font-bold text-foreground hover:text-primary transition-colors">
                    +91 95501 16644
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
