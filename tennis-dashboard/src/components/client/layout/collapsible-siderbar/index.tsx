"use client";

import { useState } from "react";
import Sidebar from "@/components/server/sidebar";
import ProSubscriptionModal from "@/components/client/pro-subscription-modal";

/**
 * Client Component: Collapsible Sidebar Wrapper
 *
 * Why Client Component:
 * - Manages collapse/expand state
 * - Handles user interactions (toggle button clicks)
 * - Provides smooth animations for sidebar transitions
 * - Manages Pro subscription modal state
 */
export default function CollapsibleSidebar(): React.ReactElement {
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
      <div className="hidden lg:block relative overflow-hidden">
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
}
