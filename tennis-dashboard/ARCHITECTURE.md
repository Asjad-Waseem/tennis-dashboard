# Tennis Dashboard - Architecture Documentation

## Project Structure

This project follows Next.js 16 App Router best practices with clear separation between server and client components.

```
src/
├── app/                          # Next.js App Router
│   ├── api/                      # API Routes (Server-side)
│   │   └── live-scores/          # Live scores API endpoint
│   ├── layout.tsx                # Root layout (Server Component)
│   └── page.tsx                  # Main dashboard page (Server Component)
├── components/
│   ├── server/                   # Server Components
│   │   ├── DashboardLayout.tsx   # Main layout wrapper
│   │   ├── Sidebar.tsx           # Navigation sidebar
│   │   ├── Header.tsx            # Top header bar
│   │   ├── StatisticsSection.tsx # Statistics charts
│   │   ├── RankingsSection.tsx   # Rankings cards
│   │   └── PlayerProfile.tsx     # Player profile panel
│   └── client/                   # Client Components
│       └── LiveScoresCard.tsx    # Live scores with API fetch
├── lib/                          # Utilities and constants
│   ├── constants.ts              # Dummy data and constants
│   └── utils.ts                  # Utility functions
└── types/                        # TypeScript type definitions
    └── index.ts                  # All domain types
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

**Components:**
- `DashboardLayout` - Layout wrapper
- `Sidebar` - Static navigation
- `Header` - Static header with icons
- `StatisticsSection` - Static charts
- `RankingsSection` - Static ranking cards
- `PlayerProfile` - Static player information

### Client Components

**Location:** `src/components/client/`

**Why Client Components:**
- Require React hooks (useState, useEffect)
- Need to fetch data on the client
- Interactive features
- Real-time updates

**Components:**
- `LiveScoresCard` - Fetches live scores from API using hooks

## TypeScript Best Practices

- ✅ **Strict typing** - No `any` or `unknown` types
- ✅ **Explicit return types** - All functions have return types
- ✅ **Type-safe props** - All component props are typed
- ✅ **Domain types** - Centralized type definitions in `src/types/`

## Responsive Design

- **Mobile First:** Base styles for mobile
- **Breakpoints:**
  - `sm:` - 640px+ (small tablets)
  - `md:` - 768px+ (tablets)
  - `lg:` - 1024px+ (desktops - sidebar visible)
  - `xl:` - 1280px+ (large desktops - player profile visible)

## API Routes

- `/api/live-scores` - Returns dummy match data
- Uses Next.js 16 App Router API route handlers
- Returns typed responses

## Key Features

1. **Professional Folder Structure** - Clear separation of concerns
2. **Type Safety** - Strict TypeScript with no `any` types
3. **Server/Client Separation** - Optimal performance
4. **Responsive Design** - Mobile-first approach
5. **TailwindCSS** - Utility-first styling
6. **Best Practices** - Following Next.js 16 conventions

