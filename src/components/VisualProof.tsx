import { BeforeAfterSlider } from './BeforeAfterSlider';

export function VisualProof() {
  return (
    <section className="py-24 bg-apc-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            SEE THE DIFFERENCE
          </h2>
          <p className="text-apc-silver max-w-2xl mx-auto text-lg">
            Drag the slider to see the transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-display font-bold text-white uppercase border-l-4 border-apc-orange pl-4">
              Media Blasting Restoration
            </h3>
            <div className="aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl">
              <BeforeAfterSlider
                beforeImage="https://images.unsplash.com/photo-1566827953733-3530467394d2?q=80&w=1000&auto=format&fit=crop&fm=webp"
                afterImage="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop&fm=webp"
              />
            </div>
            <p className="text-apc-silver">
              We strip away years of rust, paint, and grime to reveal the pristine metal underneath, ready for a fresh start.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-display font-bold text-white uppercase border-l-4 border-apc-cyan pl-4">
              Custom Powder Coating
            </h3>
            <div className="aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl">
              <BeforeAfterSlider
                beforeImage="https://images.unsplash.com/photo-1622646279933-7d7d24240799?q=80&w=1000&auto=format&fit=crop&fm=webp"
                afterImage="https://images.unsplash.com/photo-1622646279955-46549e54d726?q=80&w=1000&auto=format&fit=crop&fm=webp"
              />
            </div>
            <p className="text-apc-silver">
              Durable, vibrant, and flawless. Our powder coating process ensures a finish that looks great and lasts a lifetime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
