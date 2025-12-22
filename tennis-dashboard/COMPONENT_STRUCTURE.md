# Component Structure & Server/Client Component Rationale

## Server Components (Default - No "use client" directive)

### Why Server Components?

Server Components are the default in Next.js 16 App Router. They:
- Render on the server, reducing JavaScript bundle size
- Have direct access to backend resources
- Improve initial page load performance
- Better for SEO (content is available immediately)
- Can use async/await for data fetching

### Our Server Components:

1. **`DashboardLayout`** (`components/server/DashboardLayout.tsx`)
   - **Why Server:** Layout wrapper, no interactivity needed
   - **Usage:** Provides structure for entire dashboard

2. **`Sidebar`** (`components/server/Sidebar.tsx`)
   - **Why Server:** Static navigation menu
   - **Usage:** Navigation links, no state management needed

3. **`Header`** (`components/server/Header.tsx`)
   - **Why Server:** Static header with icons
   - **Usage:** Top navigation bar, buttons are presentational

4. **`StatisticsSection`** (`components/server/StatisticsSection.tsx`)
   - **Why Server:** Static chart data, no interactivity
   - **Usage:** Displays performance charts and global statistics

5. **`RankingsSection`** (`components/server/RankingsSection.tsx`)
   - **Why Server:** Static ranking data
   - **Usage:** Displays ranking cards

6. **`PlayerProfile`** (`components/server/PlayerProfile.tsx`)
   - **Why Server:** Static player information
   - **Usage:** Displays player biography and latest scores

## Client Components (Explicit "use client" directive)

### Why Client Components?

Client Components are needed when:
- Using React hooks (useState, useEffect, useContext, etc.)
- Handling browser-only APIs (localStorage, window, etc.)
- Managing interactive state
- Using event listeners
- Implementing real-time features

### Our Client Components:

1. **`LiveScoresCard`** (`components/client/LiveScoresCard.tsx`)
   - **Why Client:** 
     - Uses `useState` for managing match data
     - Uses `useEffect` for API fetching
     - Handles loading and error states
     - Could be extended with real-time updates
   - **Usage:** Fetches and displays live match scores

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
```

## Best Practices Applied

1. **Default to Server Components** - Only use client when necessary
2. **Clear Separation** - `/server` and `/client` folders
3. **Type Safety** - All components strictly typed
4. **Documentation** - Each component has comments explaining why it's server/client
5. **Performance** - Minimize client bundle size by keeping most components server-side

## File Naming Convention

- Server Components: No special prefix, in `components/server/`
- Client Components: No special prefix, in `components/client/`
- Both use PascalCase: `ComponentName.tsx`

## Import Strategy

- Server components can import other server components directly
- Server components can import client components (they become boundaries)
- Client components cannot import server components directly
- Client components can only import other client components

