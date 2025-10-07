# GymTracker Glass PWA

A premium glass morphism Progressive Web App for workout tracking, featuring an iOS 26 Liquid Glass aesthetic with offline-first architecture.

## Project Status
🚧 **In Development** - Phase 0: Foundation & Documentation

## Tech Stack
- React 18.3.1
- Vite
- Tailwind CSS
- Workbox (PWA)
- React Router v6

## Vision
Rebuild the existing GymTracker app as a production-grade PWA with:
- Premium glass morphism UI design
- Offline-first architecture
- Professional code standards
- Comprehensive documentation
- Full PWA capabilities

## Project Structure

```
gymtracker-glass-pwa/
├── public/
│   ├── robots.txt
│   ├── pwa-192x192.png (to be added)
│   ├── pwa-512x512.png (to be added)
│   └── apple-touch-icon.png (to be added)
├── src/
│   ├── components/
│   │   ├── glass/          # Glass morphism primitives (GlassCard, GlassButton, etc.)
│   │   ├── features/       # Feature-specific components (SessionManager, ExerciseForm, etc.)
│   │   └── layouts/        # Layout components (AppLayout, Navigation, etc.)
│   ├── hooks/              # Custom React hooks (useSession, useLocalStorage, etc.)
│   ├── store/              # State management (reducers, actions, context)
│   ├── utils/              # Utility functions (date helpers, formatters, etc.)
│   ├── services/           # Services (localStorage service, etc.)
│   ├── styles/             # Additional global styles
│   ├── App.jsx             # Root component
│   ├── main.jsx            # React entry point
│   └── index.css           # Global styles with glass utilities
├── templates/              # YAML templates for vibe coding
├── docs/                   # Project documentation
│   ├── rules.md
│   ├── requirements.md
│   ├── DESIGN_SYSTEM.md
│   └── CHANGELOG.md
├── .vscode/                # VSCode configuration
├── index.html              # Entry HTML
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind configuration
├── package.json            # Dependencies
└── README.md
```

## Setup Instructions

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Git for version control

### Installation

1. Clone the repository:
```bash
git clone https://github.com/poferraz/gymtracker-glass-pwa.git
cd gymtracker-glass-pwa
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open browser to: `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build production bundle
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

### Development Workflow

1. Pull latest changes: `git pull origin develop`
2. Create feature branch: `git checkout -b feature/your-feature`
3. Make changes and test locally
4. Run linter: `npm run lint`
5. Commit changes: `git commit -m "feat: your changes"`
6. Push to GitHub: `git push origin feature/your-feature`

## Development

### Development Workflow

1. **Daily Start**:
   ```bash
   git pull origin develop
   npm run dev
   ```

2. **Making Changes**:
   - Create feature branch: `git checkout -b feature/your-feature`
   - Make changes and test locally
   - Run linter: `npm run lint`
   - Commit frequently with conventional commits

3. **Before Committing**:
   - [ ] Feature works as intended
   - [ ] No console errors
   - [ ] Responsive on mobile and desktop
   - [ ] Glass morphism styling correct

4. **End of Session**:
   ```bash
   git push origin your-branch
   ```

### Tech Stack Details
- **Framework**: React 18.3.1 with functional components and hooks
- **Build Tool**: Vite 5.x for fast HMR and optimized builds
- **Styling**: Tailwind CSS 3.x with custom glass morphism utilities
- **Routing**: React Router v6
- **State Management**: Reducer pattern with React Context
- **PWA**: Vite PWA plugin with Workbox
- **Code Quality**: ESLint + Prettier

### Offline Strategy
The app uses a service worker (via Workbox) with the following cache strategy:
- **Cache First**: All static assets (JS, CSS, fonts, images)
- **Network First**: API calls (when backend added)
- **Offline Fallback**: Full app functionality available offline after first visit

## Documentation

For detailed documentation, see the `docs/` directory:

- **[docs/rules.md](docs/rules.md)** - Development rules and coding standards
- **[docs/requirements.md](docs/requirements.md)** - Functional and non-functional requirements
- **[docs/DESIGN_SYSTEM.md](docs/DESIGN_SYSTEM.md)** - Glass morphism design system specifications
- **[docs/CHANGELOG.md](docs/CHANGELOG.md)** - Version history and release notes
- **[docs/PWA_STRATEGY.md](docs/PWA_STRATEGY.md)** - PWA implementation and offline strategy

## Deployment
*(Coming soon)*

---

Started: October 6, 2025
