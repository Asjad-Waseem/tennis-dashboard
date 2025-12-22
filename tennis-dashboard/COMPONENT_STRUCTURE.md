# Component Structure & Server/Client Component Rationale

## Overview

This document explains the rationale behind each component's classification as either a Server Component or Client Component, following Next.js 16 App Router best practices.

## Server Components (Default - No "use client" directive)

### Why Server Components?

Server Components are the default in Next.js 16 App Router. They:
- Render on the server, reducing JavaScript bundle size
- Have direct access to backend resources
- Improve initial page load performance
- Better for SEO (content is available immediately)
- Can use async/await for data fetching
- Don't require client-side JavaScript

### Our Server Components:

1. **`DashboardLayout`** (`components/server/dashboard-layout/index.tsx`)
   - **Why Server:** Layout wrapper, no interactivity needed
   - **Usage:** Provides structure for entire dashboard, composes sidebar and header
   - **Dependencies:** Imports `CollapsibleSidebar` (client) and `Header` (server)

2. **`Header`** (`components/server/header/index.tsx`)
   - **Why Server:** Static header with icons
   - **Usage:** Top navigation bar, presentational elements
   - **Note:** Contains client components for interactive elements (header-actions, search-dropdown, etc.)

3. **`Sidebar`** (`components/server/sidebar/index.tsx`)
   - **Why Server:** Static navigation menu structure
   - **Usage:** Navigation links structure, no state management needed
   - **Note:** May contain client components for interactive navigation items

4. **`RankingCard`** (`components/server/cards/ranking-card/index.tsx`)
   - **Why Server:** Static ranking card display
   - **Usage:** Displays ranking information in a card format
   - **Features:** Shows category, position, and trend

5. **`LatestScores`** (`components/server/latest-scores/index.tsx`)
   - **Why Server:** Static latest scores display
   - **Usage:** Server-side rendering of latest match scores
   - **Note:** There's also a client version for interactive features

## Client Components (Explicit "use client" directive)

### Why Client Components?

Client Components are needed when:
- Using React hooks (useState, useEffect, useContext, etc.)
- Handling browser-only APIs (localStorage, window, etc.)
- Managing interactive state
- Using event listeners
- Implementing real-time features
- Handling user interactions (clicks, hovers, etc.)
- Using third-party libraries that require client-side rendering

### Our Client Components:

#### Layout & Navigation

1. **`CollapsibleSidebar`** (`components/client/layout/collapsible-siderbar/index.tsx`)
   - **Why Client:** 
     - Uses `useState` for sidebar open/close state
     - Handles toggle interactions
     - Responsive behavior
   - **Usage:** Collapsible sidebar with mobile/desktop toggle

2. **`SidebarClient`** (`components/client/sidebar-client/index.tsx`)
   - **Why Client:**
     - Interactive navigation items
     - Active state management
     - Click handlers
   - **Usage:** Client-side sidebar with interactive navigation

3. **`NavigationItemClient`** (`components/client/navigation-item-client/index.tsx`)
   - **Why Client:**
     - Interactive navigation item
     - Click handlers
     - Active state styling
   - **Usage:** Individual navigation items with interactivity

#### Data Fetching & Display

4. **`LiveScoresCard`** (`components/client/live-scores-card/index.tsx`)
   - **Why Client:** 
     - Uses `useState` for managing match data
     - Uses `useEffect` for API fetching
     - Handles loading and error states
     - Could be extended with real-time updates
   - **Usage:** Fetches and displays live match scores from `/api/live-scores`

5. **`PlayerProfileClient`** (`components/client/player-profile-client/index.tsx`)
   - **Why Client:**
     - Uses `usePlayer()` context hook
     - Fetches player data from API
     - Dynamic content based on selected player
     - Uses `useEffect` for data fetching
   - **Usage:** Displays player profile with statistics and information

6. **`LatestScores`** (`components/client/latest-scores/index.tsx`)
   - **Why Client:**
     - Interactive latest scores display
     - Uses hooks for data management
     - Client-side interactions
   - **Usage:** Client-side latest scores with interactions

#### Statistics & Charts

7. **`StatisticsSectionClient`** (`components/client/statistics-section-client/index.tsx`)
   - **Why Client:**
     - Uses `useState` for year selection
     - Interactive chart controls
     - Uses `usePlayer()` context
     - Fetches statistics from API
   - **Usage:** Displays performance charts with year selector

8. **`PerformanceBarChart`** (`components/client/performance-bar-chart/index.tsx`)
   - **Why Client:**
     - Recharts library requires client-side rendering
     - Interactive chart features
     - Hover and click interactions
   - **Usage:** Bar chart for monthly performance

9. **`PerformanceBarChartCard`** (`components/client/performance-bar-chart-card/index.tsx`)
   - **Why Client:**
     - Wraps interactive chart
     - Manages chart state
   - **Usage:** Card wrapper for performance bar chart

