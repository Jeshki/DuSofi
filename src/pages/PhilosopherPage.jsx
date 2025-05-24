// src/pages/PhilosopherPage.jsx
import React, { useState } from 'react'; // Importuoja useState hook'ą
import { useParams } from "react-router-dom"; // Importuoja useParams hook'ą, skirtą gauti URL parametrus
import { philosophers } from "../data"; // Importuoja filosofų duomenis iš data.js

// PhilosopherPage komponentas, atvaizduojantis detalų filosofo puslapį.
export default function PhilosopherPage() {
  // Gauna :id parametrą iš URL (pvz., /philosopher/1).
  const { id } = useParams();
  // Būsenos kintamasis, skirtas sekti, kuris turinio skirtukas yra aktyvus (numatytasis - biografija).
  const [activeTab, setActiveTab] = useState('biography');

  // Ieško filosofo duomenų pagal ID. Konvertuoja ID į skaičių palyginimui.
  const philosopher = philosophers.find(p => p.id === parseInt(id, 10));

  // Jei filosofas nerastas pagal ID, rodomas pranešimas.
  if (!philosopher) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-12 text-center text-xl text-gray-600 dark:text-gray-400">
        Philosopher not found.
      </div>
    );
  }

  // Jei filosofas rastas, atvaizduoja jo informaciją.
  return (
    <section className="max-w-3xl mx-auto px-6 py-12">
      {/* Filosofo vardas ir gyvenimo metai. */}
      <h2 className="text-4xl font-bold mb-2 text-center text-gray-900 dark:text-gray-100">{philosopher.name}</h2>
      <p className="text-lg text-gray-500 dark:text-gray-400 mb-6 text-center">{philosopher.years}</p>

      {/* Filosofo paveikslėlis. */}
      <div className="w-full flex justify-center mb-8">
        <img
          src={philosopher.img} // Paveikslėlio šaltinis
          alt={philosopher.name} // Alternatyvus tekstas paveikslėliui
          className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[512px] lg:h-[512px] object-cover rounded-xl shadow-lg border border-gray-200 dark:border-gray-700" // Stiliai
          loading="lazy" // Įkėlimo optimizavimas
        />
      </div>

      {/* Mygtukai, skirti perjungti tarp biografijos, trumpos istorijos ir citatų. */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8">
        {/* Biografijos mygtukas. */}
        {(philosopher.biography || philosopher.bio || philosopher.about) && ( // Rodo mygtuką, jei yra biografijos duomenų
          <button
            onClick={() => setActiveTab('biography')} // Nustato aktyvų skirtuką į 'biography'
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'biography' ? 'bg-rose-900 text-white shadow-md' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            Biography
          </button>
        )}
        {/* Trumpos istorijos mygtukas. */}
        {philosopher.shortStory && ( // Rodo mygtuką, jei yra trumpos istorijos duomenų
          <button
            onClick={() => setActiveTab('shortStory')} // Nustato aktyvų skirtuką į 'shortStory'
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'shortStory' ? 'bg-rose-900 text-white shadow-md' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            Short Story
          </button>
        )}
        {/* Citatų mygtukas. */}
        {philosopher.quotes && philosopher.quotes.length > 0 && ( // Rodo mygtuką, jei yra citatų
          <button
            onClick={() => setActiveTab('quotes')} // Nustato aktyvų skirtuką į 'quotes'
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'quotes' ? 'bg-rose-900 text-white shadow-md' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            Quotes
          </button>
        )}
      </div>

      {/* Dinaminis turinio rodymas pagal aktyvų skirtuką. */}
      <div className="text-lg leading-relaxed text-gray-800 dark:text-gray-300 space-y-4 prose dark:prose-invert max-w-none">
        {/* Biografijos turinys. */}
        {activeTab === 'biography' && (philosopher.biography || philosopher.bio || philosopher.about || "No detailed biography available.").split('\n').map((paragraph, index) => (
          // Rodo tik netuščius paragrafus.
          paragraph.trim() && <p key={index}>{paragraph.trim()}</p>
        ))}

        {/* Trumpos istorijos turinys. */}
        {activeTab === 'shortStory' && philosopher.shortStory && (
          philosopher.shortStory.split('\n').map((paragraph, index) => (
            paragraph.trim() && <p key={index}>{paragraph.trim()}</p>
          ))
        )}

        {/* Citatų sąrašas. */}
        {activeTab === 'quotes' && philosopher.quotes && philosopher.quotes.length > 0 && (
          <ul className="list-disc pl-5 space-y-2">
            {philosopher.quotes.map((quote, index) => (
              <li key={index} className="">"{quote}"</li>
            ))}
          </ul>
        )}

        {/* Pranešimai, jei pasirinktam skirtukui trūksta turinio. */}
        {activeTab === 'biography' && !(philosopher.biography || philosopher.bio || philosopher.about) && <p>No biography available.</p>}
        {activeTab === 'shortStory' && !philosopher.shortStory && <p>No short story available.</p>}
        {activeTab === 'quotes' && (!philosopher.quotes || philosopher.quotes.length === 0) && <p>No quotes available.</p>}
      </div>
    </section>
  );
}