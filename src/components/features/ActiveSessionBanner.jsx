/**
 * ActiveSessionBanner - Banner showing active workout session info
 */
import { useState, useEffect } from 'react';
import { useWorkout } from '../../store';
import { formatRelativeTime } from '../../utils';
import { GlassCard, GlassButton, GlassBadge } from '../glass';
import { Timer } from 'iconoir-react';

export const ActiveSessionBanner = () => {
  const { state } = useWorkout();
  const [duration, setDuration] = useState('');

  useEffect(() => {
    if (!state.currentSession) return;

    const updateDuration = () => {
      try {
        const start = new Date(state.currentSession.startTime);
        const now = new Date();

        if (isNaN(start.getTime())) {
          setDuration('0 min');
          return;
        }

        const diffInMs = now - start;
        const diffInMinutes = Math.floor(diffInMs / 1000 / 60);

        if (diffInMinutes < 1) {
          setDuration('< 1 min');
        } else if (diffInMinutes < 60) {
          setDuration(`${diffInMinutes} min`);
        } else {
          const hours = Math.floor(diffInMinutes / 60);
          const mins = diffInMinutes % 60;
          setDuration(`${hours}h ${mins}m`);
        }
      } catch (error) {
        console.error('Error calculating duration:', error);
        setDuration('0 min');
      }
    };

    updateDuration();
    const interval = setInterval(updateDuration, 60000);

    return () => clearInterval(interval);
  }, [state.currentSession]);

  if (!state.currentSession) return null;

  const formatDuration = (minutes) => {
    if (minutes < 60) return `${minutes}m`;
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  return (
    <GlassCard className="active-session-banner">
      <div className="banner-header">
        <div className="banner-info">
          <h3>{state.currentSession.templateName || 'Workout in Progress'}</h3>
          <div className="banner-meta">
            <span className="meta-item">
              <Timer width={16} height={16} />
              {formatDuration(duration)}
            </span>
            <span className="meta-separator">•</span>
            <span className="meta-item">
              {state.currentSession.exercises?.length || 0} exercises
            </span>
          </div>
          <p className="banner-started">Started {formatRelativeTime(state.currentSession.startTime)}</p>
        </div>
        <GlassBadge variant="success">Active</GlassBadge>
      </div>

      <div className="banner-actions">
        <GlassButton 
          variant="primary" 
          onClick={() => console.log(`Navigate to /workout/${state.currentSession.id}`)}
          className="banner-action-btn"
        >
          View Details
        </GlassButton>
        <GlassButton 
          variant="danger" 
          onClick={() => console.log('End Workout')}
          className="banner-action-btn"
        >
          End Workout
        </GlassButton>
      </div>
    </GlassCard>
  );
};
