import React, { useState } from 'react';
import {
  Phone,
  MapPin,
  Mail,
  Clock,
  Car,
  Navigation,
  Send,
  CheckCircle2,
  AlertCircle,
  Calendar,
  Sparkles,
  Plane,
  Train,
  Bus
} from 'lucide-react';
import { BUSINESS_INFO, ROOMS } from '../data/guestHouseData';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    roomId: 'deluxe-king-ensuite',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name || !formData.email || !formData.phone) {
      setErrorMessage('Please provide your name, email, and phone number.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const ref = `OGH-INQ-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedRef(ref);
    }, 800);
  };

  // Calculate nights
  let numberOfNights = 1;
  if (formData.checkIn && formData.checkOut) {
    const start = new Date(formData.checkIn);
    const end = new Date(formData.checkOut);
    const diff = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    if (diff > 0) numberOfNights = diff;
  }

  const selectedRoom = ROOMS.find((r) => r.id === formData.roomId) || ROOMS[0];
  const estimatedCost = selectedRoom.pricePerNight * numberOfNights;

  return (
    <div className="bg-[#FAF7FD] min-h-screen">
      {/* Hero Header */}
      <section className="relative py-20 bg-[#351052] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#220836] via-[#351052]/90 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#76509B]/40 border border-[#D6B879]/40 text-xs font-semibold text-[#D6B879] tracking-widest uppercase">
            <span>Direct Reservations & Enquiries</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white">
            Contact & Booking
          </h1>
          <p className="text-base sm:text-lg text-[#F3EDF8]/90 max-w-2xl mx-auto font-light leading-relaxed">
            Get in touch with Oleanders Guest House. Inquire about room availability, group bookings, or transit directions to our Craigleith residence.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-16">
        {/* Contact Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Direct Phone */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-purple-100 shadow-sm space-y-4 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#F3EDF8] text-[#76509B] flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase font-bold tracking-wider text-slate-500 block">
                Direct Telephone
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#351052]">
                {BUSINESS_INFO.phone}
              </h3>
              <p className="text-xs text-slate-600">
                Call our hosts directly for instant booking availability and travel assistance.
              </p>
            </div>
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="w-full py-2.5 px-4 bg-[#351052] hover:bg-[#25083B] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors text-center border border-[#D6B879]/30 flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#D6B879]" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Card 2: Address */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-purple-100 shadow-sm space-y-4 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#F3EDF8] text-[#76509B] flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase font-bold tracking-wider text-slate-500 block">
                Guest House Location
              </span>
              <h3 className="font-serif text-xl font-bold text-[#351052]">
                132 Craigleith Rd
              </h3>
              <p className="text-xs text-slate-600">
                Edinburgh EH4 2EQ, United Kingdom.<br />
                Leafy residential area with free private guest parking.
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=132+Craigleith+Rd,+Edinburgh+EH4+2EQ"
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 px-4 bg-[#F3EDF8] hover:bg-[#E3D3EE] text-[#351052] text-xs font-bold uppercase tracking-wider rounded-xl transition-colors text-center flex items-center justify-center gap-2 border border-[#76509B]/20"
            >
              <Navigation className="w-3.5 h-3.5 text-[#76509B]" />
              <span>Open in Maps</span>
            </a>
          </div>

          {/* Card 3: Arrival & Hours */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-purple-100 shadow-sm space-y-4 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#F3EDF8] text-[#76509B] flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase font-bold tracking-wider text-slate-500 block">
                Check-in Timings
              </span>
              <h3 className="font-serif text-xl font-bold text-[#351052]">
                15:00 to 21:00
              </h3>
              <p className="text-xs text-slate-600">
                Check-out by 10:30 AM.<br />
                Self check-in keybox code arranged for late evening arrivals.
              </p>
            </div>
            <div className="text-xs text-[#76509B] font-semibold flex items-center justify-center gap-1.5 p-2 bg-purple-50 rounded-xl">
              <Mail className="w-3.5 h-3.5" />
              <span>{BUSINESS_INFO.email}</span>
            </div>
          </div>
        </div>

        {/* Section: Inquiry Form & Interactive Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Form Col */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-purple-100 shadow-md">
            <div className="space-y-2 mb-8">
              <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#76509B] block">
                Reservation Request
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#351052]">
                Booking & Contact Inquiry Form
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Fill out the form below to check availability or submit your booking inquiry directly. We reply promptly within a few hours.
              </p>
            </div>

            {submittedRef ? (
              <div className="p-8 text-center bg-[#FAF7FD] rounded-2xl border border-purple-200 space-y-5 animate-fade-in">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-bold text-[#351052]">
                    Inquiry Successfully Dispatched!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                    Thank you, <strong>{formData.name}</strong>. We have logged your request for <strong>{selectedRoom.name}</strong>.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl text-left border border-purple-100 text-xs space-y-1.5 max-w-sm mx-auto">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Inquiry Ref:</span>
                    <span className="font-mono font-bold text-[#351052]">{submittedRef}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Dates:</span>
                    <span className="font-semibold text-slate-800">
                      {formData.checkIn || 'To be specified'} → {formData.checkOut || 'To be specified'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Contact:</span>
                    <span className="font-medium text-slate-800">{formData.phone}</span>
                  </div>
                </div>

                <button
                  onClick={() => setSubmittedRef(null)}
                  className="px-6 py-2.5 bg-[#351052] text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-[#25083B] transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {errorMessage && (
                  <div className="p-3 bg-red-50 text-red-700 text-xs rounded-lg flex items-center gap-2 border border-red-200">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Eleanor Vance"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full text-xs p-2.5 bg-purple-50/30 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#76509B]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. eleanor@example.co.uk"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full text-xs p-2.5 bg-purple-50/30 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#76509B]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. +44 131 332 3831"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full text-xs p-2.5 bg-purple-50/30 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#76509B]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Number of Guests
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full text-xs p-2.5 bg-purple-50/30 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#76509B]"
                    >
                      <option value="1">1 Guest (Single Traveler)</option>
                      <option value="2">2 Guests (Couple / Pair)</option>
                      <option value="3">3 Guests (Family)</option>
                      <option value="4">4 Guests (Group)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Check-in Date
                    </label>
                    <input
                      type="date"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleChange}
                      className="w-full text-xs p-2.5 bg-purple-50/30 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#76509B]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Check-out Date
                    </label>
                    <input
                      type="date"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleChange}
                      className="w-full text-xs p-2.5 bg-purple-50/30 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#76509B]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Room Type Preference
                  </label>
                  <select
                    name="roomId"
                    value={formData.roomId}
                    onChange={handleChange}
                    className="w-full text-xs p-2.5 bg-purple-50/30 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#76509B]"
                  >
                    {ROOMS.map((room) => (
                      <option key={room.id} value={room.id}>
                        {room.name} — £{room.pricePerNight}/night ({room.bedType})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Message, Dietary or Parking Requirements
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Please let us know if you require a parking spot, twin beds, or specific arrival times..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full text-xs p-2.5 bg-purple-50/30 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#76509B] resize-none"
                  />
                </div>

                {/* Estimate info card */}
                {formData.checkIn && formData.checkOut && (
                  <div className="p-3 bg-[#F3EDF8] rounded-xl border border-purple-200/60 flex items-center justify-between text-xs">
                    <div>
                      <span className="font-semibold text-[#351052] block">
                        {numberOfNights} Nights: {selectedRoom.name}
                      </span>
                      <span className="text-[11px] text-[#76509B]">
                        Includes free parking & Scottish hospitality tray
                      </span>
                    </div>
                    <span className="font-serif text-base font-bold text-[#351052]">
                      £{estimatedCost}
                    </span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 bg-[#351052] hover:bg-[#25083B] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center gap-2 border border-[#D6B879]/40 disabled:opacity-70"
                >
                  <Send className="w-4 h-4 text-[#D6B879]" />
                  <span>{isSubmitting ? 'Sending Request...' : 'Send Booking Inquiry Now'}</span>
                </button>
              </form>
            )}
          </div>

          {/* Map & Transit Col */}
          <div className="lg:col-span-5 space-y-6">
            {/* Embedded Map Card */}
            <div className="bg-white p-6 rounded-3xl border border-purple-100 shadow-md space-y-4">
              <div className="space-y-1">
                <span className="text-xs uppercase font-bold tracking-wider text-[#76509B] block">
                  Location Map
                </span>
                <h3 className="font-serif text-xl font-bold text-[#351052]">
                  132 Craigleith Rd, Edinburgh
                </h3>
              </div>

              {/* Map Iframe with fallback link */}
              <div className="relative rounded-2xl overflow-hidden aspect-4/3 border border-purple-100 bg-slate-100">
                <iframe
                  title="Oleanders Guest House Map Location"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2232.8804561081546!2d-3.2427771!3d55.9566672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887c355faef1b97%3A0x6b77ecb47f3f2001!2s132%20Craigleith%20Rd%2C%20Edinburgh%20EH4%202EQ%2C%20UK!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
                />
              </div>

              <div className="p-3 bg-[#FAF7FD] rounded-xl text-xs text-slate-600 flex items-center justify-between">
                <span>Free Guest Parking On Site</span>
                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  className="font-bold text-[#351052] hover:text-[#76509B]"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>

            {/* Travel & Transit Directions */}
            <div className="bg-[#351052] text-white p-6 rounded-3xl border border-[#76509B]/40 shadow-md space-y-4">
              <h3 className="font-serif text-lg font-bold text-white flex items-center gap-2">
                <Navigation className="w-4 h-4 text-[#D6B879]" />
                <span>How to Reach Oleanders</span>
              </h3>

              <div className="space-y-3 text-xs text-[#F3EDF8]/85">
                <div className="flex items-start gap-2.5">
                  <Train className="w-4 h-4 text-[#D6B879] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">From Waverley Train Station:</strong>
                    <p>Take Lothian Bus 41 or 43 directly from nearby Princes Street. Get off near Craigleith Road (approx 10 minutes).</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Plane className="w-4 h-4 text-[#D6B879] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">From Edinburgh Airport:</strong>
                    <p>Take the Airlink 100 or Edinburgh Tram to Haymarket, then catch a quick 5-minute taxi or bus directly to 132 Craigleith Rd.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Car className="w-4 h-4 text-[#D6B879] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Driving / GPS:</strong>
                    <p>Set satellite navigation to <strong>EH4 2EQ</strong>. Free private off-street parking is available immediately at the guest house.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
