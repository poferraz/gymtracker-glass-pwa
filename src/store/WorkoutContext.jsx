/**
 * WorkoutContext - Provides workout session state management
 * Uses sessionReducer with localStorage persistence
 */

import { createContext, useContext, useReducer, useEffect } from 'react';
import sessionReducer, { initialState, SET_SESSIONS } from './sessionReducer';
import { getItem, setItem } from '../services/localStorage';

// Create context
const WorkoutContext = createContext(null);

/**
 * WorkoutProvider component
 * @param {Object} props
 * @param {React.ReactNode} props.children
 */
export const WorkoutProvider = ({ children }) => {
  const [state, dispatch] = useReducer(sessionReducer, initialState);

  // Load sessions from localStorage on mount
  useEffect(() => {
    try {
      const savedSessions = getItem('gymtracker_sessions');
      if (savedSessions) {
        dispatch({ type: SET_SESSIONS, payload: { sessions: savedSessions } });
      }
    } catch (error) {
      console.error('Failed to load sessions from localStorage:', error);
    }
  }, []);

  // Save sessions to localStorage whenever state.sessions changes
  useEffect(() => {
    try {
      if (state.sessions.length > 0) {
        setItem('gymtracker_sessions', state.sessions);
      }
    } catch (error) {
      console.error('Failed to save sessions to localStorage:', error);
    }
  }, [state.sessions]);

  return (
    <WorkoutContext.Provider value={{ state, dispatch }}>
      {children}
    </WorkoutContext.Provider>
  );
};

/**
 * Custom hook to access workout context
 * @returns {{ state, dispatch }}
 * @throws {Error} If used outside WorkoutProvider
 */
export const useWorkout = () => {
  const context = useContext(WorkoutContext);
  if (!context) {
    throw new Error('useWorkout must be used within WorkoutProvider');
  }
  return context;
};
