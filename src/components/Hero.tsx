import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background Video/Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" /> {/* Overlay */}
        <img 
          src="https://images.unsplash.com/photo-1565619624098-e659884d897b?q=80&w=2574&auto=format&fit=crop" 
          alt="Industrial Factory" 
          className="w-full h-full object-cover"
        />
        {/* In a real implementation, this would be a <video> tag */}
      </div>

      <div className="container mx-auto px-4 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-white leading-[0.9] tracking-tighter mb-6">
            BETTER <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">RESOURCES.</span><br />
            <span className="text-apc-orange">BETTER SOLUTIONS.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <p className="text-apc-silver text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
            Northern Nevada’s Premier Powder Coating & Metal Fabrication Hub. 
            From single custom parts to massive industrial runs—if you can envision it, 
            we have the technology to build and coat it.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a href="#contact" className="w-full sm:w-auto bg-apc-orange hover:bg-orange-600 text-white font-display font-bold text-lg uppercase tracking-wider px-8 py-4 rounded-sm transition-all shadow-[0_0_20px_rgba(255,87,34,0.4)] hover:shadow-[0_0_40px_rgba(255,87,34,0.6)] hover:-translate-y-1 text-center">
            Get Your Custom Quote Now
          </a>
          <a href="#services" className="w-full sm:w-auto bg-transparent border border-white/30 hover:border-white text-white font-display font-bold text-lg uppercase tracking-wider px-8 py-4 rounded-sm transition-all hover:bg-white/5 text-center">
            See Our Services
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm text-gray-400 font-mono uppercase tracking-widest"
        >
          <div className="flex items-center gap-2">
            <span className="text-apc-orange">★</span> Serving Reno/Sparks Since 2005
          </div>
          <div className="flex items-center gap-2">
            <span className="text-apc-orange">★</span> 40,000 Sq Ft Facility
          </div>
          <div className="flex items-center gap-2">
            <span className="text-apc-orange">★</span> PCI Gold Member
          </div>
        </motion.div>
      </div>
    </section>
  );
}
