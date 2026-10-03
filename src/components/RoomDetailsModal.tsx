import React from 'react';
import { X, Check, Bed, Maximize2, Users, ShieldCheck, Sparkles } from 'lucide-react';
import { Room } from '../data/guestHouseData';

interface RoomDetailsModalProps {
  room: Room | null;
  isOpen: boolean;
  onClose: () => void;
  onBookNow: (roomId: string) => void;
}

export const RoomDetailsModal: React.FC<RoomDetailsModalProps> = ({
  room,
  isOpen,
  onClose,
  onBookNow,
}) => {
  if (!isOpen || !room) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-purple-100 overflow-hidden relative">
        {/* Header Bar */}
        <div className="bg-[#351052] text-white px-6 py-4 flex items-center justify-between border-b border-[#76509B]/30">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#D6B879] font-semibold block">
              Accommodation Specification
            </span>
            <h2 className="font-serif text-2xl font-bold text-white">
              {room.name}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="max-h-[80vh] overflow-y-auto">
          {/* Image banner */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-100">
            <img
              src={room.image}
              alt={room.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
              <div className="text-white space-y-1">
                <span className="text-xs text-[#D6B879] font-medium tracking-wide block">
                  Oleanders Guest House · Craigleith, Edinburgh
                </span>
                <p className="text-sm font-light text-white/90 italic">
                  "{room.tagline}"
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-8">
            {/* Quick stats strip */}
            <div className="grid grid-cols-3 gap-3 bg-[#F3EDF8] p-4 rounded-xl border border-purple-200/60 text-center">
              <div className="flex flex-col items-center justify-center gap-1">
                <Bed className="w-4 h-4 text-[#76509B]" />
                <span className="text-[11px] text-slate-500 uppercase font-medium">Bed Arrangement</span>
                <span className="text-xs font-bold text-[#351052]">{room.bedType}</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 border-x border-purple-200/60">
                <Maximize2 className="w-4 h-4 text-[#76509B]" />
                <span className="text-[11px] text-slate-500 uppercase font-medium">Room Size</span>
                <span className="text-xs font-bold text-[#351052]">{room.size}</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-1">
                <Users className="w-4 h-4 text-[#76509B]" />
                <span className="text-[11px] text-slate-500 uppercase font-medium">Max Occupancy</span>
                <span className="text-xs font-bold text-[#351052]">{room.capacity} Guests</span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-3">
              <h3 className="font-serif text-xl font-bold text-[#351052]">
                About This Room
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {room.detailedDescription}
              </p>
            </div>

            {/* Verified Amenities */}
            <div className="space-y-3">
              <h3 className="font-serif text-xl font-bold text-[#351052] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#D6B879]" />
                <span>Verified In-Room Facilities</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {room.amenities.map((amenity, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100"
                  >
                    <span className="w-5 h-5 rounded-full bg-[#F3EDF8] text-[#76509B] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3" />
                    </span>
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Comfort details */}
            <div className="space-y-3">
              <h3 className="font-serif text-xl font-bold text-[#351052]">
                Key Comfort Highlights
              </h3>
              <ul className="space-y-2 text-xs text-slate-600">
                {room.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D6B879]" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing & CTA footer */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-slate-500 uppercase tracking-wider block">Direct Guest Rate</span>
                <div className="flex items-baseline gap-1">
                  <span className="font-serif text-3xl font-bold text-[#351052]">£{room.pricePerNight}</span>
                  <span className="text-xs text-slate-500">/ night (including VAT & parking)</span>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={onClose}
                  className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    onClose();
                    onBookNow(room.id);
                  }}
                  className="flex-1 sm:flex-none px-6 py-3 bg-[#351052] hover:bg-[#25083B] text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-md transition-all border border-[#D6B879]/50 flex items-center justify-center gap-2"
                >
                  <ShieldCheck className="w-4 h-4 text-[#D6B879]" />
                  <span>Inquire & Reserve Room</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
