import React from "react";
// Link importas gali likti, jei manote, kad ateityje gali prireikti nuorodų
import { Link } from "react-router-dom";

// Atnaujinti stiliai: w-full užtikrina, kad mygtukas užims visą tinklelio langelį
const buttonStyle = "w-full text-center px-3 py-1.5 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-stone-950 transition-colors duration-200 text-xs sm:text-sm font-medium min-w-[60px]";
const primaryButtonStyle = `${buttonStyle} bg-black text-white dark:bg-white dark:text-black hover:bg-gray-700 dark:hover:bg-gray-300 focus:ring-black dark:focus:ring-white`;
const secondaryButtonStyle = `${buttonStyle} bg-white text-black border border-black dark:bg-stone-800 dark:text-white dark:border-stone-600 hover:bg-gray-200 dark:hover:bg-stone-700 focus:ring-gray-500 dark:focus:ring-gray-400`;

export default function PhilosopherCard({ philosopher, onClick }) {
  // Apsauga, jei philosopher objektas neperduotas
  if (!philosopher) return null;

  return (
    <div
      className="bg-gray-100 dark:bg-stone-950 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 group border border-gray-300 dark:border-stone-700 flex flex-col"
    >
      {/* Image container */}
      <div className="w-full aspect-[4/3] bg-white dark:bg-zinc-900 flex items-center justify-center overflow-hidden border-b border-gray-200 dark:border-stone-800">
        <img
          src={philosopher.img}
          className="w-full h-full object-contain p-2 transition-transform duration-300 group-hover:scale-105"
          alt={philosopher.name}
          loading="lazy"
        />
      </div>

      {/* Content container */}
      <div className="px-4 sm:px-5 pb-4 pt-3 text-center flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1 truncate" title={philosopher.name}>
          {philosopher.name}
        </h3>
        <p className="text-xs text-gray-500 dark:text-gray-400">{philosopher.years}</p>

        {/* Quote */}
        <p className="mt-2 italic text-sm text-gray-600 dark:text-gray-300 text-left relative flex-grow min-h-[3em]"> {/* min-h užtikrina minimalų aukštį citatai */}
          {philosopher.quote ? `“${philosopher.quote}”` : <span className="text-gray-400 dark:text-gray-500">(No quote available)</span>}
        </p>

        {/* Button container - naudojamas 2x2 tinklelis */}
        <div className="grid grid-cols-2 gap-2 mt-4 mt-auto">
          {/* Mygtukas "About" (rodo bio/about modale) */}
          {(philosopher.bio || philosopher.about) && (
            <button
              onClick={() => onClick(philosopher, 'about')} // Kviečia modalą su 'about' turiniu
              className={primaryButtonStyle} // Pagrindinis mygtukas
              aria-label={`About ${philosopher.name}`}
              title={`About ${philosopher.name}`}
            >
              About
            </button>
          )}
          {/* Mygtukas "Biography" (rodo biography modale) */}
          {philosopher.biography && (
            <button
              onClick={() => onClick(philosopher, 'biography')} // Kviečia modalą su 'biography' turiniu
              className={secondaryButtonStyle} // Antrinis mygtukas
              aria-label={`Biography of ${philosopher.name}`}
              title={`Show biography of ${philosopher.name}`}
            >
              Biography
            </button>
          )}
          {/* Mygtukas "Short Story" (rodo shortStory modale) */}
          {philosopher.shortStory && (
            <button
              onClick={() => onClick(philosopher, 'shortStory')} // Kviečia modalą su 'shortStory' turiniu
              className={secondaryButtonStyle} // Antrinis mygtukas
              aria-label={`Short Story of ${philosopher.name}`}
              title={`Show short story of ${philosopher.name}`}
            >
              Short Story
            </button>
          )}
          {/* Mygtukas "Quotes" (rodo quotes modale) */}
          {philosopher.quotes && philosopher.quotes.length > 0 && (
            <button
              onClick={() => onClick(philosopher, 'quotes')} // Kviečia modalą su 'quotes' turiniu
              className={secondaryButtonStyle} // Antrinis mygtukas
              aria-label={`Quotes by ${philosopher.name}`}
              title={`Show quotes by ${philosopher.name}`}
            >
              Quotes
            </button>
          )}

          {/* Tarpai vietoj mygtukų, jei duomenų nėra, kad išlaikytų tinklelį (nebūtina, bet galima) */}
          {/* Pvz., jei nėra 'bio'/'about', bet yra kiti, galima įdėti tuščią div */}
          {/* Šiuo metu palikta, kad mygtukai tiesiog nebūtų rodomi */}

        </div>
      </div>
    </div>
  );
}