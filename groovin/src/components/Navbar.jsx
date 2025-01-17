import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, MessageSquare, User, LogOut, UserCircle } from 'lucide-react';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

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
    <nav className="sticky top-0 z-40 w-full bg-[#2C2C2C] shadow-md font-quicksand">
      <div className="flex items-center justify-between px-4 py-3 lg:px-6">
        
        {/* Left Section - Logo */}
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="https://imgs.search.brave.com/G1uI9GrtnOZ3nwxfoKluaqzoD12CikdLe1aalSMBNwA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE3/OTc4MDg5NS92ZWN0/b3IvcGxhY2Vob2xk/ZXItZmxhdC1zeW1i/b2wtb3ItbG9jYXRp/b24tdmVjdG9yLWlj/b24uanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPXVrWFhMOUZ0/bE5IN3ZiS1UxYnQ4/NWtVYl9yR1VsaldV/dm16LXFyWnBBUkU9" 
              alt="Company Logo" 
              className="h-10 w-10 rounded-full object-cover"
            />
          </div>
        </div>

        {/* Right Section - Notifications, Messages, Profile */}
        <div className="flex items-center space-x-4">
          {/* Notification Button */}
          <button className="p-2 hover:bg-gray-700 rounded-md transition-colors">
            <Bell className="h-5 w-5 text-white" />
          </button>

          {/* Messages Button */}
          <button className="p-2 hover:bg-gray-700 rounded-md transition-colors">
            <MessageSquare className="h-5 w-5 text-white" />
          </button>

          {/* Profile Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-2 p-1 hover:bg-gray-700 rounded-md transition-colors"
            >
              <div className="h-9 w-9 bg-gray-700 rounded-full flex items-center justify-center">
                <User className="h-6 w-6 text-white" />
              </div>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-gray-800 border border-gray-700 rounded-lg shadow-lg py-1">
                <button 
                  onClick={() => {
                    setIsDropdownOpen(false);
                    navigate('/profile'); // Navigate to Profile page
                  }}
                  className="w-full px-4 py-2 text-left hover:bg-gray-700 flex items-center space-x-2 text-white"
                >
                  <UserCircle className="h-5 w-5 mr-2" />
                  Profile
                </button>
                <div className="border-t border-gray-700 my-1"></div>
                <button 
                  onClick={() => {
                    setIsDropdownOpen(false);
                    navigate('/logout'); // Navigate to Logout Page
                  }}
                  className="w-full px-4 py-2 text-left hover:bg-gray-700 flex items-center space-x-2 text-red-400 hover:text-red-300"
                >
                  <LogOut className="h-5 w-5 mr-2" />
                  Logout
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
