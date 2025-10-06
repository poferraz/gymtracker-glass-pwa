# Glass Morphism Design System

## Design Philosophy

This design system creates a premium iOS 26 "Liquid Glass" aesthetic through layered transparency, sophisticated blur effects, and subtle depth cues. Every element should feel like frosted glass floating in space.

---

## Color Palette

### Primary Colors
```css
--primary-50: #eff6ff;
--primary-100: #dbeafe;
--primary-200: #bfdbfe;
--primary-300: #93c5fd;
--primary-400: #60a5fa;
--primary-500: #3b82f6;  /* Main brand blue */
--primary-600: #2563eb;
--primary-700: #1d4ed8;
--primary-800: #1e40af;
--primary-900: #1e3a8a;
```

### Success Colors
```css
--success-400: #4ade80;
--success-500: #22c55e;
--success-600: #16a34a;
--success-700: #15803d;
```

### Warning Colors
```css
--warning-400: #fbbf24;
--warning-500: #f59e0b;
--warning-600: #d97706;
```

### Danger Colors
```css
--danger-400: #f87171;
--danger-500: #ef4444;
--danger-600: #dc2626;
--danger-700: #b91c1c;
```

### Neutral Grays
```css
--gray-50: #f9fafb;
--gray-100: #f3f4f6;
--gray-200: #e5e7eb;
--gray-300: #d1d5db;
--gray-400: #9ca3af;
--gray-500: #6b7280;
--gray-600: #4b5563;
--gray-700: #374151;
--gray-800: #1f2937;
--gray-900: #111827;
```

### Glass Alpha Channels
```css
--glass-white-10: rgba(255, 255, 255, 0.1);
--glass-white-20: rgba(255, 255, 255, 0.2);
--glass-white-30: rgba(255, 255, 255, 0.3);
--glass-black-10: rgba(0, 0, 0, 0.1);
--glass-black-20: rgba(0, 0, 0, 0.2);
--glass-border: rgba(255, 255, 255, 0.18);
```

---

## Typography Scale

### Font Family
```css
--font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
```

### Type Scale
```css
/* Display (Headings on special pages) */
--text-display: 2.5rem;      /* 40px */
--text-display-weight: 800;

/* Heading 1 (Page titles) */
--text-h1: 2rem;             /* 32px */
--text-h1-weight: 700;

/* Heading 2 (Section titles) */
--text-h2: 1.5rem;           /* 24px */
--text-h2-weight: 600;

/* Heading 3 (Subsections) */
--text-h3: 1.25rem;          /* 20px */
--text-h3-weight: 600;

/* Heading 4 (Card titles) */
--text-h4: 1.125rem;         /* 18px */
--text-h4-weight: 500;

/* Body (Default text) */
--text-body: 1rem;           /* 16px */
--text-body-weight: 400;

/* Small (Supporting text) */
--text-small: 0.875rem;      /* 14px */
--text-small-weight: 400;

/* Tiny (Labels, captions) */
--text-tiny: 0.75rem;        /* 12px */
--text-tiny-weight: 400;
```

### Mobile Typography Adjustments
```css
@media (max-width: 430px) {
  --text-display: 2rem;      /* 32px on mobile */
  --text-h1: 1.75rem;        /* 28px on mobile */
  --text-h2: 1.375rem;       /* 22px on mobile */
}
```

---

## Spacing System

### Base Unit: 4px

```css
--spacing-0: 0;
--spacing-1: 0.25rem;   /* 4px */
--spacing-2: 0.5rem;    /* 8px */
--spacing-3: 0.75rem;   /* 12px */
--spacing-4: 1rem;      /* 16px */
--spacing-5: 1.25rem;   /* 20px */
--spacing-6: 1.5rem;    /* 24px */
--spacing-8: 2rem;      /* 32px */
--spacing-10: 2.5rem;   /* 40px */
--spacing-12: 3rem;     /* 48px */
--spacing-16: 4rem;     /* 64px */
```

### Mobile Safe Areas
```css
--safe-area-top: env(safe-area-inset-top, 0);
--safe-area-bottom: env(safe-area-inset-bottom, 0);
--safe-area-left: env(safe-area-inset-left, 0);
--safe-area-right: env(safe-area-inset-right, 0);
```

---

## Component Specifications

### Glass Card
**Usage**: Default container for content sections

```css
.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  padding: var(--spacing-4);
}

.glass-card-dark {
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

### Glass Panel
**Usage**: Larger sections, sidebar, main content areas

```css
.glass-panel {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.12);
  padding: var(--spacing-6);
}
```

### Glass Modal Overlay
**Usage**: Full-screen modal backgrounds

```css
.glass-modal-overlay {
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
}

