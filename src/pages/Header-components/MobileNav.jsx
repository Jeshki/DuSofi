// src/pages/Header-components/MobileNav.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";

export default function MobileNav({ isOpen, setIsOpen, darkMode, setDarkMode }) {
  const activeClassName = "text-rose-900 dark:text-rose-700";
  const inactiveClassName = "hover:text-rose-900 dark:hover:text-rose-700 transition-colors";
  const closeMenu = () => setIsOpen(false);

  return (
    <div id="mobile-menu" className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out transform ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
      <ul className="flex flex-col gap-4 px-6 pb-6 pt-2 text-lg font-medium uppercase tracking-wide text-gray-700 dark:text-gray-300" style={{ fontFamily: "'Cinzel', serif" }}>
        <li><NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? activeClassName : inactiveClassName} end>Home</NavLink></li>
        <li><NavLink to="/philosophers" onClick={closeMenu} className={({ isActive }) => isActive ? activeClassName : inactiveClassName}>Philosophers</NavLink></li>
        <li><NavLink to="/Ideologies" onClick={closeMenu} className={({ isActive }) => isActive ? activeClassName : inactiveClassName}>Ideologies</NavLink></li>
        <li><NavLink to="/Quotes" onClick={closeMenu} className={({ isActive }) => isActive ? activeClassName : inactiveClassName}>Quotes</NavLink></li>
        <li><NavLink to="/about" onClick={closeMenu} className={({ isActive }) => isActive ? activeClassName : inactiveClassName}>About</NavLink></li>
        <li className="mt-2">
          <button onClick={() => { setDarkMode(!darkMode); closeMenu(); }} className="w-12 h-6 rounded-full flex items-center px-1 transition-all duration-300 bg-zinc-300 dark:bg-zinc-700" aria-label="Toggle dark mode">
            <div className={`transform transition-transform duration-300 ${darkMode ? "translate-x-6" : "translate-x-0"}`}>
              {darkMode ? <BsSunFill className="text-white" /> : <BsMoonStarsFill className="text-gray-800" />}
            </div>
          </button>
        </li>
      </ul>
    </div>
  );
}