// src/pages/IntroSection.jsx
import React from "react";
import { FaQuoteLeft, FaFeatherAlt, FaRegLightbulb } from "react-icons/fa";

export default function IntroSection() {
  return (
    // Using very-dark-gray for section background
    <section className="bg-white dark:bg-very-dark-gray text-gray-800 dark:text-gray-300 py-16 px-6 sm:px-12 lg:px-24 transition-colors duration-300 uppercase"> {/* Adjusted text colors */}
      <h2 className="text-4xl sm:text-4xl font-bold mb-8 text-center font-serif"> Idea of this website
        </h2>
      <div className="max-w-4xl mx-auto space-y-8 text-lg leading-relaxed font-serif">
        <p className="flex items-start gap-4"> {/* Increased gap */}
          {/* Icon color updates for dark mode */}
          <FaQuoteLeft className="mt-1 text-rose-900 dark:text-rose-700 text-xl shrink-0" /> {/* Changed icon color */}
          This website was created from a desire to share timeless wisdom — words that inspire, encourage reflection, and offer new perspectives.
        </p>
        <p className="flex items-start gap-4">
          <FaFeatherAlt className="mt-1 text-rose-900 dark:text-rose-700 text-xl shrink-0" /> {/* Changed icon color */}
          At the heart of this journey is Socrates, one of history’s greatest philosophers, whose famous quote, “I know that I know nothing,” captures the essence of humility and lifelong learning.
        </p>
        <p className="flex items-start gap-4">
          <FaRegLightbulb className="mt-1 text-rose-900 dark:text-rose-700 text-xl shrink-0" /> {/* Changed icon color */}
          This platform brings together the voices of influential thinkers, past and present, offering a space where their insights can spark inspiration and guide us forward.
        </p>
      </div>
    </section>
  );
}