import React from 'react';
import { GlassCard, GlassButton } from '../components/glass';

/**
 * HomePage - Landing/Dashboard view
 */
export default function HomePage() {
  return (
    <div className="space-y-6">
      <GlassCard>
        <h1 className="text-3xl font-bold mb-2">Welcome to GymTracker</h1>
        <p className="text-white/80 mb-4">
          Track your workouts with style using our premium glass morphism interface.
        </p>
        <GlassButton variant="primary">Start New Workout</GlassButton>
      </GlassCard>
      
      <GlassCard>
        <h2 className="text-xl font-semibold mb-3">Recent Activity</h2>
        <p className="text-white/60">No recent workouts. Start your first workout to see activity here.</p>
      </GlassCard>
    </div>
  );
}
