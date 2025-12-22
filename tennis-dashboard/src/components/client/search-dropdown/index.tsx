"use client";

import { useState, useEffect, useRef } from "react";
import { colors } from "@/lib/theme";

export default function SearchDropdown(): React.ReactElement {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [topPosition, setTopPosition] = useState(80);
  const [rightPosition, setRightPosition] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Calculate header height and search icon position
  useEffect(() => {
    const header = document.querySelector("header");
    const searchButton = document.querySelector('[aria-label="Search"]');
    
    if (header && searchButton) {
      const headerRect = header.getBoundingClientRect();
      const searchRect = searchButton.getBoundingClientRect();
      
      setTopPosition(headerRect.bottom + 8);
      // Position from right edge, aligned with search icon
      setRightPosition(window.innerWidth - searchRect.right);
    }
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
      className="fixed z-50 bg-white shadow-xl"
      style={{
        top: `${topPosition}px`,
        right: `${rightPosition}px`,
        width: "min(40vw, 500px)",
        maxWidth: "90vw",
        minWidth: "300px",
        boxShadow: "0px 20px 50px rgba(102, 30, 255, 0.15)",
        borderRadius: "20px",
      }}
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
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 pl-12 pr-10 text-sm text-gray-900 placeholder:text-gray-400 transition-colors focus:outline-none focus:ring-2"
            style={{
              "--focus-border-color": colors.primary.blue,
              "--focus-ring-color": `${colors.primary.blue}33`,
              fontFamily:
                "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            } as React.CSSProperties & { "--focus-border-color": string; "--focus-ring-color": string }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = colors.primary.blue;
              e.currentTarget.style.boxShadow = `0 0 0 2px ${colors.primary.blue}33`;
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "";
              e.currentTarget.style.boxShadow = "";
            }}
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
                <p
                  className="mt-4 text-sm font-medium text-gray-500"
                  style={{
                    fontFamily:
                      "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  }}
                >
                  No search results found
                </p>
                <p
                  className="mt-1 text-xs text-gray-400"
                  style={{
                    fontFamily:
                      "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  }}
                >
                  Try searching for something else
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

