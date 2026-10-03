import React, { useState, useEffect } from 'react';
import { X, Calendar, User, Mail, Phone, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO, ROOMS } from '../data/guestHouseData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRoomId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialRoomId,
}) => {
  const [selectedRoomId, setSelectedRoomId] = useState<string>(
    initialRoomId || ROOMS[0].id
  );
  const [checkInDate, setCheckInDate] = useState<string>('');
  const [checkOutDate, setCheckOutDate] = useState<string>('');
  const [guestsCount, setGuestsCount] = useState<number>(2);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  useEffect(() => {
    if (initialRoomId) {
      setSelectedRoomId(initialRoomId);
    }
  }, [initialRoomId]);

  // Set default dates (tomorrow and 3 days from now)
  useEffect(() => {
    if (!checkInDate) {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const afterTomorrow = new Date();
      afterTomorrow.setDate(afterTomorrow.getDate() + 3);

      setCheckInDate(tomorrow.toISOString().split('T')[0]);
      setCheckOutDate(afterTomorrow.toISOString().split('T')[0]);
    }
  }, [checkInDate]);

  if (!isOpen) return null;

  const selectedRoom = ROOMS.find((r) => r.id === selectedRoomId) || ROOMS[0];

  // Calculate nights
  let numberOfNights = 2;
  if (checkInDate && checkOutDate) {
    const start = new Date(checkInDate);
    const end = new Date(checkOutDate);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays > 0) numberOfNights = diffDays;
  }

  const estimatedTotal = selectedRoom.pricePerNight * numberOfNights;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const ref = `OGH-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedRef(ref);
    }, 800);
  };

  const handleReset = () => {
    setSubmittedRef(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-purple-100 overflow-hidden relative">
        {/* Header */}
        <div className="bg-[#351052] text-white px-6 py-5 flex items-center justify-between border-b border-[#76509B]/30">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#D6B879] font-semibold block">
              Oleanders Guest House · Direct Reservation
            </span>
            <h2 className="font-serif text-2xl font-bold text-white">
              Inquire & Book Your Edinburgh Stay
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

        {submittedRef ? (
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-2xl font-bold text-[#351052]">
                Booking Request Received!
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you, <strong className="text-slate-800">{name}</strong>. Your reservation inquiry for the <strong className="text-[#351052]">{selectedRoom.name}</strong> has been logged.
              </p>
            </div>

            <div className="bg-[#F3EDF8] p-4 rounded-xl text-left border border-purple-200/70 max-w-md mx-auto space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-500">Booking Reference:</span>
                <span className="font-mono font-bold text-[#351052]">{submittedRef}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Stay Duration:</span>
                <span className="font-semibold text-slate-800">{numberOfNights} Nights ({checkInDate} to {checkOutDate})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Estimated Total:</span>
                <span className="font-bold text-[#351052]">£{estimatedTotal} (Free On-site Parking Included)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Confirmation Sent To:</span>
                <span className="font-medium text-slate-800">{email}</span>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-xs text-slate-500">
                Need immediate same-day arrival assistance? Call us directly:
              </p>
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#351052] text-white text-xs font-semibold rounded-lg hover:bg-[#25083B] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#D6B879]" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
            </div>

            <button
              onClick={handleReset}
              className="w-full py-3 bg-[#76509B] text-white font-semibold text-sm rounded-lg hover:bg-[#603e83] transition-colors"
            >
              Done & Return to Site
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
            {/* Step 1: Room & Dates */}
            <div className="space-y-4">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#351052]">
                1. Select Your Preferred Accommodation
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ROOMS.map((room) => {
                  const isSelected = selectedRoomId === room.id;
                  return (
                    <button
                      type="button"
                      key={room.id}
                      onClick={() => setSelectedRoomId(room.id)}
                      className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between ${
                        isSelected
                          ? 'border-[#76509B] bg-[#F3EDF8] ring-2 ring-[#76509B]/20 shadow-sm'
                          : 'border-slate-200 hover:border-purple-200 bg-white'
                      }`}
                    >
                      <div>
                        <span className="font-serif text-sm font-bold text-[#351052] block">
                          {room.name}
                        </span>
                        <span className="text-[11px] text-slate-500 block">
                          {room.bedType} · {room.size}
                        </span>
                      </div>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="text-xs font-bold text-[#76509B]">
                          £{room.pricePerNight} <span className="text-[10px] font-normal text-slate-500">/ night</span>
                        </span>
                        {isSelected && (
                          <span className="text-[10px] bg-[#76509B] text-white px-2 py-0.5 rounded-full font-medium">
                            Selected
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Dates & Guests row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Check-in Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    required
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    className="w-full text-xs font-medium py-2 px-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#76509B]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Check-out Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    required
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    className="w-full text-xs font-medium py-2 px-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#76509B]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Total Guests
                </label>
                <select
                  value={guestsCount}
                  onChange={(e) => setGuestsCount(Number(e.target.value))}
                  className="w-full text-xs font-medium py-2 px-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#76509B]"
                >
                  <option value={1}>1 Guest (Solo)</option>
                  <option value={2}>2 Guests (Couple / Pair)</option>
                  <option value={3}>3 Guests (Family)</option>
                  <option value={4}>4 Guests (Group)</option>
                </select>
              </div>
            </div>

            {/* Stay Estimate Banner */}
            <div className="flex items-center justify-between p-3.5 bg-[#F3EDF8] rounded-xl border border-[#76509B]/20 text-xs">
              <div>
                <span className="text-slate-600 block">
                  Duration: <strong className="text-[#351052]">{numberOfNights} Nights</strong>
                </span>
                <span className="text-[11px] text-[#76509B]">
                  Includes complimentary parking & hospitality tray
                </span>
              </div>
              <div className="text-right">
                <span className="text-slate-500 text-[10px] block uppercase font-medium">Estimated Stay Rate</span>
                <span className="font-serif text-lg font-bold text-[#351052]">£{estimatedTotal}</span>
              </div>
            </div>

            {/* Step 2: Guest Details */}
            <div className="space-y-4">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#351052]">
                2. Guest Contact Information
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Eleanor Vance"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#76509B]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="email"
                      required
                      placeholder="e.g. eleanor@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#76509B]"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Phone Number (for arrival coordination) *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +44 7123 456789"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#76509B]"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Estimated Arrival Time or Special Requests (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Arriving from Edinburgh Waverley around 4pm, requesting parking space or twin bed configuration..."
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    className="w-full p-2.5 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#76509B] resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Direct Booking Perks */}
            <div className="flex items-center gap-2 text-[11px] text-slate-500 bg-amber-50/70 p-3 rounded-lg border border-amber-200/50">
              <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
              <span>
                <strong>No Booking Fees:</strong> You are booking direct with Oleanders Guest House. Free cancellation up to 48 hours prior to check-in.
              </span>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="py-3 px-5 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg transition-colors order-2 sm:order-1"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 py-3 px-6 bg-[#351052] hover:bg-[#25083B] text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-md transition-all flex items-center justify-center gap-2 border border-[#D6B879]/50 order-1 sm:order-2 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span>Processing Request...</span>
                ) : (
                  <>
                    <span>Confirm Booking Inquiry</span>
                    <span className="text-[#D6B879]">· £{estimatedTotal} Total</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
