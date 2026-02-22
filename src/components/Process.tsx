import { motion, useScroll, useTransform } from 'motion/react';
import { UploadCloud, Settings, CheckCircle } from 'lucide-react';
import { useRef } from 'react';

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 50%"]
  });

  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const step1Color = useTransform(scrollYProgress, [0, 0.2], ["#8E949B", "#FF5722"]);
  const step1Border = useTransform(scrollYProgress, [0, 0.2], ["rgba(255, 255, 255, 0.1)", "#FF5722"]);

  const step2Color = useTransform(scrollYProgress, [0.4, 0.6], ["#8E949B", "#FF5722"]);
  const step2Border = useTransform(scrollYProgress, [0.4, 0.6], ["rgba(255, 255, 255, 0.1)", "#FF5722"]);

  const step3Color = useTransform(scrollYProgress, [0.8, 1], ["#8E949B", "#FF5722"]);
  const step3Border = useTransform(scrollYProgress, [0.8, 1], ["rgba(255, 255, 255, 0.1)", "#FF5722"]);

  const stepColors = [step1Color, step2Color, step3Color];
  const stepBorders = [step1Border, step2Border, step3Border];

  const steps = [
    {
      number: "01",
      title: "Request a Quote",
      description: "Upload your specs, CAD files, or photos through our secure portal.",
      icon: UploadCloud
    },
    {
      number: "02",
      title: "Expert Prep & Fabrication",
      description: "We cut, burn, or blast your project using the region's best tech.",
      icon: Settings
    },
    {
      number: "03",
      title: "Flawless Coating & Delivery",
      description: "Cured in the region's largest oven for a perfect, durable finish.",
      icon: CheckCircle
    }
  ];

  return (
    <section className="py-24 bg-apc-dark-gray text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            FRICTIONLESS PROCESS
          </h2>
          <p className="text-apc-silver max-w-2xl mx-auto text-lg">
            From concept to completion, we make it easy.
          </p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-white/10 z-0">
            <motion.div
              style={{ scaleX, originX: 0 }}
              className="h-full bg-apc-orange shadow-[0_0_15px_rgba(255,87,34,0.8)]"
            />
          </div>

          {/* Connector Line (Mobile) */}
          <div className="md:hidden absolute top-12 bottom-12 left-12 w-0.5 bg-white/10 z-0 -translate-x-1/2">
            <motion.div
              style={{ scaleY, originY: 0 }}
              className="h-full w-full bg-apc-orange shadow-[0_0_15px_rgba(255,87,34,0.8)]"
            />
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative z-10 flex flex-row md:flex-col items-start md:items-center text-left md:text-center group"
            >
              <motion.div 
                style={{ borderColor: stepBorders[index] }}
                className="w-24 h-24 bg-apc-black border rounded-full flex items-center justify-center shrink-0 mr-6 md:mr-0 mb-0 md:mb-6 shadow-lg"
              >
                <motion.div
                  style={{ color: stepColors[index] }}
                >
                  <step.icon className="w-10 h-10 transition-colors" />
                </motion.div>
              </motion.div>
              
              <div className="text-6xl font-display font-bold text-white/5 absolute -top-2 left-24 md:left-auto md:top-0 -z-10 select-none">
                {step.number}
              </div>

              <div className="pt-2">
                <h3 className="text-2xl font-display font-bold mb-2 md:mb-3 uppercase">
                  {step.title}
                </h3>
                <p className="text-apc-silver max-w-xs">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a href="#contact" className="bg-apc-orange hover:bg-orange-600 text-white font-display font-bold uppercase tracking-wider px-10 py-4 rounded-sm transition-all shadow-lg hover:shadow-orange-500/30 inline-block">
            Start Step 1 Today
          </a>
        </div>
      </div>
    </section>
  );
}
