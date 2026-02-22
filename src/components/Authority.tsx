import { motion } from 'motion/react';

export function Authority() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="py-24 bg-apc-black relative border-y border-white/5 overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-apc-orange/10 blur-[100px] rounded-[100%] pointer-events-none mix-blend-screen" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/3 text-center lg:text-left"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight uppercase tracking-tight">
              Why Nevada's Biggest Industries<br /> <span className="text-gradient-orange">Trust APC</span>
            </h2>
            <div className="mt-6 w-24 h-1 bg-apc-orange mx-auto lg:mx-0 rounded-full" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
          >
            <motion.div variants={itemVariants} className="glass-panel hover:glass-panel-hover p-8 rounded-2xl transition-all duration-300 group">
              <div className="text-6xl font-display font-bold mb-3 text-white group-hover:text-apc-orange transition-colors">21+</div>
              <div className="font-sans font-medium text-sm text-apc-silver uppercase tracking-[0.15em]">Years in Business</div>
            </motion.div>

            <motion.div variants={itemVariants} className="glass-panel hover:glass-panel-hover p-8 rounded-2xl transition-all duration-300 group relative overflow-hidden">
              {/* Highlight effect for middle card */}
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-apc-orange to-transparent opacity-50"></div>
              <div className="text-6xl font-display font-bold mb-3 text-white group-hover:text-apc-orange transition-colors">40k</div>
              <div className="font-sans font-medium text-sm text-apc-silver uppercase tracking-[0.15em]">Sq Ft Facility</div>
            </motion.div>

            <motion.div variants={itemVariants} className="glass-panel hover:glass-panel-hover p-8 rounded-2xl transition-all duration-300 group">
              <div className="text-6xl font-display font-bold mb-3 text-white group-hover:text-apc-orange transition-colors">11+</div>
              <div className="font-sans font-medium text-sm text-apc-silver uppercase tracking-[0.15em]">Industries Served</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
