import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, ExternalLink, Quote } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const reviews = [
  {
    name: 'Ravi Kumar',
    rating: 5,
    date: 'December 2024',
    avatar: 'RK',
    color: 'from-amber-500 to-orange-600',
    text: 'Absolutely stunning biryani! The dum cooking technique is spot on — every grain of rice perfectly coated with the most aromatic masala. The mutton was fall-off-the-bone tender. This is hands-down the best biryani in Habsiguda. Highly recommend to anyone who appreciates authentic Hyderabadi cuisine.',
    highlight: 'Best Biryani in Habsiguda',
  },
  {
    name: 'Priya Sharma',
    rating: 5,
    date: 'November 2024',
    avatar: 'PS',
    color: 'from-rose-500 to-pink-600',
    text: 'Came here for my anniversary and the experience was truly royal. The ambiance is stunning — the aquarium is mesmerizing! Staff treated us like royalty. The Butter Chicken and Garlic Naan combo was perfect. Will definitely be back for more special occasions.',
    highlight: 'Royal Treatment & Stunning Ambiance',
  },
  {
    name: 'Mohammed Saleem',
    rating: 5,
    date: 'November 2024',
    avatar: 'MS',
    color: 'from-emerald-500 to-teal-600',
    text: 'The tandoori platter here is extraordinary — smoky, well-spiced, and cooked to perfection. The seekh kebabs melt in your mouth. Excellent value for money. The service was prompt and attentive. The restaurant has a great vibe — perfect for families and groups.',
    highlight: 'Extraordinary Tandoori & Great Value',
  },
  {
    name: 'Deepika Reddy',
    rating: 5,
    date: 'October 2024',
    avatar: 'DR',
    color: 'from-violet-500 to-purple-600',
    text: 'Hosted my daughter\'s birthday party in their banquet hall — absolutely stunning decor and excellent service. The food was catered beautifully. Chinese platter was a hit with the kids and biryani with the adults. The team went above and beyond to make it special!',
    highlight: 'Perfect Birthday Venue',
  },
  {
    name: 'Arjun Nair',
    rating: 5,
    date: 'October 2024',
    avatar: 'AN',
    color: 'from-blue-500 to-indigo-600',
    text: 'I\'ve tried many restaurants in Hyderabad but Pasand Grand stands apart. The Dragon Chicken is fire! The Chinese menu here is on another level — bold flavors, restaurant quality presentation. The interior design with the aquarium feature is something you must see.',
    highlight: 'Dragon Chicken is Fire!',
  },
  {
    name: 'Sunitha Rao',
    rating: 4,
    date: 'September 2024',
    avatar: 'SR',
    color: 'from-cyan-500 to-sky-600',
    text: 'Great ambiance and wonderful food. The paneer dishes were outstanding — fresh and perfectly spiced. Came with family of 8 and everyone was impressed. Portions are generous. The seating arrangement is very comfortable. Will visit again very soon!',
    highlight: 'Outstanding Paneer & Great Portions',
  },
];

function StarRating({ count }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${i < count ? 'text-primary fill-primary' : 'text-muted-foreground'}`}
        />
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  const scrollRef = useRef(null);

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(229,169,60,0.07)_0%,_transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">
              Voices of Our Guests
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground">
              What the City <span className="text-gold-gradient">Says</span>
            </h2>
            <div className="flex items-center gap-3 mt-4">
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                ))}
              </div>
              <span className="font-heading text-2xl font-bold text-foreground">4.3</span>
              <span className="text-muted-foreground font-body text-sm">/ 3,000+ Google Reviews</span>
            </div>
          </div>
          <a
            href="https://www.google.com/maps/search/Pasand+Grand+Multicuisine+Restaurant+Habsiguda/@17.4142645,78.5459311,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 glass rounded-full text-sm font-body text-primary border border-primary/30 hover:bg-primary/10 transition-all duration-300"
          >
            View All on Google
            <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </AnimatedSection>

        {/* Reviews Grid */}
        <div
          ref={scrollRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reviews.map((review, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.35 }}
                className="glass rounded-3xl p-7 flex flex-col gap-4 h-full hover:glow-gold transition-all duration-500 group"
              >
                {/* Top */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${review.color} flex items-center justify-center text-white font-body font-bold text-sm flex-shrink-0`}>
                      {review.avatar}
                    </div>
                    <div>
                      <p className="font-body font-semibold text-foreground text-sm">{review.name}</p>
                      <p className="text-xs text-muted-foreground font-body">{review.date}</p>
                    </div>
                  </div>
                  <Quote className="w-6 h-6 text-primary/30 group-hover:text-primary/60 transition-colors" />
                </div>

                <StarRating count={review.rating} />

                {/* Highlight badge */}
                <span className="inline-block w-fit px-3 py-1 bg-primary/10 text-primary text-[11px] font-body font-medium rounded-full">
                  ✦ {review.highlight}
                </span>

                {/* Review text */}
                <p className="text-sm text-muted-foreground font-body leading-relaxed flex-1">
                  "{review.text}"
                </p>

                {/* Google badge */}
                <div className="flex items-center gap-1.5 mt-auto pt-2 border-t border-border/30">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className="text-[10px] text-muted-foreground font-body">Verified Google Review</span>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Add Review CTA */}
        <AnimatedSection delay={0.3} className="mt-12 text-center">
          <div className="glass rounded-3xl p-8 sm:p-10 max-w-2xl mx-auto">
            <p className="font-heading text-2xl font-bold text-foreground mb-2">
              Dined with us? Share your story.
            </p>
            <p className="text-sm text-muted-foreground font-body mb-6">
              Your review helps others discover Pasand Grand and motivates our team to keep raising the bar.
            </p>
            <a
              href="https://search.google.com/local/writereview?placeid=ChIJq1SmSuGZyzsRcvNWEjTDlnY"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-body text-sm font-semibold rounded-full pulse-cta hover:bg-primary/90 transition-all duration-300"
            >
              Write a Google Review
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
