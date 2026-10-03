import React from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../data/guestHouseData';

interface FooterProps {
  onNavigate: (page: 'home' | 'about' | 'rooms' | 'contact') => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  const handleNav = (page: 'home' | 'about' | 'rooms' | 'contact') => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#220836] text-[#F3EDF8] border-t border-[#76509B]/30 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-purple-900/60">
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <div>
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white block">
                Oleanders
              </span>
              <span className="text-[11px] tracking-[0.25em] uppercase font-semibold text-[#D6B879] block">
                Guest House · Edinburgh
              </span>
            </div>
            <p className="text-sm text-[#F3EDF8]/80 leading-relaxed">
              A refined Scottish guest house retreat nestled on historic Craigleith Road. Providing peaceful, high-comfort accommodations with complimentary parking and warm hospitality.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#D6B879]">
              <ShieldCheck className="w-4 h-4 text-[#D6B879]" />
              <span>Verified Direct Booking Perks</span>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h3 className="font-serif text-lg font-bold text-white mb-4 tracking-wide border-b border-[#76509B]/40 pb-2">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="text-[#F3EDF8]/80 hover:text-[#D6B879] transition-colors text-left"
                >
                  Home Page
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="text-[#F3EDF8]/80 hover:text-[#D6B879] transition-colors text-left"
                >
                  About Our Guest House
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('rooms')}
                  className="text-[#F3EDF8]/80 hover:text-[#D6B879] transition-colors text-left"
                >
                  Rooms & Accommodation
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="text-[#F3EDF8]/80 hover:text-[#D6B879] transition-colors text-left"
                >
                  Contact & Booking Inquiries
                </button>
              </li>
              <li className="pt-2">
                <button
                  onClick={() => onOpenBooking()}
                  className="text-xs font-semibold text-[#D6B879] hover:underline"
                >
                  → Check Room Availability
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div>
            <h3 className="font-serif text-lg font-bold text-white mb-4 tracking-wide border-b border-[#76509B]/40 pb-2">
              Contact & Location
            </h3>
            <ul className="space-y-3.5 text-sm text-[#F3EDF8]/85">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D6B879] shrink-0 mt-1" />
                <span>
                  {BUSINESS_INFO.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#D6B879] shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  className="hover:text-[#D6B879] font-medium transition-colors"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#D6B879] shrink-0" />
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="hover:text-[#D6B879] transition-colors"
                >
                  {BUSINESS_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-3 pt-1 text-xs text-[#F3EDF8]/70">
                <Clock className="w-4 h-4 text-[#D6B879] shrink-0 mt-0.5" />
                <div>
                  <p>Check-in: {BUSINESS_INFO.checkIn}</p>
                  <p>Check-out: {BUSINESS_INFO.checkOut}</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Booking Guarantee */}
          <div className="bg-[#351052]/70 p-5 rounded-xl border border-[#76509B]/40 flex flex-col justify-between">
            <div>
              <h4 className="font-serif text-base font-bold text-white mb-2 text-[#D6B879]">
                Direct Reservation Guarantee
              </h4>
              <p className="text-xs text-[#F3EDF8]/80 leading-relaxed mb-4">
                Booking directly with Oleanders Guest House guarantees the best direct rates, complimentary parking access, and flexible arrival assistance.
              </p>
            </div>
            <button
              onClick={() => onOpenBooking()}
              className="w-full py-2.5 px-4 bg-[#D6B879] hover:bg-[#C4A25F] text-[#220836] font-bold text-xs uppercase tracking-wider rounded-lg transition-colors shadow-sm text-center"
            >
              Book Your Stay Online
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F3EDF8]/60">
          <p>© {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Crafted with Scottish warmth & care</span>
            <Heart className="w-3.5 h-3.5 text-[#D6B879] fill-[#D6B879]" />
            <span>Edinburgh, UK</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
