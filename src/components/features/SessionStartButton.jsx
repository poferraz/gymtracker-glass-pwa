/**
 * SessionStartButton - Button to start new workout or resume current
 */
import { useState } from 'react';
import { useWorkout } from '../../store';
import { createSessionAction, setCurrentSessionAction } from '../../store';
import { GlassButton } from '../glass';

export const SessionStartButton = ({ className = '' }) => {
  const { state, dispatch } = useWorkout();
  const [isCreating, setIsCreating] = useState(false);

  const handleStartWorkout = () => {
    if (state.currentSession) {
      console.log('Resume session:', state.currentSession);
      return;
    }

    setIsCreating(true);
    const now = new Date();
    const sessionAction = createSessionAction(
      now.toISOString().split('T')[0],
      now.toISOString(),
      ''
    );

    dispatch(sessionAction);

    setTimeout(() => {
      const newSession = state.sessions[state.sessions.length - 1];
      if (newSession) {
        dispatch(setCurrentSessionAction(newSession.id));
      }
      setIsCreating(false);
    }, 100);
  };

  return (
    <GlassButton
      className={className}
      variant="success"
      size="lg"
      onClick={handleStartWorkout}
      disabled={isCreating}
    >
      {isCreating 
        ? 'Starting...' 
        : state.currentSession 
          ? 'Resume Workout' 
          : 'Start New Workout'}
    </GlassButton>
  );
};
