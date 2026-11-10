import { Star } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { heroAvatars } from '../data/restaurantData';

export default function Hero({ onOpenBooking }) {
  return (
    <section className="relative flex flex-col items-center min-h-screen justify-center bg-[url('/assets/heroBanner.png')] bg-cover bg-center bg-no-repeat px-4 pt-24 pb-16">
      {/* Decorative gradient overlay if needed */}
      <div className="absolute inset-0 bg-white/20 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        <AnimatedSection y={-20} delay={0.2}>
          <span className="text-orange-600 font-semibold tracking-wider text-xs md:text-sm uppercase bg-orange-50/80 px-4 py-1.5 rounded-full border border-orange-200/50">
            WHERE FLAVOR MEETS ELEGANCE
          </span>
        </AnimatedSection>

        <AnimatedSection>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-medium max-w-3xl text-center mt-6 font-urbanist text-balance text-zinc-900 tracking-tight leading-[1.12]">
            Crafted for unforgettable dining moments
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-zinc-600 max-w-md text-center mt-4 text-base md:text-lg leading-relaxed font-light">
            Experience carefully curated menus, fresh local ingredients and impeccable service in a space made for every celebration.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <button
              onClick={onOpenBooking}
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-3.5 rounded-full transition-all shadow-lg shadow-orange-500/25 hover:shadow-orange-500/35 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer text-base"
            >
              Book a table
            </button>
            <a
              href="#dishes"
              className="bg-white/80 hover:bg-white text-zinc-800 font-medium px-7 py-3.5 rounded-full transition-all border border-zinc-200/80 hover:border-zinc-300 text-base"
            >
              Explore Menu
            </a>
          </div>
        </AnimatedSection>

        {/* Rating proof badge */}
        <AnimatedSection className="flex items-center justify-center mt-10 bg-white/80 backdrop-blur-xs px-5 py-2.5 rounded-full border border-slate-200/60 shadow-xs">
          <div className="flex -space-x-3 pr-3.5">
            {heroAvatars.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`guest-${idx + 1}`}
                className="size-9 border-2 border-white rounded-full object-cover shadow-xs hover:-translate-y-0.5 transition"
              />
            ))}
          </div>
          <div className="text-left">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="size-3.5 fill-orange-500 text-orange-500" />
              ))}
            </div>
            <p className="text-zinc-800 text-xs sm:text-sm font-medium mt-0.5">
              4.8/5 Rating &bull; 10,000+ reviews
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