10. **`GlobalStatsDonutChart`** (`components/client/global-stats-donut-chart/index.tsx`)
    - **Why Client:**
      - Recharts library requires client-side rendering
      - Interactive donut chart
    - **Usage:** Donut chart for global statistics (wins/losses)

#### Rankings

11. **`RankingsSectionClient`** (`components/client/rankings-section-client/index.tsx`)
    - **Why Client:**
      - Uses `usePlayer()` context
      - Fetches rankings from API
      - Dynamic content based on selected player
    - **Usage:** Displays player rankings across categories

#### UI Components

12. **`HeaderActions`** (`components/client/header-actions/index.tsx`)
    - **Why Client:**
      - Interactive buttons
      - Click handlers
      - Modal triggers
    - **Usage:** Header action buttons (notifications, search, etc.)

13. **`SearchDropdown`** (`components/client/search-dropdown/index.tsx`)
    - **Why Client:**
      - Search input with state
      - Dropdown interactions
      - Keyboard event handlers
      - Focus management
    - **Usage:** Search functionality with dropdown results

14. **`NotificationsDropdown`** (`components/client/notifications-dropdown/index.tsx`)
    - **Why Client:**
      - Dropdown open/close state
      - Click outside handlers
      - Interactive notifications list
    - **Usage:** Notifications dropdown menu

15. **`UserMenu`** (`components/client/user-menu/index.tsx`)
    - **Why Client:**
      - Dropdown menu state
      - Click handlers
      - User interactions
    - **Usage:** User menu dropdown

16. **`ProSubscriptionModal`** (`components/client/pro-subscription-modal/index.tsx`)
    - **Why Client:**
      - Modal open/close state
      - Overlay interactions
      - Form handling (if applicable)
    - **Usage:** Subscription modal dialog

#### Utility Components

17. **`CountryFlag`** (`components/client/country-flag/index.tsx`)
    - **Why Client:**
      - Uses `react-country-flag` library (may require client-side)
      - Dynamic flag rendering
    - **Usage:** Displays country flags for players

18. **`SocialMediaIcons`** (`components/client/social-media-icons/index.tsx`)
    - **Why Client:**
      - Interactive social media links
      - Hover effects
      - Click handlers
    - **Usage:** Social media icon links

## Component Decision Tree

```
Is the component interactive?
├─ NO → Server Component
│   └─ Does it need React hooks?
│       └─ NO → Server Component ✓
│
└─ YES → Client Component
    └─ Does it need browser APIs?
        └─ YES → Client Component ✓
        └─ NO → Does it use hooks?
            └─ YES → Client Component ✓
```

## Component Interaction Patterns

### Server → Client Boundary

When a Server Component imports a Client Component, it creates a boundary:
- Server Component can pass props to Client Component
- Client Component cannot import Server Components directly
- This is the recommended pattern for composition

**Example:**
```tsx
// Server Component
import ClientComponent from "@/components/client/example";

export default function ServerComponent() {
  return <ClientComponent prop="value" />;
}
```

### Client → Client

Client Components can freely import and use other Client Components:
- No boundaries created
- Can share state through Context API
- Can pass callbacks and props

**Example:**
```tsx
// Client Component
"use client";
import AnotherClientComponent from "@/components/client/another";

export default function ClientComponent() {
  return <AnotherClientComponent />;
}
```

## Best Practices Applied

1. **Default to Server Components** - Only use client when necessary
2. **Clear Separation** - `/server` and `/client` folders
3. **Type Safety** - All components strictly typed
4. **Documentation** - Each component has comments explaining why it's server/client
5. **Performance** - Minimize client bundle size by keeping most components server-side
6. **Modular Structure** - Each component in its own folder with related files
7. **Consistent Naming** - Clear, descriptive component names
8. **Context Usage** - Use Context API for shared state (PlayerContext)

## File Naming Convention

- **Server Components**: No special prefix, in `components/server/`
- **Client Components**: No special prefix, in `components/client/`
- **Both use PascalCase**: `ComponentName.tsx`
- **Folder structure**: `component-name/index.tsx`
- **Supporting files**: `types.ts`, `utils.ts`, `constants.ts` in same folder

## Import Strategy

- Server components can import other server components directly
- Server components can import client components (they become boundaries)
- Client components cannot import server components directly
- Client components can only import other client components
- Use `@/` alias for all imports (configured in `tsconfig.json`)

## Context Usage

### PlayerContext

**Location:** `src/contexts/PlayerContext.tsx`

**Purpose:** Manages selected player ID across the application

**Usage in Client Components:**
```tsx
"use client";
import { usePlayer } from "@/contexts/PlayerContext";

export default function MyComponent() {
  const { selectedPlayerId, setSelectedPlayerId } = usePlayer();
  // Use selectedPlayerId to fetch/display player-specific data
}
```

**Note:** Only Client Components can use hooks like `usePlayer()`

## Component Count Summary

- **Server Components:** 5
- **Client Components:** 18
- **Total Components:** 23

This ratio reflects the application's need for interactivity while maintaining optimal performance through server-side rendering where possible.
