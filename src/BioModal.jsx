import React from "react";

// Pridedame contentType prop'są
export default function BioModal({ philosopher, contentType, onClose }) {
  // Apsauga, jei philosopher objektas būtų null arba undefined
  if (!philosopher) {
    return null;
  }

  // Funkcija, kurią kviečia paspaudus foną (už modalinio lango)
  const handleBackdropClick = (e) => {
    // Uždarome tik jei paspausta tiesiogiai ant fono (o ne ant modalinio lango turinio)
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 backdrop-blur-sm animate-fadeIn" // Pridėtas fade-in efektas
      onClick={handleBackdropClick} // Uždaroma paspaudus fone
      role="dialog" // Prieinamumo atributas
      aria-modal="true" // Prieinamumo atributas
      aria-labelledby="modal-title" // Susiejame su antrašte
    >
      {/* Stop propagation, kad paspaudus ant modal'o turinio jis neužsidarytų */}
      <div
        className="bg-white dark:bg-very-dark-gray text-gray-900 dark:text-gray-100 rounded-xl shadow-2xl max-w-2xl w-full max-h-[85vh] p-6 md:p-8 relative overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-700 dark:scrollbar-thumb-rounded-full dark:scrollbar-track-rounded-full" // Pridėtos scrollbar stiliaus klasės
        onClick={(e) => e.stopPropagation()}
      >
        {/* Uždarymo mygtukas */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 text-3xl leading-none transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-very-dark-gray rounded-full w-8 h-8 flex items-center justify-center" // Stiliai mygtukui
          aria-label="Close modal" // Pridėta aria-label
        >
          &times; {/* Naudojamas times simbolis */}
        </button>

        {/* Vardas */}
        <h3 id="modal-title" className="text-3xl font-bold mb-1 text-gray-800 dark:text-gray-50 pr-8"> {/* Pridėta ID prieinamumui */}
          {philosopher.name}
        </h3>
        {/* Antraštė pagal turinio tipą */}
        <p className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-4 capitalize">
          {contentType === 'about' ? 'About' : contentType.replace(/([A-Z])/g, ' $1').trim()} {/* Pakeista, kad rodytų pvz., 'Short Story' */}
        </p>
        {/* Metai */}
        {philosopher.years && (
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {philosopher.years}
          </p>
        )}

        {/* Turinys pagal contentType */}
        <div className="prose dark:prose-invert max-w-none mt-4 text-base leading-relaxed space-y-4">
          {/* Rodo "About" (bio arba about laukus) */}
          {contentType === 'about' && (philosopher.bio || philosopher.about || "No information available.").split('\n').map((paragraph, index) => (
            paragraph.trim() && <p key={index}>{paragraph.trim()}</p>
          ))}
          {/* Rodo "Biography" */}
          {contentType === 'biography' && (philosopher.biography || "No detailed biography available.").split('\n').map((paragraph, index) => (
            paragraph.trim() && <p key={index}>{paragraph.trim()}</p>
          ))}
          {/* Rodo "Short Story" */}
          {contentType === 'shortStory' && (philosopher.shortStory || "No short story available.").split('\n').map((paragraph, index) => (
            paragraph.trim() && <p key={index}>{paragraph.trim()}</p>
          ))}
          {/* Rodo "Quotes" */}
          {contentType === 'quotes' && philosopher.quotes && philosopher.quotes.length > 0 && (
            <ul className="list-disc pl-5 space-y-2">
              {philosopher.quotes.map((quote, index) => (
                <li key={index} className="">"{quote}"</li>
              ))}
            </ul>
          )}
          {/* Pranešimas, jei citatų nėra */}
          {contentType === 'quotes' && (!philosopher.quotes || philosopher.quotes.length === 0) && (
            <p>No quotes available.</p>
          )}
        </div>
      </div>
    </div>
  );
}