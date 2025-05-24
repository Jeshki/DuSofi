// src/pages/HomePage.jsx
import React from 'react';
import HeroSection from "./HeroSection.jsx"; 
import IntroSection from "./IntroSection.jsx"; 
import Filters from '../Filters.jsx';         
import PhilosopherCard from '../PhilosopherCard.jsx'; 


export default function HomePage({
  filteredPhilosophers,
  handleCardClick, // Prop'sas modaliniam langui
  selectedGroup,
  setSelectedGroup,
  selectedRegion,
  setSelectedRegion,
  sortBy,
  setSortBy,
  selectedChronologicalOrder,
  setSelectedChronologicalOrde
}) {
  return (
    <>
      {/* Įžanginės sekcijos */}
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

      {/* Filosofų kortelės */}
      <section id="philosophers" className="max-w-7xl mx-auto px-4 sm:px-6 mt-12">
        <h2 className="text-3xl font-bold mb-8 text-center uppercase font-serif text-gray-800 dark:text-gray-200">
          Philosophers
        </h2>
        {filteredPhilosophers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Naudojame PhilosopherCard su onClick modaliniam langui */}
            {filteredPhilosophers.map((p) => (
              <PhilosopherCard
                key={p.id}
                philosopher={p}
                onClick={handleCardClick} 
              
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