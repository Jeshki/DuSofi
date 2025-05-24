// src/pages/Footer.jsx
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    // Using very-dark-gray for footer background
    <footer className="bg-gray-100 dark:bg-very-dark-gray text-center p-6 mt-20 border-t border-gray-200 dark:border-gray-700"> {/* Added top border */}
      <p className="mb-4 text-sm text-gray-600 dark:text-gray-400"> {/* Adjusted text size/color */}
         © {new Date().getFullYear()} DuSofijai All rights reserved. 
      </p>
      <div className="flex justify-center gap-6 text-2xl text-gray-500 dark:text-gray-400"> {/* Adjusted icon color */}
        <a href="https://github.com/jeshki" target="_blank" rel="noopener noreferrer" className="hover:text-rose-900 dark:hover:text-rose-700 transition-colors" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/karolis-cibiras" target="_blank" rel="noopener noreferrer" className="hover:text-rose-900 dark:hover:text-rose-700 transition-colors" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="mailto:karoliscibiras@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-rose-900 dark:hover:text-rose-700 transition-colors" aria-label="Email">
          <FaEnvelope />
        </a>
      </div>
    </footer>
  );
}