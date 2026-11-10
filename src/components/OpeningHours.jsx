import AnimatedSection from './AnimatedSection';
import { openingHours } from '../data/restaurantData';

export default function OpeningHours({ onOpenBooking }) {
  return (
    <section id="timing" className="px-4 sm:px-6 lg:px-8 mt-36 md:mt-44 scroll-mt-28">
      <AnimatedSection
        scale={0.9}
        y={0}
        className="relative w-full max-w-5xl min-h-[580px] md:h-[650px] rounded-3xl bg-cover bg-center flex items-center justify-center md:justify-start px-6 sm:px-10 md:px-14 py-12 overflow-hidden mx-auto bg-[url('/assets/restro-timing.png')] shadow-2xl"
      >
        {/* Subtle dark gradient overlay on mobile for contrast */}
        <div className="absolute inset-0 bg-black/20 md:hidden pointer-events-none" />

        <div className="relative z-10 bg-white/95 backdrop-blur-md rounded-3xl p-7 sm:p-8 w-full max-w-xs sm:max-w-sm shadow-xl border border-white/50">
          <AnimatedSection delay={0.2}>
            <h3 className="text-xl sm:text-2xl mb-7 font-medium text-zinc-900 font-urbanist">
              Opening time:
            </h3>
          </AnimatedSection>

          <div className="space-y-4 sm:space-y-5">
            {openingHours.map((item, idx) => (
              <AnimatedSection
                key={item.day}
                delay={idx * 0.08}
                className="flex justify-between items-center text-sm sm:text-base border-b border-zinc-100 pb-2.5 last:border-0"
              >
                <span className="font-medium text-zinc-600">{item.day}</span>
                <span
                  className={`font-medium ${
                    item.hours === 'Closed' ? 'text-red-500 font-semibold' : 'text-zinc-800'
                  }`}
                >
                  {item.hours}
                </span>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3} className="mt-8 flex justify-center">
            <button
              onClick={onOpenBooking}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-full transition shadow-md shadow-orange-500/25 hover:shadow-orange-500/35 cursor-pointer text-center text-sm sm:text-base"
            >
              Book a table
            </button>
          </AnimatedSection>
        </div>
      </AnimatedSection>
    </section>
  );
}

