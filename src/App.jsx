import { useState } from 'react';
import SmoothScroll from './components/SmoothScroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Commitments from './components/Commitments';
import SignatureDishes from './components/SignatureDishes';
import WhyChooseUs from './components/WhyChooseUs';
import BookingProcess from './components/BookingProcess';
import OpeningHours from './components/OpeningHours';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import DishDetailModal from './components/DishDetailModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState(null);

  const handleOpenBooking = () => setIsBookingOpen(true);
  const handleCloseBooking = () => setIsBookingOpen(false);

  return (
    <div className="min-h-screen bg-white text-zinc-800 font-sans antialiased selection:bg-orange-500 selection:text-white">
      {/* Lenis Smooth Scroll Engine */}
      <SmoothScroll />

      {/* Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Sections */}
      <main>
        <Hero onOpenBooking={handleOpenBooking} />
        <About />
        <Commitments />
        <SignatureDishes onSelectDish={(dish) => setSelectedDish(dish)} />
        <WhyChooseUs />
        <BookingProcess onOpenBooking={handleOpenBooking} />
        <OpeningHours onOpenBooking={handleOpenBooking} />
        <Testimonials />
        <Faq />
        <CtaBanner onOpenBooking={handleOpenBooking} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
      />

      <DishDetailModal
        dish={selectedDish}
        onClose={() => setSelectedDish(null)}
        onBookTable={handleOpenBooking}
      />
    </div>
  );
}

