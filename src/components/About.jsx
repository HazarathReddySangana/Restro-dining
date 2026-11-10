import AnimatedSection from './AnimatedSection';

export default function About() {
  return (
    <section id="about" className="px-4 sm:px-6 lg:px-8 mt-36 md:mt-44 scroll-mt-28">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-18 max-w-7xl mx-auto items-center">
        {/* Left Image */}
        <AnimatedSection scale={0.9} y={0} className="w-full lg:w-1/2 flex justify-center">
          <div className="relative group max-w-md lg:max-w-none w-full">
            <img
              src="/assets/about.png"
              alt="Culinary Creation"
              className="w-full h-[400px] sm:h-[480px] lg:h-[540px] object-cover rounded-3xl shadow-xl transition-transform duration-500 group-hover:scale-[1.01]"
            />
            {/* Subtle decorative frame effect */}
            <div className="absolute -inset-2.5 border-2 border-orange-500/20 rounded-[32px] -z-1 pointer-events-none hidden sm:block" />
          </div>
        </AnimatedSection>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <AnimatedSection scale={0.9} y={0} className="flex items-center gap-2">
            <img src="/assets/iconL.png" alt="iconLeft" className="h-4 w-auto" />
            <span className="font-semibold uppercase text-xs md:text-sm tracking-widest text-zinc-800">
              Crafted with Passion
            </span>
            <img src="/assets/iconR.png" alt="iconRight" className="h-4 w-auto" />
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl text-balance font-urbanist font-medium leading-[1.18] text-zinc-900">
              Experience dining beyond expectations
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="mt-4 text-zinc-600 max-w-lg text-base md:text-lg leading-relaxed font-light">
              We combine fresh local ingredients, creative recipes and elegant presentation to deliver a memorable experience with every visit. From intimate dinners to celebratory gatherings, our kitchen honors the craft of fine culinary taste.
            </p>
          </AnimatedSection>

          <AnimatedSection className="mt-8 bg-orange-500 text-white p-2.5 pr-8 rounded-2xl flex items-center gap-4 w-fit shadow-lg shadow-orange-500/25 hover:bg-orange-600 transition-colors">
            <img
              src="/assets/about.png"
              alt="Bistro Royale Location Preview"
              className="size-14 rounded-xl object-cover shrink-0 border border-white/20 shadow-xs"
            />
            <div className="flex flex-col">
              <p className="font-semibold text-base leading-tight">Bistro Royale, NY</p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-orange-100 hover:text-white underline underline-offset-2 mt-0.5"
              >
                View on Map &rarr;
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

