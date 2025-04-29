import React from "react";
import { HiMenu, HiX } from "react-icons/hi"; // Importuojamos ikonos

// darkMode prop'as gali būti perduotas, jei reikia keisti ikonos spalvą
export default function MobileToggle({ isOpen, setIsOpen, darkMode }) {
  // Nustatome ikonos spalvą pagal darkMode būseną
  const iconColor = darkMode ? "text-gray-300" : "text-gray-700";

  return (
    <button
      onClick={() => setIsOpen(!isOpen)} // Keičia meniu būseną
      // Stiliai mygtukui: rodomas tik mažuose ekranuose, teksto dydis, padding, apvalinimas, fokusavimo stiliai, ikonos spalva, hover efektai
      className={`md:hidden text-2xl p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 ${iconColor} hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors`}
      // Aria atributai prieinamumui
      aria-label={isOpen ? "Close menu" : "Open menu"} // Nurodo mygtuko paskirtį
      aria-expanded={isOpen} // Nurodo, ar meniu išskleistas
      aria-controls="mobile-menu" // Nurodo, kurį elementą valdo (reikėtų MobileNav pridėti id="mobile-menu")
    >
      {/* Sąlyginai rodoma X arba Meniu ikona */}
      {isOpen ? <HiX /> : <HiMenu />}
    </button>
  );
}