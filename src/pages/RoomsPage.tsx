import React, { useState } from 'react';
import {
  Bed,
  Maximize2,
  Users,
  Check,
  Sparkles,
  ShieldCheck,
  Calendar,
  Info,
  Car,
  Wifi,
  Coffee,
  Clock,
  ChevronRight
} from 'lucide-react';
import { ROOMS, Room, BUSINESS_INFO, IMAGES } from '../data/guestHouseData';

interface RoomsPageProps {
  onOpenBooking: (roomId?: string) => void;
  onViewRoomDetails: (room: Room) => void;
}

export const RoomsPage: React.FC<RoomsPageProps> = ({
  onOpenBooking,
  onViewRoomDetails,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredRooms = activeCategory === 'all'
    ? ROOMS
    : ROOMS.filter((room) => room.category === activeCategory);

  return (
    <div className="bg-[#FAF7FD] min-h-screen">
      {/* Page Hero Header */}
      <section className="relative py-20 bg-[#351052] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src={IMAGES.roomKing}
            alt="Oleanders Guest House bedrooms in Edinburgh"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#220836] via-[#351052]/90 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#76509B]/40 border border-[#D6B879]/40 text-xs font-semibold text-[#D6B879] tracking-widest uppercase">
            <span>Guest Accommodations</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white">
            Rooms & Accommodation
          </h1>
          <p className="text-base sm:text-lg text-[#F3EDF8]/90 max-w-2xl mx-auto font-light leading-relaxed">
            Relax in our individually styled Victorian bedrooms, each appointed with private en-suite facilities, fine Scottish hospitality touches, and peaceful residential tranquility.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-20">
        {/* Filter Segmented Control */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-purple-100">
          <div>
            <h2 className="font-serif text-2xl font-bold text-[#351052]">
              Choose Your Sanctuary
            </h2>
            <p className="text-xs text-slate-500">
              Showing {filteredRooms.length} available room options
            </p>
          </div>

          <div className="flex items-center gap-1.5 p-1.5 bg-[#F3EDF8] rounded-xl border border-purple-200/60 overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                activeCategory === 'all'
                  ? 'bg-[#351052] text-white shadow-sm'
                  : 'text-slate-600 hover:text-[#351052]'
              }`}
            >
              All Rooms ({ROOMS.length})
            </button>
            <button
              onClick={() => setActiveCategory('king')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                activeCategory === 'king'
                  ? 'bg-[#351052] text-white shadow-sm'
                  : 'text-slate-600 hover:text-[#351052]'
              }`}
            >
              King En-Suite
            </button>
            <button
              onClick={() => setActiveCategory('suite')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                activeCategory === 'suite'
                  ? 'bg-[#351052] text-white shadow-sm'
                  : 'text-slate-600 hover:text-[#351052]'
              }`}
            >
              Executive Suite
            </button>
            <button
              onClick={() => setActiveCategory('double')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                activeCategory === 'double'
                  ? 'bg-[#351052] text-white shadow-sm'
                  : 'text-slate-600 hover:text-[#351052]'
              }`}
            >
              Double Room
            </button>
            <button
              onClick={() => setActiveCategory('twin')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                activeCategory === 'twin'
                  ? 'bg-[#351052] text-white shadow-sm'
                  : 'text-slate-600 hover:text-[#351052]'
              }`}
            >
              Twin Room
            </button>
          </div>
        </div>

        {/* Room Cards Detailed Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {filteredRooms.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-3xl overflow-hidden border border-purple-100 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Image & Quick Badge */}
              <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                <img
                  src={room.image}
                  alt={room.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 bg-[#351052]/95 backdrop-blur-xs text-white px-3.5 py-1.5 rounded-full text-xs font-bold border border-[#D6B879]/50 shadow-md">
                  £{room.pricePerNight} <span className="text-[11px] font-normal text-purple-200">/ night</span>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-[11px] font-medium text-[#D6B879] uppercase tracking-wider block">
                    Oleanders Guest House
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    {room.name}
                  </h3>
                </div>
              </div>

              {/* Room Content */}
              <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  {/* Meta pill row */}
                  <div className="grid grid-cols-3 gap-2 bg-[#FAF7FD] p-3 rounded-xl border border-purple-100/70 text-center text-xs">
                    <div className="flex flex-col items-center justify-center">
                      <Bed className="w-4 h-4 text-[#76509B] mb-0.5" />
                      <span className="font-semibold text-[#351052] text-[11px]">{room.bedType}</span>
                    </div>
                    <div className="flex flex-col items-center justify-center border-x border-purple-100">
                      <Maximize2 className="w-4 h-4 text-[#76509B] mb-0.5" />
                      <span className="font-semibold text-[#351052] text-[11px]">{room.size}</span>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <Users className="w-4 h-4 text-[#76509B] mb-0.5" />
                      <span className="font-semibold text-[#351052] text-[11px]">Up to {room.capacity} Guests</span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {room.description}
                  </p>

                  {/* Verified Facilities */}
                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] uppercase tracking-wider font-bold text-[#76509B] block">
                      Verified Room Facilities
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                      {room.amenities.slice(0, 6).map((amenity, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#76509B] shrink-0" />
                          <span className="truncate">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-6 border-t border-purple-100 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={() => onViewRoomDetails(room)}
                    className="w-full sm:w-1/2 py-3 px-4 bg-white hover:bg-purple-50 text-[#351052] text-xs font-semibold rounded-xl border border-purple-200 transition-colors text-center"
                  >
                    View Photos & Amenities
                  </button>
                  <button
                    onClick={() => onOpenBooking(room.id)}
                    className="w-full sm:w-1/2 py-3 px-4 bg-[#351052] hover:bg-[#25083B] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors shadow-sm text-center border border-[#D6B879]/40 flex items-center justify-center gap-1.5"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#D6B879]" />
                    <span>Inquire / Book Room</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stay Policies & Information */}
        <section className="bg-white p-8 sm:p-12 rounded-3xl border border-purple-100 shadow-sm space-y-8">
          <div className="space-y-2">
            <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#76509B] block">
              Guest Stay Information
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#351052]">
              Comfortable Stay Guidelines & Amenities Included
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 bg-[#FAF7FD] rounded-2xl border border-purple-100/80 space-y-2">
              <Clock className="w-5 h-5 text-[#76509B]" />
              <h4 className="text-sm font-bold text-[#351052]">Check-in & Check-out</h4>
              <p className="text-xs text-slate-600">
                Check-in: 15:00 – 21:00<br />
                Check-out: 07:30 – 10:30<br />
                (Late check-in keybox access on request)
              </p>
            </div>

            <div className="p-5 bg-[#FAF7FD] rounded-2xl border border-purple-100/80 space-y-2">
              <Car className="w-5 h-5 text-[#76509B]" />
              <h4 className="text-sm font-bold text-[#351052]">Complimentary Parking</h4>
              <p className="text-xs text-slate-600">
                Off-street guest parking bays are provided free of charge on site during your stay.
              </p>
            </div>

            <div className="p-5 bg-[#FAF7FD] rounded-2xl border border-purple-100/80 space-y-2">
              <Wifi className="w-5 h-5 text-[#76509B]" />
              <h4 className="text-sm font-bold text-[#351052]">High-Speed Wi-Fi</h4>
              <p className="text-xs text-slate-600">
                Fibre broadband accessible freely across all guest rooms, sitting lounge and outdoor areas.
              </p>
            </div>

            <div className="p-5 bg-[#FAF7FD] rounded-2xl border border-purple-100/80 space-y-2">
              <Coffee className="w-5 h-5 text-[#76509B]" />
              <h4 className="text-sm font-bold text-[#351052]">Hospitality Tray</h4>
              <p className="text-xs text-slate-600">
                Refreshed daily with Scottish teas, cafetière coffee, Scottish shortbread, and fresh milk.
              </p>
            </div>
          </div>
        </section>

        {/* Booking Inquiry Banner */}
        <section className="bg-[#351052] text-white p-8 sm:p-12 rounded-3xl text-center space-y-6 border border-[#D6B879]/30">
          <div className="max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#D6B879] block">
              Direct Reservation Assistance
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Need Help Choosing the Right Room?
            </h3>
            <p className="text-xs sm:text-sm text-[#F3EDF8]/80 leading-relaxed">
              Contact our hosts directly at <strong>{BUSINESS_INFO.phone}</strong> for group arrangements, twin/king configuration options, or specific accessibility questions.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenBooking()}
              className="px-8 py-3.5 bg-[#D6B879] hover:bg-[#C4A25F] text-[#220836] font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all"
            >
              Book Your Stay Online
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider rounded-xl border border-white/20 transition-all"
            >
              Call Us: {BUSINESS_INFO.phone}
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};
