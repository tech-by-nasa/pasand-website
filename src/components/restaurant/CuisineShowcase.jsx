import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Flame, Crown } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const cuisineTabs = [
  {
    id: 'biryani',
    label: '🍛 Biryani',
    heading: 'Hyderabadi Dum Biryani',
    subheading: 'The Crown Jewel of Habsiguda',
    image: 'https://media.base44.com/images/public/6a0c9cc47b354f861ae1b8e7/b5959e505_generated_image.png',
    description: 'Slow-cooked for 4 hours in a sealed handi using the royal Dum method. Premium basmati rice layered with hand-selected spices, saffron from Kashmir, and marinated meat — producing a symphony of aroma that no imitation can match.',
    badges: [
      { icon: Crown, text: 'Signature Dish' },
      { icon: Star, text: 'Best Seller' },
      { icon: Flame, text: 'Dum Cooked' },
    ],
    items: ['Chicken Dum Biryani ₹280', 'Mutton Biryani ₹360', 'Prawns Biryani ₹380', 'Veg Dum Biryani ₹200'],
  },
  {
    id: 'tandoori',
    label: '🔥 Tandoori',
    heading: 'Clay Oven Masterpieces',
    subheading: 'Where Fire Meets Finesse',
    image: 'https://media.base44.com/images/public/6a0c9cc47b354f861ae1b8e7/f4d7995f0_generated_image.png',
    description: 'Our 900°C clay tandoor infuses every piece with a smoky, charred character that no other cooking method can replicate. Marinated overnight in yogurt, spice blends, and citrus — each piece is a work of art.',
    badges: [
      { icon: Flame, text: '900°C Clay Oven' },
      { icon: Star, text: 'Chef\'s Pick' },
      { icon: Crown, text: 'Overnight Marinated' },
    ],
    items: ['Tandoori Chicken ₹380', 'Seekh Kebab ₹280', 'Malai Kebab ₹300', 'Paneer Tikka ₹220'],
  },
  {
    id: 'north_indian',
    label: '🫕 North Indian',
    heading: 'Curries & Gravies',
    subheading: 'Rich. Royal. Unforgettable.',
    image: 'https://media.base44.com/images/public/6a0c9cc47b354f861ae1b8e7/bf931d337_generated_image.png',
    description: 'Velvety gravies slow-simmered with handpicked aromatics, finished with fresh cream and real butter. Every curry tells the story of India\'s culinary royalty — from the streets of Delhi to the kitchens of Kashmir.',
    badges: [
      { icon: Crown, text: 'Royal Recipes' },
      { icon: Star, text: 'Crowd Favourite' },
      { icon: Flame, text: 'Made to Order' },
    ],
    items: ['Butter Chicken ₹280', 'Paneer Butter Masala ₹220', 'Dal Makhani ₹180', 'Mutton Rogan Josh ₹340'],
  },
  {
    id: 'chinese',
    label: '🥢 Chinese',
    heading: 'Indo-Chinese Fusion',
    subheading: 'Bold, Fiery, Hyderabadi-Style',
    image: 'https://media.base44.com/images/public/6a0c9cc47b354f861ae1b8e7/447ad15ea_generated_image.png',
    description: 'Where Sichuan boldness meets Hyderabadi heat. Our wok masters toss each dish at high flame, locking in moisture and flavour. The Manchurian sauce is our secret recipe — developed in-house over years of craft.',
    badges: [
      { icon: Flame, text: 'Wok Flame Cooked' },
      { icon: Star, text: 'Best Seller' },
      { icon: Crown, text: 'Secret Recipe' },
    ],
    items: ['Chicken Manchurian ₹240', 'Dragon Chicken ₹260', 'Gobi Manchurian ₹180', 'Chilli Chicken ₹240'],
  },
];

export default function CuisineShowcase() {
  const [active, setActive] = useState(0);
  const current = cuisineTabs[active];

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(229,169,60,0.06)_0%,_transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="mb-16">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">
            Culinary Artistry
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground">
            A Feast for <span className="text-gold-gradient">Every Palate</span>
          </h2>
        </AnimatedSection>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {cuisineTabs.map((tab, i) => (
            <button
              key={tab.id}
              onClick={() => setActive(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-body transition-all duration-300 ${
                i === active
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                  : 'glass text-muted-foreground hover:text-foreground'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.22,1,0.36,1] }}
            className="grid lg:grid-cols-2 gap-8 items-center"
          >
            {/* Image */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] group">
              <motion.img
                src={current.image}
                alt={current.heading}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              {/* Best seller overlay */}
              <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                {current.badges.map((badge, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1 glass rounded-full text-xs font-body text-primary border border-primary/20">
                    <badge.icon className="w-3 h-3" />
                    {badge.text}
                  </span>
                ))}
              </div>
            </div>

            {/* Details */}
            <div>
              <p className="text-primary font-body text-xs tracking-[0.2em] uppercase mb-2">{current.subheading}</p>
              <h3 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-5">{current.heading}</h3>
              <p className="text-muted-foreground font-body leading-relaxed mb-8">{current.description}</p>

              {/* Item list */}
              <div className="grid grid-cols-2 gap-3">
                {current.items.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    className="glass rounded-xl px-4 py-3 flex items-center gap-2"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-xs font-body text-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
