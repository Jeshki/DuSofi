// src/pages/PhilosophersListPage.jsx
import React from 'react';
import Filters from '../Filters.jsx'; 
import PhilosopherCard from '../PhilosopherCard.jsx'; 


export default function PhilosophersListPage({
  filteredPhilosophers,
  
  selectedGroup,
  setSelectedGroup,
  selectedRegion,
  setSelectedRegion,
  sortBy,
  setSortBy,
  selectedChronologicalOrder,
  setSelectedChronologicalOrder
}) {
  return (
    <>
      {/* Filtrų sekcija */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-8">
         <h1 className="text-4xl font-bold mb-8 text-center uppercase text-gray-900 dark:text-gray-100">
           Explore Philosophers
         </h1>
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
      <section id="philosophers-list" className="max-w-7xl mx-auto px-4 sm:px-6 mt-12">
        {filteredPhilosophers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Naudojame PhilosopherCard su linkToDetail={true} */}
            {filteredPhilosophers.map((p) => (
              <PhilosopherCard
                key={p.id}
                philosopher={p}
                // onClick - neperduodame
                linkToDetail={true} // Nurodome, kad kortelė yra nuoroda
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