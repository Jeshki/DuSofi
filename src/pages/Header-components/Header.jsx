import React, { useState } from "react";
import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import MobileToggle from "./MobileToggle";

export default function Header({ darkMode, setDarkMode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    // Using very-dark-gray with opacity for header background
    <header className="sticky top-0 z-50 bg-gray-100/80 dark:bg-very-dark-gray/80 backdrop-blur-lg shadow-md transition-colors duration-300">
      <div className="flex justify-between items-center px-4 sm:px-6 py-3 max-w-7xl mx-auto"> {/* Adjusted padding */}
        <Logo darkMode={darkMode} /> {/* Pass darkMode to Logo if needed */}
        <DesktopNav darkMode={darkMode} setDarkMode={setDarkMode} />
        <MobileToggle isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} darkMode={darkMode} /> {/* Pass darkMode */}
      </div>
      <MobileNav
        isOpen={isMobileMenuOpen}
        setIsOpen={setIsMobileMenuOpen}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
    </header>
  );
}