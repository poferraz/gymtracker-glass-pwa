import React, { useState } from 'react';
import { GlassCard, GlassButton, GlassInput, GlassBadge, GlassPanel, GlassModal } from './components/glass';

/**
 * App - Root application component
 * Demonstrates the glass morphism design system
 */
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <GlassCard className="max-w-2xl w-full p-8">
        <h1 className="text-4xl font-bold mb-2">
          GymTracker Glass PWA
        </h1>
        <p className="text-white/80 mb-8">
          Phase 1.2: Glass Component Library Complete ✅
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
          
          {/* Button Sizes */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Button Sizes</h3>
            <div className="flex flex-wrap items-center gap-3">
              <GlassButton size="sm" variant="primary">Small</GlassButton>
              <GlassButton size="md" variant="primary">Medium</GlassButton>
              <GlassButton size="lg" variant="primary">Large</GlassButton>
            </div>
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
            </div>
          </div>
          
          {/* Badges */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Badges</h3>
            <div className="flex flex-wrap gap-2">
              <GlassBadge>Default</GlassBadge>
              <GlassBadge variant="primary">Primary</GlassBadge>
              <GlassBadge variant="success">Completed</GlassBadge>
              <GlassBadge variant="warning">Warning</GlassBadge>
              <GlassBadge variant="danger">Error</GlassBadge>
            </div>
          </div>
          
          {/* Panel */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Glass Panel</h3>
            <GlassPanel 
              title="Workout Stats"
              actions={
                <GlassButton size="sm" variant="primary">View All</GlassButton>
              }
            >
              <p className="text-white/80 mb-3">
                Glass panels are perfect for larger content sections with optional headers and actions.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary-400">24</div>
                  <div className="text-sm text-white/60">Workouts</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-success-400">156</div>
                  <div className="text-sm text-white/60">Exercises</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-warning-400">8</div>
                  <div className="text-sm text-white/60">This Week</div>
                </div>
              </div>
            </GlassPanel>
          </div>
          
          {/* Modal */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Glass Modal</h3>
            <GlassButton 
              variant="primary" 
              onClick={() => setIsModalOpen(true)}
            >
              Open Modal
            </GlassButton>
          </div>
        </div>
      </GlassCard>
      
      {/* Modal Example */}
      <GlassModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Welcome to GymTracker"
        size="md"
      >
        <div className="space-y-4">
          <p className="text-white/80">
            This is a glass morphism modal with blur effects and smooth animations.
          </p>
          <GlassInput 
            placeholder="Enter your name..." 
            label="Name"
          />
          <div className="flex gap-3 justify-end">
            <GlassButton onClick={() => setIsModalOpen(false)}>
              Cancel
            </GlassButton>
            <GlassButton 
              variant="primary"
              onClick={() => {
                alert('Welcome!');
                setIsModalOpen(false);
              }}
            >
              Get Started
            </GlassButton>
          </div>
        </div>
      </GlassModal>
    </div>
  );
}

export default App;
