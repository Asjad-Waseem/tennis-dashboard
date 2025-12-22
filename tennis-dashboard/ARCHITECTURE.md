# Tennis Dashboard - Architecture Documentation

## Project Structure

This project follows Next.js 16 App Router best practices with clear separation between server and client components, organized in a modular folder structure.

```
src/
├── app/                              # Next.js App Router
│   ├── api/                          # API Routes (Server-side)
│   │   ├── live-scores/              # Live scores API endpoint
│   │   │   └── route.ts              # GET /api/live-scores
│   │   └── player/                   # Player data API
│   │       └── [id]/
│   │           └── route.ts          # GET /api/player/:id
│   ├── layout.tsx                    # Root layout (Server Component)
│   ├── page.tsx                      # Main dashboard page (Server Component)
│   └── styles/
│       └── global.css                # Global styles
├── components/
│   ├── server/                       # Server Components (4 components)
│   │   ├── cards/
│   │   │   └── ranking-card/         # Ranking card component
│   │   │       ├── index.tsx
│   │   │       ├── types.ts
│   │   │       └── utils.ts
│   │   ├── dashboard-layout/         # Main layout wrapper
│   │   │   ├── index.tsx
│   │   │   └── types.ts
│   │   ├── header/                   # Top header bar
│   │   │   └── index.tsx
│   │   ├── latest-scores/            # Latest scores (server version)
│   │   │   └── index.tsx
│   │   └── sidebar/                  # Navigation sidebar
│   │       ├── index.tsx
│   │       └── types.ts
│   └── client/                       # Client Components (18 components)
│       ├── country-flag/             # Country flag display
│       ├── global-stats-donut-chart/ # Statistics donut chart
│       ├── header-actions/           # Header action buttons
│       ├── latest-scores/            # Latest match scores
│       ├── layout/
│       │   └── collapsible-siderbar/ # Collapsible sidebar
│       ├── live-scores-card/         # Live scores with API fetch
│       ├── navigation-item-client/   # Navigation items
│       ├── notifications-dropdown/  # Notifications dropdown
│       ├── performance-bar-chart/    # Performance bar chart
│       ├── performance-bar-chart-card/ # Performance chart card
│       ├── player-profile-client/   # Player profile component
│       ├── pro-subscription-modal/   # Subscription modal
│       ├── rankings-section-client/  # Rankings section
│       ├── search-dropdown/          # Search functionality
│       ├── sidebar-client/           # Sidebar component
│       ├── social-media-icons/       # Social media icons
│       ├── statistics-section-client/ # Statistics section
│       └── user-menu/                # User menu dropdown
├── contexts/
│   └── PlayerContext.tsx             # Player selection context
├── lib/                              # Utilities and constants
│   ├── constants.ts                  # Dummy data and constants
│   ├── theme.ts                      # Theme colors and gradients
│   └── utils.ts                      # Utility functions (cn, etc.)
└── types/                            # TypeScript type definitions
    └── index.ts                      # All domain types
```

## Server vs Client Components

### Server Components (Default)

**Location:** `src/components/server/`

**Why Server Components:**
- No client-side interactivity required
- Static content that doesn't change
- Better performance (rendered on server)
- Smaller bundle size
- Better SEO
- Can use async/await for data fetching

**Components:**
- `DashboardLayout` - Layout wrapper that composes sidebar and header
- `Header` - Static header with icons and navigation
- `Sidebar` - Static navigation menu (server version)
- `RankingCard` - Static ranking card display
- `LatestScores` - Server-side latest scores display

### Client Components

**Location:** `src/components/client/`

**Why Client Components:**
- Require React hooks (useState, useEffect, useContext)
- Need to fetch data on the client
- Interactive features (dropdowns, modals, collapsible elements)
- Real-time updates
- Browser-only APIs (localStorage, window, etc.)
- Event handlers and user interactions

**Components:**
- `LiveScoresCard` - Fetches live scores from API using hooks
- `PlayerProfileClient` - Interactive player profile with context
- `StatisticsSectionClient` - Interactive charts with year selection
- `RankingsSectionClient` - Interactive rankings display
- `CollapsibleSidebar` - Sidebar with toggle functionality
- `SearchDropdown` - Search with dropdown interactions
- `NotificationsDropdown` - Notifications with dropdown
- `UserMenu` - User menu with dropdown
- `ProSubscriptionModal` - Modal dialog
- `HeaderActions` - Interactive header buttons
- `LatestScores` - Client-side latest scores with interactions
- `NavigationItemClient` - Interactive navigation items
- `SidebarClient` - Interactive sidebar component
- `CountryFlag` - Flag display component
- `GlobalStatsDonutChart` - Interactive donut chart
- `PerformanceBarChart` - Interactive bar chart
- `PerformanceBarChartCard` - Chart card wrapper
- `SocialMediaIcons` - Social media links

