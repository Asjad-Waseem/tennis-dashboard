"use client";

import { useState, useEffect, useRef } from "react";

const SearchDropdown = (): React.ReactElement => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Calculate if mobile and set CSS variables for positioning
  useEffect(() => {
    const checkMobile = (): void => {
      const mobile = window.innerWidth < 640; // sm breakpoint
      setIsMobile(mobile);
      
      const header = document.querySelector("header");
      const searchButton = document.querySelector('[aria-label="Search"]');
      
      if (header && searchButton && containerRef.current) {
        const headerRect = header.getBoundingClientRect();
        const searchRect = searchButton.getBoundingClientRect();
        
        if (mobile) {
          containerRef.current.style.setProperty("--top-pos", `${headerRect.bottom + 8}px`);
          containerRef.current.style.setProperty("--left-pos", "1rem");
          containerRef.current.style.setProperty("--right-pos", "1rem");
        } else {
          containerRef.current.style.setProperty("--top-pos", `${headerRect.bottom + 8}px`);
          containerRef.current.style.setProperty("--right-pos", `${window.innerWidth - searchRect.right}px`);
          containerRef.current.style.setProperty("--left-pos", "auto");
        }
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto-focus input when dropdown opens
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Handle search with loading state
  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      setIsLoading(true);
      setShowResults(true);
      // Simulate API call with a brief delay
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      setShowResults(false);
      setIsLoading(false);
    }
  }, [searchQuery]);

  // Clear search query
  const handleClear = (): void => {
    setSearchQuery("");
    inputRef.current?.focus();
  };

  return (
    <div
      ref={containerRef}
      className={`fixed z-50 rounded-[20px] bg-white shadow-[0px_20px_50px_rgba(102,30,255,0.15)] top-[var(--top-pos)] ${
        isMobile 
          ? "left-4 right-4 w-auto" 
          : "right-[var(--right-pos)] w-[min(40vw,500px)]"
      }`}
    >
      {/* Search Input */}
      <div className="px-6 py-4">
        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 pl-12 pr-10 text-sm text-gray-900 placeholder:text-gray-400 transition-colors focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
          />
          {/* Search Icon */}
          <svg
            className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          {/* Clear Button */}
          {searchQuery.length > 0 && (
            <button
              type="button"
              onClick={handleClear}
              className="absolute right-3 top-1/2 flex h-6 w-6 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
              aria-label="Clear search"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Results Container */}
      {showResults && (
        <div className="border-t border-gray-100">
          {isLoading ? (
            <div className="p-6">
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-10 w-10 animate-pulse rounded-lg bg-gray-200" />
                    <div className="flex-1 space-y-2">
                      <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200" />
                      <div className="h-3 w-1/2 animate-pulse rounded bg-gray-200" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="p-6 text-center">
              <div className="py-8">
                <svg
                  className="mx-auto h-12 w-12 text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="mt-4 text-sm font-medium text-gray-500">
                  No search results found
                </p>
                <p className="mt-1 text-xs text-gray-400">
                  Try searching for something else
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchDropdown;

