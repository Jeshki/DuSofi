// src/App.jsx
import React, { useState, useMemo, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom"; 

// Komponentų importai
import BioModal from "./BioModal.jsx";
import HomePage from "./pages/HomePage.jsx";
import PhilosophersListPage from "./pages/PhilosophersListPage.jsx";
import PhilosopherPage from "./pages/PhilosopherPage.jsx";
import About from "./pages/About.jsx";
import Ideologies from "./pages/Ideologies.jsx";
import Quotes from "./pages/Quotes.jsx";
import Footer from "./pages/Footer.jsx";
import Header from "./pages/Header-components/Header.jsx";

// Duomenų ir Enum importai
import { philosophers } from "./data.js";
import { IdeologicalGroups, ChronologicalOrderEnum } from "./enums.jsx";

// --- Pagalbinės funkcijos (getStartYear, getEndYear) ---
const getStartYear = (yearsString) => {
  if (!yearsString || typeof yearsString !== 'string') return Infinity;
  const str = yearsString.toLowerCase().trim();
  if (str.includes('unknown')) return Infinity;
  if (str.includes('bc') || str.includes('bce')) {
    const matches = str.match(/(\d+)/g);
    return matches ? -parseInt(matches[0], 10) : -9999;
  }
  const centuryMatch = str.match(/(\d+)(st|nd|rd|th)\s+century(\s+bc)?/);
  if (centuryMatch) {
    const century = parseInt(centuryMatch[1], 10);
    const isBC = !!centuryMatch[3];
    return isBC ? -(century * 100) : (century - 1) * 100 + 1;
  }
  const matches = str.match(/(\d{3,4})/g);
  return matches ? parseInt(matches[0], 10) : Infinity;
};

const getEndYear = (yearsString) => {
  if (!yearsString || typeof yearsString !== 'string') return -Infinity;
  const str = yearsString.toLowerCase().trim();
  if (str.includes('unknown')) return -Infinity;
  if (str.includes('bc') || str.includes('bce')) {
    const matches = str.match(/(\d+)/g);
    return matches && matches.length > 1 ? -parseInt(matches[1], 10) : -9999;
  }
  const centuryMatch = str.match(/(\d+)(st|nd|rd|th)\s+century(\s+bc)?/);
  if (centuryMatch) {
    const century = parseInt(centuryMatch[1], 10);
    const isBC = !!centuryMatch[3];
    return isBC ? -((century - 1) * 100 + 1) : century * 100;
  }
  const matches = str.match(/(\d{3,4})/g);
  return matches && matches.length > 1 ? parseInt(matches[1], 10) : matches ? parseInt(matches[0], 10) : -Infinity;
};
// --- Pagalbinių funkcijų pabaiga ---

export default function App() {
  // --- State kintamieji (darkMode, filtrai, modalas) ---
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');
  const [selectedGroup, setSelectedGroup] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [selectedChronologicalOrder, setSelectedChronologicalOrder] = useState('');
  const [modalContent, setModalContent] = useState({ philosopher: null, contentType: null });

  const location = useLocation(); 

  // --- useEffect ir useMemo ---
   useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode); // Nustato tamsųjį režimą
    localStorage.setItem('darkMode', darkMode ? 'true' : 'false'); // Išsaugo tamsiojo režimo būseną
  }, [darkMode]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const groupParam = params.get('group');
    // Nustato filtrus pagal URL parametrus, jei puslapis yra '/philosophers'
    if (location.pathname === '/philosophers' && groupParam) {
      if (IdeologicalGroups[groupParam]) {
        setSelectedGroup(groupParam);
      } else {
        setSelectedGroup('');
      }
      setSelectedRegion('');
      setSelectedChronologicalOrder('');
      setSortBy('default');
    } else if (location.pathname !== '/philosophers') {
    // Išvalo filtrus, jei puslapis nėra '/philosophers'
      setSelectedGroup('');
      setSelectedRegion('');
      setSelectedChronologicalOrder('');
      setSortBy('default');
    }
  }, [location.search, location.pathname]);

  // Apdoroja filosofų duomenis, pridedant pradžios ir pabaigos metus rūšiavimui
  const processedPhilosophers = useMemo(() => {
     return philosophers.map(p => ({
      ...p,
      startYear: getStartYear(p.years),
      endYear: getEndYear(p.years)
    }));
  }, []);

  // Funkcija, atidaranti modalinį langą su filosofo turiniu
  const handleOpenModal = (philosopher, contentType) => {
    setModalContent({ philosopher, contentType });
  };

  // Filtruoja ir rūšiuoja filosofus pagal pasirinktus kriterijus
  const filteredAndSortedPhilosophers = useMemo(() => {
    let result = [...processedPhilosophers];
    // Filtravimas pagal ideologinę grupę
    if (selectedGroup) {
      const groupIdeologies = IdeologicalGroups[selectedGroup];
      if (groupIdeologies && Array.isArray(groupIdeologies)) {
        result = result.filter(p => p.IdeologicalOrder && groupIdeologies.includes(p.IdeologicalOrder));
      }
    }
    // Filtravimas pagal regioną
    if (selectedRegion) {
      result = result.filter(p => p.geographicalOrder === selectedRegion);
    }
    // Filtravimas pagal chronologinę tvarką
    if (selectedChronologicalOrder) {
      result = result.filter(p => p.ChronologicalOrder === selectedChronologicalOrder);
    }
    // Rūšiavimas
    if (sortBy === 'chronological') {
        result.sort((a, b) => a.startYear - b.startYear);
    } else if (sortBy === 'youngest_first') {
        result.sort((a, b) => b.startYear - a.startYear);
    } else if (sortBy === 'newest_by_death') {
        result.sort((a, b) => b.endYear - a.endYear);
    } else {
        result.sort((a, b) => a.name.localeCompare(b.name));
    }
    return result;
  }, [processedPhilosophers, selectedGroup, selectedRegion, sortBy, selectedChronologicalOrder]);
  // --- useEffect ir useMemo pabaiga ---

  return (
    // Pagrindinis aplikacijos konteineris su viso puslapio stiliais
    <div className="min-h-screen bg-white dark:bg-black text-gray-800 dark:text-gray-200 transition-colors duration-300">
      {/* Antraštės komponentas */}
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="pt-4 pb-12">
        {/* Maršrutų konfigūracija */}
        <Routes>
          {/* Pagrindinis puslapis (/) */}
          <Route
            path="/"
            element={<HomePage
              filteredPhilosophers={filteredAndSortedPhilosophers}
              handleCardClick={handleOpenModal} // Perduodama modalinio lango atidarymo funkcija
              selectedGroup={selectedGroup}
              setSelectedGroup={setSelectedGroup}
              selectedRegion={selectedRegion}
              setSelectedRegion={setSelectedRegion}
              sortBy={sortBy}
              setSortBy={setSortBy}
              selectedChronologicalOrder={selectedChronologicalOrder} 
              setSelectedChronologicalOrder={setSelectedChronologicalOrder} 
            />}
          />

          {/* Filosofų sąrašo puslapis (/philosophers) */}
          <Route
            path="/philosophers"
            element={<PhilosophersListPage 
              filteredPhilosophers={filteredAndSortedPhilosophers}
              selectedGroup={selectedGroup}
              setSelectedGroup={setSelectedGroup}
              selectedRegion={selectedRegion}
              setSelectedRegion={setSelectedRegion}
              sortBy={sortBy}
              setSortBy={setSortBy}
              selectedChronologicalOrder={selectedChronologicalOrder}
              setSelectedChronologicalOrder={setSelectedChronologicalOrder}
            />}
          />

          {/* Kiti puslapiai */}
          <Route path="/about" element={<About />} />
          <Route path="/ideologies" element={<Ideologies />} />
          <Route path="/quotes" element={<Quotes />} />

          {/* Dinaminis filosofo detalių puslapis */}
          <Route path="/philosopher/:id" element={<PhilosopherPage />} />
        </Routes>
      </main>

      {/* Modalinis langas, rodomas tik tada, kai yra turinys */}
      {modalContent.philosopher && modalContent.contentType && (
        <BioModal
          philosopher={modalContent.philosopher}
          contentType={modalContent.contentType}
          onClose={() => setModalContent({ philosopher: null, contentType: null })} // Uždaro modalinį langą
        />
      )}
      {/* Poraštės komponentas */}
      <Footer />
    </div>
  );
}