import React from 'react';
import { GlassCard, GlassButton, GlassInput, GlassBadge } from './components/glass';

/**
 * App - Root application component
 * Demonstrates the glass morphism design system
 */
function App() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <GlassCard className="max-w-2xl w-full p-8">
        <h1 className="text-4xl font-bold mb-2">
          GymTracker Glass PWA
        </h1>
        <p className="text-white/80 mb-8">
          Phase 1.2a: Glass Components ✅
        </p>
        
        {/* Design System Demo */}
        <div className="space-y-6">
          {/* Buttons */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Glass Buttons</h3>
            <div className="flex flex-wrap gap-3">
              <GlassButton>Default</GlassButton>
              <GlassButton variant="primary">Primary</GlassButton>
              <GlassButton variant="success">Success</GlassButton>
              <GlassButton variant="danger">Danger</GlassButton>
              <GlassButton disabled>Disabled</GlassButton>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">Button Sizes</h3>
            <div className="flex flex-wrap items-center gap-3">
              <GlassButton size="sm" variant="primary">Small</GlassButton>
              <GlassButton size="md" variant="primary">Medium</GlassButton>
              <GlassButton size="lg" variant="primary">Large</GlassButton>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">Nested Cards</h3>
            <GlassCard variant="dark">
              <h4 className="font-medium mb-2">Dark Variant Card</h4>
              <p className="text-sm text-white/70 mb-3">
                Cards can be nested for visual depth.
              </p>
              <GlassButton size="sm" variant="success">Action Button</GlassButton>
            </GlassCard>
          </div>
          
          {/* Input Fields */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Input Fields</h3>
            <div className="space-y-3">
              <GlassInput 
                placeholder="Enter workout name..." 
                label="Workout Name"
              />
              <GlassInput 
                placeholder="Enter your email..." 
                label="Email"
                type="email"
                required
              />
              <GlassInput 
                placeholder="This field has an error" 
                label="With Error"
                error="This field is required"
              />
            </div>
          </div>

          {/* Badges */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Badges</h3>
            <div className="flex flex-wrap gap-2 mb-3">
              <GlassBadge>Default</GlassBadge>
              <GlassBadge variant="primary">Primary</GlassBadge>
              <GlassBadge variant="success">Completed</GlassBadge>
              <GlassBadge variant="warning">Warning</GlassBadge>
              <GlassBadge variant="danger">Error</GlassBadge>
            </div>
            <div className="flex flex-wrap gap-2">
              <GlassBadge size="sm" variant="primary">Small</GlassBadge>
              <GlassBadge size="md" variant="primary">Medium</GlassBadge>
              <GlassBadge size="lg" variant="primary">Large</GlassBadge>
              <GlassBadge 
                variant="success" 
                onRemove={() => alert('Badge removed!')}
              >
                Removable
              </GlassBadge>
            </div>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}

export default App;
