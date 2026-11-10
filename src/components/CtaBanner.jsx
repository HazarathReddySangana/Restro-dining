import { ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { ctaDishes } from '../data/restaurantData';

export default function CtaBanner({ onOpenBooking }) {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-orange-500 px-6 py-20 flex flex-col justify-center items-center min-h-[420px] md:min-h-[460px] mt-36 md:mt-44"
    >
      {/* Floating Dish Images */}
      <div className="absolute inset-0 w-full max-w-7xl mx-auto pointer-events-none">
        {ctaDishes.map((dish) => (
          <img
            key={dish.src}
            src={dish.src}
            alt={dish.alt}
            className={`absolute size-18 sm:size-24 md:size-28 lg:size-36 rounded-full object-contain pointer-events-auto transition-all duration-300 hover:scale-110 drop-shadow-2xl opacity-90 hover:opacity-100 ${dish.className}`}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-medium text-white font-urbanist text-balance leading-tight">
            Every Meal Is Made To Be Remembered
          </h2>
        </AnimatedSection>

        <AnimatedSection y={20} delay={0.2}>
          <p className="mt-4 text-orange-50/90 max-w-md mx-auto text-base sm:text-lg leading-relaxed font-light">
            Join us for fresh ingredients, signature recipes and an unforgettable dining experience.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3} className="flex items-center justify-center mt-7">
          <button
            onClick={onOpenBooking}
            className="group flex items-center gap-3 bg-white text-zinc-900 pl-6 pr-2.5 py-2.5 rounded-full font-medium transition-all shadow-xl hover:shadow-2xl hover:scale-105 active:scale-100 cursor-pointer text-base"
          >
            <span>Book Your Table</span>
            <span className="size-8 rounded-full bg-zinc-900 text-white grid place-content-center group-hover:bg-orange-600 transition-colors">
              <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
}

