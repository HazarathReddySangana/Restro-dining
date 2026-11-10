import { Star } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { customerReviews } from '../data/restaurantData';

export default function Testimonials() {
  return (
    <section id="testimonials" className="px-4 sm:px-6 lg:px-8 mt-36 md:mt-44 scroll-mt-28">
      <div className="text-center mb-14 md:mb-16">
        <AnimatedSection delay={0.2}>
          <span className="text-orange-500 font-semibold uppercase text-xs md:text-sm tracking-widest mb-3.5 inline-block">
            LOVED BY FOOD LOVERS
          </span>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl max-w-lg mx-auto text-balance font-urbanist font-medium leading-tight text-zinc-900">
            What Our Guests Say
          </h2>
        </AnimatedSection>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-7xl mx-auto">
        {customerReviews.map((review, idx) => (
          <AnimatedSection
            key={review.name}
            y={80}
            delay={idx * 0.1}
            className="border border-slate-200/80 hover:border-orange-200 hover:bg-orange-50/20 rounded-2xl p-6 sm:p-7 flex flex-col justify-between text-left transition-all duration-300 shadow-xs hover:shadow-md"
          >
            <div>
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="size-4 fill-orange-500 text-orange-500" />
                ))}
              </div>
              <p className="text-zinc-600 leading-relaxed font-light text-sm sm:text-base mb-6">
                &ldquo;{review.review}&rdquo;
              </p>
            </div>

            <div className="flex items-center gap-3.5 mt-auto pt-4 border-t border-slate-100">
              <img
                src={review.avatar}
                alt={review.name}
                className="size-11 rounded-full object-cover shrink-0 border border-slate-200"
              />
              <div>
                <p className="font-medium text-zinc-900 leading-tight mb-0.5 text-sm sm:text-base">
                  {review.name}
                </p>
                <p className="text-xs sm:text-sm text-zinc-500">{review.location}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}

