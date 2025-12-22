import CollapsibleSidebar from "@/components/client/layout/collapsible-siderbar";
import Header from "@/components/server/header";
import type { DashboardLayoutProps } from "./types";

/**
 * Server Component: Main Dashboard Layout
 *
 * Why Server Component:
 * - Layout wrapper that doesn't require client-side interactivity
 * - Composes other server components (Sidebar, Header)
 * - Provides structure for the entire dashboard
 */
const DashboardLayout = ({
  children,
}: DashboardLayoutProps): React.ReactElement => {
  return (
    <div className="flex min-h-screen bg-[#F5F7FA]">
      {/* Sidebar - Collapsible, hidden on mobile, visible on desktop */}
      <CollapsibleSidebar />

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col">
        <Header />
        <main className="flex-1 bg-[#dbe6fd]">
          <div className="container mx-auto px-6 py-12 lg:px-8">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