.glass-modal-content {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 24px;
  box-shadow: 0 16px 64px rgba(0, 0, 0, 0.2);
}
```

### Glass Button
**Usage**: Interactive buttons with glass aesthetic

```css
.glass-button {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  padding: var(--spacing-3) var(--spacing-6);
  font-weight: 500;
  transition: all 0.2s ease;
  min-height: 44px; /* Touch target */
}

.glass-button:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.15);
}

.glass-button:active {
  transform: translateY(0);
}

.glass-button-primary {
  background: linear-gradient(135deg, 
    rgba(59, 130, 246, 0.6),
    rgba(37, 99, 235, 0.6)
  );
  border-color: rgba(59, 130, 246, 0.5);
}
```

### Glass Input
**Usage**: Form inputs with glass styling

```css
.glass-input {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: var(--spacing-3) var(--spacing-4);
  font-size: var(--text-body);
  transition: all 0.2s ease;
  min-height: 44px; /* Touch target */
}

.glass-input:focus {
  outline: none;
  border-color: rgba(59, 130, 246, 0.5);
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.glass-input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}
```

### Glass Badge
**Usage**: Status indicators, tags, labels

```css
.glass-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-2);
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 999px;
  padding: var(--spacing-1) var(--spacing-3);
  font-size: var(--text-small);
  font-weight: 500;
}
```

---

## Border Radius System

```css
--radius-sm: 8px;    /* Small elements */
--radius-md: 12px;   /* Buttons, inputs */
--radius-lg: 16px;   /* Cards */
--radius-xl: 20px;   /* Panels */
--radius-2xl: 24px;  /* Modals */
--radius-full: 9999px; /* Pills, badges */
```

---

## Shadow System

```css
/* Elevation levels */
--shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 16px rgba(0, 0, 0, 0.08);
--shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 12px 48px rgba(0, 0, 0, 0.12);
--shadow-2xl: 0 16px 64px rgba(0, 0, 0, 0.15);

/* Glass-specific shadows (softer) */
--glass-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
--glass-shadow-hover: 0 12px 48px rgba(0, 0, 0, 0.15);
```

---

## Animation Patterns

### Duration Scale
```css
--duration-instant: 100ms;
--duration-fast: 150ms;
--duration-normal: 200ms;
--duration-slow: 300ms;
--duration-slower: 500ms;
```

### Easing Curves
```css
--ease-out: cubic-bezier(0.33, 1, 0.68, 1);
--ease-in: cubic-bezier(0.32, 0, 0.67, 0);
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

### Common Transitions
```css
/* Smooth color/background changes */
transition: background 0.2s var(--ease-out), 
            border-color 0.2s var(--ease-out);

/* Hover lift effect */
transition: transform 0.2s var(--ease-out),
            box-shadow 0.2s var(--ease-out);

/* Focus ring */
transition: box-shadow 0.15s var(--ease-out);
```

### Micro-Interactions
```css
/* Button press */
@keyframes button-press {
  0% { transform: scale(1); }
  50% { transform: scale(0.95); }
  100% { transform: scale(1); }
}

/* Fade in */
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Slide up */
@keyframes slide-up {
  from { 
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Glass shimmer */
@keyframes glass-shimmer {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}
```

---

## Responsive Breakpoints

```css
/* Mobile first approach */
--breakpoint-sm: 375px;   /* Small phones */
--breakpoint-md: 430px;   /* iPhone Pro models */
--breakpoint-lg: 768px;   /* Tablets */
--breakpoint-xl: 1024px;  /* Desktop */
--breakpoint-2xl: 1280px; /* Large desktop */
```

---

## Accessibility Guidelines

### Minimum Touch Targets
- **Mobile**: 44x44px (iOS guideline)
- **Desktop**: 40x40px minimum

### Color Contrast
- **Body text**: 4.5:1 minimum
- **Large text** (18px+): 3:1 minimum
- **Interactive elements**: Clear focus indicators

### Focus Indicators
```css
.focusable:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
}
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Usage Guidelines

### Layering Hierarchy
1. **Background**: Solid colors or gradients (no blur)
2. **Base Layer**: Glass panels with medium blur (10-16px)
3. **Content Layer**: Glass cards with lighter blur (8-10px)
4. **Interactive Elements**: Buttons, inputs (minimal blur 6-8px)
5. **Overlay Layer**: Modals, tooltips (heavy blur 20-40px)

### Do's
✅ Use consistent blur amounts within same component type
✅ Maintain readable text contrast on glass surfaces
✅ Layer transparency for visual depth
✅ Add subtle borders to define glass edges
✅ Use soft shadows to enhance floating effect

### Don'ts
❌ Don't over-blur (makes text unreadable)
❌ Don't stack too many glass layers (performance)
❌ Don't use glass on small text elements
❌ Don't forget fallbacks for browsers without backdrop-filter
❌ Don't sacrifice accessibility for aesthetics
