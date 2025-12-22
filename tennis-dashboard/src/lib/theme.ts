/**
 * Theme Colors
 * 
 * Centralized color definitions for the tennis dashboard application.
 * All repeated hex color codes should be extracted here and reused.
 */

export const colors = {
  // Text Colors
  text: {
    primary: "#121212",
    secondary: "#000000",
    dark: "#2C2745",
    darkPurple: "#1B0031",
  },

  // Primary Colors
  primary: {
    blue: "#1657FF",
    blueDark: "#1245CC",
    blueLight: "#BACCFD",
    blueLighter: "#E6EDFF",
    blueLightest: "#EEF2FF",
    blueBackground: "#dbe6fd",
    blueBackgroundLight: "#F5F7FA",
    blueBackgroundLighter: "#EBEEFF",
    blueBackgroundLightest: "#EFF3FE",
  },

  // Purple Gradient Colors
  purple: {
    gradient: {
      start: "#5C24FC",
      end: "#9D7AFF",
    },
    dark: "#332A7C",
    medium: "#7F77C5",
    light: "#B9C0DE",
  },

  // Pink Colors
  pink: {
    primary: "#FFC2F9",
    secondary: "#F44771",
    tertiary: "#FF7193",
    accent: "#FF16A2",
    gradient: {
      start: "#F44771",
      end: "#FD29B5",
    },
  },

  // Orange Colors
  orange: {
    primary: "#FF9A3E",
    secondary: "#FFC087",
    accent: "#FFA000",
  },

  // Yellow Colors
  yellow: {
    light: "#FFF5D9",
    medium: "#FFBB38",
    gradient: {
      start: "#FFF6B7",
      end: "#F6416C",
    },
    gradient2: {
      start: "#FFE985",
      end: "#FA742B",
    },
  },

  // Cyan/Teal Colors
  cyan: {
    primary: "#16DBCC",
    light: "#DCFAF8",
  },

  // Green Colors
  green: {
    primary: "#30D354",
    secondary: "#5DE27B",
  },

  // Gray Colors
  gray: {
    light: "#C4C4C4",
    medium: "#353E6C",
  },

  // Chart Gradient Colors
  chart: {
    purpleGradient: {
      start: "#CE9FFC",
      end: "#7367F0",
    },
    blueGradient: {
      start: "#4262FE",
      end: "#C059FF",
    },
  },

  // White
  white: "#FFFFFF",
} as const;

/**
 * Helper function to get gradient string
 */
export const getGradient = (
  start: string,
  end: string,
  direction: "deg" | "180deg" | "101.84deg" = "180deg"
): string => {
  return `linear-gradient(${direction}, ${start} 0%, ${end} 100%)`;
};

/**
 * Pre-defined gradient strings for common use cases
 */
export const gradients = {
  purple: getGradient(colors.purple.gradient.start, colors.purple.gradient.end, "101.84deg"),
  pink: getGradient(colors.pink.gradient.start, colors.pink.gradient.end),
  yellow: getGradient(colors.yellow.gradient.start, colors.yellow.gradient.end),
  yellow2: getGradient(colors.yellow.gradient2.start, colors.yellow.gradient2.end),
  chartPurple: getGradient(colors.chart.purpleGradient.start, colors.chart.purpleGradient.end),
  chartBlue: getGradient(colors.chart.blueGradient.start, colors.chart.blueGradient.end),
} as const;

