export function Authority() {
  return (
    <section className="py-16 bg-apc-orange text-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/3">
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight uppercase">
              Why Nevada's Biggest Industries Trust APC
            </h2>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            <div className="border-l-4 border-black pl-6">
              <div className="text-6xl font-display font-bold mb-2">21+</div>
              <div className="font-bold text-lg uppercase tracking-wide opacity-80">Years in Business</div>
            </div>
            <div className="border-l-4 border-black pl-6">
              <div className="text-6xl font-display font-bold mb-2">40k</div>
              <div className="font-bold text-lg uppercase tracking-wide opacity-80">Sq Ft Facility</div>
            </div>
            <div className="border-l-4 border-black pl-6">
              <div className="text-6xl font-display font-bold mb-2">11+</div>
              <div className="font-bold text-lg uppercase tracking-wide opacity-80">Industries Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
