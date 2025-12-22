"use client";

import { useState, useEffect } from "react";
import type { Match } from "@/types";
import { usePlayer } from "@/contexts/PlayerContext";
import { colors } from "@/lib/theme";
import type { PlayerLatestMatchData } from "./types";

const LatestScores = (): React.ReactElement => {
  const { selectedPlayerId } = usePlayer();
  const [activeTab, setActiveTab] = useState<"Singles" | "Doubles" | "Mixed Doubles">("Singles");
  const [latestMatch, setLatestMatch] = useState<Match | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchLatestMatch(): Promise<void> {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/player/${selectedPlayerId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch latest match");
        }
        const data: PlayerLatestMatchData = await response.json();
        setLatestMatch(data.latestMatch);
      } catch (error) {
        console.error("Error fetching latest match:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchLatestMatch();
  }, [selectedPlayerId]);

  if (isLoading || !latestMatch) {
    return (
      <div className="relative h-56 w-96 rounded-3xl bg-white">
        <div className="h-full w-full animate-pulse rounded-3xl bg-gray-100" />
      </div>
    );
  }

  return (
    <div className="relative h-56 w-96 rounded-3xl bg-white">
      {/* Header Section */}
      <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
        <h2 className="text-xl font-medium leading-6 tracking-wide text-gray-900">
          Latest Scores
        </h2>
        <a
          href="#"
          className="cursor-pointer text-[15px] font-semibold leading-[18px] tracking-wide text-blue-600 hover:opacity-80"
        >
          View All
        </a>
      </div>

      {/* Tabs Section */}
      <div className="absolute left-5 top-[59px] flex h-6 flex-row items-center gap-4">
        {/* Singles Tab */}
        <button
          type="button"
          onClick={() => setActiveTab("Singles")}
          className={`flex h-6 cursor-pointer flex-row items-center whitespace-nowrap rounded-md transition-all ${
            activeTab === "Singles" ? "bg-cyan-50 px-1.5 py-0.5" : "px-0"
          }`}
        >
          <span
            className={`h-[18px] whitespace-nowrap text-[15px] leading-[18px] tracking-wide ${
              activeTab === "Singles"
                ? "font-medium text-cyan-500"
                : `font-normal text-[${colors.primary.blueLight}]`
            }`}
          >
            Singles
          </span>
        </button>

        {/* Doubles Tab */}
        <button
          type="button"
          onClick={() => setActiveTab("Doubles")}
          className={`flex h-6 cursor-pointer flex-row items-center whitespace-nowrap rounded-md transition-all ${
            activeTab === "Doubles" ? "bg-cyan-50 px-1.5 py-0.5" : "px-0"
          }`}
        >
          <span
            className={`h-[18px] whitespace-nowrap text-[15px] leading-[18px] tracking-wide ${
              activeTab === "Doubles"
                ? "font-medium text-cyan-500"
                : `font-normal text-[${colors.primary.blueLight}]`
            }`}
          >
            Doubles
          </span>
        </button>

        {/* Mixed Doubles Tab */}
        <button
          type="button"
          onClick={() => setActiveTab("Mixed Doubles")}
          className={`flex h-6 cursor-pointer flex-row items-center whitespace-nowrap rounded-md transition-all ${
            activeTab === "Mixed Doubles" ? "bg-cyan-50 px-1.5 py-0.5" : "px-0"
          }`}
        >
          <span
            className={`h-[18px] whitespace-nowrap text-[15px] leading-[18px] tracking-wide ${
              activeTab === "Mixed Doubles"
                ? "font-medium text-cyan-500"
                : `font-normal text-[${colors.primary.blueLight}]`
            }`}
          >
            Mixed Doubles
          </span>
        </button>
      </div>

      {/* Match Info Section */}
      {/* Person Avatar SVG */}
      <svg
        className="absolute left-5 top-[103px]"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 2.91671C8.38917 2.91671 7.08333 4.22254 7.08333 5.83337C7.08333 7.4442 8.38917 8.75004 10 8.75004C11.6108 8.75004 12.9167 7.4442 12.9167 5.83337C12.9167 4.22254 11.6108 2.91671 10 2.91671ZM6.25 5.83337C6.25 3.76231 7.92893 2.08337 10 2.08337C12.0711 2.08337 13.75 3.76231 13.75 5.83337C13.75 7.90444 12.0711 9.58337 10 9.58337C7.92893 9.58337 6.25 7.90444 6.25 5.83337Z"
          fill={colors.pink.secondary}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.60823 10.8925C8.36651 10.5784 9.17924 10.4167 10 10.4167C10.8208 10.4167 11.6335 10.5784 12.3918 10.8925C13.1501 11.2066 13.8391 11.667 14.4194 12.2473C14.9998 12.8277 15.4602 13.5167 15.7742 14.275C16.0883 15.0333 16.25 15.846 16.25 16.6667C16.25 16.8969 16.0635 17.0834 15.8333 17.0834C15.6032 17.0834 15.4167 16.8969 15.4167 16.6667C15.4167 15.9554 15.2766 15.2511 15.0043 14.5939C14.7321 13.9367 14.3331 13.3396 13.8302 12.8366C13.3272 12.3336 12.73 11.9346 12.0729 11.6624C11.4157 11.3902 10.7113 11.2501 10 11.2501C9.28867 11.2501 8.58431 11.3902 7.92713 11.6624C7.26995 11.9346 6.67282 12.3336 6.16984 12.8366C5.66685 13.3396 5.26787 13.9367 4.99565 14.5939C4.72344 15.2511 4.58333 15.9554 4.58333 16.6668C4.58333 16.8969 4.39679 17.0834 4.16667 17.0834C3.93655 17.0834 3.75 16.8969 3.75 16.6668C3.75 15.846 3.91166 15.0333 4.22575 14.275C4.53984 13.5167 5.00022 12.8277 5.58058 12.2473C6.16095 11.667 6.84994 11.2066 7.60823 10.8925Z"
          fill={colors.pink.secondary}
        />
      </svg>

      {/* Tournament Text */}
      <span className="absolute left-[45px] top-[106px] whitespace-nowrap text-[15px] font-normal leading-[18px] tracking-wide text-gray-900">
        WTA - {activeTab === "Mixed Doubles" ? "MIXED" : activeTab.toUpperCase()}: {latestMatch.tournament}, {latestMatch.surface}
      </span>

      {/* Star Icon */}
      <svg
        className="absolute right-5 top-[103px]"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.87907 2.99648C9.33758 2.06742 10.6624 2.06742 11.1209 2.99648L12.6288 6.05188C12.6895 6.17486 12.8069 6.2601 12.9426 6.27982L16.3144 6.76977C17.3397 6.91875 17.7491 8.17872 17.0072 8.90189L14.5673 11.2802C14.4691 11.3759 14.4243 11.5138 14.4475 11.649L15.0234 15.0072C15.1986 16.0283 14.1268 16.807 13.2097 16.3249L10.1939 14.7394C10.0725 14.6756 9.92748 14.6756 9.8061 14.7394L6.79023 16.3249C5.8732 16.807 4.80141 16.0283 4.97654 15.0072L5.55252 11.649C5.57571 11.5138 5.53089 11.3759 5.43269 11.2802L2.9928 8.90189C2.25091 8.17872 2.6603 6.91875 3.68557 6.76977L7.05741 6.27982C7.19312 6.2601 7.31044 6.17486 7.37114 6.05188L8.87907 2.99648ZM10.3736 3.36528C10.2208 3.05559 9.77919 3.05559 9.62635 3.36528L8.11841 6.42069C7.93634 6.78962 7.58438 7.04533 7.17724 7.10449L3.8054 7.59445C3.46364 7.64411 3.32718 8.06409 3.57448 8.30515L6.01437 10.6835C6.30897 10.9706 6.44341 11.3844 6.37386 11.7899L5.79788 15.1481C5.7395 15.4885 6.09677 15.748 6.40245 15.5873L9.41831 14.0018C9.78247 13.8103 10.2175 13.8103 10.5817 14.0018L13.5975 15.5873C13.9032 15.748 14.2605 15.4885 14.2021 15.1481L13.6261 11.7899C13.5566 11.3844 13.691 10.9706 13.9856 10.6835L16.4255 8.30515C16.6728 8.06409 16.5363 7.64411 16.1946 7.59445L12.8227 7.10449C12.4156 7.04533 12.0636 6.78962 11.8816 6.42069L10.3736 3.36528Z"
          fill={colors.orange.accent}
        />
      </svg>

      {/* Player 1 - Anindita R. (IDN) */}
      <div className="absolute left-[25px] top-[144px]">
        <span className="h-[18px] w-[118px] whitespace-nowrap text-[15px] font-semibold leading-[18px] tracking-wide text-black">
          {latestMatch.player1.shortName} ({latestMatch.player1.countryCode})
        </span>
      </div>

      {/* Player 1 Scores */}
      {latestMatch.score.sets.map((set, index) => {
        // Calculate left position: 255px for first, then add ~20px for each subsequent score
        const leftPosition = 255 + index * 20;
        return (
          <span
            key={index}
            className="absolute top-[144px] h-[18px] w-[9px] text-[15px] font-normal leading-[18px] tracking-wide text-black"
            style={{ left: `${leftPosition}px` }}
          >
            {set.player1}
          </span>
        );
      })}

      {/* WIN Badge - Only show if player1 won */}
      {latestMatch.winner === "player1" && (
        <div className="absolute right-4 top-[144px] h-[25px] w-[45px]">
          <div className="absolute left-0 top-0 h-[25px] w-[45px] rounded-md bg-yellow-50" />
          <span className="absolute left-2 top-[3.5px] h-[18px] w-[30px] text-[15px] font-semibold leading-[18px] tracking-wide text-yellow-600">
            WIN
          </span>
        </div>
      )}

      {/* Player 2 - Naomi O. (JPN) */}
      <div className="absolute left-[25px] top-[182px]">
        <span className="h-[18px] w-[103px] whitespace-nowrap text-[15px] font-normal leading-[18px] tracking-wide text-black">
          {latestMatch.player2.shortName} ({latestMatch.player2.countryCode})
        </span>
      </div>

      {/* Player 2 Scores */}
      {latestMatch.score.sets.map((set, index) => {
        // Calculate left position: 255px for first, then add ~20px for each subsequent score
        const leftPosition = 255 + index * 20;
        return (
          <span
            key={index}
            className="absolute top-[182px] h-[18px] w-[9px] text-[15px] font-normal leading-[18px] tracking-wide text-black"
            style={{ left: `${leftPosition}px` }}
          >
            {set.player2}
          </span>
        );
      })}

      {/* WIN Badge for Player 2 - Only show if player2 won */}
      {latestMatch.winner === "player2" && (
        <div className="absolute right-4 top-[182px] h-[25px] w-[45px]">
          <div className="absolute left-0 top-0 h-[25px] w-[45px] rounded-md bg-yellow-50" />
          <span className="absolute left-2 top-[3.5px] h-[18px] w-[30px] text-[15px] font-semibold leading-[18px] tracking-wide text-yellow-600">
            WIN
          </span>
        </div>
      )}
    </div>
  );
};

export default LatestScores;

