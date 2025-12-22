import Image from "next/image";
import { navigationItems } from "@/lib/constants";
import { cn } from "@/lib/utils";
import NavigationItemClient from "@/components/client/NavigationItemClient";
import { colors } from "@/lib/theme";

interface SidebarProps {
  isCollapsed?: boolean;
  onToggle?: () => void;
  onNavItemClick?: (itemId: string) => void;
  onUpgradeClick?: () => void;
}

/**
 * Server Component: Sidebar Navigation
 *
 * Why Server Component:
 * - Static navigation items that don't require client-side interactivity
 * - No state management or event handlers needed
 * - Better performance and SEO
 */
export default function Sidebar({
  isCollapsed = false,
  onToggle,
  onNavItemClick,
  onUpgradeClick,
}: SidebarProps): React.ReactElement {
  return (
    <aside
      className="relative h-full flex-col"
      style={{
        width: isCollapsed ? "80px" : "300px",
        background: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(40px)",
        transition: "width 0.3s ease-in-out",
      }}
    >
      {/* Branding */}
      <div
        className={cn(
          "absolute top-[40px] transition-all duration-300",
          isCollapsed ? "left-1/2 -translate-x-1/2" : "left-[34px]"
        )}
      >
        {/* Logo with green background layers */}
        <div className="relative w-10 h-10">
          {/* Outer green rectangle */}
          {/* <div
            className="absolute left-0 top-0 w-10 h-10 rounded-[10px]"
            style={{ backgroundColor: "#5DE27B" }}
          /> */}
          {/* Inner green rectangle */}
          <div
            className="absolute left-1 top-1 w-8 h-8 rounded-[5px]"
            // style={{ backgroundColor: "#2CAF49" }}
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
          <span
            className="absolute left-[60px] top-0 transition-opacity duration-300"
            style={{
              width: "83px",
              height: "38px",
              fontFamily: "'Poppins', sans-serif",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "25px",
              lineHeight: "38px",
              color: colors.text.dark,
            }}
          >
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
      {/* <div className="absolute bottom-0 left-0 right-0 p-6">
        <div
          className="relative w-[250px] h-[293px] rounded-[30px] text-center overflow-visible"
          style={{ backgroundColor: colors.primary.blueBackgroundLighter }}
        >
          <div className="flex h-full flex-col items-center justify-center p-6 overflow-visible">
            <div
              className="mb-4 flex justify-center relative"
              style={{ transform: "translateY(-50px)" }}
            >
              <div className="relative flex items-center justify-center overflow-visible">
                <Image
                  src="/feature.svg"
                  alt="Pro Lock Icon"
                  width={215}
                  height={215}
                  className="object-contain"
                  style={{ width: "215px", height: "215px" }}
                  priority
                />
              </div>
            </div>
            <p className="mb-[18px] w-[151px] text-center text-[15px] font-light leading-[18px] tracking-[1px] text-[#1B0031]">
              Upgrade to PRO for more features.
            </p> */}

      {/* <button className="w-full rounded-lg bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-600">
              Upgrade
            </button> */}
      {/* <button className="flex h-[54px] w-[230px] items-center justify-center rounded-[15px] bg-[#1657FF] text-[15px] font-medium leading-[18px] text-white">
              Upgrade
            </button>
          </div>
        </div>
      </div> */}
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
              <p className="mb-4 w-[151px] text-center text-[15px] font-light leading-[18px] tracking-[1px]" style={{ color: colors.text.darkPurple }}>
                Upgrade to{" "}
                <span className="font-medium" style={{ color: colors.primary.blue }}>PRO</span> for more
                features.
              </p>

              {/* Button */}
              <button
                type="button"
                onClick={onUpgradeClick}
                className="flex h-[54px] w-[230px] items-center justify-center rounded-[15px] text-[15px] font-medium leading-[18px] text-white transition-all duration-200 hover:shadow-lg cursor-pointer"
                style={{ backgroundColor: colors.primary.blue }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = colors.primary.blueDark;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = colors.primary.blue;
                }}
              >
                Upgrade
              </button>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}

// Icon function moved to NavigationItemClient component
