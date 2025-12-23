import PerformanceBarChart from "@/components/client/performance-bar-chart";
import type { Props } from "./types";

const PerformanceBarChartCard = ({
  year,
  data,
  onPrevYear,
  onNextYear,
  disableNext,
}: Props) => {
  return (
    <div className="flex h-full min-h-[280px] sm:min-h-[320px] md:min-h-[350px] flex-col rounded-2xl sm:rounded-[24px] md:rounded-[30px] bg-white p-4 sm:p-5 md:p-6">
      {/* Year selector */}
      <div className="mb-4 sm:mb-6 md:mb-8 mt-4 sm:mt-5 md:mt-7 flex items-center justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-[72px]">
        <button
          onClick={onPrevYear}
          className="cursor-pointer text-lg sm:text-xl text-gray-400 hover:text-gray-900 transition-colors"
        >
          ←
        </button>

        <span className="text-base sm:text-lg md:text-[20px] font-medium tracking-wide text-gray-900">
          {year}
        </span>

        <button
          onClick={onNextYear}
          disabled={disableNext}
          className={`text-lg sm:text-xl transition-colors ${
            disableNext
              ? "cursor-not-allowed text-gray-300"
              : "cursor-pointer text-gray-400 hover:text-gray-900"
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
};

export default PerformanceBarChartCard;

