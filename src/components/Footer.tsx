import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Lead Capture Form */}
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 uppercase">
              Let’s Bring Your Vision <br /><span className="text-apc-orange">To Reality.</span>
            </h2>
            <p className="text-apc-silver mb-8 text-lg">
              Stop compromising on quality or turnaround times. Fill out the form below or call us directly.
            </p>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex flex-col gap-1">
                  <span className="sr-only">Name or Company</span>
                  <input
                    type="text"
                    placeholder="Name / Company"
                    className="bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-apc-orange focus:border-apc-orange transition-colors"
                  />
                </label>
                <label className="flex flex-col gap-1">
                  <span className="sr-only">Email or Phone</span>
                  <input
                    type="text"
                    placeholder="Email or Phone"
                    className="bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-apc-orange focus:border-apc-orange transition-colors"
                  />
                </label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex flex-col gap-1">
                  <span className="sr-only">Service Needed</span>
                  <select defaultValue="" className="bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-apc-orange focus:border-apc-orange transition-colors appearance-none cursor-pointer">
                    <option value="" disabled>Service Needed</option>
                    <option value="powder">Powder Coating</option>
                    <option value="cerakote">Cerakote</option>
                    <option value="waterjet">Water Jet</option>
                    <option value="engraving">Laser Engraving</option>
                    <option value="burnoff">Burn Off Oven</option>
                    <option value="blasting">Media Blasting</option>
                  </select>
                </label>
                <label className="flex flex-col gap-1">
                  <span className="sr-only">Project Type</span>
                  <select defaultValue="" className="bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-apc-orange focus:border-apc-orange transition-colors appearance-none cursor-pointer">
                    <option value="" disabled>Project Type</option>
                    <option value="industrial">Industrial / Government</option>
                    <option value="automotive">Automotive</option>
                    <option value="architectural">Architectural</option>
                    <option value="diy">Hobbyist / DIY</option>
                  </select>
                </label>
              </div>

              <label className="flex flex-col gap-1">
                <span className="sr-only">Project Details</span>
                <textarea
                  placeholder="Project Details..."
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-apc-orange focus:border-apc-orange transition-colors"
                ></textarea>
              </label>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  aria-label="Attach CAD files or images"
                  className="flex-1 bg-white/5 border border-dashed border-white/20 hover:border-white/50 text-gray-400 hover:text-white py-3 rounded-sm transition-colors text-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-apc-orange"
                >
                  + Attach Files (CAD, Images)
                </button>
                <button
                  type="submit"
                  className="flex-[2] bg-apc-orange hover:bg-orange-600 text-white font-display font-bold uppercase tracking-wider py-3 rounded-sm transition-all shadow-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-white"
                >
                  Get My Free Estimate
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-apc-orange shrink-0" />
                  <div>
                    <h4 className="font-bold text-white uppercase mb-1">Visit Us</h4>
                    <p className="text-gray-400 text-sm">
                      1203 Industrial Way<br />
                      Sparks, NV 89431
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-6 h-6 text-apc-orange shrink-0" />
                  <div>
                    <h4 className="font-bold text-white uppercase mb-1">Call Us</h4>
                    <a href="tel:7753584610" className="text-gray-400 text-sm hover:text-white transition-colors">
                      (775) 358-4610
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-apc-orange shrink-0" />
                  <div>
                    <h4 className="font-bold text-white uppercase mb-1">Hours</h4>
                    <p className="text-gray-400 text-sm">
                      Mon - Fri: 7:00 AM - 4:00 PM<br />
                      Sat - Sun: Closed
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-6 h-6 text-apc-orange shrink-0" />
                  <div>
                    <h4 className="font-bold text-white uppercase mb-1">Email</h4>
                    <a href="mailto:info@apc-reno.com" className="text-gray-400 text-sm hover:text-white transition-colors">
                      info@apc-reno.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-64 bg-white/5 rounded-sm overflow-hidden border border-white/10 relative group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3079.456789012345!2d-119.75!3d39.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDMzJzAwLjAiTiAxMTnCsDQ1JzAwLjAiVw!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) invert(90%)' }}
                allowFullScreen={true}
                loading="lazy"
                className="opacity-60 group-hover:opacity-100 transition-opacity duration-500"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none border border-white/10"></div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500 uppercase tracking-wider">
          <p>&copy; {new Date().getFullYear()} Advanced Powder Coating. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
