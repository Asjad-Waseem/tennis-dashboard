import DashboardLayout from "@/components/server/DashboardLayout";
import LiveScoresCard from "@/components/client/LiveScoresCard";
import StatisticsSectionClient from "@/components/client/StatisticsSectionClient";
import RankingsSectionClient from "@/components/client/RankingsSectionClient";
import PlayerProfileClient from "@/components/client/PlayerProfileClient";
import LatestScores from "@/components/client/LatestScores";

/**
 * Main Dashboard Page
 *
 * Server Component that composes:
 * - Server Components: Layout, Statistics, Rankings, Player Profile
 * - Client Components: Live Scores (needs API fetch)
 */
export default function DashboardPage(): React.ReactElement {
  return (
    <DashboardLayout>
      <div className="flex gap-6">
        {/* Main Content Area */}
        <div className="flex-1">
          {/* Live Scores Section */}
          <div className="mb-8">
            <LiveScoresCard />
          </div>

          {/* Statistics Section */}
          <StatisticsSectionClient />

          {/* Rankings Section */}
          <RankingsSectionClient />
        </div>

        {/* Right Sidebar - Player Profile */}
        <div className="flex flex-col">
          <PlayerProfileClient />
          <div className="mt-auto">
            <LatestScores />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
