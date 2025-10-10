/**
 * ActiveSessionBanner - Banner showing active workout session info
 */
import { useState, useEffect } from 'react';
import { useWorkout } from '../../store';
import { formatRelativeTime } from '../../utils';
import { GlassCard, GlassButton } from '../glass';

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

  return (
    <GlassCard variant="light" className="sticky top-0">
      <div className="flex justify-between items-center">
        <div>
          <h3>Workout in Progress</h3>
          <p>Started: {state.currentSession.startTime ? formatRelativeTime(new Date(state.currentSession.startTime)) : 'just now'}</p>
          <p>Duration: {duration}</p>
          <p>Exercises: {state.currentSession.exercises?.length || 0}</p>
        </div>
        <div className="flex gap-2">
          <GlassButton onClick={() => console.log('View Details')}>View Details</GlassButton>
          <GlassButton variant="danger" onClick={() => console.log('End Workout')}>End Workout</GlassButton>
        </div>
      </div>
    </GlassCard>
  );
};
