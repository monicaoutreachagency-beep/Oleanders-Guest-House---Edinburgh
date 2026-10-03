import React, { useState } from 'react';
import {
  Calendar,
  Phone,
  MapPin,
  Clock,
  Sparkles,
  Wifi,
  Car,
  Coffee,
  HeartHandshake,
  Moon,
  ChevronRight,
  ShieldCheck,
  Check,
  ArrowRight,
  Compass,
  Star
} from 'lucide-react';
import {
  BUSINESS_INFO,
  IMAGES,
  ROOMS,
  EDINBURGH_ATTRACTIONS,
  TESTIMONIALS,
  Room
} from '../data/guestHouseData';

interface HomePageProps {
  onNavigate: (page: 'home' | 'about' | 'rooms' | 'contact') => void;
  onOpenBooking: (roomId?: string) => void;
  onViewRoomDetails: (room: Room) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenBooking,
  onViewRoomDetails,
}) => {
  const [quickCheckIn, setQuickCheckIn] = useState('');
  const [quickCheckOut, setQuickCheckOut] = useState('');
  const [quickGuests, setQuickGuests] = useState('2');

  const handleQuickSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenBooking();
  };

  return (
    <div className="space-y-0">
      {/* =========================================================================
          SECTION 1: HERO SECTION
          Full-width luxury guest house background image, attractive headline
          "Welcome to Oleanders Guest House", short introduction, Book Your Stay
          ========================================================================= */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-[#220836] overflow-hidden">
        {/* Background Image with luxury purple scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.hero}
            alt="Oleanders Guest House Victorian stone exterior in Edinburgh"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-105 animate-pulse duration-[10000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#220836]/95 via-[#351052]/80 to-[#220836]/90 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#220836] via-transparent to-black/30" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center text-white space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#76509B]/40 border border-[#D6B879]/40 backdrop-blur-sm text-xs font-medium text-[#F3EDF8] tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#D6B879]" />
            <span>Refined Scottish Hospitality · Edinburgh</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-[1.1]">
            Welcome to <span className="text-[#D6B879]">Oleanders</span> Guest House
          </h1>

          <p className="text-base sm:text-xl text-[#F3EDF8]/90 max-w-2xl mx-auto font-light leading-relaxed">
            Experience exceptional comfort, peaceful Victorian character, and warm Scottish hospitality on leafy Craigleith Road, just minutes from the historic heart of Edinburgh.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto px-8 py-4 bg-[#D6B879] hover:bg-[#C4A25F] text-[#220836] font-bold text-sm tracking-wider uppercase rounded-xl shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-0.5 border border-white/20 flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#220836]" />
              <span>Book Your Stay</span>
            </button>

            <button
              onClick={() => onNavigate('rooms')}
              className="w-full sm:w-auto px-8 py-4 bg-[#76509B]/30 hover:bg-[#76509B]/50 text-white font-semibold text-sm tracking-wider rounded-xl backdrop-blur-sm border border-white/20 transition-all flex items-center justify-center gap-2"
            >
              <span>Explore Our Rooms</span>
              <ChevronRight className="w-4 h-4 text-[#D6B879]" />
            </button>
          </div>

          {/* Quick Availability Bar Card */}
          <div className="pt-8 max-w-3xl mx-auto">
            <form
              onSubmit={handleQuickSearch}
              className="bg-white/95 backdrop-blur-md text-slate-800 p-4 sm:p-5 rounded-2xl shadow-2xl border border-[#D6B879]/30 grid grid-cols-1 sm:grid-cols-4 gap-3 text-left items-end"
            >
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#351052] mb-1">
                  Check In
                </label>
                <input
                  type="date"
                  value={quickCheckIn}
                  onChange={(e) => setQuickCheckIn(e.target.value)}
                  className="w-full text-xs py-2 px-3 bg-purple-50/50 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#76509B]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#351052] mb-1">
                  Check Out
                </label>
                <input
                  type="date"
                  value={quickCheckOut}
                  onChange={(e) => setQuickCheckOut(e.target.value)}
                  className="w-full text-xs py-2 px-3 bg-purple-50/50 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#76509B]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#351052] mb-1">
                  Guests
                </label>
                <select
                  value={quickGuests}
                  onChange={(e) => setQuickGuests(e.target.value)}
                  className="w-full text-xs py-2 px-3 bg-purple-50/50 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#76509B]"
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                </select>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 bg-[#351052] hover:bg-[#25083B] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <span>Check Rates</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D6B879]" />
                </button>
              </div>
            </form>
          </div>

          {/* Quick trust strip */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-[#F3EDF8]/75">
            <span className="flex items-center gap-1.5">
              <Car className="w-4 h-4 text-[#D6B879]" /> Free On-Site Parking
            </span>
            <span className="flex items-center gap-1.5">
              <Wifi className="w-4 h-4 text-[#D6B879]" /> Superfast Wi-Fi
            </span>
            <span className="flex items-center gap-1.5">
              <Coffee className="w-4 h-4 text-[#D6B879]" /> Scottish Hospitality Tray
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: ABOUT OUR GUEST HOUSE
          Introduce the guest house with beautiful interior photography and
          welcoming text
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#FAF7FD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Col: Story & Philosophy */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#76509B] block">
                  About Our Guest House
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#351052] tracking-tight leading-tight">
                  A Gracious Edinburgh Haven on Craigleith Road
                </h2>
              </div>

              <p className="text-base text-slate-600 leading-relaxed">
                Nestled on historic Craigleith Road in Edinburgh's peaceful residential district, <strong>Oleanders Guest House</strong> offers travelers an authentic, tranquil Scottish stay. Combining classic Victorian architectural elegance with modern comforts, we provide a peaceful respite from the bustling city centre.
              </p>

              <p className="text-base text-slate-600 leading-relaxed">
                Whether you are visiting Edinburgh to marvel at Edinburgh Castle, stroll through the Royal Botanic Garden, or discover quaint cafes in Stockbridge, our guest house ensures you wake up rested, refreshed, and well cared for.
              </p>

              {/* Highlight bullet points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-purple-100/80 shadow-xs">
                  <div className="p-2 bg-[#F3EDF8] text-[#76509B] rounded-lg">
                    <HeartHandshake className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#351052]">Personal Scottish Care</h4>
                    <p className="text-[11px] text-slate-500">Dedicated hosts eager to share local secrets & tips.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-purple-100/80 shadow-xs">
                  <div className="p-2 bg-[#F3EDF8] text-[#76509B] rounded-lg">
                    <Car className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#351052]">Guaranteed Free Parking</h4>
                    <p className="text-[11px] text-slate-500">Stress-free private parking right on our premises.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#351052] hover:bg-[#25083B] text-white text-xs font-bold tracking-wider uppercase rounded-xl transition-colors shadow-sm"
                >
                  <span>Read Our Full Story</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D6B879]" />
                </button>
              </div>
            </div>

            {/* Right Col: Photography Grid */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-4/3 group">
                <img
                  src={IMAGES.interiorLounge}
                  alt="Oleanders Guest House relaxing lounge and breakfast setting"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <span className="text-[11px] text-[#D6B879] uppercase tracking-wider font-semibold block">
                      Guest House Living
                    </span>
                    <p className="font-serif text-lg font-bold">
                      Inviting spaces designed for peaceful relaxation
                    </p>
                  </div>
                </div>
              </div>

              {/* Sub-strip with room preview & address card */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative rounded-xl overflow-hidden shadow-md aspect-4/3 border-2 border-white">
                  <img
                    src={IMAGES.roomKing}
                    alt="Plush bedroom detail"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3 text-white text-xs font-medium">
                    <span>Deluxe Bed Linens</span>
                  </div>
                </div>

                <div className="bg-[#351052] text-white p-4 rounded-xl flex flex-col justify-between border border-[#76509B]/30 shadow-md">
                  <div>
                    <span className="text-[10px] text-[#D6B879] uppercase tracking-widest font-semibold block">
                      Prime Location
                    </span>
                    <h4 className="font-serif text-sm font-bold mt-1 text-white">
                      132 Craigleith Road
                    </h4>
                    <p className="text-[11px] text-[#F3EDF8]/70 mt-1">
                      Direct 10-minute bus route into Princes Street & Edinburgh Waverley.
                    </p>
                  </div>
                  <div className="pt-2 text-[11px] text-[#D6B879] font-medium flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>Check-in 15:00 - 21:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: OUR ACCOMMODATION
          Showcase comfortable guest rooms with attractive image cards and room
          descriptions
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-white border-y border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#76509B] block">
              Restful Accommodations
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#351052] tracking-tight">
              Comfortable, Elegantly Styled Guest Rooms
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Every room at Oleanders Guest House is individually appointed with luxurious bedding, modern en-suite facilities, and authentic Scottish hospitality amenities.
            </p>
          </div>

          {/* Room Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ROOMS.slice(0, 3).map((room) => (
              <div
                key={room.id}
                className="bg-[#FAF7FD] rounded-2xl overflow-hidden border border-purple-100/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Image Container */}
                <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                  <img
                    src={room.image}
                    alt={room.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-[#351052]/90 backdrop-blur-xs text-white px-3 py-1 rounded-full text-xs font-bold border border-[#D6B879]/40">
                    £{room.pricePerNight} <span className="text-[10px] font-normal text-purple-200">/ night</span>
                  </div>
                  <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-xs text-white px-2.5 py-0.5 rounded text-[11px] font-medium">
                    {room.size} · {room.bedType}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl font-bold text-[#351052] group-hover:text-[#76509B] transition-colors">
                      {room.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                      {room.description}
                    </p>
                  </div>

                  {/* Amenities highlights */}
                  <div className="pt-2 border-t border-purple-100 space-y-1.5 text-xs text-slate-600">
                    {room.amenities.slice(0, 3).map((amenity, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#76509B] shrink-0" />
                        <span className="truncate">{amenity}</span>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-4 flex items-center gap-2">
                    <button
                      onClick={() => onViewRoomDetails(room)}
                      className="flex-1 py-2.5 px-3 bg-white hover:bg-purple-50 text-[#351052] text-xs font-semibold rounded-lg border border-purple-200 transition-colors text-center"
                    >
                      Room Details
                    </button>
                    <button
                      onClick={() => onOpenBooking(room.id)}
                      className="flex-1 py-2.5 px-3 bg-[#351052] hover:bg-[#25083B] text-white text-xs font-bold tracking-wider uppercase rounded-lg transition-colors text-center border border-[#D6B879]/30"
                    >
                      Book Room
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('rooms')}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#F3EDF8] hover:bg-[#E4D5F0] text-[#351052] font-bold text-xs uppercase tracking-wider rounded-xl transition-colors border border-[#76509B]/20"
            >
              <span>View All 4 Room Types & Amenities</span>
              <ChevronRight className="w-4 h-4 text-[#76509B]" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: WHY STAY WITH US
          Highlight comfort, hospitality, convenient location and relaxing
          atmosphere
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#351052] text-white relative overflow-hidden">
        {/* Subtle decorative purple glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#76509B]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D6B879]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#D6B879] block">
              The Oleanders Experience
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Why Stay With Us in Edinburgh
            </h2>
            <p className="text-sm sm:text-base text-[#F3EDF8]/80">
              Discover what makes Oleanders Guest House the premier choice for travelers desiring comfort, authentic Scottish charm, and total peace of mind.
            </p>
          </div>

          {/* 4 Feature Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Pillar 1 */}
            <div className="bg-[#220836]/60 p-7 rounded-2xl border border-[#76509B]/40 hover:border-[#D6B879]/60 transition-all duration-300 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#76509B]/30 flex items-center justify-center text-[#D6B879] border border-[#D6B879]/30">
                  <Moon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white">
                  Peaceful Night Rest
                </h3>
                <p className="text-xs text-[#F3EDF8]/80 leading-relaxed">
                  Situated on peaceful Craigleith Road, away from late-night city noise, allowing you to enjoy deeply restorative sleep in tranquil surroundings.
                </p>
              </div>
              <span className="text-[11px] text-[#D6B879] font-medium block pt-2">
                Double-glazed quiet rooms
              </span>
            </div>

            {/* Pillar 2 */}
            <div className="bg-[#220836]/60 p-7 rounded-2xl border border-[#76509B]/40 hover:border-[#D6B879]/60 transition-all duration-300 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#76509B]/30 flex items-center justify-center text-[#D6B879] border border-[#D6B879]/30">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white">
                  Warm Scottish Hospitality
                </h3>
                <p className="text-xs text-[#F3EDF8]/80 leading-relaxed">
                  Experience genuine hospitality with customized Edinburgh itineraries, warm welcomes, and complimentary tea trays with Scottish shortbread.
                </p>
              </div>
              <span className="text-[11px] text-[#D6B879] font-medium block pt-2">
                Personalized local advice
              </span>
            </div>

            {/* Pillar 3 */}
            <div className="bg-[#220836]/60 p-7 rounded-2xl border border-[#76509B]/40 hover:border-[#D6B879]/60 transition-all duration-300 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#76509B]/30 flex items-center justify-center text-[#D6B879] border border-[#D6B879]/30">
                  <Car className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white">
                  Free Private Parking
                </h3>
                <p className="text-xs text-[#F3EDF8]/80 leading-relaxed">
                  Parking in Edinburgh is notoriously challenging and expensive. We provide complimentary on-site parking for all our staying guests.
                </p>
              </div>
              <span className="text-[11px] text-[#D6B879] font-medium block pt-2">
                Zero parking fees
              </span>
            </div>

            {/* Pillar 4 */}
            <div className="bg-[#220836]/60 p-7 rounded-2xl border border-[#76509B]/40 hover:border-[#D6B879]/60 transition-all duration-300 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#76509B]/30 flex items-center justify-center text-[#D6B879] border border-[#D6B879]/30">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white">
                  Fast City Connections
                </h3>
                <p className="text-xs text-[#F3EDF8]/80 leading-relaxed">
                  Direct bus services stop right outside our door, whisking you straight to Princes Street, the Royal Mile, and Edinburgh Waverley in under 10 minutes.
                </p>
              </div>
              <span className="text-[11px] text-[#D6B879] font-medium block pt-2">
                Buses run every 6-8 mins
              </span>
            </div>
          </div>

          {/* Testimonial Quote strip */}
          <div className="mt-16 bg-[#220836]/80 p-8 rounded-2xl border border-[#76509B]/40 max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-6">
            <div className="flex text-[#D6B879] gap-1 shrink-0">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#D6B879]" />
              ))}
            </div>
            <div className="space-y-1 text-center sm:text-left">
              <p className="text-sm italic text-[#F3EDF8]/90">
                "{TESTIMONIALS[0].quote}"
              </p>
              <span className="text-xs text-[#D6B879] font-semibold block">
                — {TESTIMONIALS[0].author} ({TESTIMONIALS[0].origin})
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: EXPLORE EDINBURGH
          Showcase Edinburgh attractions, local sightseeing and nearby places
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#FAF7FD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-7 space-y-3">
              <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#76509B] block">
                Sightseeing & City Guide
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#351052] tracking-tight">
                Explore Historic Edinburgh with Ease
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                Oleanders Guest House is ideally positioned to explore Scotland's capital. Enjoy easy access to world heritage landmarks, scenic botanical gardens, and vibrant culinary neighborhoods.
              </p>
            </div>

            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-xl aspect-16/9 bg-slate-100">
              <img
                src={IMAGES.edinburghView}
                alt="Panoramic view of historic Edinburgh Castle and city skyline"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4 text-white text-xs">
                <span>Edinburgh Castle · 10 minutes via direct bus from Craigleith</span>
              </div>
            </div>
          </div>

          {/* Attraction Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EDINBURGH_ATTRACTIONS.slice(0, 6).map((attraction) => (
              <div
                key={attraction.id}
                className="bg-white p-6 rounded-2xl border border-purple-100 shadow-sm hover:shadow-md transition-shadow space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#76509B]">
                      {attraction.category}
                    </span>
                    <span className="bg-[#F3EDF8] text-[#351052] font-bold px-2 py-0.5 rounded text-[11px]">
                      {attraction.travelTime}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#351052]">
                    {attraction.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {attraction.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 bg-purple-50/40 p-2.5 rounded-lg">
                  <strong className="text-[#351052]">Host Tip:</strong> {attraction.tip}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: CONTACT & BOOKING CTA
          Include phone number, address, booking inquiry button and contact details
          ========================================================================= */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-[#FAF7FD] to-white border-t border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#351052] text-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden border border-[#D6B879]/40">
            {/* Background embellishment */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#76509B]/30 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left CTA text */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#D6B879] block">
                    Direct Contact & Inquiries
                  </span>
                  <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
                    Plan Your Edinburgh Stay with Oleanders
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-[#F3EDF8]/90 leading-relaxed max-w-xl">
                  Whether you have questions about our rooms, require parking information, or wish to arrange early check-in, our team is always pleased to assist you directly.
                </p>

                {/* Contact information list */}
                <div className="space-y-3 pt-2 text-sm text-[#F3EDF8]">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#D6B879] shrink-0" />
                    <a
                      href={`tel:${BUSINESS_INFO.phoneClean}`}
                      className="hover:text-[#D6B879] font-bold text-base transition-colors"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-[#D6B879] shrink-0" />
                    <span>{BUSINESS_INFO.address}</span>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <button
                    onClick={() => onOpenBooking()}
                    className="px-8 py-3.5 bg-[#D6B879] hover:bg-[#C4A25F] text-[#220836] font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all"
                  >
                    Send Booking Inquiry
                  </button>

                  <a
                    href={`tel:${BUSINESS_INFO.phoneClean}`}
                    className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider rounded-xl border border-white/20 transition-all flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-[#D6B879]" />
                    <span>Call Host Now</span>
                  </a>

                  <button
                    onClick={() => onNavigate('contact')}
                    className="text-xs font-semibold text-[#D6B879] hover:underline"
                  >
                    View Directions & Maps →
                  </button>
                </div>
              </div>

              {/* Right Quick Summary Card */}
              <div className="lg:col-span-5 bg-[#220836]/90 p-6 sm:p-8 rounded-2xl border border-[#76509B]/40 shadow-xl space-y-5">
                <h3 className="font-serif text-xl font-bold text-white border-b border-[#76509B]/40 pb-3">
                  Direct Reservation Perks
                </h3>

                <ul className="space-y-3 text-xs text-[#F3EDF8]/85">
                  <li className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#D6B879] shrink-0 mt-0.5" />
                    <span><strong>Best Direct Rate:</strong> Guaranteed lowest prices when booking directly with us.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Car className="w-4 h-4 text-[#D6B879] shrink-0 mt-0.5" />
                    <span><strong>Free On-Site Parking:</strong> Reserved off-street parking bay on Craigleith Road.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Coffee className="w-4 h-4 text-[#D6B879] shrink-0 mt-0.5" />
                    <span><strong>Scottish Hospitality Tray:</strong> Complimentary shortbread, teas & cafetière coffee.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-[#D6B879] shrink-0 mt-0.5" />
                    <span><strong>Flexible Check-In:</strong> Keybox code available upon prior coordination for late arrivals.</span>
                  </li>
                </ul>

                <div className="pt-2">
                  <button
                    onClick={() => onOpenBooking()}
                    className="w-full py-3 bg-[#76509B] hover:bg-[#603e83] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors text-center"
                  >
                    Book Your Stay Today
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
