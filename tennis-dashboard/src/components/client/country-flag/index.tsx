"use client";

import ReactCountryFlag from "react-country-flag";
import type { CountryFlagProps } from "./types";
import { getCountryCode } from "./utils";

/**
 * Client Component: Country Flag
 *
 * Uses react-country-flag library to display country flags
 */
export default function CountryFlag({
  country,
  countryCode,
  width = 24,
  height = 24,
}: CountryFlagProps): React.ReactElement {
  const code = getCountryCode(country, countryCode);

  return (
    <ReactCountryFlag
      countryCode={code}
      svg
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
      title={country}
    />
  );
}

