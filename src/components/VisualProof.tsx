import { BeforeAfterSlider } from './BeforeAfterSlider';
import { motion } from 'motion/react';

export function VisualProof() {
  return (
    <section className="py-32 bg-apc-black relative overflow-hidden">
      {/* Premium Background Grid */}
      <div className="absolute inset-0 z-0 opacity-20" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
        backgroundSize: '4rem 4rem'
      }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-apc-black blur-[120px] rounded-[100%] pointer-events-none z-0" /> {/* Radial mask for grid */}

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 relative">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-apc-cyan/10 blur-[80px] rounded-full z-[-1]"></div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tight"
          >
            SEE THE <span className="text-gradient-silver">DIFFERENCE</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-apc-silver max-w-2xl mx-auto text-xl font-light"
          >
            Drag the slider to see the transformation from raw metal to a flawless finish.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-[2px] bg-apc-orange"></div>
                <h3 className="text-3xl font-display font-bold text-white uppercase tracking-wider">
                  Media Blasting
                </h3>
              </div>
              <p className="text-apc-silver text-lg font-light leading-relaxed">
                We strip away years of rust, paint, and grime to reveal the pristine metal underneath, ready for a fresh start.
              </p>
            </div>
            <div className="aspect-video rounded-xl overflow-hidden glass-panel p-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <div className="w-full h-full rounded-lg overflow-hidden relative">
                <BeforeAfterSlider
                  beforeImage="https://images.unsplash.com/photo-1566827953733-3530467394d2?q=80&w=1000&auto=format&fit=crop&fm=webp"
                  afterImage="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop&fm=webp"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-[2px] bg-apc-cyan"></div>
                <h3 className="text-3xl font-display font-bold text-white uppercase tracking-wider">
                  Powder Coating
                </h3>
              </div>
              <p className="text-apc-silver text-lg font-light leading-relaxed">
                Durable, vibrant, and flawless. Our powder coating process ensures a finish that looks great and lasts a lifetime.
              </p>
            </div>
            <div className="aspect-video rounded-xl overflow-hidden glass-panel p-2 shadow-[0_20px_50px_rgba(0,229,255,0.1)] relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-apc-cyan/10 to-transparent z-0 pointer-events-none rounded-xl"></div>
              <div className="w-full h-full rounded-lg overflow-hidden relative z-10">
                <BeforeAfterSlider
                  beforeImage="https://images.unsplash.com/photo-1622646279933-7d7d24240799?q=80&w=1000&auto=format&fit=crop&fm=webp"
                  afterImage="https://images.unsplash.com/photo-1622646279955-46549e54d726?q=80&w=1000&auto=format&fit=crop&fm=webp"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
