import { motion } from 'motion/react';
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
      setIsScrolled(window.scrollY > 50);
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
        'fixed top-4 left-4 right-4 z-50 transition-all duration-300 rounded-xl border border-transparent',
        isScrolled
          ? 'bg-apc-black/90 backdrop-blur-md border-white/10 py-3'
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-white flex items-center justify-center rounded-sm">
            <span className="text-apc-black font-display font-bold text-2xl tracking-tighter">APC</span>
          </div>
          <span className="hidden md:block text-white font-display font-bold text-xl tracking-wide">
            ADVANCED POWDER COATING
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((item) => {
            const id = item.toLowerCase();
            const isActive = activeSection === id;
            return (
              <a
                key={item}
                href={`#${id}`}
                className={cn(
                  'transition-colors font-sans text-sm font-medium tracking-wide uppercase border-b-2 pb-0.5',
                  isActive
                    ? 'text-apc-orange border-apc-orange'
                    : 'text-gray-300 hover:text-apc-orange border-transparent'
                )}
              >
                {item}
              </a>
            );
          })}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:7753584610"
            aria-label="Call us at (775) 358-4610"
            className="text-white hover:text-apc-orange transition-colors"
          >
            <Phone className="w-5 h-5" />
          </a>
          <a
            href="#contact"
            className="bg-apc-orange hover:bg-orange-600 text-white font-display font-bold uppercase tracking-wider px-6 py-2 rounded-sm transition-all shadow-[0_0_15px_rgba(255,87,34,0.3)] hover:shadow-[0_0_25px_rgba(255,87,34,0.6)] flex items-center gap-2"
          >
            Get a Fast Quote <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 mt-2 bg-apc-black border border-white/10 rounded-xl p-4 flex flex-col gap-4"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-apc-orange py-2 font-display text-lg uppercase transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-apc-orange text-white font-display font-bold uppercase tracking-wider px-6 py-3 rounded-sm w-full text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get a Fast Quote
          </a>
        </motion.div>
      )}
    </nav>
  );
}
