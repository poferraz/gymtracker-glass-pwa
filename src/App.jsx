import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppLayout } from './components/layouts';
import { GlassButton, GlassInput, GlassModal } from './components/glass';
import { HomePage, WorkoutsPage, CalendarPage, StatsPage } from './pages';

/**
 * App - Root application component with routing
 * Demonstrates the glass morphism design system
 */
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userName, setUserName] = useState('');

  return (
    <AppLayout>
      {/* Temporary navigation - will be replaced in 1.4b */}
      <div className="mb-6 flex gap-4">{/* Removed all links */}</div>

      {/* Route definitions */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/workouts" element={<WorkoutsPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/stats" element={<StatsPage />} />
      </Routes>

      {/* Modal Example */}
      <GlassModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Welcome to GymTracker"
        size="md"
      >
        <div className="space-y-4">
          <p className="text-white/80">
            This is a glass morphism modal with blur effects and smooth
            animations.
          </p>
          <GlassInput
            placeholder="Enter your name..."
            label="Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
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
    </AppLayout>
  );
}

export default App;
