// src/pages/Header-components/MobileToggle.jsx
import React from "react";
import { HiMenu, HiX } from "react-icons/hi"; 


export default function MobileToggle({ isOpen, setIsOpen, darkMode }) {
 
  const iconColor = darkMode ? "text-gray-300" : "text-gray-700";

  return (
    <button
      onClick={() => setIsOpen(!isOpen)} 
     
      className={`md:hidden text-2xl p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-800 ${iconColor} hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors`}

      aria-label={isOpen ? "Close menu" : "Open menu"} 
      aria-expanded={isOpen}
      aria-controls="mobile-menu" 
    >
     
      {isOpen ? <HiX /> : <HiMenu />}
    </button>
  );
}