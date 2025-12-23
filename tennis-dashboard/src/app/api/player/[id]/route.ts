import { NextResponse } from "next/server";
import type { Player, Statistics, Ranking, Match } from "@/types";
import {
  dummyPlayer,
  dummyOpponent,
  dummyStatisticsByYear,
  dummyRankings,
  dummyMatch,
} from "@/lib/constants";

// Mock data for different players
const playerData: Record<string, {
  player: Player;
  statistics: Record<number, Statistics>;
  rankings: Ranking[];
  latestMatch: Match;
}> = {
  "1": {
    player: dummyPlayer,
    statistics: dummyStatisticsByYear,
    rankings: dummyRankings,
    latestMatch: dummyMatch,
  },
  "2": {
    player: dummyOpponent,
    statistics: {
      2019: {
        year: 2019,
        monthlyPerformance: [
          { month: 1, value: 65 },
          { month: 2, value: 72 },
          { month: 3, value: 68 },
          { month: 4, value: 80 },
          { month: 5, value: 75 },
          { month: 6, value: 70 },
          { month: 7, value: 82 },
          { month: 8, value: 85 },
          { month: 9, value: 78 },
          { month: 10, value: 80 },
          { month: 11, value: 75 },
          { month: 12, value: 83 },
        ],
        globalStats: {
          wins: 20,
          losses: 10,
          winPercentage: 67,
        },
      },
      2020: {
        year: 2020,
        monthlyPerformance: [
          { month: 1, value: 68 },
          { month: 2, value: 74 },
          { month: 3, value: 70 },
          { month: 4, value: 82 },
          { month: 5, value: 85 },
          { month: 6, value: 78 },
          { month: 7, value: 88 },
          { month: 8, value: 90 },
          { month: 9, value: 84 },
          { month: 10, value: 87 },
          { month: 11, value: 82 },
          { month: 12, value: 89 },
        ],
        globalStats: {
          wins: 22,
          losses: 8,
          winPercentage: 73,
        },
      },
      2021: {
        year: 2021,
        monthlyPerformance: [
          { month: 1, value: 75 },
          { month: 2, value: 78 },
          { month: 3, value: 73 },
          { month: 4, value: 85 },
          { month: 5, value: 88 },
          { month: 6, value: 81 },
          { month: 7, value: 89 },
          { month: 8, value: 92 },
          { month: 9, value: 87 },
          { month: 10, value: 90 },
          { month: 11, value: 85 },
          { month: 12, value: 91 },
        ],
        globalStats: {
          wins: 24,
          losses: 6,
          winPercentage: 80,
        },
      },
      2025: {
        year: 2025,
        monthlyPerformance: [
          { month: 1, value: 82 },
          { month: 2, value: 85 },
          { month: 3, value: 80 },
          { month: 4, value: 88 },
          { month: 5, value: 90 },
          { month: 6, value: 87 },
          { month: 7, value: 92 },
          { month: 8, value: 94 },
          { month: 9, value: 89 },
          { month: 10, value: 91 },
          { month: 11, value: 88 },
          { month: 12, value: 93 },
        ],
        globalStats: {
          wins: 28,
          losses: 4,
          winPercentage: 88,
        },
      },
    },
    rankings: [
      {
        category: "Singles",
        position: 3,
        trend: "up",
      },
      {
        category: "Doubles",
        position: 5,
        trend: "up",
      },
      {
        category: "Mixed Doubles",
        position: 8,
        trend: "stable",
      },
    ],
    latestMatch: {
      ...dummyMatch,
      player1: dummyOpponent,
      player2: dummyPlayer,
      winner: "player1",
      score: {
        sets: [
          { player1: 6, player2: 2 },
          { player1: 6, player2: 3 },
          { player1: 6, player2: 1 },
        ],
        winner: "player1",
      },
    },
  },
};

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse> {
  try {
    const { id } = await params;
    const data = playerData[id];

    if (!data) {
      return NextResponse.json(
        { error: "Player not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch player data" },
      { status: 500 }
    );
  }
}


