import React from 'react';
import { philosophers } from '../data'; // Importuojami duomenys
import { Link } from 'react-router-dom'; // Importuojamas Link

export default function Biographies() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">
        Philosopher Biographies
      </h2>
      {/* Tinklelis filosofų kortelėms */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Einama per visus filosofus ir kuriama kortelė */}
        {philosophers.map(philosopher => (
          <div key={philosopher.id} className="bg-gray-100 dark:bg-stone-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700 flex flex-col">
            {/* Vardas ir metai */}
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">
              {philosopher.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
              {philosopher.years}
            </p>
            {/* Citata */}
            <p className="text-gray-700 dark:text-gray-400 text-sm italic flex-grow mb-4">
              "{philosopher.quote}"
            </p>
            {/* Nuoroda į pilną biografiją */}
            <Link
              to={`/philosopher/${philosopher.id}`} // Naudojamas ID nuorodoje
              className="inline-block mt-auto bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors text-center" // Pridėtas text-center
              aria-label={`Read more about ${philosopher.name}`} // Geresnis aria-label
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
      {/* Pastaba apačioje */}
      <p className="mt-12 text-center text-gray-500 dark:text-gray-400">
        More detailed biographies are available on the individual philosopher pages.
      </p>
    </section>
  );
}