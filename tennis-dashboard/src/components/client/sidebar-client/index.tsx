"use client";

import { useState } from "react";
import Sidebar from "@/components/server/sidebar";
import ProSubscriptionModal from "@/components/client/pro-subscription-modal";

const SidebarClient = (): React.ReactElement => {
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
};

export default SidebarClient;

