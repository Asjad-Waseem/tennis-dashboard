"use client";

import { useState } from "react";
import HeaderActions from "@/components/client/header-actions";
import CollapsibleSidebar from "@/components/client/layout/collapsible-siderbar";

/**
 * Client Component: Header with Mobile Menu
 *
 * Why Client Component:
 * - Manages mobile sidebar toggle state
 * - Handles hamburger menu button interaction
 */
const HeaderClient = (): React.ReactElement => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleMobileSidebar = (): void => {
    setIsMobileSidebarOpen((prev) => !prev);
  };

  return (
    <>
      <CollapsibleSidebar
        isMobileOpen={isMobileSidebarOpen}
        onMobileToggle={toggleMobileSidebar}
      />
      <header className="flex items-center justify-between border-b border-gray-200 bg-[#dbe6fd] px-4 pt-8 sm:px-6 sm:pt-10 md:pt-12 lg:px-6 lg:pt-14 relative z-30">
        <div className="flex items-center gap-2 sm:ml-4 lg:ml-8">
          {/* Mobile Menu Button - Visible below xl (1280px) */}
          <button
            type="button"
            onClick={toggleMobileSidebar}
            className="xl:hidden mr-2 p-2 rounded-md hover:bg-gray-100/50 transition-colors"
            aria-label="Toggle menu"
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
                d="M3 6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6Z"
                fill="#3C3F88"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12Z"
                fill="#3C3F88"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 18C3 17.4477 3.44772 17 4 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18Z"
                fill="#3C3F88"
              />
            </svg>
          </button>

          {/* Back Arrow - Hidden on mobile, visible on desktop */}
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hidden sm:block h-6 w-6 sm:h-7 sm:w-7 lg:h-[30px] lg:w-[30px]"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.30806 14.5581C3.06398 14.8021 3.06398 15.1979 3.30806 15.4419L7.28553 19.4194C7.52961 19.6635 7.92534 19.6635 8.16942 19.4194C8.4135 19.1753 8.41349 18.7796 8.16942 18.5355L5.25889 15.625L26.25 15.625C26.5952 15.625 26.875 15.3452 26.875 15C26.875 14.6548 26.5952 14.375 26.25 14.375L5.25888 14.375L8.16942 11.4645C8.41349 11.2204 8.41349 10.8247 8.16942 10.5806C7.92534 10.3365 7.52961 10.3365 7.28553 10.5806L3.30806 14.5581Z"
              fill="#3C3F88"
            />
          </svg>

          <h1 className="h-auto whitespace-nowrap text-xl font-semibold leading-tight tracking-[1px] text-[#3C3F88] sm:text-2xl md:text-3xl lg:h-9 lg:w-[162px] lg:leading-9">
            Live Scores
          </h1>
        </div>

        <HeaderActions />
      </header>
    </>
  );
};

export default HeaderClient;

