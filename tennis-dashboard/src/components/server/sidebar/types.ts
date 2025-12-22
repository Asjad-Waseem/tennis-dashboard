export interface SidebarProps {
  isCollapsed?: boolean;
  onToggle?: () => void;
  onNavItemClick?: (itemId: string) => void;
  onUpgradeClick?: () => void;
}

