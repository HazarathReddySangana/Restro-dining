import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { signatureDishes } from '../data/restaurantData';

export default function SignatureDishes({ onSelectDish }) {
  const [rotations, setRotations] = useState({});

  const handleMouseEnter = (idx) => {
    setRotations((prev) => ({
      ...prev,
      [idx]: (prev[idx] || 0) + 180,
    }));
  };

  return (
    <section id="dishes" className="px-4 sm:px-6 lg:px-8 mt-36 md:mt-44 scroll-mt-28">
      <div className="text-center mb-14 md:mb-16">
        <AnimatedSection delay={0.2}>
          <span className="text-orange-500 font-semibold uppercase text-xs md:text-sm tracking-widest mb-3.5 inline-block">
            Chef's Signature Selection
          </span>
        </AnimatedSection>
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl md:text-5xl max-w-lg mx-auto text-balance font-urbanist font-medium leading-tight text-zinc-900">
            Discover our signature dishes
          </h2>
        </AnimatedSection>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-14 max-w-5xl mx-auto">
        {signatureDishes.map((dish, idx) => (
          <AnimatedSection
            key={dish.id}
            y={80}
            delay={idx * 0.08}
            className="flex flex-col items-center text-center shrink-0 cursor-pointer group"
            onMouseEnter={() => handleMouseEnter(idx)}
            onClick={() => onSelectDish?.(dish)}
          >
            <motion.div
              animate={{ rotate: rotations[idx] || 0 }}
              transition={{ type: 'spring', stiffness: 80, damping: 15 }}
              className="p-1"
            >
              <img
                src={dish.img}
                alt={dish.title}
                className="size-28 sm:size-32 md:size-36 object-contain drop-shadow-md group-hover:drop-shadow-lg transition-all"
              />
            </motion.div>
            <h3 className="mt-4 font-medium text-zinc-800 text-sm sm:text-base group-hover:text-orange-500 transition-colors">
              {dish.title}
            </h3>
            <p className="mt-1.5 text-zinc-500 font-semibold text-sm sm:text-base">
              {dish.price}
            </p>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}

