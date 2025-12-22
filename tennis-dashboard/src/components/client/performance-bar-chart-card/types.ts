import type { MonthlyPerformance } from "@/types";

export type Props = {
  year: number;
  data: MonthlyPerformance[];
  onPrevYear: () => void;
  onNextYear: () => void;
  disableNext: boolean;
};

