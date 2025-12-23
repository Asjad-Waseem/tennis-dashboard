/**
 * Maps country names/codes to ISO 2-letter country codes
 * react-country-flag uses 2-letter ISO codes (e.g., "JP", "ID")
 */
export const getCountryCode = (country: string, countryCode?: string): string => {
  // If countryCode is provided, convert 3-letter to 2-letter if needed
  if (countryCode) {
    const codeMap: Record<string, string> = {
      JPN: "JP",
      IDN: "ID",
      JP: "JP",
      ID: "ID",
    };
    return codeMap[countryCode.toUpperCase()] || countryCode.substring(0, 2).toUpperCase();
  }

  // Map country names to 2-letter codes
  const countryLower = country.toLowerCase();
  const countryMap: Record<string, string> = {
    indonesia: "ID",
    japan: "JP",
  };

  return countryMap[countryLower] || "ID"; // Default to Indonesia
};


