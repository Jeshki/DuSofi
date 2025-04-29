// src/pages/HeroSection.jsx
import React from "react";
import whiteLogo from "./img/white-logo.svg"; // Ensure path is correct relative to HeroSection.jsx

export default function HeroSection() {
  return (
    // Using very-dark-gray instead of zinc-950
    <section className="bg-very-dark-gray text-white py-6 px-6 sm:px-12 lg:px-20">
      <div className="w-full max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16"> {/* Adjusted max-width and gap */}
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-2 uppercase tracking-wide font-serif"> {/* Changed to h1, added font-serif */}
            Discover Quotes<br />From Philosophy's<br />Influential Figures
          </h1>
          <p className="text-lg text-gray-300">Unlock Wisdom and Inspiration</p>
        </div>
        <img
  src={whiteLogo}
  alt="2Philosophers Logo"
  // Example: 12rem default, 20rem on small/medium, 24rem on large+
  className="w-48 h-48 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-contain"
  loading="lazy"
/>
      </div>
    </section>
  );
}