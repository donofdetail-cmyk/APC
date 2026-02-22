import { motion } from 'motion/react';
import { Paintbrush, Eraser, Scissors, Zap, Flame, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
  {
    title: "Powder Coating",
    icon: Paintbrush,
    description: "The area's largest oven and the most extensive color selection in Northern Nevada. We handle everything from tiny medical parts to massive architectural structures.",
    color: "text-apc-orange"
  },
  {
    title: "Cerakote",
    icon: Shield,
    description: "The industry leader in thin-film ceramic coatings. Unmatched abrasion, corrosion, and chemical resistance for firearms, automotive, and industrial applications.",
    color: "text-apc-orange"
  },
  {
    title: "Water Jet",
    icon: Scissors,
    description: "Cold, hyper-precision cutting for metals, plastics, and more. No heat-affected zones, just pure accuracy.",
    color: "text-apc-orange"
  },
  {
    title: "Laser Engraving",
    icon: Zap,
    description: "High-tech permanent marking and branding for custom parts, serial plates, and personalized merchandise.",
    color: "text-apc-orange"
  },
  {
    title: "Burn Off Oven",
    icon: Flame,
    description: "Safe, efficient removal of old coatings, paint, and grease to restore your metal substrates back to bare perfection.",
    color: "text-apc-orange"
  },
  {
    title: "Media Blasting",
    icon: Eraser,
    description: "Flawless surface prep. Featuring a mammoth 36′ x 14′ x 12′ blasting booth to accommodate large-scale industrial and automotive jobs.",
    color: "text-apc-orange"
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-apc-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
            ONE FACILITY. <span className="text-apc-orange">ZERO LIMITS.</span>
          </h2>
          <p className="text-apc-silver max-w-2xl mx-auto text-lg">
            We don't just coat; we cut, prep, and finish. Our state-of-the-art technology guarantees flawless results the first time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors duration-300 overflow-hidden cursor-pointer"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute -inset-px bg-gradient-to-b from-apc-cyan/20 to-transparent rounded-xl blur-sm" />
              </div>

              <div className={cn("w-12 h-12 mb-6 rounded-lg bg-black/50 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300", service.color)}>
                <service.icon className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-display font-bold text-white mb-3 uppercase tracking-wide group-hover:text-apc-cyan transition-colors">
                {service.title}
              </h3>

              <p className="text-sm text-gray-400 leading-relaxed">
                {service.description}
              </p>

              {/* Bottom Line */}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-apc-cyan transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
