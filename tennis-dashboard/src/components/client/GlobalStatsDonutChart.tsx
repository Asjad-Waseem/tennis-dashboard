"use client";

import { Cell, Pie, PieChart, Tooltip } from "recharts";
import { colors, gradients } from "@/lib/theme";

type Props = {
  stats: {
    wins: number;
    losses: number;
    winPercentage: number;
  };
};

const GlobalStatisticChart = ({ stats }: Props) => {
  /* =========================
     DATA MAPPING
     ========================= */

  const winPct = stats.winPercentage;
  const lossPct = 100 - winPct;

  const playedData = [
    { name: "Purple", value: winPct * 0.4 },
    { name: "Red", value: winPct * 0.3 },
    { name: "Yellow", value: winPct * 0.3 },
  ];

  const startAngle = 90;
  const endAngle = startAngle - (winPct / 100) * 360;

  /* =========================
     CUSTOM TOOLTIP
     ========================= */

  const CustomTooltip = ({
    active,
    payload,
  }: {
    active?: boolean;
    payload?: Array<{
      name: string;
      value: number;
      payload?: { name: string };
    }>;
  }) => {
    if (!active || !payload || payload.length === 0) return null;

    const data = payload[0];
    const segmentName = data.payload?.name || data.name || "";

    let displayName = "";
    let colorIndicator = "";
    let actualValue = 0;

    if (segmentName === "Purple") {
      displayName = "Purple";
      colorIndicator = gradients.chartPurple;
      actualValue = Math.round(stats.wins * 0.4);
    } else if (segmentName === "Red") {
      displayName = "Red";
      colorIndicator = gradients.yellow;
      actualValue = Math.round(stats.wins * 0.3);
    } else if (segmentName === "Yellow") {
      displayName = "Yellow";
      colorIndicator = gradients.yellow2;
      actualValue = Math.round(stats.wins * 0.3);
    } else if (segmentName === "Losses") {
      displayName = "Losses";
      colorIndicator = colors.primary.blueBackgroundLightest;
      actualValue = stats.losses;
    }

    return (
      <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-lg">
        <div className="mb-2 text-xs font-medium text-gray-500">
          {displayName}
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div
                className="h-3 w-3 rounded"
                style={{ background: colorIndicator }}
              />
              <span className="text-sm font-medium text-gray-700">
                {segmentName === "Losses" ? "Losses" : "Wins"}
              </span>
            </div>
            <span className="text-sm font-semibold text-gray-900">
              {actualValue}
            </span>
          </div>

          <div className="border-t border-gray-200 pt-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-gray-900">Total</span>
              <span className="text-base font-bold text-gray-900">
                {stats.wins + stats.losses}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <h2
        className="text-xl text-center font-medium leading-6 tracking-[0.5px]"
        style={{ color: colors.text.primary }}
      >
        Global Statistic
      </h2>

      <PieChart width={300} height={300}>
        {/* ================= Gradients ================= */}
        <defs>
          <linearGradient id="winsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colors.chart.purpleGradient.start} />
            <stop offset="100%" stopColor={colors.chart.purpleGradient.end} />
          </linearGradient>

          <linearGradient
            id="lossesGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor={colors.yellow.gradient.start} />
            <stop offset="100%" stopColor={colors.yellow.gradient.end} />
          </linearGradient>

          <linearGradient
            id="drawsGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor={colors.yellow.gradient2.start} />
            <stop offset="100%" stopColor={colors.yellow.gradient2.end} />
          </linearGradient>
        </defs>

        {/* TOOLTIP WIRED HERE */}
        <Tooltip content={<CustomTooltip />} />

        {/* ================= Grey Background Ring ================= */}
        <Pie
          data={[{ name: "Losses", value: lossPct }]}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={100}
          startAngle={90}
          endAngle={-270}
          isAnimationActive={false}
        >
          <Cell fill={colors.primary.blueBackgroundLightest} />
        </Pie>

        {/* ================= Win Segments ================= */}
        <Pie
          data={playedData}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={110}
          startAngle={startAngle}
          endAngle={endAngle}
          isAnimationActive={false}
        >
          <Cell fill="url(#winsGradient)" />
          <Cell fill="url(#lossesGradient)" />
          <Cell fill="url(#drawsGradient)" />
        </Pie>

        {/* ================= Center Text ================= */}
        <text
          x="50%"
          y="46%"
          textAnchor="middle"
          dominantBaseline="middle"
          fill={colors.text.primary}
          className="text-xl font-semibold"
        >
          {stats.wins} Wins
        </text>

        <text
          x="50%"
          y="56%"
          textAnchor="middle"
          dominantBaseline="middle"
          fill={colors.primary.blueLight}
        >
          ({stats.winPercentage}%)
        </text>
      </PieChart>

      {/* ================= Legend ================= */}
      <div className="flex justify-center gap-4">
        <span
          className="h-2.5 w-2.5 rounded"
          style={{ background: gradients.chartPurple }}
        />
        <span
          className="h-2.5 w-2.5 rounded"
          style={{ background: gradients.yellow }}
        />
        <span
          className="h-2.5 w-2.5 rounded"
          style={{ background: gradients.yellow2 }}
        />
      </div>
    </div>
  );
};

export default GlobalStatisticChart;
