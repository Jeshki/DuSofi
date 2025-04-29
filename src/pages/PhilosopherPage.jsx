import React, { useState } from 'react'; // Importuojame useState
import { useParams } from "react-router-dom";
import { philosophers } from "../data"; // Importuojame filosofų duomenis

export default function PhilosopherPage() {
  const { id } = useParams(); // Gauname :id parametrą iš URL
  // State kintamasis aktyviam turiniui sekti (pagal nutylėjimą - biografija)
  const [activeTab, setActiveTab] = useState('biography');

  // Ieškome filosofo pagal ID.
  // useParams grąžina string'ą, todėl konvertuojame id į skaičių palyginimui.
  // Naudojame '===' griežtam palyginimui, bet prieš tai konvertuojame gautą id.
  const philosopher = philosophers.find(p => p.id === parseInt(id, 10));

  // Jei filosofas nerastas pagal ID, rodomas pranešimas
  if (!philosopher) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-12 text-center text-xl text-gray-600 dark:text-gray-400">
        Philosopher not found.
      </div>
    );
  }

  // Jei filosofas rastas, atvaizduojame jo informaciją
  return (
    <section className="max-w-3xl mx-auto px-6 py-12">
      {/* Vardas ir gyvenimo metai */}
      <h2 className="text-4xl font-bold mb-2 text-center text-gray-900 dark:text-gray-100">{philosopher.name}</h2>
      <p className="text-lg text-gray-500 dark:text-gray-400 mb-6 text-center">{philosopher.years}</p>

      {/* Paveikslėlis */}
      <div className="w-full flex justify-center mb-8">
        <img
          src={philosopher.img} // Kelias iki paveikslėlio
          alt={philosopher.name} // Alternatyvus tekstas
          className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[512px] lg:h-[512px] object-cover rounded-xl shadow-lg border border-gray-200 dark:border-gray-700" // Stiliai
          loading="lazy" // Įkėlimo optimizavimas
        />
      </div>

      {/* Mygtukai turinio pasirinkimui */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8">
        {/* Mygtukas Biografijai */}
        {(philosopher.biography || philosopher.bio || philosopher.about) && ( // Patikrinta, ar yra bent vienas iš šių laukų
          <button
            onClick={() => setActiveTab('biography')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'biography' ? 'bg-indigo-600 text-white shadow-md' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            Biography
          </button>
        )}
        {/* Mygtukas Trumpai Istorijai */}
        {philosopher.shortStory && ( // Rodyti mygtuką tik jei yra istorijos duomenų
          <button
            onClick={() => setActiveTab('shortStory')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'shortStory' ? 'bg-indigo-600 text-white shadow-md' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            Short Story
          </button>
        )}
        {/* Mygtukas Citatoms */}
        {philosopher.quotes && philosopher.quotes.length > 0 && ( // Rodyti mygtuką tik jei yra citatų
          <button
            onClick={() => setActiveTab('quotes')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'quotes' ? 'bg-indigo-600 text-white shadow-md' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            Quotes
          </button>
        )}
      </div>

      {/* Turinys pagal aktyvų mygtuką */}
      <div className="text-lg leading-relaxed text-gray-800 dark:text-gray-300 space-y-4 prose dark:prose-invert max-w-none">
        {/* Rodo Biografiją */}
        {activeTab === 'biography' && (philosopher.biography || philosopher.bio || philosopher.about || "No detailed biography available.").split('\n').map((paragraph, index) => (
          // Tikriname ar paragrafas nėra tuščias prieš jį rodant
          paragraph.trim() && <p key={index}>{paragraph.trim()}</p>
        ))}

        {/* Rodo Trumpą Istoriją */}
        {activeTab === 'shortStory' && philosopher.shortStory && (
          philosopher.shortStory.split('\n').map((paragraph, index) => (
            paragraph.trim() && <p key={index}>{paragraph.trim()}</p>
          ))
        )}

        {/* Rodo Citatas */}
        {activeTab === 'quotes' && philosopher.quotes && philosopher.quotes.length > 0 && (
          <ul className="list-disc pl-5 space-y-2">
            {philosopher.quotes.map((quote, index) => (
              <li key={index} className="italic">"{quote}"</li>
            ))}
          </ul>
        )}

        {/* Pranešimas, jei pasirinktas tab'as neturi turinio */}
        {activeTab === 'biography' && !(philosopher.biography || philosopher.bio || philosopher.about) && <p>No biography available.</p>}
        {activeTab === 'shortStory' && !philosopher.shortStory && <p>No short story available.</p>}
        {activeTab === 'quotes' && (!philosopher.quotes || philosopher.quotes.length === 0) && <p>No quotes available.</p>}
      </div>
    </section>
  );
}