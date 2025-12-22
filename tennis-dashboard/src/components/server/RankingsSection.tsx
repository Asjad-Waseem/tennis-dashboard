import RankingCard from "./cards/RankingCard";
import { colors } from "@/lib/theme";

/**
 * Server Component: Rankings Section
 *
 * Why Server Component:
 * - Displays static ranking data
 * - No client-side interactivity required
 * - Better performance for static content
 */
export default function RankingsSection(): React.ReactElement {
  return (
    <section>
      <h2 className="mb-4 text-lg font-semibold text-gray-900">Rankings</h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* Singles Ranking Card */}
        <RankingCard
          category="Singles"
          rank={18}
          arrowDirection="up"
          bgColor={colors.pink.secondary}
          textTop="23px"
          rankTop="55px"
          rankLeft="20.8228px"
          decorativeShapes={[
            {
              type: "rotated-rectangle",
              color: colors.pink.tertiary,
              left: "159.711px",
              top: "0px",
              rotation: 45,
              transformOrigin: "top left",
            },
            {
              type: "white-pill",
              left: "121px",
              top: "-21px",
            },
            {
              type: "stroke-oval",
              left: "69.6261px",
              top: "49.6259px",
              rotation: -72.7023,
              transformOrigin: "0 0",
            },
          ]}
        />

        {/* Doubles Ranking Card */}
        <RankingCard
          category="Doubles"
          rank={20}
          arrowDirection="up"
          bgColor={colors.orange.primary}
          textTop="23px"
          rankTop="55px"
          rankLeft="16.2207px"
          decorativeShapes={[
            // {
            //   type: "rotated-rectangle",
            //   color: "#FFC087",
            //   left: "210px",
            //   top: "34px",
            //   rotation: 90,
            //   transformOrigin: "210px 34px",
            // },
            {
              type: "rotated-rectangle",
              // color: "#FF7193",
              color: colors.orange.secondary,
              left: "139.711px",
              top: "20px",
              rotation: 30,
              transformOrigin: "top left",
            },
            {
              type: "white-pill",
              left: "126px",
              top: "-24px",
            },
            {
              type: "stroke-oval",
              left: "181.5px",
              top: "-116.5px",
              rotation: 90,
              transformOrigin: "0 0",
            },
          ]}
        />

        {/* Mixed Doubles Ranking Card */}
        <RankingCard
          category="Mixed Doubles"
          rank={16}
          arrowDirection="down"
          bgColor={colors.purple.dark}
          textTop="23px"
          rankTop="55px"
          rankLeft="20.8228px"
          decorativeShapes={[
            // {
            //   type: "rotated-rectangle",
            //   color: "#7F77C5",
            //   left: "293.603px",
            //   top: "-89px",
            //   rotation: 120,
            //   transformOrigin: "293.603px -89px",
            // },
            {
              type: "rotated-rectangle",
              // color: "#FF7193",
              // color: "#FFC087",
              color: colors.purple.medium,
              left: "139.711px",
              top: "35px",
              rotation: 5,
              transformOrigin: "top left",
            },
            // {
            //   type: "white-pill",
            //   left: "118px",
            //   top: "45px",
            // },
            {
              type: "white-pill",
              left: "126px",
              top: "-24px",
            },
            {
              type: "stroke-oval",
              left: "87.1173px",
              top: "84.4548px",
              rotation: -105,
              transformOrigin: "87.1173px 84.4548px",
            },
          ]}
        />
      </div>
    </section>
  );
}
