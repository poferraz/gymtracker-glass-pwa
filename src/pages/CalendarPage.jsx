import React from 'react';
import { GlassCard, GlassPanel } from '../components/glass';

/**
 * CalendarPage - Calendar view of workout history
 */
export default function CalendarPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Workout Calendar</h1>
      
      <GlassPanel title="January 2025">
        <div className="text-center py-12">
          <p className="text-white/60">Calendar view coming in Phase 2</p>
          <p className="text-white/40 text-sm mt-2">
            This will show your workout history in a monthly calendar format
          </p>
        </div>
      </GlassPanel>
      
      <GlassCard>
        <h3 className="text-lg font-semibold mb-3">This Week's Summary</h3>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-primary-400">5</div>
            <div className="text-sm text-white/60">Workouts</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-success-400">42</div>
            <div className="text-sm text-white/60">Exercises</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-warning-400">3.5h</div>
            <div className="text-sm text-white/60">Total Time</div>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}
