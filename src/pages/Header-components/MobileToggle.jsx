// src/pages/Header-components/MobileToggle.jsx
import React from "react";
import { HiMenu, HiX } from "react-icons/hi"; // Importuojamos meniu ir uždarymo ikonos

// Mobiliosios navigacijos perjungimo mygtukas.
export default function MobileToggle({ isOpen, setIsOpen, darkMode }) {
  // Nustato ikonos spalvą priklausomai nuo tamsiojo režimo būsenos.
  const iconColor = darkMode ? "text-gray-300" : "text-gray-700";

  return (
    // Mygtukas, kuris perjungia mobiliojo meniu būseną.
    // md:hidden klasė užtikrina, kad mygtukas matomas tik mažuose ekranuose.
    <button
      onClick={() => setIsOpen(!isOpen)} // Keičia mobiliojo meniu būseną (atidarytas/uždarytas)
      className={`md:hidden text-2xl p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-800 ${iconColor} hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors`}
      aria-label={isOpen ? "Close menu" : "Open menu"} // Nurodo mygtuko paskirtį prieinamumui
      aria-expanded={isOpen} // Nurodo, ar meniu yra išskleistas
      aria-controls="mobile-menu" // Nurodo, kurį elementą valdo
    >
      {/* Sąlyginai atvaizduoja uždarymo (X) arba meniu ikoną, priklausomai nuo 'isOpen' būsenos. */}
      {isOpen ? <HiX /> : <HiMenu />}
    </button>
  );
}