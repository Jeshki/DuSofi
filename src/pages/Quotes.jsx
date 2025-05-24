// src/pages/Quotes.jsx
import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { philosophers } from '../data.js'; // Importuojame filosofų duomenis
import { Link } from 'react-router-dom';
import { FaCopy, FaShareAlt } from 'react-icons/fa';
import Filters from '../Filters.jsx';
import { IdeologicalGroups, GeographicalOrderEnum, ChronologicalOrderEnum } from '../enums.jsx';

const QUOTES_PER_PAGE = 10;

// Pagalbinė funkcija, skirta paryškinti paieškos terminą
const highlightSearchTerm = (text, term) => {
  if (!term) return text;
  const parts = text.split(new RegExp(`(${term})`, 'gi'));
  return (
    <span>
      {parts.map((part, i) =>
        new RegExp(term, 'i').test(part) ? (
          <mark key={i} className="bg-rose-200 dark:bg-rose-700 text-black dark:text-white rounded px-0.5">
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </span>
  );
};

export default function QuotesPage() {
  const [selectedGroup, setSelectedGroup] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [selectedChronologicalOrder, setSelectedChronologicalOrder] = useState('');

  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedQuotes, setDisplayedQuotes] = useState([]);
  const [copyFeedback, setCopyFeedback] = useState(null);

  const allQuotes = useMemo(() => {
    const quotes = [];
    philosophers.forEach(p => {
      // Reikalingi metai rūšiavimui
      const startYear = p.startYear || (p.years && parseInt(p.years.match(/(\d+)/)?.[0], 10)) || Infinity;
      const endYear = p.endYear || (p.years && parseInt(p.years.match(/(\d+)(?!.*\d)/)?.[1], 10)) || -Infinity;

      if (p.quotes && p.quotes.length > 0) {
        p.quotes.forEach((quote, index) => {
          quotes.push({
            quote: quote,
            author: p.name,
            philosopherId: p.id,
            id: `${p.id}-${index}`,
            IdeologicalOrder: p.IdeologicalOrder,
            geographicalOrder: p.geographicalOrder,
            ChronologicalOrder: p.ChronologicalOrder,
            startYear: startYear,
            endYear: endYear,
          });
        });
      }
    });
    return quotes;
  }, [philosophers]);

  const handleCopyQuote = useCallback((quoteText, quoteAuthor, quoteId) => {
    const fullQuote = `"${quoteText}" — ${quoteAuthor}`;
    navigator.clipboard.writeText(fullQuote)
      .then(() => {
        setCopyFeedback(quoteId);
        setTimeout(() => setCopyFeedback(null), 2000);
      })
      .catch(err => {
        console.error('Failed to copy quote: ', err);
      });
  }, []);

  const handleShareQuote = useCallback((quoteText, quoteAuthor, quoteId) => {
    const fullQuote = `"${quoteText}" — ${quoteAuthor}\n\nRead more philosophical quotes at [Your Website Link or Context]`;
    navigator.clipboard.writeText(fullQuote)
      .then(() => {
        setCopyFeedback(quoteId);
        setTimeout(() => setCopyFeedback(null), 2000);
      })
      .catch(err => {
        console.error('Failed to share quote: ', err);
      });
  }, []);

  const getFilteredAndSortedQuotes = useMemo(() => {
    let result = [...allQuotes];

    if (searchTerm) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      result = result.filter(
        item =>
          item.quote.toLowerCase().includes(lowerCaseSearchTerm) ||
          item.author.toLowerCase().includes(lowerCaseSearchTerm)
      );
    }

    if (selectedGroup) {
      const groupIdeologies = IdeologicalGroups[selectedGroup];
      if (groupIdeologies && Array.isArray(groupIdeologies)) {
        result = result.filter(q => q.IdeologicalOrder && groupIdeologies.includes(q.IdeologicalOrder));
      }
    }

    if (selectedRegion) {
      result = result.filter(q => q.geographicalOrder === selectedRegion);
    }

    if (selectedChronologicalOrder) {
      result = result.filter(q => q.ChronologicalOrder === selectedChronologicalOrder);
    }

    if (sortBy === 'chronological') {
      result.sort((a, b) => a.startYear - b.startYear);
    } else if (sortBy === 'youngest_first') {
      result.sort((a, b) => b.startYear - a.startYear);
    } else if (sortBy === 'newest_by_death') {
      result.sort((a, b) => b.endYear - a.endYear);
    } else { // 'default' - pagal autoriaus vardą A-Z
      result.sort((a, b) => a.author.localeCompare(b.author));
    }

    return result;
  }, [allQuotes, searchTerm, selectedGroup, selectedRegion, selectedChronologicalOrder, sortBy]);

  const showRandomQuote = useCallback(() => {
    console.log("Attempting to show random quote.");
    console.log("Current filtered and sorted quotes length:", getFilteredAndSortedQuotes.length);
    if (getFilteredAndSortedQuotes.length > 0) {
      const randomIndex = Math.floor(Math.random() * getFilteredAndSortedQuotes.length);
      const randomQuote = getFilteredAndSortedQuotes[randomIndex];
      setDisplayedQuotes([randomQuote]); // Rodyti tik vieną atsitiktinę citatą
      setCurrentPage(1); // Nustatome puslapį į 1
      console.log("Selected random quote:", randomQuote);
    } else {
      setDisplayedQuotes([]); // Jei nėra citatų, rodome tuščią sąrašą
      console.log("No quotes found for current filters to pick a random one from.");
    }
  }, [getFilteredAndSortedQuotes]);

  const totalPages = useMemo(() => {
    return Math.ceil(getFilteredAndSortedQuotes.length / QUOTES_PER_PAGE);
  }, [getFilteredAndSortedQuotes]);

  useEffect(() => {
    console.log("useEffect for displaying quotes triggered.");
    if (displayedQuotes.length === 1 && getFilteredAndSortedQuotes.includes(displayedQuotes[0]) &&
        getFilteredAndSortedQuotes.length > 0 && currentPage === 1) {
      console.log("Staying on current random quote as filters haven't changed the available list.");
      return;
    }

    const startIndex = (currentPage - 1) * QUOTES_PER_PAGE;
    const endIndex = startIndex + QUOTES_PER_PAGE;
    setDisplayedQuotes(getFilteredAndSortedQuotes.slice(startIndex, endIndex));
    console.log("Displayed quotes updated to filtered/paginated list.");
  }, [currentPage, getFilteredAndSortedQuotes]);

  useEffect(() => {
    console.log("useEffect for filter/sort change triggered. Resetting page.");
    setCurrentPage(1);
    setDisplayedQuotes(getFilteredAndSortedQuotes.slice(0, QUOTES_PER_PAGE));
  }, [searchTerm, selectedGroup, selectedRegion, selectedChronologicalOrder, sortBy]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  const handleClearAllFilters = useCallback(() => {
    setSelectedGroup('');
    setSelectedRegion('');
    setSelectedChronologicalOrder('');
    setSortBy('default');
    setSearchTerm('');
    setCurrentPage(1);
    setDisplayedQuotes(allQuotes.slice(0, QUOTES_PER_PAGE));
    console.log("All filters cleared. Displaying first page of all quotes.");
  }, [allQuotes]);

  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-900 dark:text-gray-100 font-serif uppercase">
        Philosophical Quotes
      </h1>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-8 text-lg">
        Explore timeless wisdom from influential thinkers throughout history, or find a random inspiration.
      </p>

      <div className="mb-12 p-4 bg-gray-100 dark:bg-stone-900 rounded-lg shadow-md flex flex-col gap-4 items-center">

        <input
          type="text"
          placeholder="Search quotes or authors..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-2/3 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring focus:ring-rose-400 dark:bg-gray-800 dark:border-gray-600 dark:text-white placeholder-gray-500"
        />

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

        <div className="flex flex-wrap justify-center gap-3 mt-2 w-full">
          <button
            onClick={showRandomQuote}
            className="px-5 py-2 bg-rose-900 text-white rounded-lg shadow-md hover:bg-rose-950 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-rose-900 focus:ring-offset-2 dark:focus:ring-offset-stone-900"
          >
            Show Random Quote
          </button>
          {(searchTerm || selectedGroup || selectedRegion || selectedChronologicalOrder || sortBy !== 'default' || currentPage !== 1 || (displayedQuotes.length === 1 && getFilteredAndSortedQuotes.includes(displayedQuotes[0]))) && (
            <button
              onClick={handleClearAllFilters}
              className="px-5 py-2 bg-rose-700 text-white rounded-lg shadow-md hover:bg-rose-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-rose-700 focus:ring-offset-2 dark:focus:ring-offset-stone-900"
            >
              Clear All Filters
            </button>
          )}
        </div>
      </div>

      {displayedQuotes.length > 0 ? (
        <>
          <div className="space-y-8">
            {displayedQuotes.map((item) => (
              <blockquote key={item.id} className="p-6 border-l-4 border-rose-900 bg-gray-100 dark:bg-stone-800 rounded-r-lg shadow-md transition-shadow duration-300 hover:shadow-lg flex flex-col">
                <p className="italic text-xl text-gray-800 dark:text-gray-200 leading-relaxed mb-4 flex-grow">
                  "{highlightSearchTerm(item.quote, searchTerm)}"
                </p>
                
                <div className="flex justify-between items-end mt-4">
                  <footer className="text-sm text-gray-600 dark:text-gray-400">
                    — {' '}
                    <Link
                      to={`/philosopher/${item.philosopherId}`}
                      className="font-semibold text-rose-900 dark:text-rose-500 hover:underline"
                    >
                      {highlightSearchTerm(item.author, searchTerm)}
                    </Link>
                  </footer>

                  <div className="flex gap-2">
                    <button
                      onClick={() => handleCopyQuote(item.quote, item.author, item.id)}
                      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-rose-900 focus:ring-offset-2 dark:focus:ring-offset-stone-800"
                      aria-label="Copy quote"
                      title="Copy quote"
                    >
                      <FaCopy />
                    </button>
                    <button
                      onClick={() => handleShareQuote(item.quote, item.author, item.id)}
                      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-rose-900 focus:ring-offset-2 dark:focus:ring-offset-stone-800"
                      aria-label="Share quote"
                      title="Share quote"
                    >
                      <FaShareAlt />
                    </button>
                    {copyFeedback === item.id && (
                      <span className="ml-2 text-sm text-rose-700 animate-fadeIn flex items-center">Copied!</span>
                    )}
                  </div>
                </div>
              </blockquote>
            ))}
          </div>

          {/* Puslapiavimo navigacija */}
          {getFilteredAndSortedQuotes.length > QUOTES_PER_PAGE && displayedQuotes.length > 1 && (
            <div className="flex justify-center items-center gap-4 mt-12">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg shadow hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              <span className="text-lg font-medium text-gray-700 dark:text-gray-300">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg shadow hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="flex flex-col items-center justify-center p-8 bg-gray-100 dark:bg-stone-900 rounded-lg shadow-md mt-8">
          <p className="text-center text-gray-500 dark:text-gray-400 text-2xl font-semibold mb-4">
            No quotes found matching your criteria.
          </p>
          <button
            onClick={handleClearAllFilters}
            className="px-6 py-3 bg-rose-900 text-white rounded-lg shadow-md hover:bg-rose-950 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-rose-900 focus:ring-offset-2 dark:focus:ring-offset-stone-900"
          >
            Clear All Filters
          </button>
        </div>
      )}
    </section>
  );
}