import { Star } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { bookingSteps, featuredTestimonial } from '../data/restaurantData';

export default function BookingProcess({ onOpenBooking }) {
  return (
    <section id="booking-process" className="px-4 sm:px-6 lg:px-8 mt-36 md:mt-44 scroll-mt-28">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Left Column */}
        <div className="flex flex-col text-center md:text-left">
          <AnimatedSection delay={0.2}>
            <span className="text-orange-500 font-semibold uppercase text-xs md:text-sm tracking-widest mb-3.5 inline-block">
              Table Reservation Process
            </span>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-urbanist font-medium leading-[1.18] text-zinc-900 mb-8 md:mb-12">
              Reserve your table in three simple steps
            </h2>
          </AnimatedSection>

          {/* Testimonial Quote */}
          <div className="bg-orange-50/50 border border-orange-100 rounded-3xl p-6 sm:p-8 max-w-md mx-auto md:mx-0 shadow-xs">
            <AnimatedSection className="flex gap-1 mb-4 justify-center md:justify-start">
              {[...Array(featuredTestimonial.rating)].map((_, idx) => (
                <Star key={idx} className="size-4 fill-orange-500 text-orange-500" />
              ))}
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-zinc-600 font-light leading-relaxed italic mb-6">
                &ldquo;{featuredTestimonial.quote}&rdquo;
              </p>
            </AnimatedSection>

            <AnimatedSection className="flex items-center justify-center md:justify-start gap-3.5">
              <img
                src={featuredTestimonial.authorImg}
                alt={featuredTestimonial.authorName}
                className="size-12 rounded-full object-cover border-2 border-white shadow-xs"
              />
              <div className="text-left">
                <span className="text-base font-medium text-zinc-900 block leading-tight">
                  {featuredTestimonial.authorName}
                </span>
                <span className="text-xs text-zinc-500">Verified Diner</span>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Right Column: Steps */}
        <div className="space-y-10 sm:space-y-12 text-left">
          {bookingSteps.map((step, idx) => (
            <AnimatedSection
              key={step.number}
              y={100}
              delay={idx * 0.15}
              className="flex items-start gap-6 sm:gap-8 group p-4 rounded-2xl hover:bg-orange-50/30 transition-colors"
            >
              <span className="text-orange-500 font-urbanist font-semibold text-xl sm:text-2xl shrink-0 mt-0.5">
                {step.number}
              </span>
              <div className="flex flex-col">
                <h3 className="text-xl sm:text-2xl font-medium text-zinc-900 mb-2.5 group-hover:text-orange-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-zinc-600 font-light leading-relaxed text-sm sm:text-base">
                  {step.description}
                </p>
              </div>
            </AnimatedSection>
          ))}

          <AnimatedSection delay={0.4} className="pt-2">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-3.5 rounded-full transition shadow-lg shadow-orange-500/25 hover:shadow-orange-500/35 cursor-pointer text-base"
            >
              Reserve a Table Online
            </button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

