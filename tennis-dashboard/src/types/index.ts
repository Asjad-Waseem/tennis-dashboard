// Core domain types for the Tennis Dashboard
// All types are strictly typed with no any or unknown

export interface Player {
  id: string;
  name: string;
  shortName: string;
  country: string;
  countryCode: string;
  avatar: string;
  age: number;
  birthDate: string;
  sex: "Men" | "Women";
  wta?: number;
  atp?: number;
}

export interface Match {
  id: string;
  date: string;
  tournament: string;
  surface: string;
  category: "Singles" | "Doubles" | "Mixed Doubles";
  player1: Player;
  player2: Player;
  score: MatchScore;
  status: "upcoming" | "live" | "completed";
  winner?: "player1" | "player2";
}

export interface MatchScore {
  sets: SetScore[];
  winner: "player1" | "player2";
}

export interface SetScore {
  player1: number;
  player2: number;
}

export interface Ranking {
  category: "Singles" | "Doubles" | "Mixed Doubles";
  position: number;
  trend: "up" | "down" | "stable";
}

export interface Statistics {
  year: number;
  monthlyPerformance: MonthlyPerformance[];
  globalStats: GlobalStats;
}

export interface MonthlyPerformance {
  month: number;
  value: number;
}

export interface GlobalStats {
  wins: number;
  losses: number;
  winPercentage: number;
  draws?: number;
}

export interface NavigationItem {
  id: string;
  label: string;
  icon: string;
  href: string;
  isActive?: boolean;
  badge?: string;
  badgeColor?: "red" | "blue" | "green" | "yellow";
}

export interface User {
  id: string;
  name: string;
  avatar: string;
  email: string;
}
