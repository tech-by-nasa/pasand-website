import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Mail, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border/30 bg-card/50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                <span className="font-heading text-primary text-lg font-bold">P</span>
              </div>
              <div>
                <span className="font-heading text-foreground text-lg font-semibold">Pasand Grand</span>
                <p className="text-[9px] text-muted-foreground tracking-[0.2em] uppercase">
                  Multicuisine Restaurant
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground font-body leading-relaxed">
              Premium multicuisine dining crafted with passion, served with grandeur.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Navigate</h4>
            <div className="space-y-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'Menu', path: '/menu' },
                { label: 'Book a Table', path: '/book' },
                { label: 'About Us', path: '/about' },
                { label: 'Contact', path: '/contact' },
              ].map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-sm text-muted-foreground font-body hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <p className="text-sm text-muted-foreground font-body">
                  Shop 1-3-38, Street 8,<br />Habsiguda, Hyderabad
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+919550116644" className="text-sm text-muted-foreground font-body hover:text-primary transition-colors">
                  +91 95501 16644
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+917799145656" className="text-sm text-muted-foreground font-body hover:text-primary transition-colors">
                  +91 77991 45656
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Hours</h4>
            <div className="flex items-start gap-3 mb-4">
              <Clock className="w-4 h-4 text-primary mt-0.5" />
              <div>
                <p className="text-sm font-body text-foreground font-medium">Mon — Sun</p>
                <p className="text-sm text-muted-foreground font-body">11:00 AM — 11:00 PM</p>
              </div>
            </div>

            <h4 className="font-heading text-sm font-semibold text-foreground mb-3 uppercase tracking-wider mt-6">Follow Us</h4>
            <div className="flex items-center gap-3">
              <a href="https://www.facebook.com/p/Pasand-Grand-Multicuisine-Restaurant-61564864591743/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Facebook className="w-4 h-4 text-muted-foreground" />
              </a>
              <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Instagram className="w-4 h-4 text-muted-foreground" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground font-body">
            © {new Date().getFullYear()} Pasand Grand Multicuisine Restaurant. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/50 font-body">
            FSSAI License: 13621012000905
          </p>
        </div>
      </div>
    </footer>
  );
}
