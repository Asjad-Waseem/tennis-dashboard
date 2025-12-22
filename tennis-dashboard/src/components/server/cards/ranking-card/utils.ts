// Base dimensions for percentage calculations (original design dimensions)
const BASE_WIDTH = 200;
const BASE_HEIGHT = 100;

/**
 * Helper function to convert px to percentage for width (horizontal)
 */
export const pxToPercentWidth = (px: string): string => {
  const pxValue = parseFloat(px.replace("px", ""));
  return `${(pxValue / BASE_WIDTH) * 100}%`;
};

/**
 * Helper function to convert px to percentage for height (vertical)
 */
export const pxToPercentHeight = (px: string): string => {
  const pxValue = parseFloat(px.replace("px", ""));
  return `${(pxValue / BASE_HEIGHT) * 100}%`;
};

/**
 * Helper to parse and convert transformOrigin
 */
export const convertTransformOrigin = (
  transformOrigin: string | undefined,
  shapeLeft: string,
  shapeTop: string
): string => {
  if (!transformOrigin || transformOrigin === "0 0" || transformOrigin === "top left") {
    return transformOrigin || "0 0";
  }

  if (transformOrigin.includes("px")) {
    const match = transformOrigin.match(/([\d.-]+)px\s+([\d.-]+)px/);
    if (match) {
      const originX = parseFloat(match[1]);
      const originY = parseFloat(match[2]);
      const elementX = parseFloat(shapeLeft.replace("px", ""));
      const elementY = parseFloat(shapeTop.replace("px", ""));
      // Calculate relative position (rotation point - element position)
      const relativeX = originX - elementX;
      const relativeY = originY - elementY;
      // Convert to percentage
      const relativeXPercent = (relativeX / BASE_WIDTH) * 100;
      const relativeYPercent = (relativeY / BASE_HEIGHT) * 100;
      return `${relativeXPercent}% ${relativeYPercent}%`;
    }
  }
  return transformOrigin;
};

