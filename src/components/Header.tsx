import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Calendar, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/guestHouseData';

interface HeaderProps {
  currentPage: 'home' | 'about' | 'rooms' | 'contact';
  onNavigate: (page: 'home' | 'about' | 'rooms' | 'contact') => void;
  onOpenBooking: (roomTitle?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenBooking,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: 'home' | 'about' | 'rooms' | 'contact'; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'rooms', label: 'Rooms & Accommodation' },
    { id: 'contact', label: 'Contact & Booking' },
  ];

  const handleNavClick = (pageId: 'home' | 'about' | 'rooms' | 'contact') => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top micro announcement bar */}
      <div className="bg-[#351052] text-[#F3EDF8] text-xs py-2 px-4 sm:px-6 border-b border-[#76509B]/30">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-xs text-[#F3EDF8]/90">
            <MapPin className="w-3.5 h-3.5 text-[#D6B879]" />
            <span>132 Craigleith Rd, Edinburgh EH4 2EQ</span>
            <span className="hidden md:inline text-[#D6B879]/60">·</span>
            <span className="hidden md:inline text-xs text-[#D6B879]">Free On-Site Guest Parking</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="flex items-center gap-1.5 text-[#F3EDF8] hover:text-[#D6B879] transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-[#D6B879]" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-purple-100 py-3'
            : 'bg-white border-b border-purple-100/70 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Zone 1: Single text wordmark in display serif face */}
            <button
              onClick={() => handleNavClick('home')}
              className="text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#76509B] rounded"
            >
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#351052] group-hover:text-[#76509B] transition-colors block">
                Oleanders
              </span>
              <span className="text-[10px] sm:text-[11px] tracking-[0.25em] uppercase font-semibold text-[#76509B] block -mt-1">
                Guest House · Edinburgh
              </span>
            </button>

            {/* Zone 2: 4 Clean Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`relative py-1 text-sm font-medium transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#76509B] rounded ${
                      isActive
                        ? 'text-[#351052] font-semibold'
                        : 'text-slate-600 hover:text-[#351052]'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#76509B] rounded-full animate-fade-in" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Zone 3: Primary Action & Direct Contact */}
            <div className="flex items-center gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="hidden sm:inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold text-[#351052] bg-[#F3EDF8] hover:bg-[#E5DAF0] rounded-lg transition-colors border border-[#76509B]/20"
                title="Call Guest House directly"
              >
                <Phone className="w-3.5 h-3.5 text-[#76509B]" />
                <span className="hidden xl:inline">Call Host:</span>
                <span>{BUSINESS_INFO.phone}</span>
              </a>

              <button
                onClick={() => onOpenBooking()}
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#351052] hover:bg-[#25083B] active:scale-[0.98] rounded-lg shadow-sm hover:shadow-md transition-all whitespace-nowrap border border-[#D6B879]/40"
              >
                <Calendar className="w-4 h-4 text-[#D6B879]" />
                <span>Book Your Stay</span>
              </button>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-[#351052] hover:bg-[#F3EDF8] rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#76509B]"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-purple-100 px-4 pt-3 pb-6 shadow-xl animate-fade-in">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-[#F3EDF8] text-[#351052] font-semibold border-l-4 border-[#76509B]'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}

              <div className="pt-3 border-t border-purple-100 flex flex-col gap-2.5">
                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold text-[#351052] bg-[#F3EDF8] rounded-lg border border-[#76509B]/20"
                >
                  <Phone className="w-4 h-4 text-[#76509B]" />
                  <span>Call Us: {BUSINESS_INFO.phone}</span>
                </a>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold text-white bg-[#351052] rounded-lg shadow-sm"
                >
                  <Calendar className="w-4 h-4 text-[#D6B879]" />
                  <span>Book Your Stay Direct</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
