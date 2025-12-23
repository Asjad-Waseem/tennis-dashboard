import Image from "next/image";
import { navigationItems } from "@/lib/constants";
import { cn } from "@/lib/utils";
import NavigationItemClient from "@/components/client/navigation-item-client";
import { colors } from "@/lib/theme";
import type { SidebarProps } from "./types";

/**
 * Server Component: Sidebar Navigation
 *
 * Why Server Component:
 * - Static navigation items that don't require client-side interactivity
 * - No state management or event handlers needed
 * - Better performance and SEO
 */
const Sidebar = ({
  isCollapsed = false,
  onToggle,
  onNavItemClick,
  onUpgradeClick,
}: SidebarProps): React.ReactElement => {
  return (
    <aside
      className={cn(
        "relative h-full flex-col bg-white/80 backdrop-blur-[40px] transition-all duration-300 overflow-hidden",
        isCollapsed ? "w-20" : "w-[280px] sm:w-[300px]"
      )}
    >
      {/* Close Button for Mobile/Tablet/Small Desktop */}
      {onToggle && (
        <button
          type="button"
          onClick={onToggle}
          className="xl:hidden absolute top-4 right-4 z-50 p-2 rounded-md hover:bg-gray-100/50 transition-colors"
          aria-label="Close menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
              fill="#2C2745"
            />
          </svg>
        </button>
      )}

      {/* Branding */}
      <div
        className={cn(
          "absolute top-[40px] transition-all duration-300",
          isCollapsed ? "left-1/2 -translate-x-1/2" : "left-[34px]"
        )}
      >
        {/* Logo with green background layers */}
        <div className="relative w-10 h-10">
          {/* Inner green rectangle */}
          <div
            className="absolute left-1 top-1 w-8 h-8 rounded-[5px]"
          />
          {/* Logo image */}
          {onToggle ? (
            <button
              type="button"
              onClick={onToggle}
              className="relative flex w-10 h-10 items-center justify-center z-10 cursor-pointer hover:opacity-80 transition-opacity"
              aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.0011 5.99998C24.2645 2.35665 19.9074 0 15 0C13.8087 0 12.6499 0.138874 11.5387 0.401316C11.5002 0.438835 11.4619 0.476631 11.4238 0.514703C9.74559 2.19293 8.6027 4.33113 8.13967 6.6589C7.67665 8.98667 7.91429 11.3995 8.82254 13.5922C9.73079 15.7849 11.2689 17.659 13.2423 18.9776C14.3696 19.7309 15.6101 20.2835 16.9091 20.6189V11.25C16.9091 8.35049 19.2596 5.99998 22.1591 5.99998H27.0011Z"
                  fill={colors.green.primary}
                />
                <path
                  d="M28.7519 8.99998H22.1591C20.9165 8.99998 19.9091 10.0073 19.9091 11.25V21.75C19.9091 22.9926 18.8962 24.0173 17.6675 23.8316C15.4972 23.5035 13.4158 22.7016 11.5755 21.472C9.10881 19.8238 7.18622 17.4811 6.0509 14.7402C4.91559 11.9993 4.61854 8.98335 5.19732 6.07363C5.42127 4.94775 5.77246 3.85736 6.24041 2.82202C2.46067 5.54557 0 9.98542 0 15C0 23.2843 6.71573 30 15 30C23.2843 30 30 23.2843 30 15C30 12.8667 29.5547 10.8374 28.7519 8.99998Z"
                  fill={colors.green.primary}
                />
              </svg>
            </button>
          ) : (
            <div className="relative flex w-10 h-10 items-center justify-center z-10">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.0011 5.99998C24.2645 2.35665 19.9074 0 15 0C13.8087 0 12.6499 0.138874 11.5387 0.401316C11.5002 0.438835 11.4619 0.476631 11.4238 0.514703C9.74559 2.19293 8.6027 4.33113 8.13967 6.6589C7.67665 8.98667 7.91429 11.3995 8.82254 13.5922C9.73079 15.7849 11.2689 17.659 13.2423 18.9776C14.3696 19.7309 15.6101 20.2835 16.9091 20.6189V11.25C16.9091 8.35049 19.2596 5.99998 22.1591 5.99998H27.0011Z"
                  fill={colors.green.primary}
                />
                <path
                  d="M28.7519 8.99998H22.1591C20.9165 8.99998 19.9091 10.0073 19.9091 11.25V21.75C19.9091 22.9926 18.8962 24.0173 17.6675 23.8316C15.4972 23.5035 13.4158 22.7016 11.5755 21.472C9.10881 19.8238 7.18622 17.4811 6.0509 14.7402C4.91559 11.9993 4.61854 8.98335 5.19732 6.07363C5.42127 4.94775 5.77246 3.85736 6.24041 2.82202C2.46067 5.54557 0 9.98542 0 15C0 23.2843 6.71573 30 15 30C23.2843 30 30 23.2843 30 15C30 12.8667 29.5547 10.8374 28.7519 8.99998Z"
                  fill={colors.green.primary}
                />
              </svg>
            </div>
          )}
        </div>
        {/* Tennis text */}
        {!isCollapsed && (
          <span className="absolute left-[60px] top-0 h-[38px] w-[83px] text-2xl font-semibold leading-[38px] text-[#2C2745] transition-opacity duration-300">
            Tennis
          </span>
        )}
      </div>

      {/* Navigation */}
      <nav
        className={cn(
          "absolute top-[138px] flex flex-col gap-[45px] transition-all duration-300",
          isCollapsed ? "left-1/2 -translate-x-1/2" : "left-[40px]"
        )}
      >
        {navigationItems.map((item) => (
          <NavigationItemClient
            key={item.id}
            item={item}
            isCollapsed={isCollapsed}
            onClick={onNavItemClick}
          />
        ))}
      </nav>

      {/* Upgrade Section */}
      <div
        className={cn(
          "absolute bottom-0 left-0 right-0 transition-all duration-300",
          isCollapsed ? "p-2" : "p-6"
        )}
      >
        <div
          className={cn(
            "relative rounded-[30px] bg-[#EBEEFF] text-center overflow-visible transition-all duration-300",
            isCollapsed ? "w-[64px] h-[64px]" : "w-[250px] h-[293px]"
          )}
        >
          {isCollapsed ? (
            <div className="flex h-full w-full items-center justify-center">
              <Image
                src="/feature.svg"
                alt="Pro Lock Icon"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
            </div>
          ) : (
            <div className="flex h-full flex-col items-center justify-center px-6 pb-6">
              {/* Lock Icon */}
              <div className="relative -mt-12 mb-4">
                <Image
                  src="/feature.svg"
                  alt="Pro Lock Icon"
                  width={215}
                  height={215}
                  className="object-contain"
                  priority
                />
              </div>

              {/* Text */}
              <p className="mb-4 w-[151px] text-center text-[15px] font-light leading-[18px] tracking-[1px] text-[#1B0031]">
                Upgrade to{" "}
                <span className="font-medium text-[#1657FF]">PRO</span> for more
                features.
              </p>

              {/* Button */}
              <button
                type="button"
                onClick={onUpgradeClick}
                className="flex h-[54px] w-[230px] cursor-pointer items-center justify-center rounded-[15px] bg-[#1657FF] text-[15px] font-medium leading-[18px] text-white transition-all duration-200 hover:bg-[#1245CC] hover:shadow-lg"
              >
                Upgrade
              </button>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

