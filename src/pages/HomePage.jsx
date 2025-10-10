import React from 'react';
import { GlassCard, GlassButton, GlassPanel } from '../components/glass';
import { useWorkout } from '../store';
import { createSessionAction } from '../store/actions';
import {
  SessionStartButton,
  ActiveSessionBanner,
} from '../components/features';
import { Play } from 'iconoir-react';

/**
 * HomePage - Landing/Dashboard view
 */
export default function HomePage() {
  const { state, dispatch } = useWorkout();

  const handleCreateSession = () => {
    const now = new Date();
    dispatch(
      createSessionAction(
        now.toISOString().split('T')[0],
        now.toISOString(),
        'Test session'
      )
    );
  };

  return (
    <div className="space-y-6">
      <ActiveSessionBanner />

      <GlassCard>
        <h1 className="text-3xl font-bold mb-2">Welcome to GymTracker</h1>
        <p className="text-white/80 mb-4">
          Track your workouts with style using our premium glass morphism
          interface.
        </p>
        <GlassButton variant="primary">
          <Play width={24} height={24} className="mr-2" /> Start New
          Workout
        </GlassButton>
      </GlassCard>

      <GlassCard>
        <h2 className="text-xl font-semibold mb-3">Recent Activity</h2>
        <p className="text-white/60">
          No recent workouts. Start your first workout to see activity here.
        </p>
      </GlassCard>

      <GlassCard>
        <h2 className="text-xl font-semibold mb-3">Session Management</h2>
        <p className="text-white/60 mb-4">
          Manage your workout sessions with ease.
        </p>
        <p className="text-white/60 mb-4">
          Total Sessions: {state.sessions.length}
        </p>
        <GlassButton onClick={handleCreateSession}>
          <Play width={24} height={24} className="mr-2" /> Create Test
          Session
        </GlassButton>
      </GlassCard>

      <GlassPanel title="Start Your Workout" className="mt-6">
        <SessionStartButton />
      </GlassPanel>
    </div>
  );
}
