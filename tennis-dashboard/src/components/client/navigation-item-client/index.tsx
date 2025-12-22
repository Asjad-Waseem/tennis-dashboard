"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { colors } from "@/lib/theme";
import type { NavigationItemClientProps } from "./types";
import { getIcon } from "./utils";

const NavigationItemClient = ({
  item,
  isCollapsed = false,
  additionalStyles,
  onClick,
}: NavigationItemClientProps): React.ReactElement => {
  const isActive = item.isActive ?? false;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (item.id !== "score" && onClick) {
      e.preventDefault();
      onClick(item.id);
    }
  };

  return (
    <div className="relative" style={{ width: "260px" }}>
      {isActive && !isCollapsed && (
        <div 
          className="absolute top-1/2 h-[30px] w-[5px] -translate-y-1/2 rounded-[50px] shadow-[_-2px_0px_10px_2px_rgba(0,56,255,0.15)]"
          style={{
            backgroundColor: colors.primary.blue,
            right: "0",
          }}
        />
      )}
      <Link
        href={item.href}
        onClick={handleClick}
        className={cn(
          "relative flex items-center gap-[10px] rounded-lg px-3 py-2 transition-all duration-200"
        )}
        style={{
          backgroundColor: "transparent",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = isActive ? colors.primary.blueLighter : colors.primary.blueLightest;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "transparent";
        }}
        title={isCollapsed ? item.label : undefined}
      >
        <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center">
          {getIcon(item.icon, isActive)}
        </span>
        {!isCollapsed && (
          <>
            <span
              className="text-[15px] leading-[18px] tracking-[1px]"
              style={{
                fontFamily:
                  "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                fontWeight: 400,
                color: isActive ? colors.primary.blue : colors.purple.light,
              }}
            >
              {item.label}
            </span>
            {item.badge && (
              <span
                className={cn(
                  "ml-2 flex flex-shrink-0 items-center justify-center rounded text-white",
                  item.badgeColor === "red" && "bg-red-500",
                  item.badge === "LIVE"
                    ? "h-4 w-8 text-[10px] font-semibold leading-none tracking-wide"
                    : "px-2 py-0.5 text-sm font-normal leading-tight tracking-wider"
                )}
              >
                {item.badge}
              </span>
            )}
          </>
        )}
      </Link>
    </div>
  );
};

export default NavigationItemClient;

