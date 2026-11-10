import { ChefHat, Leaf, Heart } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { features } from '../data/restaurantData';

const iconMap = {
  ChefHat,
  Leaf,
  Heart,
};

export default function WhyChooseUs() {
  return (
    <section id="features" className="px-4 sm:px-6 lg:px-8 mt-36 md:mt-44 scroll-mt-28">
      <div className="text-center mb-16">
        <AnimatedSection delay={0.2}>
          <span className="text-orange-500 font-semibold uppercase text-xs md:text-sm tracking-widest mb-3.5 inline-block">
            What Sets Us Apart
          </span>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl max-w-lg mx-auto text-balance font-urbanist font-medium leading-tight text-zinc-900">
            Crafting memorable dining experiences
          </h2>
        </AnimatedSection>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 max-w-6xl mx-auto">
        {/* Features List */}
        <div className="space-y-8 sm:space-y-10 max-w-xl w-full">
          {features.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || ChefHat;
            return (
              <AnimatedSection
                key={item.title}
                y={100}
                delay={idx * 0.15}
                className="flex items-start gap-4 text-left p-3 rounded-2xl transition hover:bg-orange-50/30"
              >
                <div className="size-11 rounded-xl bg-orange-100 flex items-center justify-center shrink-0 mt-0.5">
                  <IconComponent className="text-orange-500 size-5" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-zinc-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-zinc-600 font-light leading-relaxed text-sm sm:text-base">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Right Chef Image */}
        <AnimatedSection x={50} y={0} className="w-full lg:w-auto flex justify-center">
          <div className="relative group max-w-sm w-full">
            <img
              src="/assets/chef.png"
              alt="Executive Chef"
              className="w-full max-w-sm h-[440px] sm:h-[480px] object-cover rounded-3xl shadow-xl transition-transform duration-500 group-hover:scale-[1.01]"
            />
            {/* Subtle decorative glow */}
            <div className="absolute -bottom-4 -right-4 size-32 bg-orange-500/10 rounded-full blur-2xl -z-1" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

