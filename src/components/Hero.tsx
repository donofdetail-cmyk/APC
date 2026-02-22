import { motion } from 'motion/react';
import { Star, ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-apc-black">
      {/* Background Video/Image with Premium Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/80 z-10" /> {/* Darker Overlay for better text contrast */}
        <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-apc-black via-apc-black/80 to-transparent z-10" /> {/* Bottom fade integrating with next section */}

        {/* Animated Glow Orbs for depth - Optimized for performance */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-apc-orange/20 rounded-full blur-[120px] z-0 will-change-transform will-change-opacity pointer-events-none"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-apc-cyan/10 rounded-full blur-[150px] z-0 will-change-transform will-change-opacity pointer-events-none"
        />

        <img
          src="/powder-coating-hero.webp"
          alt="Powder Coating"
          fetchPriority="high"
          className="w-full h-full object-cover scale-105"
        />
      </div>

      <div className="container mx-auto px-4 relative z-20 text-center pt-64 sm:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative inline-block"
        >
          {/* Subtle text glow behind main heading */}
          <div className="absolute -inset-4 bg-apc-orange/20 blur-2xl rounded-full opacity-50 z-0 hidden md:block"></div>
          <h1 className="relative z-10 text-6xl md:text-8xl lg:text-[10rem] font-display font-bold leading-[0.85] tracking-tighter mb-8 text-white drop-shadow-2xl">
            BETTER <span className="opacity-80">RESOURCES.</span><br />
            <span className="text-gradient-orange">BETTER SOLUTIONS.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-white text-lg md:text-2xl max-w-3xl mx-auto mb-12 font-light leading-relaxed drop-shadow-md">
            Northern Nevada’s Premier Powder Coating & Metal Fabrication Hub.
            From single custom parts to massive industrial runs—<span className="font-medium">if you can envision it,
              we have the technology to build and coat it.</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
        >
          <a href="#contact" className="group relative w-full sm:w-auto bg-apc-orange text-white font-display font-bold text-lg uppercase tracking-wider px-10 py-5 rounded-sm transition-all hover:-translate-y-1 overflow-hidden z-10">
            {/* Button shine effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1s_forwards] bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 z-0"></div>
            <span className="relative z-10 flex items-center justify-center gap-3">
              Get Your Custom Quote Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          <a href="#services" className="w-full sm:w-auto glass-panel hover:glass-panel-hover text-white font-display font-bold text-lg uppercase tracking-wider px-10 py-5 rounded-sm transition-all hover:-translate-y-1 text-center">
            Explore Services
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-8 md:gap-16 text-sm text-gray-400 font-mono uppercase tracking-[0.2em]"
        >
          <div className="flex items-center gap-3 backdrop-blur-md bg-white/5 px-4 py-2 rounded-full border border-white/5 shadow-xl">
            <Star className="w-4 h-4 text-apc-orange fill-apc-orange drop-shadow-[0_0_8px_rgba(232,101,10,0.8)]" />
            <span className="mt-0.5">Serving Reno Since 2005</span>
          </div>
          <div className="flex items-center gap-3 backdrop-blur-md bg-white/5 px-4 py-2 rounded-full border border-white/5 shadow-xl">
            <Star className="w-4 h-4 text-apc-orange fill-apc-orange drop-shadow-[0_0_8px_rgba(232,101,10,0.8)]" />
            <span className="mt-0.5">40,000 Sq Ft Facility</span>
          </div>
          <div className="flex items-center gap-3 backdrop-blur-md bg-white/5 px-4 py-2 rounded-full border border-white/5 shadow-xl">
            <Star className="w-4 h-4 text-apc-orange fill-apc-orange drop-shadow-[0_0_8px_rgba(232,101,10,0.8)]" />
            <span className="mt-0.5">PCI Gold Member</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
