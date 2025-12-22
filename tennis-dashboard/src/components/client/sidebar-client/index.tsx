"use client";

import { useState } from "react";
import Sidebar from "@/components/server/sidebar";
import ProSubscriptionModal from "../pro-subscription-modal";

export default function SidebarClient(): React.ReactElement {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <>
      <Sidebar
        isCollapsed={isCollapsed}
        onToggle={() => setIsCollapsed(!isCollapsed)}
        onNavItemClick={(itemId) => {
          if (itemId !== "score") {
            setIsModalOpen(true);
          }
        }}
        onUpgradeClick={() => setIsModalOpen(true)}
      />
      <ProSubscriptionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

