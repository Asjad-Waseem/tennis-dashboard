export interface DecorativeShape {
  type: "rotated-rectangle" | "white-pill" | "stroke-oval";
  color?: string;
  left: string;
  top: string;
  rotation?: number;
  transformOrigin?: string;
}

export interface RankingCardProps {
  category: string;
  rank: number;
  arrowDirection: "up" | "down" | "stable";
  bgColor: string;
  decorativeShapes: DecorativeShape[];
  textTop: string;
  rankTop: string;
  rankLeft: string;
}


