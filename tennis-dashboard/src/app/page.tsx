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
      <div className="flex flex-col gap-4 lg:flex-row lg:gap-6">
        {/* Main Content Area */}
        <div className="flex-1 min-w-0">
          {/* Live Scores Section */}
          <div className="mb-6 lg:mb-8">
            <LiveScoresCard />
          </div>

          {/* Statistics Section */}
          <StatisticsSectionClient />

          {/* Rankings Section */}
          <RankingsSectionClient />
        </div>

        {/* Right Sidebar - Player Profile */}
        <div className="flex flex-col gap-4 lg:gap-6 lg:min-w-0">
          <PlayerProfileClient />
          <div className="lg:mt-auto">
            <LatestScores />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
