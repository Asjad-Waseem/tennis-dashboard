"use client";

import { useEffect, useState } from "react";
import { usePlayer } from "@/contexts/PlayerContext";
import type { Statistics } from "@/types";
import PerformanceBarChartCard from "@/components/client/performance-bar-chart-card";
import GlobalStatsDonutChart from "@/components/client/global-stats-donut-chart";
import type { PlayerStatisticsData } from "./types";
import { CURRENT_YEAR } from "./constants";

const StatisticsSectionClient = (): React.ReactElement => {
  const { selectedPlayerId } = usePlayer();
  const [statisticsByYear, setStatisticsByYear] = useState<
    Record<number, Statistics>
  >({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchStatistics(): Promise<void> {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/player/${selectedPlayerId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch statistics");
        }
        const data: PlayerStatisticsData = await response.json();
        setStatisticsByYear(data.statistics);
      } catch (error) {
        console.error("Error fetching statistics:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchStatistics();
  }, [selectedPlayerId]);

  const availableYears = Object.keys(statisticsByYear)
    .map(Number)
    .sort((a, b) => a - b);

  const [year, setYear] = useState<number>(
    availableYears.length > 0 ? availableYears[0] : CURRENT_YEAR
  );

  // Update year when statistics change
  useEffect(() => {
    if (availableYears.length > 0 && !availableYears.includes(year)) {
      setYear(availableYears[0]);
    }
  }, [availableYears, year]);

  if (isLoading || availableYears.length === 0) {
    return (
      <section className="mb-8">
        <h2 className="mb-4 text-lg font-semibold text-gray-900">Statistic</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="h-[350px] rounded-3xl bg-white animate-pulse" />
          <div className="h-[350px] rounded-3xl bg-white animate-pulse" />
        </div>
      </section>
    );
  }

  const stats = statisticsByYear[year];

  if (!stats) {
    return (
      <section className="mb-8">
        <h2 className="mb-4 text-lg font-semibold text-gray-900">Statistic</h2>
        <p className="text-gray-500">
          No statistics available for this player.
        </p>
      </section>
    );
  }

  return (
    <section className="mb-8">
      <h2 className="mb-4 text-lg font-semibold text-gray-900">Statistic</h2>

      <div className="grid gap-6 md:grid-cols-2 overflow-visible">
        {/* Performance */}
        <PerformanceBarChartCard
          year={year}
          data={stats.monthlyPerformance}
          onPrevYear={() => {
            const prevIndex = availableYears.indexOf(year) - 1;
            if (prevIndex >= 0) setYear(availableYears[prevIndex]);
          }}
          onNextYear={() => {
            const nextIndex = availableYears.indexOf(year) + 1;
            if (nextIndex < availableYears.length)
              setYear(availableYears[nextIndex]);
          }}
          disableNext={year >= CURRENT_YEAR}
        />

        {/* Global Statistic */}
        <div className="flex h-full min-h-[350px] flex-col rounded-[30px] bg-white p-6 overflow-visible">
          <div className="flex flex-1 items-center justify-center overflow-visible">
            <GlobalStatsDonutChart stats={stats.globalStats} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSectionClient;

