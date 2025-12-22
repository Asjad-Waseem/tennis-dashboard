import CollapsibleSidebar from "@/components/client/CollapsibleSidebar";
import Header from "./Header";
import { colors } from "@/lib/theme";

/**
 * Server Component: Main Dashboard Layout
 *
 * Why Server Component:
 * - Layout wrapper that doesn't require client-side interactivity
 * - Composes other server components (Sidebar, Header)
 * - Provides structure for the entire dashboard
 */
interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps): React.ReactElement {
  return (
    <div className="flex min-h-screen" style={{ backgroundColor: colors.primary.blueBackgroundLight }}>
      {/* Sidebar - Collapsible, hidden on mobile, visible on desktop */}
      <CollapsibleSidebar />

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col">
        <Header />
        <main className="flex-1" style={{ backgroundColor: colors.primary.blueBackground }}>
          <div className="container mx-auto px-6 py-12 lg:px-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
