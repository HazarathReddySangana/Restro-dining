import { Plus, Minus } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { faqs } from '../data/restaurantData';

export default function Faq() {
  return (
    <section id="faq" className="px-4 sm:px-6 lg:px-8 mt-36 md:mt-44 scroll-mt-28">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 md:mb-14">
          <AnimatedSection delay={0.2}>
            <span className="text-orange-500 font-semibold uppercase text-xs md:text-sm tracking-widest mb-3.5 inline-block">
              FAQS
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl max-w-2xl mx-auto text-balance font-urbanist font-medium leading-tight text-zinc-900">
              Frequently Asked Questions
            </h2>
          </AnimatedSection>
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq, idx) => (
            <AnimatedSection key={faq.question} y={60} delay={idx * 0.1}>
              <details className="border border-slate-200 text-zinc-600 rounded-xl group overflow-hidden bg-white hover:border-orange-200 transition-colors">
                <summary className="flex items-center justify-between p-4 sm:p-5 cursor-pointer list-none hover:bg-orange-50/20 transition-colors select-none [&::-webkit-details-marker]:hidden">
                  <span className="text-zinc-800 font-medium text-base sm:text-lg pr-4">
                    {faq.question}
                  </span>
                  <span className="size-7 rounded-full bg-zinc-100 group-hover:bg-orange-100 text-zinc-600 group-hover:text-orange-600 grid place-content-center shrink-0 transition-colors">
                    <Plus className="size-4 group-open:hidden transition-transform duration-200" />
                    <Minus className="size-4 hidden group-open:block transition-transform duration-200" />
                  </span>
                </summary>
                <div className="px-5 pb-5 text-zinc-600 leading-relaxed font-light text-sm sm:text-base border-t border-slate-100 pt-3">
                  {faq.answer}
                </div>
              </details>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

