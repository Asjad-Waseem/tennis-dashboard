import { colors } from "@/lib/theme";
import type { DecorativeShape } from "@/components/server/cards/ranking-card/types";

interface RankingCardBaseProps {
  category: string;
  rank: number;
  arrowDirection: "up" | "down" | "stable";
  textTop: string;
  rankTop: string;
  rankLeft: string;
}

interface RankingCardProps extends RankingCardBaseProps {
  bgColor: string;
  decorativeShapes: DecorativeShape[];
}

export const getRankingCardProps = (category: string, ranking: { position: number; trend: "up" | "down" | "stable" } | undefined): RankingCardProps | null => {
  if (!ranking) return null;

  const baseProps: RankingCardBaseProps = {
    category,
    rank: ranking.position,
    arrowDirection: ranking.trend === "up" ? "up" : ranking.trend === "down" ? "down" : "stable",
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


