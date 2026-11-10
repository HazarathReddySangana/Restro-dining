import { Mail, Phone } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { quickLinks, legalLinks } from '../data/restaurantData';

export default function Footer() {
  return (
    <footer className="relative mt-36 md:mt-44 overflow-hidden border-t border-slate-200/70 pt-16 pb-8 px-4 sm:px-6 lg:px-8 bg-slate-50/50">
      {/* Background Watermark */}
      <div className="absolute inset-x-0 bottom-0 text-center select-none -z-1 pointer-events-none overflow-hidden opacity-30">
        <span className="text-[17vw] font-bold text-zinc-300/40 uppercase tracking-tighter block leading-none select-none font-urbanist">
          Restro
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-slate-200">
          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col items-start text-left">
            <AnimatedSection>
              <img src="/assets/logo.svg" alt="Restro Logo" className="h-9 w-auto" />
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="mt-4 text-sm sm:text-base text-zinc-600 max-w-sm leading-relaxed font-light">
                Serving freshly prepared dishes with authentic flavors, premium ingredients and exceptional hospitality every day.
              </p>
            </AnimatedSection>

            {/* Social Icons */}
            <div className="flex items-center gap-2 mt-6">
              {/* Twitter / X */}
              <a
                href="#"
                aria-label="X (Twitter)"
                className="size-8 rounded-full border border-slate-300 hover:border-orange-500 hover:text-orange-500 hover:bg-white grid place-content-center transition text-zinc-600"
              >
                <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="currentColor">
                  <path d="m4.179.5 2.909 3.886.372.497.406-.469L11.255.5h.824L8.104 5.09l-.263.305.241.322 4.919 6.571H9.928L6.695 8.016l-.373-.493-.404.467-3.722 4.298h-.825l4.3-4.967.265-.305-.245-.324L1.005.5zm-2.07 1.032 7.765 10.26.15.198h2.437l-.599-.8L4.184.93l-.15-.2H1.501z" fill="currentColor"/>
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="#"
                aria-label="YouTube"
                className="size-8 rounded-full border border-slate-300 hover:border-orange-500 hover:text-orange-500 hover:bg-white grid place-content-center transition text-zinc-600"
              >
                <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                  <path d="M.866 8.299a14.46 14.46 0 0 1 0-6.463 1.27 1.27 0 0 1 .36-.573c.17-.158.384-.273.618-.332a37.4 37.4 0 0 1 11.313 0c.233.059.446.174.618.332s.295.356.36.573c.487 2.13.487 4.332 0 6.463a1.3 1.3 0 0 1-.36.572 1.4 1.4 0 0 1-.619.333 37.4 37.4 0 0 1-11.312 0 1.4 1.4 0 0 1-.619-.333 1.3 1.3 0 0 1-.36-.572" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="m5.5 6.896 4-1.827-4-1.827z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="size-8 rounded-full border border-slate-300 hover:border-orange-500 hover:text-orange-500 hover:bg-white grid place-content-center transition text-zinc-600"
              >
                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                  <path d="M11 .5H4C2.067.5.5 1.931.5 3.697v6.394c0 1.766 1.567 3.198 3.5 3.198h7c1.933 0 3.5-1.432 3.5-3.198V3.697C14.5 1.931 12.933.5 11 .5" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.3 6.542a2.37 2.37 0 0 1-.284 1.553 2.7 2.7 0 0 1-1.227 1.107 3.04 3.04 0 0 1-1.703.24 2.9 2.9 0 0 1-1.535-.716 2.5 2.5 0 0 1-.785-1.403 2.36 2.36 0 0 1 .263-1.556c.265-.48.69-.872 1.212-1.12a3.03 3.03 0 0 1 1.7-.26c.594.08 1.145.333 1.57.722.424.388.701.89.79 1.433" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-semibold text-zinc-900 mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </p>
            <div className="flex flex-col gap-2.5">
              {quickLinks.map((item, idx) => (
                <AnimatedSection key={item.name} delay={idx * 0.05}>
                  <a
                    href={item.href}
                    className="text-zinc-600 hover:text-orange-600 transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Get in Touch */}
          <div>
            <p className="font-semibold text-zinc-900 mb-4 text-sm uppercase tracking-wider">
              Get in Touch
            </p>
            <div className="space-y-3">
              <AnimatedSection>
                <a
                  href="mailto:hello@example.com"
                  className="flex items-center gap-2 text-zinc-600 hover:text-orange-600 transition-colors text-sm"
                >
                  <Mail size={16} className="shrink-0 text-orange-500" />
                  <span>hello@example.com</span>
                </a>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <a
                  href="tel:987-654-3210"
                  className="flex items-center gap-2 text-zinc-600 hover:text-orange-600 transition-colors text-sm"
                >
                  <Phone size={16} className="shrink-0 text-orange-500" />
                  <span>987-654-3210</span>
                </a>
              </AnimatedSection>
            </div>
          </div>

          {/* Sitemap / Policies */}
          <div>
            <p className="font-semibold text-zinc-900 mb-4 text-sm uppercase tracking-wider">
              Sitemap
            </p>
            <div className="flex flex-col gap-2.5">
              {legalLinks.map((item, idx) => (
                <AnimatedSection key={item.name} delay={idx * 0.05}>
                  <a
                    href={item.href}
                    className="text-zinc-600 hover:text-orange-600 transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm text-zinc-500 gap-3">
          <p>&copy; {new Date().getFullYear()} Restro. All Rights Reserved.</p>
          <p>
            Designed with excellence by{' '}
            <a
              href="https://greatstack.dev"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-orange-600 hover:underline underline-offset-4"
            >
              GreatStack
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

