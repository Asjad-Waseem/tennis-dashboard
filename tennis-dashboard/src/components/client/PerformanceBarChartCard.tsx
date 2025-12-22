import PerformanceBarChart from "@/components/client/PerformanceBarChart";
import type { MonthlyPerformance } from "@/types";
import { colors } from "@/lib/theme";

type Props = {
  year: number;
  data: MonthlyPerformance[];
  onPrevYear: () => void;
  onNextYear: () => void;
  disableNext: boolean;
};

export default function PerformanceBarChartCard({
  year,
  data,
  onPrevYear,
  onNextYear,
  disableNext,
}: Props) {
  return (
    <div className="flex h-full min-h-[350px] flex-col rounded-[30px] bg-white p-6">
      {/* Year selector */}
      <div className="mb-8 mt-7 flex items-center justify-center gap-[72px]">
        <button
          onClick={onPrevYear}
          className="text-xl text-gray-400 hover:text-gray-900"
        >
          ←
        </button>

        <span className="text-[20px] font-medium tracking-[0.5px]" style={{ color: colors.text.primary }}>
          {year}
        </span>

        <button
          onClick={onNextYear}
          disabled={disableNext}
          className={`text-xl ${
            disableNext
              ? "cursor-not-allowed text-gray-300"
              : "text-gray-400 hover:text-gray-900"
          }`}
        >
          →
        </button>
      </div>

      {/* Chart */}
      <div className="flex-1">
        <PerformanceBarChart data={data} />
      </div>
    </div>
  );
}