## State Management

### PlayerContext

**Location:** `src/contexts/PlayerContext.tsx`

**Purpose:** Manages the selected player ID across the application.

**Usage:**
```typescript
import { usePlayer } from "@/contexts/PlayerContext";

const { selectedPlayerId, setSelectedPlayerId } = usePlayer();
```

**Provider:** Wrapped in root layout (`src/app/layout.tsx`)

## API Routes

### `/api/live-scores`

**Method:** GET  
**Returns:** `{ match: Match }`  
**Purpose:** Returns dummy live match data  
**Location:** `src/app/api/live-scores/route.ts`

### `/api/player/[id]`

**Method:** GET  
**Returns:** `{ player: Player, statistics: Record<number, Statistics>, rankings: Ranking[], latestMatch: Match }`  
**Purpose:** Returns player-specific data including statistics, rankings, and latest match  
**Location:** `src/app/api/player/[id]/route.ts`

**Supported IDs:**
- `"1"` - Anindita Rahmawati (default player)
- `"2"` - Naomi Osaka (opponent)

## TypeScript Best Practices

- ✅ **Strict typing** - No `any` or `unknown` types
- ✅ **Explicit return types** - All functions have return types
- ✅ **Type-safe props** - All component props are typed
- ✅ **Domain types** - Centralized type definitions in `src/types/`
- ✅ **Component-specific types** - Types defined in component folders when needed

## Component Organization

### Folder Structure Pattern

Each component follows a consistent structure:

```
component-name/
├── index.tsx          # Main component file
├── types.ts           # Component-specific types (if needed)
├── utils.ts           # Component-specific utilities (if needed)
└── constants.ts       # Component-specific constants (if needed)
```

### Import Strategy

- Server components can import other server components directly
- Server components can import client components (they become boundaries)
- Client components cannot import server components directly
- Client components can only import other client components
- Use `@/` alias for imports (configured in `tsconfig.json`)

## Responsive Design

- **Mobile First:** Base styles for mobile
- **Breakpoints:**
  - `sm:` - 640px+ (small tablets)
  - `md:` - 768px+ (tablets)
  - `lg:` - 1024px+ (desktops - sidebar visible)
  - `xl:` - 1280px+ (large desktops - player profile visible)

## Theme System

**Location:** `src/lib/theme.ts`

Centralized color system with:
- Text colors
- Primary colors (blue variants)
- Purple gradient colors
- Pink colors
- Orange colors
- Yellow colors
- Cyan/Teal colors
- Green colors
- Gray colors
- Chart gradient colors
- Pre-defined gradient functions

## Key Features

1. **Professional Folder Structure** - Clear separation of concerns
2. **Type Safety** - Strict TypeScript with no `any` types
3. **Server/Client Separation** - Optimal performance
4. **Responsive Design** - Mobile-first approach
5. **TailwindCSS 4.x** - Utility-first styling
6. **Theme System** - Centralized color management
7. **Context API** - Global state management
8. **Modular Components** - Reusable, well-organized components
9. **API Routes** - Server-side data endpoints
10. **Best Practices** - Following Next.js 16 conventions

## Data Flow

1. **Root Layout** (`app/layout.tsx`)
   - Wraps app with `PlayerProvider`
   - Sets up fonts and metadata

2. **Dashboard Page** (`app/page.tsx`)
   - Server component that composes layout and content
   - Renders `DashboardLayout` with main content

3. **Dashboard Layout** (`components/server/dashboard-layout`)
   - Composes `CollapsibleSidebar` (client) and `Header` (server)
   - Provides main content area

4. **Client Components**
   - Use `usePlayer()` hook to access selected player
   - Fetch data from API routes using `useEffect`
   - Update UI based on player selection

5. **API Routes**
   - Return typed data based on player ID
   - Can be extended to fetch from real database

## Performance Optimizations

- Server Components reduce JavaScript bundle size
- Client Components only loaded when needed
- Context API for efficient state sharing
- Lazy loading for charts (Recharts)
- Optimized images using Next.js Image component (when used)

## Future Enhancements

- Real-time WebSocket connections for live scores
- Database integration for player data
- Authentication and user management
- Advanced filtering and search
- Export functionality for statistics
- Mobile app version
