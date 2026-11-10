import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../data/restaurantData';

export default function Navbar({ onOpenBooking }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 z-40 w-full transition-all duration-300 px-4 sm:px-6 lg:px-8 ${
          isScrolled ? 'bg-white/80 backdrop-blur-md shadow-xs py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="flex items-center justify-between font-medium mx-auto max-w-7xl">
          <a href="#" className="flex items-center">
            <img src="/assets/logo.svg" alt="Restro Logo" className="h-8 md:h-9 w-auto" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-zinc-700 hover:text-orange-500 transition-colors font-medium text-sm lg:text-base"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onOpenBooking}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-md shadow-orange-500/20 hover:shadow-orange-500/30 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              Book a table
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open mobile menu"
            className="md:hidden bg-zinc-800 text-white p-2.5 rounded-lg aspect-square flex items-center justify-center cursor-pointer hover:bg-zinc-700 transition"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 bg-white/95 backdrop-blur-lg z-50 flex flex-col items-center justify-center p-8 transition-all duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto translate-x-0' : 'opacity-0 pointer-events-none translate-x-full'
        }`}
      >
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Close mobile menu"
          className="absolute top-6 right-6 bg-zinc-800 text-white p-2.5 rounded-lg aspect-square flex items-center justify-center cursor-pointer hover:bg-zinc-700 transition"
        >
          <X className="size-5" />
        </button>

        <div className="flex flex-col items-center space-y-6 font-medium text-center">
          <img src="/assets/logo.svg" alt="Restro Logo" className="h-9 w-auto mb-4" />
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-2xl text-zinc-800 hover:text-orange-500 transition font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenBooking?.();
            }}
            className="mt-4 bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-3 rounded-full font-medium transition shadow-lg shadow-orange-500/25"
          >
            Book a table
          </button>
        </div>
      </div>
    </>
  );
}

