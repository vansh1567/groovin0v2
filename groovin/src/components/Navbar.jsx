import React from 'react';
import { Bell, MessageSquare, User, Menu } from 'lucide-react';

const Navbar = ({ onMenuClick }) => {
  return (
    <nav className="border-b bg-white px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <button 
            onClick={onMenuClick}
            className="p-2 hover:bg-gray-100 rounded-lg lg:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>
          <span className="text-xl font-semibold ml-2"></span>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <MessageSquare className="h-5 w-5 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Bell className="h-5 w-5 text-gray-600" />
          </button>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              <User className="h-5 w-5 text-gray-600" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;