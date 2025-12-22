# Tennis Dashboard

A professional tennis dashboard application built with Next.js 16, React 19, and TypeScript. This application provides real-time tennis match scores, player statistics, rankings, and comprehensive player profiles.

## 🚀 Features

- **Live Scores**: Real-time match updates and live score tracking
- **Player Profiles**: Detailed player information with statistics and rankings
- **Performance Analytics**: Interactive charts showing monthly performance and global statistics
- **Rankings**: ATP/WTA rankings across Singles, Doubles, and Mixed Doubles categories
- **Responsive Design**: Mobile-first design that works seamlessly across all devices
- **Type-Safe**: Strict TypeScript with no `any` or `unknown` types
- **Modern Architecture**: Server and Client component separation for optimal performance

## 🛠️ Tech Stack

- **Framework**: Next.js 16.1.0 (App Router)
- **React**: 19.2.3
- **TypeScript**: 5.x
- **Styling**: Tailwind CSS 4.x
- **Charts**: Recharts 3.6.0
- **Icons**: Lucide React
- **State Management**: React Context API
- **Package Manager**: pnpm

## 📦 Installation

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm/yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd tennis-dashboard
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
tennis-dashboard/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── api/                      # API Routes
│   │   │   ├── live-scores/          # Live scores endpoint
│   │   │   └── player/[id]/          # Player data endpoint
│   │   ├── layout.tsx                # Root layout with PlayerProvider
│   │   ├── page.tsx                  # Main dashboard page
│   │   └── styles/
│   │       └── global.css            # Global styles
│   ├── components/
│   │   ├── client/                   # Client Components (18 components)
│   │   │   ├── country-flag/         # Country flag display
│   │   │   ├── global-stats-donut-chart/  # Statistics donut chart
│   │   │   ├── header-actions/       # Header action buttons
│   │   │   ├── latest-scores/        # Latest match scores
│   │   │   ├── layout/
│   │   │   │   └── collapsible-siderbar/  # Collapsible sidebar
│   │   │   ├── live-scores-card/     # Live scores card
│   │   │   ├── navigation-item-client/  # Navigation items
│   │   │   ├── notifications-dropdown/  # Notifications dropdown
│   │   │   ├── performance-bar-chart/  # Performance bar chart
│   │   │   ├── performance-bar-chart-card/  # Performance chart card
│   │   │   ├── player-profile-client/  # Player profile component
│   │   │   ├── pro-subscription-modal/  # Subscription modal
│   │   │   ├── rankings-section-client/  # Rankings section
│   │   │   ├── search-dropdown/      # Search functionality
│   │   │   ├── sidebar-client/       # Sidebar component
│   │   │   ├── social-media-icons/   # Social media icons
│   │   │   ├── statistics-section-client/  # Statistics section
│   │   │   └── user-menu/            # User menu dropdown
│   │   └── server/                   # Server Components (4 components)
│   │       ├── cards/
│   │       │   └── ranking-card/     # Ranking card component
│   │       ├── dashboard-layout/     # Main layout wrapper
│   │       ├── header/               # Header component
│   │       ├── latest-scores/       # Latest scores (server)
│   │       └── sidebar/             # Sidebar (server)
│   ├── contexts/
│   │   └── PlayerContext.tsx         # Player selection context
│   ├── lib/
│   │   ├── constants.ts              # Dummy data and constants
│   │   ├── theme.ts                  # Theme colors and gradients
│   │   └── utils.ts                  # Utility functions
│   └── types/
│       └── index.ts                  # TypeScript type definitions
├── public/                           # Static assets
├── ARCHITECTURE.md                   # Architecture documentation
├── COMPONENT_STRUCTURE.md            # Component structure details
├── SETUP_COMPLETE.md                 # Setup completion notes
└── README.md                         # This file
```

## 🎯 Key Features

### Server/Client Component Architecture

The project follows Next.js 16 best practices with clear separation:

- **Server Components**: Default, render on server for better performance
- **Client Components**: Used only when interactivity or hooks are needed

See [COMPONENT_STRUCTURE.md](./COMPONENT_STRUCTURE.md) for detailed information.

### API Routes

- **`/api/live-scores`**: Returns live match data
- **`/api/player/[id]`**: Returns player-specific data including statistics, rankings, and latest match

### State Management

- **PlayerContext**: Manages selected player state across the application
- Uses React Context API for global state management

### Type Safety

- Strict TypeScript configuration
- All components have typed props
- Centralized type definitions in `src/types/index.ts`
- No `any` or `unknown` types

## 📝 Available Scripts

```bash
# Development
pnpm dev          # Start development server

# Production
pnpm build        # Build for production
pnpm start        # Start production server

# Code Quality
pnpm lint         # Run ESLint
```

## 🎨 Styling

- **Tailwind CSS 4.x**: Utility-first CSS framework
- **Custom Theme**: Centralized color system in `src/lib/theme.ts`
- **Responsive Breakpoints**:
  - `sm:` - 640px+ (small tablets)
  - `md:` - 768px+ (tablets)
  - `lg:` - 1024px+ (desktops - sidebar visible)
  - `xl:` - 1280px+ (large desktops - player profile visible)

## 📚 Documentation

- **[ARCHITECTURE.md](./ARCHITECTURE.md)**: Detailed architecture overview
- **[COMPONENT_STRUCTURE.md](./COMPONENT_STRUCTURE.md)**: Component structure and rationale
- **[SETUP_COMPLETE.md](./SETUP_COMPLETE.md)**: Setup completion notes

## 🔧 Development

### Adding New Components

1. **Server Components**: Add to `src/components/server/`
2. **Client Components**: Add to `src/components/client/` with `"use client"` directive
3. **Types**: Add to `src/types/index.ts`
4. **Constants**: Add to `src/lib/constants.ts`

### Best Practices

- ✅ Use Server Components by default
- ✅ Only use Client Components when necessary (hooks, interactivity)
- ✅ Maintain strict TypeScript typing
- ✅ Follow the folder structure conventions
- ✅ Use centralized types and constants

## 🚀 Deployment

### Build for Production

```bash
pnpm build
```

### Deploy to Vercel

The easiest way to deploy is using the [Vercel Platform](https://vercel.com):

1. Push your code to GitHub
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build

## 📄 License

This project is private and for showcase purposes.

## 🤝 Contributing

This is a showcase project. For questions or feedback, please contact the project maintainer.

---

**Built with ❤️ using Next.js 16 and React 19**
