# Development Rules & Standards

## Code Style

### Naming Conventions
- **Components**: PascalCase (e.g., `GlassCard`, `SessionManager`)
- **Files**: Match component name (e.g., `GlassCard.jsx`)
- **Functions/Variables**: camelCase (e.g., `handleSubmit`, `currentSession`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `MAX_EXERCISES`, `API_ENDPOINT`)
- **CSS Classes**: kebab-case for custom, Tailwind utilities as-is

### Component Structure Pattern
```javascript
// 1. Imports (React, hooks, components, utils, styles)
// 2. Component definition with props destructuring
// 3. Hooks (state, effects, custom hooks)
// 4. Event handlers
// 5. Helper functions
// 6. Render logic with early returns for loading/error states
// 7. Main JSX return
```

### State Management Rules
- Use reducer pattern for complex state (sessions, exercises)
- Local state (useState) for UI-only state (modals, inputs)
- Custom hooks for reusable stateful logic
- Immutable updates only - never mutate state directly

### File Organization
```
src/
├── components/
│   ├── glass/           # Glass morphism primitives
│   ├── features/        # Feature-specific components
│   └── layouts/         # Layout components
├── hooks/               # Custom React hooks
├── utils/               # Pure utility functions
├── services/            # API and external services
├── store/               # State management (reducers, actions)
├── styles/              # Global styles and design system
└── types/               # TypeScript types or JSDoc definitions
```

## Git Workflow

### Commit Standards (Conventional Commits)
- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation only changes
- `style:` Code style changes (formatting, missing semicolons)
- `refactor:` Code changes that neither fix bugs nor add features
- `perf:` Performance improvements
- `test:` Adding or updating tests
- `chore:` Maintenance tasks, dependency updates

### Commit Frequency
- Commit after each working feature/component
- Commit before switching contexts
- Minimum one commit per work session

### Branch Naming
- `feature/[feature-name]` - New features
- `fix/[bug-description]` - Bug fixes
- `refactor/[what-refactoring]` - Code refactoring
- `docs/[what-documenting]` - Documentation updates

### Daily Workflow
1. Pull latest from develop: `git pull origin develop`
2. Create feature branch if needed
3. Code and commit frequently
4. Push to GitHub at end of session
5. Create PR to develop when feature complete

## Glass Morphism Design System

### Core Glass Properties
```css
/* Standard Glass Card */
background: rgba(255, 255, 255, 0.1);
backdrop-filter: blur(10px);
border: 1px solid rgba(255, 255, 255, 0.18);
border-radius: 16px;
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);

/* Glass Overlay (Modals/Panels) */
backdrop-filter: blur(20px);
background: rgba(255, 255, 255, 0.15);

/* Glass on Dark Background */
background: rgba(0, 0, 0, 0.2);
border: 1px solid rgba(255, 255, 255, 0.1);
```

### Blur Hierarchy
- **Subtle**: 8px - Small cards, buttons
- **Medium**: 10-16px - Standard cards, panels
- **Heavy**: 20-30px - Overlays, modals
- **Extreme**: 40px - Full-screen overlays

### Opacity Guidelines
- **Foreground elements**: 0.7-0.9 (more opaque)
- **Mid-layer cards**: 0.4-0.6
- **Background panels**: 0.1-0.3 (more transparent)

### Gradient Overlays
Use subtle gradients for depth:
```css
background: linear-gradient(
  135deg,
  rgba(255, 255, 255, 0.1) 0%,
  rgba(255, 255, 255, 0.05) 100%
);
```

## Testing Standards

### Before Every Commit
- [ ] Feature works as intended
- [ ] No console errors or warnings
- [ ] Responsive on mobile (430px) and desktop (1024px+)
- [ ] Glass morphism styling applied correctly
- [ ] All user interactions provide feedback

### PWA Testing
- [ ] Service worker registers successfully
- [ ] Offline functionality works
- [ ] Install prompt appears correctly
- [ ] Manifest icons display properly

### Cross-Browser Testing (Before Release)
- Chrome/Edge (primary)
- Safari (iOS testing critical)
- Firefox

## Performance Budgets

### Bundle Size
- Initial JS bundle: <200KB gzipped
- CSS bundle: <50KB gzipped
- Total page weight: <500KB

### Performance Metrics
- First Contentful Paint: <1.5s
- Time to Interactive: <3s on 3G
- Lighthouse Performance: >90
- Lighthouse PWA: >90

### Code Splitting Strategy
- Route-based splitting for each major view
- Lazy load heavy components (calendar, charts)
- Prefetch critical routes

## Accessibility Requirements

### Minimum Standards
- All interactive elements keyboard accessible
- Focus indicators visible on all focusable elements
- ARIA labels for icon-only buttons
- Color contrast ratio: 4.5:1 minimum for text
- Touch targets: 44x44px minimum on mobile

### Glass Morphism Accessibility
- Ensure text contrast works with glass backgrounds
- Provide fallback solid backgrounds for low-end devices
- Test with reduced transparency system settings

## Code Documentation

### Component Documentation
Every component should have:
```javascript
/**
 * GlassCard - A glass morphism card container
 * 
 * @param {Object} props
 * @param {ReactNode} props.children - Card content
 * @param {string} props.variant - 'light' | 'dark' | 'colored'
 * @param {string} props.className - Additional Tailwind classes
 * @param {Function} props.onClick - Optional click handler
 */
```

### Complex Logic Comments
- Explain WHY, not WHAT
- Document non-obvious algorithms
- Note performance considerations
- Flag potential issues or technical debt

## Error Handling

### User-Facing Errors
- Always show user-friendly error messages
- Provide actionable next steps
- Log technical details to console/monitoring
- Never expose stack traces to users

### Error Boundaries
- Wrap route components in error boundaries
- Provide fallback UI for crashes
- Log errors to error monitoring service

## Code Review Checklist

Before merging to develop:
- [ ] Follows naming conventions
- [ ] Proper component structure
- [ ] No console.logs in production code
- [ ] Error handling implemented
- [ ] Loading states for async operations
- [ ] Responsive on all breakpoints
- [ ] Accessible (keyboard, screen reader)
- [ ] Performance impact considered
- [ ] Tests pass (when implemented)
- [ ] Documentation updated
