import HeaderClient from "@/components/client/header-client";
import DesktopSidebar from "@/components/client/layout/desktop-sidebar";
import type { DashboardLayoutProps } from "./types";

/**
 * Server Component: Main Dashboard Layout
 *
 * Why Server Component:
 * - Layout wrapper that doesn't require client-side interactivity
 * - Composes client components (HeaderClient handles sidebar state)
 * - Provides structure for the entire dashboard
 */
const DashboardLayout = ({
  children,
}: DashboardLayoutProps): React.ReactElement => {
  return (
    <div className="flex min-h-screen bg-[#F5F7FA]">
      {/* Desktop Sidebar - Part of flex layout, visible on lg+ */}
      <DesktopSidebar />

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col min-w-0 w-full lg:w-auto">
        <HeaderClient />
        <main className="flex-1 bg-[#dbe6fd]">
          <div className="container mx-auto px-4 py-6 sm:px-6 sm:py-8 md:py-10 lg:px-8 lg:py-12">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

