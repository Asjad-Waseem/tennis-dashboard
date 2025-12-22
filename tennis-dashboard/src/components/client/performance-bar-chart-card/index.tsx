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
    <div className="flex h-full min-h-[350px] flex-col rounded-[30px] bg-white p-6">
      {/* Year selector */}
      <div className="mb-8 mt-7 flex items-center justify-center gap-[72px]">
        <button
          onClick={onPrevYear}
          className="cursor-pointer text-xl text-gray-400 hover:text-gray-900"
        >
          ←
        </button>

        <span className="text-[20px] font-medium tracking-wide text-gray-900">
          {year}
        </span>

        <button
          onClick={onNextYear}
          disabled={disableNext}
          className={`text-xl ${
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

