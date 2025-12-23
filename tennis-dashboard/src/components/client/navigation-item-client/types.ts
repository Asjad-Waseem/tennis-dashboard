import type { NavigationItem } from "@/types";

export interface NavigationItemClientProps {
  item: NavigationItem;
  isCollapsed?: boolean;
  additionalStyles?: string; // Kept for backward compatibility, but not used
  onClick?: (itemId: string) => void;
}


