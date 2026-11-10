import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, Users, CheckCircle2, Utensils } from 'lucide-react';

export default function BookingModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    time: '19:00',
    guests: '2 Guests',
    seating: 'Main Dining Room',
    name: '',
    phone: '',
    email: '',
    specialRequest: '',
  });
  const [confirmed, setConfirmed] = useState(false);
  const [bookingId, setBookingId] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBookingId(`RST-${Math.floor(100000 + Math.random() * 900000)}`);
    setConfirmed(true);
  };

  const handleReset = () => {
    setConfirmed(false);
    setStep(1);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleReset}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative z-10 w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-zinc-100"
        >
          {/* Header */}
          <div className="bg-orange-500 text-white p-6 relative">
            <button
              onClick={handleReset}
              className="absolute top-5 right-5 size-8 rounded-full bg-white/20 hover:bg-white/30 grid place-content-center transition cursor-pointer"
            >
              <X className="size-4" />
            </button>
            <div className="flex items-center gap-2 text-orange-100 text-xs font-semibold tracking-wider uppercase mb-1">
              <Utensils className="size-4" />
              <span>Table Reservation</span>
            </div>
            <h3 className="text-2xl font-medium font-urbanist">Book Your Dining Experience</h3>
          </div>

          {confirmed ? (
            /* Confirmation Screen */
            <div className="p-8 text-center flex flex-col items-center">
              <div className="size-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="size-10" />
              </div>
              <h4 className="text-2xl font-urbanist font-medium text-zinc-900">
                Reservation Confirmed!
              </h4>
              <p className="text-sm text-zinc-600 mt-2 max-w-sm">
                Thank you, <span className="font-semibold text-zinc-800">{formData.name}</span>. We
                have reserved a table for you at <span className="text-orange-600 font-medium">Restro</span>.
              </p>

              <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 my-6 text-left text-sm space-y-2">
                <div className="flex justify-between">
                  <span className="text-zinc-500">Booking Reference:</span>
                  <span className="font-mono font-semibold text-zinc-900">{bookingId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Date & Time:</span>
                  <span className="font-medium text-zinc-800">
                    {formData.date} at {formData.time}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Party Size:</span>
                  <span className="font-medium text-zinc-800">{formData.guests}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Seating Area:</span>
                  <span className="font-medium text-zinc-800">{formData.seating}</span>
                </div>
              </div>

              <p className="text-xs text-zinc-400 mb-6">
                A confirmation SMS & email have been dispatched to {formData.phone || formData.email}.
              </p>

              <button
                onClick={handleReset}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 rounded-full transition shadow-md shadow-orange-500/25 cursor-pointer"
              >
                Close & Return to Menu
              </button>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
              {step === 1 ? (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-600 mb-1.5 flex items-center gap-1.5">
                        <Calendar className="size-3.5 text-orange-500" /> Date
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-orange-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-600 mb-1.5 flex items-center gap-1.5">
                        <Clock className="size-3.5 text-orange-500" /> Time Slot
                      </label>
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-orange-500"
                      >
                        <option value="12:00">12:00 PM (Lunch)</option>
                        <option value="13:00">01:00 PM (Lunch)</option>
                        <option value="14:00">02:00 PM (Lunch)</option>
                        <option value="18:30">06:30 PM (Dinner)</option>
                        <option value="19:00">07:00 PM (Dinner)</option>
                        <option value="19:30">07:30 PM (Dinner)</option>
                        <option value="20:00">08:00 PM (Dinner)</option>
                        <option value="20:30">08:30 PM (Dinner)</option>
                        <option value="21:00">09:00 PM (Dinner)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-600 mb-1.5 flex items-center gap-1.5">
                        <Users className="size-3.5 text-orange-500" /> Party Size
                      </label>
                      <select
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-orange-500"
                      >
                        <option value="1 Guest">1 Guest</option>
                        <option value="2 Guests">2 Guests</option>
                        <option value="3 Guests">3 Guests</option>
                        <option value="4 Guests">4 Guests</option>
                        <option value="5-6 Guests">5-6 Guests</option>
                        <option value="7+ Guests (Large Party)">7+ Guests (Large Party)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-600 mb-1.5">
                        Seating Area
                      </label>
                      <select
                        name="seating"
                        value={formData.seating}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-orange-500"
                      >
                        <option value="Main Dining Room">Main Dining Room</option>
                        <option value="Window View">Window View</option>
                        <option value="Outdoor Terrace">Outdoor Terrace</option>
                        <option value="Private Chef Table">Private Chef's Table</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 rounded-full transition shadow-md shadow-orange-500/25 cursor-pointer text-sm"
                  >
                    Proceed to Guest Details &rarr;
                  </button>
                </>
              ) : (
                <>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-600 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-orange-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-600 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-orange-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-600 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-orange-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-600 mb-1">
                      Special Requests / Dietary Notes (Optional)
                    </label>
                    <textarea
                      name="specialRequest"
                      rows={2}
                      placeholder="Anniversary, allergies, quiet table, etc."
                      value={formData.specialRequest}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-orange-500 resize-none"
                    />
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-5 py-3 border border-slate-200 text-zinc-600 hover:bg-slate-50 rounded-full font-medium transition text-sm cursor-pointer"
                    >
                      &larr; Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 rounded-full transition shadow-md shadow-orange-500/25 cursor-pointer text-sm"
                    >
                      Confirm Reservation
                    </button>
                  </div>
                </>
              )}
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

