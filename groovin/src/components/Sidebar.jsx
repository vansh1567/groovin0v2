import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  UserCog,
  Building2,
  Zap,
  MessageCircle,
  Menu as MenuIcon,
  ChevronLeft,
  ChevronRight,
  LogOut,
  PartyPopper,
  X
} from 'lucide-react';

const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);
  const [activeItem, setActiveItem] = useState('Dashboard');
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { title: "Properties", icon: <Building2 className="h-5 w-5" />, path: "/properties" },
    { title: "Dashboard", icon: <LayoutDashboard className="h-5 w-5" />, path: "/dashboard" },
    { title: "Administrator", icon: <Users className="h-5 w-5" />, path: "/administrator" },
    { title: "Assign Role", icon: <UserCog className="h-5 w-5" />, path: "/admin-role" },
    { title: "Admin Manager", icon: <Users className="h-5 w-5" />, path: "/admin-manager" },
    { title: "Deal", icon: <Building2 className="h-5 w-5" />, path: "/deal" },
    { title: "Flash Deals", icon: <Zap className="h-5 w-5" />, path: "/flash-deals" },
    { title: "Enquiry", icon: <MessageCircle className="h-5 w-5" />, path: "/enquiry" },
    { title: "Menu Management", icon: <MenuIcon className="h-5 w-5" />, path: "/menu-management" },
    { title: "Party and Events", icon: <PartyPopper className="h-5 w-5" />, path: "/party-events" },
  ];

  const handleLogout = () => {
    // Add logout logic here
    console.log('Logging out...');
    setShowLogoutDialog(false);
    // navigate('/login');
  };

  return (
    <>
      <aside className={`h-screen flex flex-col relative bg-white border-r shadow-sm transition-all duration-300 ${
        expanded ? "w-64" : "w-16"} lg:relative fixed z-20`}>
        {/* Collapse Button */}
        <button 
          onClick={() => setExpanded(curr => !curr)}
          className="absolute -right-3 top-10 p-1.5 rounded-full bg-white border shadow-md hover:bg-gray-50 transition-all duration-200"
        >
          {expanded ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>

        {/* Logo Area */}
        <div className="flex items-center justify-center p-4 ">
          {expanded ? (
           <img src="" alt="" />
          ) : (
            <span></span>
          )}
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 py-4 px-2 space-y-1 overflow-y-auto">
        <div className="flex items-center justify-center p-4  bg-gradient-to-r from-yellow-400 to-yellow-800 bg-clip-text text-transparent">
          {expanded ? (
            <span className="text-2xl font-bold">
              Groovin
            </span>
          ) : (
            <span className="text-2xl font-bold"> G </span>
          )}
        </div>  
          {menuItems.map((item) => (
            <div key={item.title}>
              <button
                onClick={() => {
                  setActiveItem(item.title);
                  if (item.submenu) {
                    setOpenSubmenu(openSubmenu === item.title ? null : item.title);
                  }
                  navigate(item.path);
                }}
                className={`flex items-center w-full p-3 rounded-lg transition-all duration-200
                  hover:bg-gray-100 active:bg-gray-200
                  ${activeItem === item.title ? "bg-blue-50 text-blue-600" : "text-gray-700"}
                  ${!expanded && "justify-center"}`}
              >
                <div className={`flex items-center gap-4 ${!expanded && "justify-center"}`}>
                  {item.icon}
                  {expanded && <span className="text-sm font-medium">{item.title}</span>}
                </div>
              </button>

              {/* Submenu */}
              {item.submenu && expanded && openSubmenu === item.title && (
                <div className="ml-6 mt-1 space-y-1">
                  {item.submenu.map((subItem) => (
                    <button
                      key={subItem.title}
                      className="flex items-center w-full p-2 text-sm text-gray-600 rounded-md hover:bg-gray-100"
                    >
                      {subItem.icon}
                      <span className="ml-3">{subItem.title}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

       
      </aside>

    </>
  );
};

export default Sidebar;