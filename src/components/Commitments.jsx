import AnimatedSection from './AnimatedSection';
import { commitments } from '../data/restaurantData';

export default function Commitments() {
  return (
    <section id="stats" className="px-4 sm:px-6 lg:px-8 mt-28 md:mt-36">
      <div className="grid grid-cols-1 md:grid-cols-3 items-start justify-center gap-10 md:gap-14 lg:gap-20 max-w-6xl mx-auto">
        {commitments.map((item, idx) => (
          <AnimatedSection
            key={item.number}
            delay={idx * 0.15}
            className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-orange-50/40 transition-colors"
          >
            <span className="text-5xl sm:text-6xl font-urbanist font-extralight text-orange-500 tracking-tighter">
              {item.number}
            </span>
            <h3 className="mt-4 text-xl sm:text-2xl font-medium text-zinc-900">
              {item.title}
            </h3>
            <p className="mt-3 font-light text-zinc-600 max-w-xs text-sm sm:text-base leading-relaxed">
              {item.description}
            </p>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}

