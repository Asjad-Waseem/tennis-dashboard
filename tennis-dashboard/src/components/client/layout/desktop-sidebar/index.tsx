"use client";

import { useState } from "react";
import Sidebar from "@/components/server/sidebar";
import ProSubscriptionModal from "@/components/client/pro-subscription-modal";

/**
 * Client Component: Desktop Sidebar
 *
 * Why Client Component:
 * - Manages collapse/expand state for desktop
 * - Handles user interactions (toggle button clicks)
 * - Manages Pro subscription modal state
 */
const DesktopSidebar = (): React.ReactElement => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleSidebar = (): void => {
    setIsCollapsed((prev) => !prev);
  };

  const handleNavItemClick = (itemId: string): void => {
    if (itemId !== "score") {
      setIsModalOpen(true);
    }
  };

  const handleUpgradeClick = (): void => {
    setIsModalOpen(true);
  };

  return (
    <>
      {/* Desktop Sidebar - Part of flex layout on xl+ (1280px+) */}
      <div className="hidden xl:block relative overflow-hidden">
        <Sidebar
          isCollapsed={isCollapsed}
          onToggle={toggleSidebar}
          onNavItemClick={handleNavItemClick}
          onUpgradeClick={handleUpgradeClick}
        />
      </div>

      <ProSubscriptionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default DesktopSidebar;

