import { ReactElement } from "react";

import DashboardLayout from "@/components/server/dashboard-layout";
import LiveScoresCard from "@/components/client/live-scores-card";
import StatisticsSectionClient from "@/components/client/statistics-section-client";
import RankingsSectionClient from "@/components/client/rankings-section-client";
import PlayerProfileClient from "@/components/client/player-profile-client";
import LatestScores from "@/components/client/latest-scores";

/**
 * Main Dashboard Page
 *
 * Server Component that composes:
 * - Server Components: Layout, Statistics, Rankings, Player Profile
 * - Client Components: Live Scores (needs API fetch)
 */
const DashboardPage = (): ReactElement => {
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
};

export default DashboardPage;
