# PWA & Offline Strategy

## Overview
GymTracker Glass PWA uses Workbox (via vite-plugin-pwa) to provide a full offline-first experience.

## Caching Strategy

### Static Assets (Cache First)
- JavaScript bundles
- CSS stylesheets
- Fonts
- Images
- Icons

**Why**: These assets rarely change and should load instantly from cache.

### Dynamic Content (Network First with Cache Fallback)
- Workout session data
- Exercise data
- User preferences

**Why**: Always try to get fresh data, but use cache if offline.

### Runtime Caching
- Google Fonts: Cache for 1 year
- External CDN assets: Cache with network fallback

## Offline Capabilities

### What Works Offline
✅ View all past workout sessions
✅ Create new workout sessions
✅ Add/edit/delete exercises
✅ All navigation and UI interactions
✅ Data persisted to localStorage

### What Requires Online
❌ Initial app install (first visit)
❌ App updates (automatic background sync)
❌ Future: Backend sync (when implemented)

## Update Strategy

### Automatic Updates
- Service worker checks for updates on app launch
- New version downloads in background
- User prompted to reload when update ready
- No interruption to current workout session

### Manual Update
- User can check for updates in settings (future feature)
- Clear cache option available for troubleshooting

## Testing Offline Mode

1. **Chrome DevTools**:
   - Open DevTools → Application → Service Workers
   - Check "Offline" checkbox
   - Reload app and verify functionality

2. **Real Device Testing**:
   - Install PWA on phone
   - Enable airplane mode
   - Test all features

## Service Worker Scope
- Scope: `/` (entire app)
- Registration: Automatic on app load
- Skip waiting: Enabled for fast updates

## Cache Management
- Maximum cache size: Managed by browser
- Cache invalidation: On service worker update
- Clear cache: Manual via DevTools or settings

## Future Enhancements (Post-Phase 3)
- Background sync for data upload
- Push notifications for workout reminders
- Offline analytics queuing
- Export/backup to cloud when online
