"use client";

import { useState } from "react";
import Sidebar from "@/components/server/Sidebar";
import ProSubscriptionModal from "./ProSubscriptionModal";

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

