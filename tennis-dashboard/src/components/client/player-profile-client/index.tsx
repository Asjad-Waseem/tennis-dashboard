"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { usePlayer } from "@/contexts/PlayerContext";
import type { Player } from "@/types";
import SocialMediaIcons from "@/components/client/social-media-icons";
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
      <aside className="hidden xl:block relative overflow-visible w-full max-w-sm">
        <div className="h-[505px] rounded-3xl bg-white animate-pulse" />
      </aside>
    );
  }

  return (
    <aside
      className="hidden xl:block relative h-[505px] w-[400px] overflow-visible rounded-3xl"
      style={{
        filter: "drop-shadow(0px 50px 80px rgba(102, 30, 255, 0.2))",
      }}
    >
      {/* Main Card Container */}
      <div className="absolute inset-0 overflow-visible rounded-3xl bg-white">
        {/* Top Purple Gradient Section */}
        <div
          className="absolute top-0 left-0 right-0 h-[220px] overflow-visible rounded-t-3xl"
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
          <h1 className="absolute left-[25px] top-10 z-[2] h-[90px] w-[158px] text-3xl font-bold leading-[150%] tracking-wide text-white">
            {player.name}
          </h1>

          {/* Country Flag and Text Container */}
          <div className="absolute left-[25px] top-[140px] z-[2] flex h-6 w-[103px] items-center gap-2.5">
            {/* Flag Icon */}
            <div className="h-6 w-6 flex-none">
              <CountryFlag
                country={player.country}
                countryCode={player.countryCode}
              />
            </div>

            {/* Country Name */}
            <span className="h-[18px] w-[69px] flex-none text-[15px] font-semibold leading-[18px] tracking-wide text-white">
              {player.country}
            </span>
          </div>

          {/* Large Profile Person SVG - positioned on the right, fully visible, overflowing top */}
          <div className="absolute -right-[35px] -top-[50px] z-10 h-[545px] w-[346px] overflow-visible">
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
        <div className="absolute left-0 right-0 top-[220px] h-[285px] overflow-visible rounded-b-3xl bg-white">
          {/* Biography Title */}
          <h2 className="absolute left-[25px] top-0.5 h-[18px] w-[72px] text-[15px] font-semibold leading-[18px] tracking-wide text-gray-900">
            Biography
          </h2>

          {/* Small Avatar Icon under Biography */}
          <div className="absolute left-6 top-7 h-[60px] w-[50px] overflow-hidden rounded-[20px_10px]">
            <div
              className="absolute inset-0 rounded-[20px_10px]"
              style={{
                background: colors.pink.primary,
              }}
            />
            <div
              className="absolute inset-0 rounded-[20px_10px] opacity-30"
              style={{
                background: colors.gray.light,
              }}
            />
            {/* Player Avatar Image */}
            <div
              className="absolute left-[4.5px] top-[1.69px] h-[56.62px] w-[41px] overflow-hidden"
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
          <div className="absolute left-6 top-[104px] flex h-[86px] w-[122px] flex-col gap-2.5 text-xs font-semibold leading-[14px] tracking-wide text-gray-900">
            <div className="whitespace-nowrap">Age : {player.age}</div>
            <div className="whitespace-nowrap">Birth : {player.birthDate}</div>
            <div className="whitespace-nowrap">Sex : {player.sex}</div>
            <div className="whitespace-nowrap">WTA : {player.wta}</div>
          </div>

          {/* Social Media Title */}
          <h3 className="absolute left-[25px] top-[208px] h-[14px] whitespace-nowrap text-xs font-semibold leading-[14px] tracking-wide text-gray-900">
            Social Media
          </h3>

          {/* Social Media Icons */}
          <SocialMediaIcons />
        </div>
      </div>
    </aside>
  );
};

export default PlayerProfileClient;
