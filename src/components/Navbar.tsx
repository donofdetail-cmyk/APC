import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const NAV_LINKS = ['Services', 'Reviews', 'Contact'];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll-spy: track which section is in view
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.toLowerCase());
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.4 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-4 left-4 right-4 z-50 transition-all duration-500 rounded-2xl border',
        isScrolled
          ? 'glass-panel py-3 shadow-2xl'
          : 'bg-transparent border-transparent py-5'
      )}
    >
      <div className="container mx-auto px-6 lg:px-10 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white flex items-center justify-center rounded-lg shadow-lg">
            <span className="text-apc-black font-display font-black text-2xl tracking-tighter">APC</span>
          </div>
          <span className="hidden md:block font-display font-bold text-xl tracking-wider text-gradient-silver">
            ADVANCED<br /><span className="text-gradient-orange text-sm -mt-2 block">POWDER COATING</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10 bg-white/5 px-8 py-3 rounded-full border border-white/5">
          {NAV_LINKS.map((item) => {
            const id = item.toLowerCase();
            const isActive = activeSection === id;
            return (
              <a
                key={item}
                href={`#${id}`}
                className={cn(
                  'relative transition-all duration-300 font-sans text-sm font-semibold tracking-widest uppercase py-1',
                  isActive ? 'text-white' : 'text-gray-400 hover:text-white group'
                )}
              >
                {item}
                {/* Active Indicator or Hover underline */}
                <span className={cn(
                  "absolute -bottom-1 left-0 w-full h-[2px] transition-all duration-300 rounded-full",
                  isActive ? "bg-apc-orange" : "bg-apc-orange scale-x-0 group-hover:scale-x-100 origin-left"
                )}></span>
              </a>
            );
          })}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="tel:7753584610"
            aria-label="Call us at (775) 358-4610"
            className="flex items-center gap-2 text-apc-silver hover:text-white transition-colors text-sm font-medium tracking-wide"
          >
            <Phone className="w-4 h-4 text-apc-orange" /> (775) 358-4610
          </a>
          <a
            href="#contact"
            className="group relative bg-apc-orange text-white font-display font-bold uppercase tracking-wider px-7 py-3 rounded-lg transition-all shadow-lg hover:shadow-[0_0_20px_rgba(232,101,10,0.5)] flex items-center gap-2 overflow-hidden"
          >
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1s_forwards] bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 z-0"></div>
            <span className="relative z-10 flex items-center gap-2">Get Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white cursor-pointer w-12 h-12 flex items-center justify-center bg-white/5 rounded-lg border border-white/10"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-[calc(100%+12px)] left-0 right-0 bg-apc-black/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col gap-6 shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white py-2 font-display text-2xl uppercase tracking-wider transition-colors border-b border-white/5"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>

            <a
              href="tel:7753584610"
              className="flex items-center justify-center gap-2 text-apc-silver py-2"
            >
              <Phone className="w-5 h-5 text-apc-orange" /> (775) 358-4610
            </a>

            <a
              href="#contact"
              className="bg-apc-orange text-white font-display font-bold uppercase tracking-wider px-6 py-4 rounded-xl w-full text-center shadow-lg hover:bg-orange-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get a Fast Quote
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
