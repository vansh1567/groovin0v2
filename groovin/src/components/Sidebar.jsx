import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const menuItems = [
    { title: "Properties", path: "/properties" },
    { title: "Dashboard", path: "/dashboard" },
    { title: "Administrator", path: "/administrator" },
    { title: "Assign Role", path: "/admin-role" },
    { title: "Assign Manager", path: "/admin-manager" },
    { title: "Party and Events", path: "/party-events" },
    { title: "Deal", path: "/deal" },
    { title: "Flash Deals", path: "/flash-deals" },
    { title: "Enquiry", path: "/enquiry" },
    { title: "Map", path: "/map" }, 
    { title: "Details", path: "/details" }, 
    { title: "Menu Management", path: "/menu-management" },
    
  ];

  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (mobile) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };
    
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const HamburgerButton = () => (
    <motion.button
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      onClick={() => setIsVisible(true)}
      className="fixed top-4 left-4 z-50 bg-white p-2 rounded-md shadow-md border font-quicksand"
    >
      ☰
    </motion.button>
  );

  const SidebarContent = () => (
    <motion.aside
      initial={{ x: isMobile ? -300 : 0, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: isMobile ? -300 : 0, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      className="h-screen flex flex-col relative border-r shadow-sm fixed top-0 left-0 z-40 w-64 overflow-hidden font-quicksand"
      style={{ backgroundColor: '#2C2C2C' }}
    >
      {isMobile && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 z-50 bg-white p-2 rounded-md shadow-md border"
        >
          ✕
        </motion.button>
      )}

<div className="flex items-center justify-center p-2 mt-8 mb-8">
  <span className="text-2xl font-bold text-white font-quicksand">Groovin</span>
</div>


      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex-1 py-2 px-2 space-y-0.5 overflow-y-auto"
      >
        {menuItems.map((item) => (
          <NavLink
            key={item.title}
            to={item.path}
            className={({ isActive }) =>
              `group relative flex items-center justify-center w-full py-1.5 px-3
              text-gray-500 transition-all duration-300
              hover:text-white text-[15px] font-quicksand
              ${isActive ? "text-yellow-500" : ""}
              `
            }
            onClick={() => {
              if (isMobile) setIsVisible(false);
            }}
          >
            <div className="flex flex-col items-center w-full">
              <span className="font-normal relative">
                {item.title}
                <span className={`
                  absolute bottom-0 left-0 w-0 h-0.5 
                  bg-yellow-500 transition-all duration-300
                  group-hover:w-full
                  ${({ isActive }) => isActive ? "w-full" : ""}
                `} />
              </span>
            </div>
          </NavLink>
        ))}
      </motion.nav>
    </motion.aside>
  );

  return (
    <>
      <AnimatePresence>
        {isMobile && !isVisible && <HamburgerButton />}
        {isVisible && <SidebarContent />}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;