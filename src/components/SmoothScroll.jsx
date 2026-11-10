import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll() {
  useEffect(() => {
    let lenis;
    let frameId;

    try {
      lenis = new Lenis({
        duration: 1.2,
        smoothWheel: true,
        syncTouch: false,
        anchors: { offset: -120 },
      });

      const raf = (time) => {
        lenis.raf(time);
        frameId = requestAnimationFrame(raf);
      };

      frameId = requestAnimationFrame(raf);
    } catch (err) {
      console.warn('Lenis scroll init failed:', err);
    }

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
      if (lenis) lenis.destroy();
    };
  }, []);

  return null;
}

