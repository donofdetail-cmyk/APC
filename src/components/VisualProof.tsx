import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Industrial Chassis Framework",
    service: "Media Blasting & Powder Coating",
    image: "/industrial_chassis_framework.png",
    span: "lg:col-span-2 lg:row-span-2",
    height: "min-h-[400px] lg:min-h-[600px]",
  },
  {
    id: 2,
    title: "Precision Milled Components",
    service: "High-Temp Ceramic Coating",
    image: "/precision_milled_components.png",
    span: "lg:col-span-1 lg:row-span-1",
    height: "min-h-[300px]",
  },
  {
    id: 3,
    title: "Architectural Facades",
    service: "UV-Resistant Finish",
    image: "/architectural_facades.png",
    span: "lg:col-span-1 lg:row-span-1",
    height: "min-h-[300px]",
  },
  {
    id: 4,
    title: "Restored Vintage Auto Parts",
    service: "Sandblasting & Clear Coat",
    image: "/vintage_auto_parts.png",
    span: "lg:col-span-3 lg:row-span-1",
    height: "min-h-[350px]",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(5px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

export function VisualProof() {
  return (
    <section className="py-32 bg-apc-black relative overflow-hidden" id="work">
      {/* Premium Background Grid */}
      <div className="absolute inset-0 z-0 opacity-20" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
        backgroundSize: '4rem 4rem'
      }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-apc-black blur-[120px] rounded-[100%] pointer-events-none z-0 will-change-transform" />

      <div className="container mx-auto px-4 lg:px-10 relative z-10">
        <div className="text-center mb-16 relative">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-apc-cyan/10 blur-[80px] rounded-full z-[-1] will-change-transform pointer-events-none"></div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tight"
          >
            SIGNATURE <span className="text-gradient-silver">FINISHES</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-apc-silver max-w-2xl mx-auto text-xl font-light"
          >
            A curated gallery of our recent industrial and custom manufacturing projects. Flawless execution on every surface.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {GALLERY_ITEMS.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className={`group relative rounded-2xl overflow-hidden glass-panel border border-white/10 ${item.span} ${item.height}`}
            >
              {/* Image with zoom effect on hover */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-110 will-change-transform"
                />
              </div>

              {/* Glassmorphism gradient overlay overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-apc-black/90 via-apc-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

              {/* Content overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500 will-change-transform">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-apc-orange font-mono text-sm tracking-widest uppercase mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {item.service}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-white drop-shadow-lg">
                      {item.title}
                    </h3>
                  </div>
                  <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-500 delay-100 border border-white/20">
                    <ArrowUpRight className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Subtle hover border glow */}
              <div className="absolute inset-0 border-2 border-apc-orange/0 group-hover:border-apc-orange/30 rounded-2xl transition-colors duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
