"use client";

import { useEffect, useState } from "react";
import { usePlayer } from "@/contexts/PlayerContext";
import type { Ranking } from "@/types";
import RankingCard from "@/components/server/cards/ranking-card";
import type { PlayerRankingsData } from "./types";
import { getRankingCardProps } from "./utils";

const RankingsSectionClient = (): React.ReactElement => {
  const { selectedPlayerId } = usePlayer();
  const [rankings, setRankings] = useState<Ranking[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchRankings(): Promise<void> {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/player/${selectedPlayerId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch rankings");
        }
        const data: PlayerRankingsData = await response.json();
        setRankings(data.rankings);
      } catch (error) {
        console.error("Error fetching rankings:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchRankings();
  }, [selectedPlayerId]);

  if (isLoading) {
    return (
      <section>
        <h2 className="mb-3 sm:mb-4 text-base sm:text-lg font-semibold text-gray-900">Rankings</h2>
        <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-20 sm:h-24 rounded-2xl sm:rounded-3xl bg-white animate-pulse" />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="mt-6 sm:mt-8">
      <h2 className="mb-3 sm:mb-4 text-base sm:text-lg font-semibold text-gray-900">Rankings</h2>

      <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {["Singles", "Doubles", "Mixed Doubles"].map((category) => {
          const ranking = rankings.find((r) => r.category === category);
          const props = getRankingCardProps(category, ranking);
          if (!props) return null;
          return <RankingCard key={category} {...props} />;
        })}
      </div>
    </section>
  );
};

export default RankingsSectionClient;

