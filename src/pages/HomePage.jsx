import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Gym, Calendar, StatsReport, Plus } from 'iconoir-react';
import { GlassCard } from '../components/glass';
import { SessionStartButton } from '../components/features/SessionStartButton';
import { ActiveSessionBanner } from '../components/features/ActiveSessionBanner';

/**
 * HomePage - Landing/Dashboard view
 */
export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-page space-y-6">
      {/* Hero Section */}
      <div className="hero-section text-center py-10">
        <h1 className="hero-title text-4xl font-bold mb-4">Ready to Train?</h1>
        <p className="hero-subtitle text-lg text-white/80 mb-6">
          Track your progress, crush your goals
        </p>
        <SessionStartButton />
      </div>

      {/* Active Session Banner */}
      <ActiveSessionBanner />

      {/* Quick Access Section */}
      <div className="quick-access-section">
        <h2 className="text-xl font-semibold mb-4">Quick Access</h2>
        <div className="quick-access-grid grid grid-cols-2 gap-4">
          <GlassCard
            onClick={() => navigate('/workouts')}
            className="flex flex-col items-center justify-center p-4"
          >
            <Gym width={24} height={24} className="mb-2" />
            <span>Workouts</span>
          </GlassCard>
          <GlassCard
            onClick={() => navigate('/calendar')}
            className="flex flex-col items-center justify-center p-4"
          >
            <Calendar width={24} height={24} className="mb-2" />
            <span>Calendar</span>
          </GlassCard>
          <GlassCard
            onClick={() => navigate('/stats')}
            className="flex flex-col items-center justify-center p-4"
          >
            <StatsReport width={24} height={24} className="mb-2" />
            <span>Stats</span>
          </GlassCard>
          <GlassCard
            onClick={() => navigate('/workouts')}
            className="flex flex-col items-center justify-center p-4"
          >
            <Plus width={24} height={24} className="mb-2" />
            <span>New Template</span>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
