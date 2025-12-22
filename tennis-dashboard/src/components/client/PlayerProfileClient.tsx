"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { usePlayer } from "@/contexts/PlayerContext";
import type { Player } from "@/types";
import SocialMediaIcons from "./SocialMediaIcons";
import CountryFlag from "./CountryFlag";
import { colors, gradients } from "@/lib/theme";

interface PlayerData {
  player: Player;
}

export default function PlayerProfileClient(): React.ReactElement {
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
      className="hidden xl:block relative overflow-visible"
      style={{
        width: "400px",
        height: "505px",
        filter: "drop-shadow(0px 50px 80px rgba(102, 30, 255, 0.2))",
        borderRadius: "30px",
      }}
    >
      {/* Main Card Container */}
      <div
        className="absolute inset-0 bg-white overflow-visible"
        style={{
          borderRadius: "30px",
        }}
      >
        {/* Top Purple Gradient Section */}
        <div
          className="absolute top-0 left-0 right-0 overflow-visible"
          style={{
            height: "220px",
            background: gradients.purple,
            borderRadius: "30px 30px 0 0",
          }}
        >
          {/* Curved white bottom cut (Figma-like) */}
          <svg
            className="absolute bottom-[-1px] left-0 w-full"
            height="80"
            viewBox="0 0 400 80"
            preserveAspectRatio="none"
            style={{
              zIndex: 1,
              pointerEvents: "none",
            }}
          >
            <path d="M0,42 C90,78 210,8 400,30 L400,80 L0,80 Z" fill="white" />
          </svg>

          {/* Player Name */}
          <h1
            className="absolute text-white"
            style={{
              width: "158px",
              height: "90px",
              left: "25px",
              top: "40px",
              fontFamily:
                "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "30px",
              lineHeight: "150%",
              letterSpacing: "0.5px",
              zIndex: 2,
            }}
          >
            {player.name}
          </h1>

          {/* Country Flag and Text Container */}
          <div
            className="absolute flex items-center"
            style={{
              width: "103px",
              height: "24px",
              left: "25px",
              top: "140px",
              gap: "10px",
              zIndex: 2,
            }}
          >
            {/* Flag Icon */}
            <div
              className="flex-none"
              style={{
                width: "24px",
                height: "24px",
              }}
            >
              <CountryFlag
                country={player.country}
                countryCode={player.countryCode}
                width={24}
                height={24}
              />
            </div>

            {/* Country Name */}
            <span
              className="text-white flex-none"
              style={{
                width: "69px",
                height: "18px",
                fontFamily:
                  "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: "15px",
                lineHeight: "18px",
                letterSpacing: "0.5px",
              }}
            >
              {player.country}
            </span>
          </div>

          {/* Large Profile Person SVG - positioned on the right, fully visible, overflowing top */}
          <div
            className="absolute overflow-visible"
            style={{
              right: "-35px",
              top: "-50px",
              width: "346px",
              height: "545px",
              zIndex: 10,
            }}
          >
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
        <div
          className="absolute left-0 right-0 overflow-visible rounded-b-3xl"
          style={{
            top: "220px",
            height: "285px",
            background: colors.white,
            borderRadius: "0px 0px 30px 30px",
          }}
        >
          {/* Biography Title */}
          <h2
            className="absolute"
            style={{
              width: "72px",
              height: "18px",
              left: "25px",
              top: "2px",
              fontFamily:
                "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "15px",
              lineHeight: "18px",
              letterSpacing: "0.5px",
              color: colors.text.primary,
            }}
          >
            Biography
          </h2>

          {/* Small Avatar Icon under Biography */}
          <div
            className="absolute overflow-hidden"
            style={{
              width: "50px",
              height: "60px",
              left: "24px",
              top: "28px",
              borderRadius: "20px 10px",
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                background: colors.pink.primary,
                borderRadius: "20px 10px",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: colors.gray.light,
                borderRadius: "20px 10px",
                opacity: 0.3,
              }}
            />
            {/* Player Avatar Image */}
            <div
              className="absolute overflow-hidden"
              style={{
                width: "41px",
                height: "56.62px",
                left: "4.5px",
                top: "1.69px",
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
          <div
            className="absolute flex flex-col"
            style={{
              width: "122px",
              height: "86px",
              left: "24px",
              top: "104px",
              gap: "10px",
              fontFamily:
                "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "12px",
              lineHeight: "14px",
              letterSpacing: "0.5px",
              color: colors.text.primary,
            }}
          >
            <div className="whitespace-nowrap">
              Age : {player.age}
            </div>
            <div className="whitespace-nowrap">
              Birth : {player.birthDate}
            </div>
            <div className="whitespace-nowrap">
              Sex : {player.sex}
            </div>
            <div className="whitespace-nowrap">
              WTA : {player.wta}
            </div>
          </div>

          {/* Social Media Title */}
          <h3
            className="absolute whitespace-nowrap"
            style={{
              width: "auto",
              height: "14px",
              left: "25px",
              top: "208px",
              fontFamily:
                "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "12px",
              lineHeight: "14px",
              letterSpacing: "0.5px",
              color: colors.text.primary,
            }}
          >
            Social Media
          </h3>

          {/* Social Media Icons */}
          <SocialMediaIcons />
        </div>
      </div>
    </aside>
  );
}

