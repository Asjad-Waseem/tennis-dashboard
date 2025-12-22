"use client";

import ReactCountryFlag from "react-country-flag";

import { getCountryCode } from "./utils";

import type { CountryFlagProps } from "./types";

const SIZE_CLASS_MAP: Record<number, string> = {
  16: "text-base",
  20: "text-xl",
  24: "text-2xl",
  32: "text-3xl",
};

const CountryFlag = ({
  country,
  countryCode,
  size = 24,
}: CountryFlagProps): React.ReactElement => {
  const code = getCountryCode(country, countryCode);

  const sizeClass = SIZE_CLASS_MAP[size] ?? "text-2xl";

  return (
    <ReactCountryFlag
      countryCode={code}
      svg
      className={sizeClass}
      title={country}
    />
  );
};

export default CountryFlag;
