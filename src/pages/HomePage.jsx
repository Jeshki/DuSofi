// src/pages/HomePage.jsx
import React from 'react';
import HeroSection from "./HeroSection.jsx"; // Hero sekcijos komponentas
import IntroSection from "./IntroSection.jsx"; // Įžanginės sekcijos komponentas
import Filters from '../Filters.jsx';         // Filtrų komponentas
import PhilosopherCard from '../PhilosopherCard.jsx'; // Filosofo kortelės komponentas

// Pagrindinio puslapio komponentas.
// Priima filtrų būsenas ir funkcijas, bei handleCardClick funkciją modalui.
export default function HomePage({
  filteredPhilosophers,
  handleCardClick, // Prop'sas modaliniam langui atidaryti paspaudus kortelę
  selectedGroup,
  setSelectedGroup,
  selectedRegion,
  setSelectedRegion,
  sortBy,
  setSortBy,
  selectedChronologicalOrder, // Svarbu: užtikrinkite, kad šis prop'as yra priimamas
  setSelectedChronologicalOrder // Svarbu: užtikrinkite, kad šis prop'as yra priimamas
}) {
  return (
    <>
      {/* Hero ir Intro sekcijos */}
      <HeroSection />
      <IntroSection />

      {/* Filtrų sekcija */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-8">
        <Filters
          selectedGroup={selectedGroup}
          setSelectedGroup={setSelectedGroup}
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
          sortBy={sortBy}
          setSortBy={setSortBy}
          selectedChronologicalOrder={selectedChronologicalOrder}
          setSelectedChronologicalOrder={setSelectedChronologicalOrder}
        />
      </section>

      {/* Filosofų kortelių sąrašo sekcija */}
      <section id="philosophers" className="max-w-7xl mx-auto px-4 sm:px-6 mt-12">
        <h2 className="text-3xl font-bold mb-8 text-center uppercase font-serif text-gray-800 dark:text-gray-200">
          Philosophers
        </h2>
        {/* Tikrina, ar yra filtruotų filosofų, ir atvaizduoja juos arba pranešimą */}
        {filteredPhilosophers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Atvaizduoja kiekvieną filosofą kaip PhilosopherCard komponentą */}
            {filteredPhilosophers.map((p) => (
              <PhilosopherCard
                key={p.id}
                philosopher={p}
                onClick={handleCardClick} // Perduoda funkciją, kuri atidaro modalinį langą
                // linkToDetail={false} // Nurodo, kad kortelė neturi būti tiesioginė nuoroda
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400 text-lg mt-8">
            No philosophers found matching your criteria.
          </p>
        )}
      </section>
    </>
  );
}