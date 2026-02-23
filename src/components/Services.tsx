import { motion } from 'motion/react';
import { Paintbrush, Eraser, Scissors, Zap, Flame, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
  {
    title: "Powder Coating",
    icon: Paintbrush,
    description: "The area's largest oven and the most extensive color selection in Northern Nevada. We handle everything from tiny medical parts to massive architectural structures.",
    color: "text-apc-orange",
    glow: "group-hover:shadow-[0_0_30px_rgba(232,101,10,0.3)]"
  },
  {
    title: "Cerakote",
    icon: Shield,
    description: "The industry leader in thin-film ceramic coatings. Unmatched abrasion, corrosion, and chemical resistance for firearms, automotive, and industrial applications.",
    color: "text-blue-500",
    glow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
  },
  {
    title: "Water Jet",
    icon: Scissors,
    description: "Cold, hyper-precision cutting for metals, plastics, and more. No heat-affected zones, just pure accuracy.",
    color: "text-apc-cyan",
    glow: "group-hover:shadow-[0_0_30px_rgba(0,229,255,0.3)]"
  },
  {
    title: "Laser Engraving",
    icon: Zap,
    description: "High-tech permanent marking and branding for custom parts, serial plates, and personalized merchandise.",
    color: "text-purple-500",
    glow: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
  },
  {
    title: "Burn Off Oven",
    icon: Flame,
    description: "Safe, efficient removal of old coatings, paint, and grease to restore your metal substrates back to bare perfection.",
    color: "text-red-500",
    glow: "group-hover:shadow-[0_0_30px_rgba(239,68,68,0.3)]"
  },
  {
    title: "Media Blasting",
    icon: Eraser,
    description: "Flawless surface prep. Featuring a mammoth 36′ x 14′ x 12′ blasting booth to accommodate large-scale industrial and automotive jobs.",
    color: "text-emerald-500",
    glow: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]"
  }
];

export function Services() {
  return (
    <section id="services" className="py-32 bg-apc-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-apc-cyan/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tight"
          >
            ONE FACILITY. <span className="text-gradient-orange">ZERO LIMITS.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-apc-silver max-w-3xl mx-auto text-xl font-light leading-relaxed"
          >
            We don't just coat; we cut, prep, and finish. Our state-of-the-art technology guarantees flawless results the first time.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={cn(
                "group relative glass-panel p-8 rounded-2xl transition-all duration-500 cursor-pointer overflow-hidden",
                service.glow,
                "hover:-translate-y-2 hover:border-white/20"
              )}
            >
              <div className="relative z-10">
                <div className={cn("w-14 h-14 mb-8 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500 shadow-xl", service.color)}>
                  <service.icon className="w-7 h-7" />
                </div>

                <h3 className="text-2xl font-display font-bold text-white mb-4 uppercase tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                  {service.title}
                </h3>

                <p className="text-base text-gray-400 leading-relaxed font-light">
                  {service.description}
                </p>
              </div>

              {/* Sophisticated Bottom Gradient Line */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
