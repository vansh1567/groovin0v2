import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const DashboardLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div 
      className="flex flex-col h-screen overflow-hidden" 
      style={{ fontFamily: 'Quicksand, sans-serif' }}
    >
      {/* Navbar - Fixed at Top */}
      <Navbar onMenuClick={() => setIsMobileMenuOpen(true)} />

      {/* Main Content Area with Sidebar */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar - Positioned Next to Main Content */}
        <div
          className={`
            ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
            lg:translate-x-0 
            transition-transform duration-300 ease-in-out
            z-30 h-full
          `}
        >
          <Sidebar />
        </div>

        {/* Main Content - Scrollable */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
          <Outlet />
        </main>
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default DashboardLayout;
