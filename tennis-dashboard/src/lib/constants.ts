import type {
  NavigationItem,
  Player,
  Match,
  Ranking,
  Statistics,
} from "@/types";

// Navigation items for sidebar
export const navigationItems: NavigationItem[] = [
  {
    id: "all-games",
    label: "All games",
    icon: "cloud",
    href: "/",
  },
  {
    id: "live-games",
    label: "Live Games",
    icon: "live",
    href: "/live",
    badge: "LIVE",
    badgeColor: "red",
  },
  {
    id: "score",
    label: "Score",
    icon: "scorecard",
    href: "/score",
    isActive: true,
  },
  {
    id: "categories",
    label: "Categories",
    icon: "grid",
    href: "/categories",
  },
  {
    id: "video",
    label: "Video",
    icon: "play",
    href: "/video",
  },
  {
    id: "statistic",
    label: "Statistic",
    icon: "chart",
    href: "/statistic",
  },
];

// Dummy player data
export const dummyPlayer: Player = {
  id: "1",
  name: "Anindita Rahmawati",
  shortName: "Anindita R.",
  country: "Indonesia",
  countryCode: "IDN",
  avatar: "/anindita.svg",
  age: 27,
  birthDate: "24-02-1993",
  sex: "Women",
  wta: 10,
};

export const dummyOpponent: Player = {
  id: "2",
  name: "Naomi Osaka",
  shortName: "Naomi O.",
  country: "Japan",
  countryCode: "JPN",
  avatar: "/naoimi.svg",
  age: 26,
  birthDate: "16-10-1997",
  sex: "Women",
  wta: 3,
};

// Dummy match data
export const dummyMatch: Match = {
  id: "1",
  date: "18 January 2020",
  tournament: "Australia Open",
  surface: "hard",
  category: "Singles",
  player1: dummyPlayer,
  player2: dummyOpponent,
  score: {
    sets: [
      { player1: 2, player2: 0 },
      { player1: 6, player2: 3 },
      { player1: 6, player2: 1 },
    ],
    winner: "player1",
  },
  status: "completed",
  winner: "player1",
};

// Dummy rankings
export const dummyRankings: Ranking[] = [
  {
    category: "Singles",
    position: 18,
    trend: "up",
  },
  {
    category: "Doubles",
    position: 20,
    trend: "up",
  },
  {
    category: "Mixed Doubles",
    position: 16,
    trend: "down",
  },
];

// Statistics grouped by year (used for dynamic charts)
export const dummyStatisticsByYear: Record<number, Statistics> = {
  2019: {
    year: 2019,
    monthlyPerformance: [
      { month: 1, value: 75 },
      { month: 2, value: 82 },
      { month: 3, value: 68 },
      { month: 4, value: 90 },
      { month: 5, value: 85 },
      { month: 6, value: 78 },
      { month: 7, value: 88 },
      { month: 8, value: 92 },
      { month: 9, value: 80 },
      { month: 10, value: 85 },
      { month: 11, value: 79 },
      { month: 12, value: 87 },
    ],
    globalStats: {
      wins: 23,
      losses: 8,
      winPercentage: 75,
    },
  },

  2020: {
    year: 2020,
    monthlyPerformance: [
      { month: 1, value: 70 },
      { month: 2, value: 76 },
      { month: 3, value: 72 },
      { month: 4, value: 85 },
      { month: 5, value: 88 },
      { month: 6, value: 80 },
      { month: 7, value: 90 },
      { month: 8, value: 93 },
      { month: 9, value: 86 },
      { month: 10, value: 89 },
      { month: 11, value: 84 },
      { month: 12, value: 91 },
    ],
    globalStats: {
      wins: 25,
      losses: 6,
      winPercentage: 81,
    },
  },

  2021: {
    year: 2021,
    monthlyPerformance: [
      { month: 1, value: 78 },
      { month: 2, value: 80 },
      { month: 3, value: 75 },
      { month: 4, value: 88 },
      { month: 5, value: 90 },
      { month: 6, value: 83 },
      { month: 7, value: 91 },
      { month: 8, value: 94 },
      { month: 9, value: 89 },
      { month: 10, value: 92 },
      { month: 11, value: 87 },
      { month: 12, value: 93 },
    ],
    globalStats: {
      wins: 27,
      losses: 5,
      winPercentage: 84,
    },
  },

  2025: {
    year: 2025,
    monthlyPerformance: [
      { month: 1, value: 85 },
      { month: 2, value: 88 },
      { month: 3, value: 82 },
      { month: 4, value: 90 },
      { month: 5, value: 92 },
      { month: 6, value: 89 },
      { month: 7, value: 94 },
      { month: 8, value: 96 },
      { month: 9, value: 91 },
      { month: 10, value: 93 },
      { month: 11, value: 90 },
      { month: 12, value: 95 },
    ],
    globalStats: {
      wins: 30,
      losses: 3,
      winPercentage: 91,
    },
  },
};
