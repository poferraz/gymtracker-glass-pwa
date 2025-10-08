import React from 'react';
import { GlassCard, GlassButton, GlassBadge } from '../components/glass';

/**
 * WorkoutsPage - View all workout sessions
 */
export default function WorkoutsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">My Workouts</h1>
        <GlassButton variant="primary">New Workout</GlassButton>
      </div>
      
      <GlassCard>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold">Upper Body Strength</h3>
          <GlassBadge variant="success">Completed</GlassBadge>
        </div>
        <p className="text-white/60 text-sm mb-2">2 hours ago • 8 exercises</p>
        <div className="flex gap-2">
          <GlassButton size="sm">View Details</GlassButton>
          <GlassButton size="sm">Edit</GlassButton>
        </div>
      </GlassCard>
      
      <GlassCard>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold">Leg Day</h3>
          <GlassBadge variant="primary">In Progress</GlassBadge>
        </div>
        <p className="text-white/60 text-sm mb-2">Started 30 minutes ago • 3 of 10 exercises</p>
        <div className="flex gap-2">
          <GlassButton size="sm" variant="primary">Continue</GlassButton>
          <GlassButton size="sm">Pause</GlassButton>
        </div>
      </GlassCard>
    </div>
  );
}
