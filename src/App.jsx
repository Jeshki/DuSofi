import React, { useState, useMemo, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BioModal from "./BioModal.jsx";
import HomePage from "./pages/HomePage.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Biographies from "./pages/Biographies.jsx";
import PhilosopherPage from "./pages/PhilosopherPage.jsx";
import Footer from "./pages/Footer.jsx";
import Header from "./pages/Header-components/Header.jsx";
import { philosophers } from "./data.js";
import { IdeologicalGroups, ChronologicalOrderEnum } from "./enums.jsx";

// Helper functions (getStartYear, getEndYear) remain the same...

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


export default function App() {
  // Dark mode state...
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true';
  });

  // State for filters and sorting...
  const [selectedGroup, setSelectedGroup] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [selectedChronologicalOrder, setSelectedChronologicalOrder] = useState('');

  // Modal state...
  const [modalContent, setModalContent] = useState({ philosopher: null, contentType: null });

  // Dark mode effect...
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', darkMode ? 'true' : 'false');
  }, [darkMode]);

  // Processed philosophers...
  const processedPhilosophers = useMemo(() => {
    const processed = philosophers.map(p => ({
      ...p,
      startYear: getStartYear(p.years),
      endYear: getEndYear(p.years)
    }));
    console.log("App: processedPhilosophers", processed);  // ADDED LOG
    return processed;
  }, []);

  // Modal functions...
  const handleOpenModal = (philosopher, contentType) => {
    setModalContent({ philosopher, contentType });
  };

  // Filtered and sorted philosophers...
  const filteredAndSortedPhilosophers = useMemo(() => {
    let result = [...processedPhilosophers];

    // Filter by group
    if (selectedGroup) {
      const groupIdeologies = IdeologicalGroups[selectedGroup];
      if (groupIdeologies && Array.isArray(groupIdeologies)) {
        result = result.filter(p => p.IdeologicalOrder && groupIdeologies.includes(p.IdeologicalOrder));
      }
    }

    // Filter by region
    if (selectedRegion) {
      result = result.filter(p => p.geographicalOrder === selectedRegion);
    }

    // Filter by Chronological Order
    if (selectedChronologicalOrder) {
      result = result.filter(
        (p) => p.ChronologicalOrder === selectedChronologicalOrder
      );
    }

    // Sorting
    if (sortBy === 'chronological') {
      result.sort((a, b) => a.startYear - b.startYear);
    } else if (sortBy === 'youngest_first') {
      result.sort((a, b) => b.startYear - a.startYear);
    } else if (sortBy === 'newest_by_death') {
      result.sort((a, b) => b.endYear - a.endYear);
    } else {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    console.log("App: filteredAndSortedPhilosophers", result);  // ADDED LOG
    return result;
  }, [processedPhilosophers, selectedGroup, selectedRegion, sortBy, selectedChronologicalOrder]);

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-black text-gray-800 dark:text-gray-200 transition-colors duration-300">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="pt-4 pb-12">
          <Routes>
            <Route
              path="/"
              element={<HomePage
                filteredPhilosophers={filteredAndSortedPhilosophers}
                handleCardClick={handleOpenModal}
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
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/biographies" element={<Biographies />} />
            <Route path="/philosopher/:id" element={<PhilosopherPage />} />
          </Routes>
        </main>
        {modalContent.philosopher && modalContent.contentType && (
          <BioModal
            philosopher={modalContent.philosopher}
            contentType={modalContent.contentType}
            onClose={() => setModalContent({ philosopher: null, contentType: null })}
          />
        )}
        <Footer />
      </div>
    </Router>
  );
}