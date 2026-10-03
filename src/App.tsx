import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { RoomDetailsModal } from './components/RoomDetailsModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { RoomsPage } from './pages/RoomsPage';
import { ContactPage } from './pages/ContactPage';
import { Room, ROOMS } from './data/guestHouseData';

type PageType = 'home' | 'about' | 'rooms' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedBookingRoomId, setSelectedBookingRoomId] = useState<string | undefined>(undefined);
  const [selectedDetailRoom, setSelectedDetailRoom] = useState<Room | null>(null);

  // Initialize page from URL pathname or hash
  useEffect(() => {
    const parseUrlPage = (): PageType => {
      const path = window.location.pathname.replace(/^\/+|\/+$/g, '');
      if (path === 'about') return 'about';
      if (path === 'rooms' || path === 'accommodation') return 'rooms';
      if (path === 'contact' || path === 'booking') return 'contact';
      
      const hash = window.location.hash.replace('#', '');
      if (hash === 'about') return 'about';
      if (hash === 'rooms') return 'rooms';
      if (hash === 'contact') return 'contact';
      
      return 'home';
    };

    setCurrentPage(parseUrlPage());

    const handlePopState = () => {
      setCurrentPage(parseUrlPage());
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update page title and browser history when page changes
  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
    const pageTitles: Record<PageType, string> = {
      home: 'Oleanders Guest House - Edinburgh | Boutique Victorian Accommodation',
      about: 'About Us | Oleanders Guest House Edinburgh',
      rooms: 'Rooms & Accommodation | Oleanders Guest House Edinburgh',
      contact: 'Contact & Booking | Oleanders Guest House Edinburgh',
    };
    document.title = pageTitles[page];

    const newPath = page === 'home' ? '/' : `/${page}`;
    if (window.location.pathname !== newPath) {
      window.history.pushState({ page }, '', newPath);
    }
  };

  const handleOpenBooking = (roomId?: string) => {
    setSelectedBookingRoomId(roomId || ROOMS[0].id);
    setBookingModalOpen(true);
  };

  const handleViewRoomDetails = (room: Room) => {
    setSelectedDetailRoom(room);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7FD] text-slate-900 selection:bg-[#76509B] selection:text-white">
      {/* Global Navigation Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Page Body (1 of exactly 4 distinct pages) */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
            onViewRoomDetails={handleViewRoomDetails}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentPage === 'rooms' && (
          <RoomsPage
            onOpenBooking={handleOpenBooking}
            onViewRoomDetails={handleViewRoomDetails}
          />
        )}

        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Interactive Modals */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialRoomId={selectedBookingRoomId}
      />

      <RoomDetailsModal
        room={selectedDetailRoom}
        isOpen={!!selectedDetailRoom}
        onClose={() => setSelectedDetailRoom(null)}
        onBookNow={(roomId) => handleOpenBooking(roomId)}
      />
    </div>
  );
}
