"use client";

import { useState } from "react";
import { dummyStatisticsByYear } from "@/lib/constants";
import PerformanceBarChartCard from "@/components/client/PerformanceBarChartCard";
import GlobalStatsDonutChart from "@/components/client/GlobalStatsDonutChart";

export default function StatisticsSection(): React.ReactElement {
  const CURRENT_YEAR = 2025;

  const availableYears = Object.keys(dummyStatisticsByYear)
    .map(Number)
    .sort((a, b) => a - b);

  const [year, setYear] = useState<number>(availableYears[0]);

  const stats = dummyStatisticsByYear[year];

  return (
    <section className="mb-8">
      <h2 className="mb-4 text-lg font-semibold text-gray-900">Statistic</h2>

      <div className="grid gap-6 md:grid-cols-2">
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
            {/* <GlobalStatsDonutChart stats={stats.globalStats} /> */}
            <GlobalStatsDonutChart
              stats={stats.globalStats}
              // wins={stats.globalStats.wins}
              // winPercentage={stats.globalStats.winPercentage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
