"use client";

import { useEffect, useState } from "react";
import { usePlayer } from "@/contexts/PlayerContext";
import type { Ranking } from "@/types";
import RankingCard from "../server/cards/RankingCard";
import { colors } from "@/lib/theme";

interface PlayerRankingsData {
  rankings: Ranking[];
}

export default function RankingsSectionClient(): React.ReactElement {
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
        <h2 className="mb-4 text-lg font-semibold text-gray-900">Rankings</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-24 rounded-3xl bg-white animate-pulse" />
          ))}
        </div>
      </section>
    );
  }

  const getRankingCardProps = (category: string) => {
    const ranking = rankings.find((r) => r.category === category);
    if (!ranking) return null;

    const baseProps = {
      category,
      rank: ranking.position,
      arrowDirection: ranking.trend === "up" ? "up" : ranking.trend === "down" ? "down" : "stable" as "up" | "down" | "stable",
      textTop: "23px",
      rankTop: "55px",
      rankLeft: "20.8228px",
    };

    if (category === "Singles") {
      return {
        ...baseProps,
        bgColor: colors.pink.secondary,
        decorativeShapes: [
          {
            type: "rotated-rectangle" as const,
            color: colors.pink.tertiary,
            left: "159.711px",
            top: "0px",
            rotation: 45,
            transformOrigin: "top left",
          },
          {
            type: "white-pill" as const,
            left: "121px",
            top: "-21px",
          },
          {
            type: "stroke-oval" as const,
            left: "69.6261px",
            top: "49.6259px",
            rotation: -72.7023,
            transformOrigin: "0 0",
          },
        ],
      };
    }

    if (category === "Doubles") {
      return {
        ...baseProps,
        bgColor: colors.orange.primary,
        rankLeft: "16.2207px",
        decorativeShapes: [
          {
            type: "rotated-rectangle" as const,
            color: colors.orange.secondary,
            left: "139.711px",
            top: "20px",
            rotation: 30,
            transformOrigin: "top left",
          },
          {
            type: "white-pill" as const,
            left: "126px",
            top: "-24px",
          },
          {
            type: "stroke-oval" as const,
            left: "181.5px",
            top: "-116.5px",
            rotation: 90,
            transformOrigin: "0 0",
          },
        ],
      };
    }

    if (category === "Mixed Doubles") {
      return {
        ...baseProps,
        bgColor: colors.purple.dark,
        decorativeShapes: [
          {
            type: "rotated-rectangle" as const,
            color: colors.purple.medium,
            left: "139.711px",
            top: "35px",
            rotation: 5,
            transformOrigin: "top left",
          },
          {
            type: "white-pill" as const,
            left: "126px",
            top: "-24px",
          },
          {
            type: "stroke-oval" as const,
            left: "87.1173px",
            top: "84.4548px",
            rotation: -105,
            transformOrigin: "87.1173px 84.4548px",
          },
        ],
      };
    }

    return null;
  };

  return (
    <section>
      <h2 className="mb-4 text-lg font-semibold text-gray-900">Rankings</h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {["Singles", "Doubles", "Mixed Doubles"].map((category) => {
          const props = getRankingCardProps(category);
          if (!props) return null;
          return <RankingCard key={category} {...props} />;
        })}
      </div>
    </section>
  );
}

