import { motion } from 'motion/react';
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
    quote: "The finish on our custom chassis is absolutely flawless. These guys are true artists with a spray gun.",
    author: "Sarah J.",
    role: "Owner, Reno Hot Rods",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop&fm=webp"
  },
  {
    quote: "Fast turnaround and incredible durability. We use APC for all our industrial equipment coatings.",
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
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="reviews" className="py-24 bg-apc-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            TRUSTED BY THE BEST
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative h-[400px] md:h-[300px]">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  x: activeIndex === index ? 0 : -100,
                  pointerEvents: activeIndex === index ? 'auto' : 'none'
                }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex flex-col items-center text-center"
              >
                <div className="mb-8 text-apc-orange">
                  <Quote className="w-12 h-12 opacity-50" />
                </div>

                <p className="text-2xl md:text-3xl font-light text-white mb-8 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full border-2 border-apc-orange object-cover"
                  />
                  <div className="text-left">
                    <div className="font-bold text-white uppercase tracking-wide">
                      {testimonial.author}
                    </div>
                    <div className="text-apc-silver text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </div>

                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-apc-orange fill-apc-orange" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-apc-orange ${activeIndex === index ? 'bg-apc-orange w-8' : 'bg-white/20 hover:bg-white/40'
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
