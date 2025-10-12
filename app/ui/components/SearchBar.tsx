'use client';
import { useState } from 'react';

interface SearchBarProps {
  onSearch: (searchQuery: string) => void;
  isSearching?: boolean
}
export default function SearchBar({ onSearch, isSearching = false } : SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState<string>('')

  // handle search
  const handleSearch = async () => {
    if (!searchQuery.trim()) return

    onSearch(searchQuery)
  }

  // handle button press for search
  const handleButtonSearch = (e : React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }



  return (
    <div className="w-full max-w-xlg min-w-[200px]">
      <label htmlFor="location-search" className="sr-only">
        Search Location
      </label>
      <div className="relative" role="search">
        <input
          id="location-search"
          type="text"
          className="w-full h-36 bg-black font-serif placeholder:text-6xl placeholder:text-white text-white text-6xl border border-red-700 rounded-md pl-3 pr-28 py-4 transition duration-300 ease focus:outline-none focus:border-white hover:border-white shadow-sm focus:shadow "
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
          onKeyUp={handleButtonSearch}
          placeholder="Search for Location"
          aria-describedby="search-description"
          aria-label="Search for weather by location"
        />
        <div id="search-description" className="sr-only">
          Type your search terms and press the search button to find the weather
          for your Location
        </div>
        <button
          onClick={handleSearch}
          disabled={isSearching || !searchQuery.trim()}
          className="absolute h-34 top-1 right-1 flex items-center justify-center rounded w-1/6 py-3 px-3 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-red-700 hover:bg-red-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          aria-label={isSearching ? 'Searching Location' : 'Search Location'}>
          {isSearching ? (
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span className="text-xs">Searching...</span>
            </div>
          ) : (
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21L16.65 16.65" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
