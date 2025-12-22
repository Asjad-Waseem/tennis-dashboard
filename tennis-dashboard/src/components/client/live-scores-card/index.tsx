"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { Match } from "@/types";
import { usePlayer } from "@/contexts/PlayerContext";
import { colors } from "@/lib/theme";

/**
 * Client Component: Live Scores Card
 * 
 * Why Client Component:
 * - Fetches data from API on the client side
 * - Uses React hooks (useState, useEffect)
 * - Handles dynamic data updates
 * - Could be extended with real-time updates via WebSocket
 */
export default function LiveScoresCard(): React.ReactElement {
  const [match, setMatch] = useState<Match | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { setSelectedPlayerId } = usePlayer();

  useEffect(() => {
    async function fetchLiveScores(): Promise<void> {
      try {
        setIsLoading(true);
        const response = await fetch("/api/live-scores");
        
        if (!response.ok) {
          throw new Error("Failed to fetch live scores");
        }

        const data = await response.json();
        setMatch(data.match);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setIsLoading(false);
      }
    }

    fetchLiveScores();
  }, []);

  if (isLoading) {
    return (
      <div className="relative w-full h-[200px] bg-white rounded-[30px]">
        <div className="animate-pulse p-5">
          <div className="h-6 w-32 bg-gray-200 rounded mb-4" />
          <div className="h-20 bg-gray-200 rounded" />
        </div>
      </div>
    );
  }

  if (error || !match) {
    return (
      <div className="relative w-full h-[200px] bg-white rounded-[30px] p-5">
        <p className="text-sm text-red-600">
          {error || "Failed to load live scores"}
        </p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[200px] bg-white rounded-[30px] p-5">
      {/* Header Row - Title and Date on Same Line */}
      <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
        <h2
          className="h-6 font-bold text-[20px] leading-6 tracking-[0.5px] whitespace-nowrap"
          style={{
            fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            color: colors.gray.medium,
          }}
        >
          Your Next Match
        </h2>
        <div className="flex flex-row items-center gap-[10px] h-[15px]">
          <span
            className="text-[10px] leading-[15px] tracking-[0.5px]"
            style={{
              fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              color: colors.primary.blueLight,
            }}
          >
            {match.date}
          </span>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M10.9375 1.875C11.1101 1.875 11.25 2.01491 11.25 2.1875L11.25 3.4375C11.25 3.61009 11.1101 3.75 10.9375 3.75C10.7649 3.75 10.625 3.61009 10.625 3.4375L10.625 2.1875C10.625 2.01491 10.7649 1.875 10.9375 1.875Z" fill="#BACCFD"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M5.3125 1.875C5.48509 1.875 5.625 2.01491 5.625 2.1875L5.625 3.4375C5.625 3.61009 5.48509 3.75 5.3125 3.75C5.13991 3.75 5 3.61009 5 3.4375L5 2.1875C5 2.01491 5.13991 1.875 5.3125 1.875Z" fill="#BACCFD"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M1.875 5.3125C1.875 4.10438 2.85438 3.125 4.0625 3.125H11.5625C12.7706 3.125 13.75 4.10438 13.75 5.3125V10.3125C13.75 11.5206 12.7706 12.5 11.5625 12.5H4.0625C2.85438 12.5 1.875 11.5206 1.875 10.3125V5.3125ZM4.0625 3.75C3.19956 3.75 2.5 4.44956 2.5 5.3125V10.3125C2.5 11.1754 3.19956 11.875 4.0625 11.875H11.5625C12.4254 11.875 13.125 11.1754 13.125 10.3125V5.3125C13.125 4.44956 12.4254 3.75 11.5625 3.75H4.0625Z" fill="#BACCFD"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M1.875 5.9375C1.875 5.76491 2.01491 5.625 2.1875 5.625H13.4375C13.6101 5.625 13.75 5.76491 13.75 5.9375C13.75 6.11009 13.6101 6.25 13.4375 6.25H2.1875C2.01491 6.25 1.875 6.11009 1.875 5.9375Z" fill="#BACCFD"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M3.75 7.8125C3.75 7.63991 3.88991 7.5 4.0625 7.5H5.3125C5.48509 7.5 5.625 7.63991 5.625 7.8125C5.625 7.98509 5.48509 8.125 5.3125 8.125H4.0625C3.88991 8.125 3.75 7.98509 3.75 7.8125Z" fill="#BACCFD"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M3.75 10.3125C3.75 10.1399 3.88991 10 4.0625 10H5.3125C5.48509 10 5.625 10.1399 5.625 10.3125C5.625 10.4851 5.48509 10.625 5.3125 10.625H4.0625C3.88991 10.625 3.75 10.4851 3.75 10.3125Z" fill="#BACCFD"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M6.875 7.8125C6.875 7.63991 7.01491 7.5 7.1875 7.5H8.4375C8.61009 7.5 8.75 7.63991 8.75 7.8125C8.75 7.98509 8.61009 8.125 8.4375 8.125H7.1875C7.01491 8.125 6.875 7.98509 6.875 7.8125Z" fill="#BACCFD"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M6.875 10.3125C6.875 10.1399 7.01491 10 7.1875 10H8.4375C8.61009 10 8.75 10.1399 8.75 10.3125C8.75 10.4851 8.61009 10.625 8.4375 10.625H7.1875C7.01491 10.625 6.875 10.4851 6.875 10.3125Z" fill="#BACCFD"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M10 7.8125C10 7.63991 10.1399 7.5 10.3125 7.5H11.5625C11.7351 7.5 11.875 7.63991 11.875 7.8125C11.875 7.98509 11.7351 8.125 11.5625 8.125H10.3125C10.1399 8.125 10 7.98509 10 7.8125Z" fill="#BACCFD"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M10 10.3125C10 10.1399 10.1399 10 10.3125 10H11.5625C11.7351 10 11.875 10.1399 11.875 10.3125C11.875 10.4851 11.7351 10.625 11.5625 10.625H10.3125C10.1399 10.625 10 10.4851 10 10.3125Z" fill="#BACCFD"/>
          </svg>
        </div>
      </div>

      {/* Player 1 - Naomi O. (Left Side) - Exact Position */}
      <button
        type="button"
        onClick={() => setSelectedPlayerId(match.player2.id)}
        className="group absolute left-[53px] top-[95px] flex cursor-pointer flex-col rounded-lg p-2 transition-all hover:bg-gray-50"
      >
        <p
          className="h-[30px] font-bold text-[25px] leading-[30px] text-left tracking-[0.5px] whitespace-nowrap"
          style={{
            fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            color: colors.text.primary,
          }}
        >
          {match.player2.shortName}
        </p>
        <p
          className="w-auto h-3 font-light text-[10px] leading-3 text-left tracking-[0.5px] mt-1 whitespace-nowrap"
          style={{
            fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            color: "#BACCFD",
          }}
        >
          {match.player2.country}
        </p>
      </button>

      {/* Player 2 - Anindita R. (Right Side) */}
      <button
        type="button"
        onClick={() => setSelectedPlayerId(match.player1.id)}
        className="group absolute right-[53px] top-[95px] flex cursor-pointer flex-col items-start rounded-lg p-2 transition-all hover:bg-gray-50"
      >
        <p
          className="h-[30px] font-bold text-[25px] leading-[30px] text-left tracking-[0.5px] whitespace-nowrap"
          style={{
            fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            color: colors.text.primary,
          }}
        >
          {match.player1.shortName}
        </p>
        <p
          className="w-auto h-3 font-light text-[10px] leading-3 text-left tracking-[0.5px] mt-1 whitespace-nowrap"
          style={{
            fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            color: "#BACCFD",
          }}
        >
          {match.player1.country}
        </p>
      </button>

      {/* Naomi's Image - Exact Positioning */}
      <button
        type="button"
        onClick={() => setSelectedPlayerId(match.player2.id)}
        className="absolute left-[205px] top-[66px] w-[85px] h-[100px] cursor-pointer opacity-100 transition-opacity hover:opacity-80"
      >
        <Image
          src={match.player2.avatar}
          alt={match.player2.name}
          width={85}
          height={100}
          className="h-full w-full object-contain"
        />
      </button>

      {/* Separator - Two Blue Dots - Centered with Exact Figma Styling */}
      <div className="absolute left-1/2 top-[99px] -translate-x-1/2 w-[35px] h-[35px]">
        {/* Ellipse 24 - Top Dot */}
        <div
          className="absolute rounded-full"
          style={{
            left: "41.67%",
            right: "41.67%",
            top: "20.83%",
            bottom: "62.5%",
            backgroundColor: colors.primary.blue,
          }}
        />
        {/* Ellipse 25 - Bottom Dot */}
        <div
          className="absolute rounded-full"
          style={{
            left: "41.67%",
            right: "41.67%",
            top: "62.5%",
            bottom: "20.83%",
            backgroundColor: colors.primary.blue,
          }}
        />
      </div>

      {/* Anindita's Image - Right Side Alignment */}
      <button
        type="button"
        onClick={() => setSelectedPlayerId(match.player1.id)}
        className="absolute right-[205px] top-[66px] w-[85px] h-[100px] cursor-pointer opacity-100 transition-opacity hover:opacity-80"
      >
        <Image
          src={match.player1.avatar}
          alt={match.player1.name}
          width={85}
          height={100}
          className="h-full w-full object-contain"
        />
      </button>
    </div>
  );
}

