import React from 'react';
import { GlassCard, GlassPanel } from '../components/glass';

/**
 * StatsPage - Progress tracking and statistics
 */
export default function StatsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Progress & Stats</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <GlassCard>
          <h3 className="text-sm text-white/60 mb-1">Total Workouts</h3>
          <div className="text-3xl font-bold text-primary-400">24</div>
          <p className="text-xs text-white/50 mt-1">+3 this week</p>
        </GlassCard>
        
        <GlassCard>
          <h3 className="text-sm text-white/60 mb-1">Total Exercises</h3>
          <div className="text-3xl font-bold text-success-400">156</div>
          <p className="text-xs text-white/50 mt-1">+12 this week</p>
        </GlassCard>
        
        <GlassCard>
          <h3 className="text-sm text-white/60 mb-1">Current Streak</h3>
          <div className="text-3xl font-bold text-warning-400">7 days</div>
          <p className="text-xs text-white/50 mt-1">Keep it up! 🔥</p>
        </GlassCard>
      </div>
      
      <GlassPanel title="Personal Records">
        <div className="text-center py-8">
          <p className="text-white/60">Progress charts and PRs coming in Phase 4</p>
        </div>
      </GlassPanel>
    </div>
  );
}
