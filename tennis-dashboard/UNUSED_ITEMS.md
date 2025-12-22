8. **`src/app/styles/global.css`**
   - Not imported anywhere
   - Only `globals.css` is used (different file)

## Duplicate Type Definitions:

1. **`MonthlyPerformance` type**
   - Defined in `src/components/client/PerformanceBarChart.tsx` (line 10)
   - Also defined in `src/components/client/PerformanceBarChartCard.tsx` (line 15)
   - Also defined in `src/types/index.ts` (line 53)
   - Should use the one from `src/types/index.ts` for consistency
