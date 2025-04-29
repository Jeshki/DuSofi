import React from "react";
import { Link, NavLink } from "react-router-dom"; // Use NavLink for active state
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";

export default function DesktopNav({ darkMode, setDarkMode }) {
  const activeClassName = "text-indigo-600 dark:text-indigo-400"; // Style for active link
  const inactiveClassName = "hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors";

  return (
    <ul
      className="hidden md:flex gap-6 items-center text-lg font-medium uppercase tracking-wide text-gray-700 dark:text-gray-300" // Adjusted text colors
      style={{ fontFamily: "'Cinzel', serif" }}
    >
      <li><NavLink to="/" className={({ isActive }) => isActive ? activeClassName : inactiveClassName}>Philosophers</NavLink></li>
      <li><NavLink to="/biographies" className={({ isActive }) => isActive ? activeClassName : inactiveClassName}>Biographies</NavLink></li>
      <li><NavLink to="/"  className={({ isActive }) => isActive ? activeClassName : inactiveClassName}  onClick={() => {
          const introSection = document.getElementById('intro');
          if (introSection) {
            introSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}>About</NavLink></li>
      <li><NavLink to="/contact" className={({ isActive }) => isActive ? activeClassName : inactiveClassName}>Contact</NavLink></li>
      <li>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="w-12 h-6 rounded-full flex items-center px-1 transition-all duration-300 bg-zinc-300 dark:bg-zinc-700"
          aria-label="Toggle dark mode"
        >
          <div
            className={`transform transition-transform duration-300 ${
              darkMode ? "translate-x-6" : "translate-x-0"
            }`}
          >
            {darkMode ? (
              <BsSunFill className="text-white" /> // Sun icon is white in dark mode
            ) : (
              <BsMoonStarsFill className="text-gray-800" /> // Moon icon is dark gray in light mode
            )}
          </div>
        </button>
      </li>
    </ul>
  );
}