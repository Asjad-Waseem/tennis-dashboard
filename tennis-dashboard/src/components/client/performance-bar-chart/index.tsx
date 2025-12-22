import {
  BarChart,
  Bar,
  XAxis,
  ResponsiveContainer,
  BarStack,
  Tooltip,
} from "recharts";
import { colors, gradients } from "@/lib/theme";
import type { Props } from "./types";
import { MAX_VALUE } from "./constants";

export default function PerformanceBarChart({ data }: Props) {
  const chartData = data.map((item) => {
    const purple = Math.round(item.value * 0.55);
    const pink = item.value - purple;

    return {
      month: String(item.month).padStart(2, "0"),
      grey: MAX_VALUE,
      purple,
      pink,
      total: item.value,
    };
  });

  const CustomTooltip = ({
    active,
    payload,
  }: {
    active?: boolean;
    payload?: Array<{
      name: string;
      value: number;
      dataKey: string;
      fill: string;
      payload?: {
        month: string;
        grey: number;
        purple: number;
        pink: number;
        total: number;
      };
    }>;
  }) => {
    if (active && payload && payload.length > 0) {
      const purpleValue =
        payload.find((item) => item.dataKey === "purple")?.value || 0;
      const pinkValue =
        payload.find((item) => item.dataKey === "pink")?.value || 0;
      const total = purpleValue + pinkValue;
      const month = payload[0]?.payload?.month || "";

      return (
        <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-lg">
          <div className="mb-2 text-xs font-medium text-gray-500">
            Month {month}
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <div
                  className="h-3 w-3 rounded"
                  style={{
                    background:
                      gradients.chartBlue,
                  }}
                />
                <span className="text-sm font-medium text-gray-700">
                  Purple
                </span>
              </div>
              <span className="text-sm font-semibold text-gray-900">
                {purpleValue}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <div
                  className="h-3 w-3 rounded"
                  style={{
                    background:
                      gradients.pink,
                  }}
                />
                <span className="text-sm font-medium text-gray-700">Pink</span>
              </div>
              <span className="text-sm font-semibold text-gray-900">
                {pinkValue}
              </span>
            </div>
            <div className="border-t border-gray-200 pt-2">
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-semibold text-gray-900">
                  Total
                </span>
                <span className="text-base font-bold text-gray-900">
                  {total}
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={chartData} barCategoryGap="10%">
        <XAxis
          dataKey="month"
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 10, fill: colors.primary.blueLight }}
        />
        <Tooltip
          content={<CustomTooltip />}
          cursor={{ fill: "transparent", cursor: "pointer" }}
        />
        <BarStack>
          <Bar
            dataKey="purple"
            stackId="a"
            fill="url(#purpleGradient)"
            radius={[0, 0, 0, 0]}
            barSize={5}
            background={{ fill: colors.primary.blueBackgroundLightest, radius: 10 }}
            style={{ cursor: "pointer" }}
          />
          <Bar
            dataKey="pink"
            stackId="a"
            fill="url(#pinkGradient)"
            radius={[0, 0, 50, 50]}
            barSize={5}
            background={{ fill: colors.primary.blueBackgroundLightest, radius: 10 }}
            style={{ cursor: "pointer" }}
          />
        </BarStack>

        <defs>
          <linearGradient id="greyGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={colors.primary.blueBackgroundLightest} />
            <stop offset="100%" stopColor={colors.primary.blueBackgroundLightest} />
          </linearGradient>
          <linearGradient id="purpleGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={colors.chart.blueGradient.start} />
            <stop offset="100%" stopColor={colors.chart.blueGradient.end} />
          </linearGradient>
          <linearGradient id="pinkGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={colors.pink.gradient.start} />
            <stop offset="100%" stopColor={colors.pink.gradient.end} />
          </linearGradient>
        </defs>
      </BarChart>
    </ResponsiveContainer>
  );
}

