import React from 'react';
import {
  HeartHandshake,
  Sparkles,
  MapPin,
  Car,
  Wifi,
  Coffee,
  CheckCircle,
  Phone,
  Shield,
  Star
} from 'lucide-react';
import { BUSINESS_INFO, IMAGES, TESTIMONIALS } from '../data/guestHouseData';

interface AboutPageProps {
  onNavigate: (page: 'home' | 'about' | 'rooms' | 'contact') => void;
  onOpenBooking: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onOpenBooking,
}) => {
  return (
    <div className="bg-[#FAF7FD] min-h-screen">
      {/* Page Hero Header */}
      <section className="relative py-20 bg-[#351052] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src={IMAGES.hero}
            alt="Oleanders Guest House Victorian stone exterior in Edinburgh"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#220836] via-[#351052]/90 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#76509B]/40 border border-[#D6B879]/40 text-xs font-semibold text-[#D6B879] tracking-widest uppercase">
            <span>Our Heritage & Hospitality</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white">
            About Oleanders Guest House
          </h1>
          <p className="text-base sm:text-lg text-[#F3EDF8]/90 max-w-2xl mx-auto font-light leading-relaxed">
            Discover the story, Scottish traditions, and peaceful character that make our Edinburgh residence a cherished home away from home.
          </p>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-24">
        {/* Section 1: Guest House Introduction & Story */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#76509B] block">
                Our Story & Heritage
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#351052] tracking-tight">
                A Gracious Victorian Residence in Craigleith
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Oleanders Guest House is situated in a classic Edinburgh stone townhouse on <strong>132 Craigleith Road</strong>. Built during the height of Edinburgh’s Victorian era, the house preserves its high ceilings, ornate cornicing, and generous sash windows while offering updated, luxurious accommodations.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Founded on the belief that travel is best enjoyed with personal warmth and tranquility, Oleanders is dedicated to providing guests with an unhurried, comfortable stay. Located in an affluent, leafy residential neighborhood just north-west of Edinburgh's city centre, our residence allows you to experience authentic Edinburgh living.
            </p>

            <div className="p-4 bg-white rounded-xl border-l-4 border-[#76509B] shadow-xs space-y-1">
              <p className="text-xs font-semibold text-[#351052] uppercase tracking-wide">
                Our Vision
              </p>
              <p className="text-xs text-slate-600 italic">
                "To offer every guest a peaceful haven, genuine Scottish warmth, and the comfort of a boutique home in Edinburgh."
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white aspect-4/3 relative">
              <img
                src={IMAGES.interiorLounge}
                alt="Oleanders Guest House reception lounge and breakfast room"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6 text-white text-xs">
                <span>The Oleanders Guest Lounge · Warmth, tea & peaceful ambiance</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Hospitality and Guest Experience */}
        <section className="bg-white p-8 sm:p-12 lg:p-16 rounded-3xl border border-purple-100 shadow-sm space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#76509B] block">
              The Oleanders Philosophy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#351052] tracking-tight">
              Hospitality & The Guest Experience
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              We believe great hospitality is found in the details—from freshly prepared Scottish hospitality trays to prompt, thoughtful communication before and throughout your stay.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-[#FAF7FD] rounded-2xl border border-purple-100/80 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#F3EDF8] text-[#76509B] flex items-center justify-center">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#351052]">
                Personalized Scottish Welcome
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                From the moment you arrive, you are greeted with attentive warmth, local city guidance, restaurant recommendations in nearby Stockbridge, and maps of Edinburgh’s hidden gems.
              </p>
            </div>

            <div className="p-6 bg-[#FAF7FD] rounded-2xl border border-purple-100/80 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#F3EDF8] text-[#76509B] flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#351052]">
                Uncompromising Cleanliness
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every bedroom, private en-suite shower, and communal area is maintained to the highest hygiene standards with daily housekeeping and crisp Egyptian cotton bed linens.
              </p>
            </div>

            <div className="p-6 bg-[#FAF7FD] rounded-2xl border border-purple-100/80 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#F3EDF8] text-[#76509B] flex items-center justify-center">
                <Coffee className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#351052]">
                Artisan Scottish Comforts
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Each room is stocked with fine teas, fresh ground cafetière coffee, traditional buttery Scottish shortbread, and botanical soaps crafted in the Scottish Highlands.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Comfort and Facilities */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-md aspect-4/3">
                <img
                  src={IMAGES.roomKing}
                  alt="Deluxe bedroom interior"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md aspect-4/3">
                <img
                  src={IMAGES.roomGarden}
                  alt="Garden suite interior"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="bg-[#351052] text-white p-6 rounded-2xl shadow-lg border border-[#76509B]/40">
              <span className="text-xs uppercase tracking-widest text-[#D6B879] font-bold block mb-1">
                Verified Facilities
              </span>
              <p className="text-xs text-[#F3EDF8]/90">
                All guest rooms feature modern en-suite bathrooms, power showers, double glazing, free high-speed Wi-Fi, and flat-screen televisions.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#76509B] block">
                Comfort & Facilities
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#351052] tracking-tight">
                Designed For Restful Modern Living
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We know that a great vacation or business trip relies on deep, uninterrupted sleep and hassle-free logistics. That's why Oleanders Guest House provides dedicated on-site amenities tailored to the independent traveler:
            </p>

            <div className="space-y-3 text-xs sm:text-sm text-slate-700">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-[#76509B] shrink-0 mt-1" />
                <span><strong>Complimentary Off-Street Parking:</strong> Private on-site bays eliminating city centre parking stress.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-[#76509B] shrink-0 mt-1" />
                <span><strong>High-Speed Fibre Wi-Fi:</strong> Reliable, fast coverage in all bedrooms and lounges for work or leisure streaming.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-[#76509B] shrink-0 mt-1" />
                <span><strong>En-Suite Bathrooms:</strong> Powerful showers, heated towel rails, and complimentary toiletries.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-[#76509B] shrink-0 mt-1" />
                <span><strong>Direct City Centre Transit:</strong> Regular Lothian buses stopping right nearby with 8-10 minute transit times.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Why Choose Oleanders Guest House */}
        <section className="bg-[#351052] text-white p-8 sm:p-12 lg:p-16 rounded-3xl relative overflow-hidden border border-[#D6B879]/30">
          <div className="relative z-10 space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#D6B879] block">
                The Distinction
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Why Choose Oleanders Guest House?
              </h2>
              <p className="text-xs sm:text-sm text-[#F3EDF8]/80">
                A comparison of what sets Oleanders apart from impersonal commercial city hotels.
              </p>
            </div>

            {/* Comparison Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-[#220836]/80 p-6 rounded-2xl border border-[#D6B879]/40 space-y-4">
                <div className="flex items-center gap-2 text-[#D6B879] font-serif text-lg font-bold">
                  <Star className="w-5 h-5 fill-[#D6B879]" />
                  <span>Oleanders Guest House</span>
                </div>
                <ul className="space-y-2.5 text-xs text-[#F3EDF8]/90">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#D6B879]" />
                    <span>Free on-site private parking included</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#D6B879]" />
                    <span>Peaceful leafy residential setting on Craigleith Rd</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#D6B879]" />
                    <span>Personalized host guidance & warm Scottish care</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#D6B879]" />
                    <span>Victorian character & individually styled rooms</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#D6B879]" />
                    <span>Complimentary tea tray with Scottish shortbread</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 p-6 rounded-2xl border border-white/10 space-y-4 text-white/70">
                <div className="font-serif text-lg font-bold text-white/80">
                  Standard Commercial Hotels
                </div>
                <ul className="space-y-2.5 text-xs">
                  <li className="flex items-center gap-2">
                    <span className="w-4 h-4 text-red-300">✕</span>
                    <span>Expensive daily parking fees (£25 - £40/day)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-4 h-4 text-red-300">✕</span>
                    <span>Noisy late-night street traffic & pub crowds</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-4 h-4 text-red-300">✕</span>
                    <span>Impersonal reception desks & automated kiosks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-4 h-4 text-red-300">✕</span>
                    <span>Cookie-cutter generic corporate bedroom decor</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-4 h-4 text-red-300">✕</span>
                    <span>Hidden surcharge fees & expensive incidentals</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom CTA within About */}
            <div className="text-center pt-4 space-y-4">
              <p className="text-xs text-[#F3EDF8]/80">
                Ready to experience authentic Edinburgh hospitality?
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={onOpenBooking}
                  className="px-8 py-3.5 bg-[#D6B879] hover:bg-[#C4A25F] text-[#220836] font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all"
                >
                  Book Your Stay Direct
                </button>
                <button
                  onClick={() => onNavigate('rooms')}
                  className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider rounded-xl border border-white/20 transition-all"
                >
                  View Accommodations
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
