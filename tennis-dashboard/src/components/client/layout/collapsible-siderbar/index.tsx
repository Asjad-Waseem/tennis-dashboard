"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/components/server/sidebar";
import ProSubscriptionModal from "@/components/client/pro-subscription-modal";
import { cn } from "@/lib/utils";

/**
 * Client Component: Mobile Sidebar Overlay
 *
 * Why Client Component:
 * - Manages mobile sidebar overlay state
 * - Handles user interactions (toggle button clicks)
 * - Provides smooth animations for sidebar transitions
 * - Manages Pro subscription modal state
 * - Handles mobile overlay behavior
 */
const CollapsibleSidebar = ({
  isMobileOpen,
  onMobileToggle,
}: {
  isMobileOpen?: boolean;
  onMobileToggle?: () => void;
}): React.ReactElement => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Close mobile sidebar when window is resized to desktop (xl+)
  useEffect(() => {
    const handleResize = (): void => {
      if (window.innerWidth >= 1280 && isMobileOpen && onMobileToggle) {
        onMobileToggle();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileOpen, onMobileToggle]);

  // Lock body scroll when mobile sidebar is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const handleNavItemClick = (itemId: string): void => {
    // Close mobile sidebar when nav item is clicked
    if (isMobileOpen && onMobileToggle) {
      onMobileToggle();
    }
    if (itemId !== "score") {
      setIsModalOpen(true);
    }
  };

  const handleUpgradeClick = (): void => {
    // Close mobile sidebar when upgrade is clicked
    if (isMobileOpen && onMobileToggle) {
      onMobileToggle();
    }
    setIsModalOpen(true);
  };

  return (
    <>
      {/* Mobile Overlay Backdrop */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 xl:hidden transition-opacity duration-300"
          onClick={onMobileToggle}
          aria-hidden="true"
        />
      )}

      {/* Mobile Sidebar - Fixed overlay below xl (1280px) */}
      <div
        className={cn(
          "fixed left-0 top-0 h-full z-50 xl:hidden transition-transform duration-300 ease-in-out overflow-hidden",
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <Sidebar
          isCollapsed={false}
          onToggle={onMobileToggle}
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

export default CollapsibleSidebar;
