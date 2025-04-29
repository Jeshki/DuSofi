import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";

export default function MobileNav({ isOpen, setIsOpen, darkMode, setDarkMode }) {
  const activeClassName = "text-indigo-600 dark:text-indigo-400";
  const inactiveClassName = "hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors";

  const closeMenu = () => setIsOpen(false);

  return (
    // Pridedame id="mobile-menu" čia
    <div
      id="mobile-menu" // ID susiejimui su aria-controls
      className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out transform ${
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      }`}
      // Galima pridėti role="navigation" ar pan., jei reikia
    >
      <ul
        className="flex flex-col gap-4 px-6 pb-6 pt-2 text-lg font-medium uppercase tracking-wide text-gray-700 dark:text-gray-300"
        style={{ fontFamily: "'Cinzel', serif" }}
      >
        {/* Nuorodos lieka tos pačios */}
        <li>
          <NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? activeClassName : inactiveClassName}>
            Philosophers
          </NavLink>
        </li>
        <li>
          <NavLink to="/biographies" onClick={closeMenu} className={({ isActive }) => isActive ? activeClassName : inactiveClassName}>
            Biographies
          </NavLink>
        </li>
        <li>
          <NavLink to="/" onClick={() => {
          closeMenu();
          const introSection = document.getElementById('intro');
          if (introSection) {
            introSection.scrollIntoView({ behavior: 'smooth' });
          }
        }} className={({ isActive }) => isActive ? activeClassName : inactiveClassName}>
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => isActive ? activeClassName : inactiveClassName}>
            Contact
          </NavLink>
        </li>
        {/* Tamsaus režimo perjungiklis lieka tas pats */}
        <li className="mt-2">
          <button
            onClick={() => {
              setDarkMode(!darkMode);
              closeMenu();
            }}
            className="w-12 h-6 rounded-full flex items-center px-1 transition-all duration-300 bg-zinc-300 dark:bg-zinc-700"
            aria-label="Toggle dark mode"
          >
            <div
              className={`transform transition-transform duration-300 ${
                darkMode ? "translate-x-6" : "translate-x-0"
              }`}
            >
              {darkMode ? (
                <BsSunFill className="text-white" />
              ) : (
                <BsMoonStarsFill className="text-gray-800" />
              )}
            </div>
          </button>
        </li>
      </ul>
    </div>
  );
}