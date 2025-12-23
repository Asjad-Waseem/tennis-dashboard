"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { usePlayer } from "@/contexts/PlayerContext";
import type { Player } from "@/types";
import CountryFlag from "@/components/client/country-flag";
import { colors, gradients } from "@/lib/theme";
import type { PlayerData } from "./types";

const PlayerProfileClient = (): React.ReactElement => {
  const { selectedPlayerId } = usePlayer();
  const [player, setPlayer] = useState<Player | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPlayerData(): Promise<void> {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/player/${selectedPlayerId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch player data");
        }
        const data: PlayerData = await response.json();
        setPlayer(data.player);
      } catch (error) {
        console.error("Error fetching player data:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPlayerData();
  }, [selectedPlayerId]);

  if (isLoading || !player) {
    return (
      <aside className="relative overflow-visible w-full max-w-full lg:max-w-sm">
        <div className="h-[400px] sm:h-[450px] md:h-[480px] lg:h-[505px] rounded-2xl sm:rounded-3xl bg-white animate-pulse" />
      </aside>
    );
  }

  return (
    <aside
      className="relative h-[400px] sm:h-[450px] md:h-[480px] lg:h-[505px] w-full lg:w-[400px] overflow-visible rounded-2xl sm:rounded-3xl"
      style={{
        filter: "drop-shadow(0px 50px 80px rgba(102, 30, 255, 0.2))",
      }}
    >
      {/* Main Card Container */}
      <div className="absolute inset-0 overflow-visible rounded-3xl bg-white">
        {/* Top Purple Gradient Section */}
        <div
          className="absolute top-0 left-0 right-0 h-[180px] sm:h-[200px] md:h-[210px] lg:h-[220px] overflow-visible rounded-t-2xl sm:rounded-t-3xl"
          style={{
            background: gradients.purple,
          }}
        >
          {/* Curved white bottom cut (Figma-like) */}
          <svg
            className="pointer-events-none absolute bottom-[-1px] left-0 z-[1] w-full"
            height="80"
            viewBox="0 0 400 80"
            preserveAspectRatio="none"
          >
            <path d="M0,42 C90,78 210,8 400,30 L400,80 L0,80 Z" fill="white" />
          </svg>

          {/* Player Name */}
          <h1 className="absolute left-4 sm:left-5 lg:left-[25px] top-6 sm:top-8 lg:top-10 z-[2] h-auto w-auto max-w-[60%] sm:max-w-[65%] lg:max-w-[158px] text-xl sm:text-2xl lg:text-3xl font-bold leading-[130%] sm:leading-[140%] lg:leading-[150%] tracking-wide text-white">
            {player.name}
          </h1>

          {/* Country Flag and Text Container */}
          <div className="absolute left-4 sm:left-5 lg:left-[25px] top-[110px] sm:top-[120px] md:top-[130px] lg:top-[140px] z-[2] flex h-5 sm:h-6 w-auto items-center gap-2">
            {/* Flag Icon */}
            <div className="h-5 w-5 sm:h-6 sm:w-6 flex-none">
              <CountryFlag
                country={player.country}
                countryCode={player.countryCode}
              />
            </div>

            {/* Country Name */}
            <span className="h-auto w-auto flex-none text-xs sm:text-sm lg:text-[15px] font-semibold leading-[14px] sm:leading-[16px] lg:leading-[18px] tracking-wide text-white">
              {player.country}
            </span>
          </div>

          {/* Large Profile Person SVG - positioned on the right, fully visible, overflowing top */}
          <div className="absolute -right-[20px] sm:-right-[25px] lg:-right-[35px] -top-[30px] sm:-top-[40px] lg:-top-[50px] z-10 h-[400px] w-[240px] sm:h-[450px] sm:w-[280px] md:h-[500px] md:w-[310px] lg:h-[545px] lg:w-[346px] overflow-visible">
            <Image
              src="/highlighted_tennis_player.svg"
              alt={`${player.name} illustration`}
              width={346}
              height={545}
              className="h-full w-full object-contain"
              priority
            />
          </div>
        </div>

        {/* White Bottom Section */}
        <div className="absolute left-0 right-0 top-[180px] sm:top-[200px] md:top-[210px] lg:top-[220px] h-[220px] sm:h-[250px] md:h-[270px] lg:h-[285px] overflow-visible rounded-b-2xl sm:rounded-b-3xl bg-white">
          {/* Biography Title */}
          <h2 className="absolute left-4 sm:left-5 lg:left-[25px] top-1 sm:top-0.5 h-auto w-auto text-xs sm:text-sm lg:text-[15px] font-semibold leading-[16px] sm:leading-[17px] lg:leading-[18px] tracking-wide text-gray-900">
            Biography
          </h2>

          {/* Small Avatar Icon under Biography */}
          <div className="absolute left-4 sm:left-5 lg:left-6 top-5 sm:top-6 lg:top-7 h-[50px] w-[42px] sm:h-[55px] sm:w-[46px] lg:h-[60px] lg:w-[50px] overflow-hidden rounded-[16px_8px] sm:rounded-[18px_9px] lg:rounded-[20px_10px]">
            <div
              className="absolute inset-0 rounded-[16px_8px] sm:rounded-[18px_9px] lg:rounded-[20px_10px]"
              style={{
                background: colors.pink.primary,
              }}
            />
            <div
              className="absolute inset-0 rounded-[16px_8px] sm:rounded-[18px_9px] lg:rounded-[20px_10px] opacity-30"
              style={{
                background: colors.gray.light,
              }}
            />
            {/* Player Avatar Image */}
            <div
              className="absolute left-[3.5px] sm:left-[4px] lg:left-[4.5px] top-[1.4px] sm:top-[1.5px] lg:top-[1.69px] h-[47px] w-[35px] sm:h-[51px] sm:w-[38px] lg:h-[56.62px] lg:w-[41px] overflow-hidden"
              style={{
                background: colors.pink.primary,
              }}
            >
              <Image
                src={player.avatar}
                alt={`${player.name} avatar`}
                width={41}
                height={57}
                className="h-full w-full object-contain"
                style={{
                  mixBlendMode: "multiply",
                }}
              />
            </div>
          </div>

          {/* Biography Details */}
          <div className="absolute left-4 sm:left-5 lg:left-6 top-[80px] sm:top-[90px] md:top-[95px] lg:top-[104px] flex h-auto w-auto max-w-[140px] sm:max-w-[150px] lg:max-w-[122px] flex-col gap-1.5 sm:gap-2 lg:gap-2.5 text-[10px] sm:text-xs lg:text-xs font-semibold leading-[12px] sm:leading-[13px] lg:leading-[14px] tracking-wide text-gray-900">
            <div className="whitespace-nowrap">Age : {player.age}</div>
            <div className="whitespace-nowrap">Birth : {player.birthDate}</div>
            <div className="whitespace-nowrap">Sex : {player.sex}</div>
            <div className="whitespace-nowrap">WTA : {player.wta}</div>
          </div>

          {/* Social Media Section */}
          <div className="absolute left-4 sm:left-5 lg:left-[25px] top-[160px] sm:top-[180px] md:top-[195px] lg:top-[208px] flex flex-col gap-2 sm:gap-2.5">
            {/* Social Media Title */}
            <h3 className="h-auto w-auto whitespace-nowrap text-[10px] sm:text-xs lg:text-xs font-semibold leading-[12px] sm:leading-[13px] lg:leading-[14px] tracking-wide text-gray-900">
              Social Media
            </h3>

            {/* Social Media Icons */}
            <div className="flex h-4 w-auto sm:h-5 sm:w-[45px] gap-3 sm:gap-4 lg:gap-5 items-center">
              {/* Twitter Icon */}
              <a
                href="#"
                className="flex-none h-4 w-4 sm:h-5 sm:w-5 transition-all duration-200 hover:scale-110"
                aria-label="Twitter"
                onMouseEnter={(e) => {
                  const svg = e.currentTarget.querySelector("svg");
                  if (svg) {
                    svg.style.fill = colors.primary.blue;
                  }
                }}
                onMouseLeave={(e) => {
                  const svg = e.currentTarget.querySelector("svg");
                  if (svg) {
                    svg.style.fill = colors.primary.blueLight;
                  }
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-colors duration-200"
                  style={{ fill: colors.primary.blueLight }}
                >
                  <path d="M17.3334 5.42545C16.794 5.65977 16.207 5.82841 15.6025 5.89409C16.2302 5.51853 16.7002 4.92521 16.9244 4.22545C16.3354 4.57833 15.6902 4.82578 15.0173 4.95681C14.7361 4.65402 14.3959 4.4128 14.0181 4.24819C13.6402 4.08357 13.2328 3.99909 12.8211 4.00001C11.1554 4.00001 9.81583 5.35977 9.81583 7.02841C9.81583 7.26273 9.84403 7.49705 9.88986 7.72249C7.39577 7.59113 5.17135 6.39113 3.69253 4.55385C3.42307 5.01737 3.28186 5.54514 3.2836 6.08225C3.2836 7.13314 3.81415 8.05977 4.62318 8.60474C4.1464 8.58583 3.68079 8.45385 3.26421 8.21953V8.25681C3.26421 9.72841 4.2971 10.9479 5.6737 11.2284C5.41523 11.296 5.14933 11.3306 4.88229 11.3314C4.68664 11.3314 4.50156 11.3118 4.31473 11.2852C4.69545 12.4852 5.80413 13.3568 7.12432 13.3852C6.09144 14.2 4.79768 14.6793 3.39288 14.6793C3.14083 14.6793 2.90816 14.6704 2.66669 14.642C3.99922 15.503 5.58028 16 7.28296 16C12.8105 16 15.8351 11.3882 15.8351 7.38521C15.8351 7.25385 15.8351 7.12249 15.8263 6.99113C16.4115 6.55977 16.9244 6.02545 17.3334 5.42545Z" />
                </svg>
              </a>

              {/* Facebook Icon */}
              <a
                href="#"
                className="flex-none h-4 w-4 sm:h-5 sm:w-5 transition-all duration-200 hover:scale-110"
                aria-label="Facebook"
                onMouseEnter={(e) => {
                  const svg = e.currentTarget.querySelector("svg");
                  if (svg) {
                    svg.style.fill = colors.primary.blue;
                  }
                }}
                onMouseLeave={(e) => {
                  const svg = e.currentTarget.querySelector("svg");
                  if (svg) {
                    svg.style.fill = colors.primary.blueLight;
                  }
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-colors duration-200"
                  style={{ fill: colors.primary.blueLight }}
                >
                  <path d="M14.1425 10.3329L14.5575 7.43737H11.9635V5.55837C11.9635 4.76637 12.3257 3.99387 13.4876 3.99387H14.6667V1.52887C14.6667 1.52887 13.5968 1.33337 12.5736 1.33337C10.4375 1.33337 9.04129 2.72037 9.04129 5.23087V7.43787H6.66669V10.3334H9.04129V17.3334H11.9635V10.3334L14.1425 10.3329Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default PlayerProfileClient;
