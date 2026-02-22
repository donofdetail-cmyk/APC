import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    quote: "Advanced Powder Coating gets an A. They handled a massive job for us that no one else in Reno had the oven size to pull off.",
    author: "Mike T.",
    role: "Project Manager, Sierra Construction",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop&fm=webp"
  },
  {
    quote: "The finish on our custom chassis is absolutely flawless. These guys are true artists with a spray gun. The attention to detail is unmatched.",
    author: "Sarah J.",
    role: "Owner, Reno Hot Rods",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop&fm=webp"
  },
  {
    quote: "Fast turnaround and incredible durability. We use APC for all our industrial equipment coatings and they've never missed a deadline.",
    author: "David L.",
    role: "Operations Director, Nevada Mining Co.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop&fm=webp"
  }
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="reviews" className="py-32 bg-apc-black relative overflow-hidden">
      {/* Premium Background Ambient Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-apc-orange/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 hidden">
        {/* We will hide the original header since we are putting it inside the glass panel now for a cleaner look */}
      </div>

      <div className="container mx-auto px-4 relative z-10 2xl:max-w-7xl">
        <div className="glass-panel rounded-3xl p-8 md:p-16 lg:p-24 relative overflow-hidden border border-white/10 shadow-2xl">
          {/* Inner Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-apc-orange/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">

            <div className="lg:col-span-2 space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-4">
                <Star className="w-4 h-4 text-apc-orange fill-apc-orange" />
                <span className="text-xs font-mono uppercase tracking-widest text-apc-silver">Client Validation</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight leading-tight">
                TRUSTED BY <br className="hidden lg:block" /> THE <span className="text-gradient-orange">BEST</span>
              </h2>
              <p className="text-apc-silver text-lg font-light max-w-md">
                Don't just take our word for it. See what industry leaders are saying about our flawless execution.
              </p>
            </div>

            <div className="lg:col-span-3 relative h-[350px] md:h-[280px] w-full mt-8 lg:mt-0">
              <Quote className="absolute -top-10 -left-6 md:-left-10 w-24 h-24 text-white/5 rotate-180 z-0" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -30, filter: "blur(5px)" }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 flex flex-col justify-center z-10"
                >
                  <p className="text-xl md:text-3xl font-light text-white mb-10 leading-relaxed tracking-wide font-sans">
                    "{testimonials[activeIndex].quote}"
                  </p>

                  <div className="flex items-center gap-5 mt-auto">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-apc-orange to-apc-cyan rounded-full opacity-70 blur-sm"></div>
                      <img
                        src={testimonials[activeIndex].image}
                        alt={testimonials[activeIndex].author}
                        className="relative w-14 h-14 rounded-full border-2 border-white/20 object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-white uppercase tracking-wider text-lg">
                        {testimonials[activeIndex].author}
                      </div>
                      <div className="text-apc-orange text-sm font-medium tracking-wide">
                        {testimonials[activeIndex].role}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

          {/* Indicators - Bottom Right */}
          <div className="absolute bottom-8 right-8 md:bottom-12 md:right-16 flex gap-3 z-20">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-500 cursor-pointer focus:outline-none ${activeIndex === index ? 'w-12 bg-apc-orange shadow-[0_0_10px_rgba(232,101,10,0.8)]' : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
