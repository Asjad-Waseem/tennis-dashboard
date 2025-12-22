"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { colors } from "@/lib/theme";
import type { NavigationItemClientProps } from "./types";
import { getIcon } from "./utils";

const NavigationItemClient = ({
  item,
  isCollapsed = false,
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
    <div className="relative w-[260px]">
      {isActive && !isCollapsed && (
        <div 
          className="absolute right-0 top-1/2 h-[30px] w-[5px] -translate-y-1/2 rounded-[50px] bg-blue-600 shadow-[_-2px_0px_10px_2px_rgba(0,56,255,0.15)]"
        />
      )}
      <Link
        href={item.href}
        onClick={handleClick}
        className={cn(
          "relative flex items-center gap-2.5 rounded-lg bg-transparent px-3 py-2 transition-all duration-200",
          isActive ? "hover:bg-blue-100" : "hover:bg-blue-50"
        )}
        title={isCollapsed ? item.label : undefined}
      >
        <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center">
          {getIcon(item.icon, isActive)}
        </span>
        {!isCollapsed && (
          <>
            <span
              className={`text-[15px] font-normal leading-[18px] tracking-wider ${
                isActive ? "text-blue-600" : "text-[#B9C0DE]"
              }`}
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

