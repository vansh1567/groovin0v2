import React, { useState, useRef, useEffect } from 'react';
import { Bell, MessageSquare, User, Menu, LogOut, UserCircle } from 'lucide-react';

const Navbar = ({ onMenuClick }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="h-16 border-b bg-white">
      {/* Main navbar container with fixed width and position */}
      <div className="h-full px-4 flex items-center justify-between">
        {/* Left section with menu button */}
        <div className="flex items-center">
          <div
           
            className="p-2 "
          >
            
          </div>
        </div>

        {/* Right section with fixed position */}
        <div className="flex items-center space-x-2">
          {/* Notification button */}
          <button className="p-2 hover:bg-gray-100 rounded-lg transition duration-200">
            <Bell className="w-6 h-6" />
          </button>

          {/* Messages button */}
          <button className="p-2 hover:bg-gray-100 rounded-lg transition duration-200">
            <MessageSquare className="w-6 h-6" />
          </button>

          {/* Profile dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition duration-200"
            >
              <User className="w-6 h-6" />
            </button>

            {/* Dropdown menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border divide-y">
                <button
                  onClick={() => {
                    setIsDropdownOpen(false);
                    // Add profile action here
                  }}
                  className="w-full px-4 py-2 text-left flex items-center space-x-2 hover:bg-gray-50"
                >
                  <UserCircle className="w-5 h-5" />
                  <span>Profile</span>
                </button>
                <button
                  onClick={() => {
                    setIsDropdownOpen(false);
                    // Add logout action here
                  }}
                  className="w-full px-4 py-2 text-left flex items-center space-x-2 hover:bg-gray-50"
                >
                  <LogOut className="w-5 h-5" />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;