/**
 * Session Reducer for GymTracker
 * Manages workout sessions, exercises, and sets
 */

// Action type constants
export const SET_SESSIONS = 'SET_SESSIONS';
export const CREATE_SESSION = 'CREATE_SESSION';
export const UPDATE_SESSION = 'UPDATE_SESSION';
export const DELETE_SESSION = 'DELETE_SESSION';
export const SET_CURRENT_SESSION = 'SET_CURRENT_SESSION';
export const SET_FOCUSED_SESSION = 'SET_FOCUSED_SESSION';
export const ADD_EXERCISE = 'ADD_EXERCISE';
export const UPDATE_EXERCISE = 'UPDATE_EXERCISE';
export const DELETE_EXERCISE = 'DELETE_EXERCISE';
export const ADD_SET = 'ADD_SET';
export const UPDATE_SET = 'UPDATE_SET';
export const DELETE_SET = 'DELETE_SET';

// Initial state
export const initialState = {
  sessions: [],
  currentSession: null,
  focusedSession: null
};

/**
 * Session reducer function
 * @param {Object} state - Current state
 * @param {Object} action - Action to perform
 * @returns {Object} New state
 */
export default function sessionReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SESSIONS: {
      return {
        ...state,
        sessions: action.payload.sessions
      };
    }

    case CREATE_SESSION: {
      const newSession = {
        id: crypto.randomUUID(),
        date: action.payload.date,
        startTime: action.payload.startTime,
        endTime: null,
        notes: action.payload.notes || '',
        exercises: []
      };
      return {
        ...state,
        sessions: [...state.sessions, newSession]
      };
    }

    case UPDATE_SESSION: {
      return {
        ...state,
        sessions: state.sessions.map(session =>
          session.id === action.payload.sessionId
            ? { ...session, ...action.payload.updates }
            : session
        )
      };
    }

    case DELETE_SESSION: {
      return {
        ...state,
        sessions: state.sessions.filter(session => session.id !== action.payload.sessionId)
      };
    }

    case SET_CURRENT_SESSION: {
      return {
        ...state,
        currentSession: action.payload.sessionId
      };
    }

    case SET_FOCUSED_SESSION: {
      return {
        ...state,
        focusedSession: action.payload.sessionId
      };
    }

    case ADD_EXERCISE: {
      return {
        ...state,
        sessions: state.sessions.map(session =>
          session.id === action.payload.sessionId
            ? {
                ...session,
                exercises: [
                  ...session.exercises,
                  { id: crypto.randomUUID(), name: action.payload.name, sets: [] }
                ]
              }
            : session
        )
      };
    }

    case UPDATE_EXERCISE: {
      return {
        ...state,
        sessions: state.sessions.map(session =>
          session.id === action.payload.sessionId
            ? {
                ...session,
                exercises: session.exercises.map(exercise =>
                  exercise.id === action.payload.exerciseId
                    ? { ...exercise, name: action.payload.name }
                    : exercise
                )
              }
            : session
        )
      };
    }

    case DELETE_EXERCISE: {
      return {
        ...state,
        sessions: state.sessions.map(session =>
          session.id === action.payload.sessionId
            ? {
                ...session,
                exercises: session.exercises.filter(exercise => exercise.id !== action.payload.exerciseId)
              }
            : session
        )
      };
    }

    case ADD_SET: {
      return {
        ...state,
        sessions: state.sessions.map(session =>
          session.id === action.payload.sessionId
            ? {
                ...session,
                exercises: session.exercises.map(exercise =>
                  exercise.id === action.payload.exerciseId
                    ? {
                        ...exercise,
                        sets: [
                          ...exercise.sets,
                          {
                            id: crypto.randomUUID(),
                            reps: action.payload.reps,
                            weight: action.payload.weight,
                            completed: false
                          }
                        ]
                      }
                    : exercise
                )
              }
            : session
        )
      };
    }

    case UPDATE_SET: {
      return {
        ...state,
        sessions: state.sessions.map(session =>
          session.id === action.payload.sessionId
            ? {
                ...session,
                exercises: session.exercises.map(exercise =>
                  exercise.id === action.payload.exerciseId
                    ? {
                        ...exercise,
                        sets: exercise.sets.map(set =>
                          set.id === action.payload.setId
                            ? { ...set, ...action.payload.updates }
                            : set
                        )
                      }
                    : exercise
                )
              }
            : session
        )
      };
    }

    case DELETE_SET: {
      return {
        ...state,
        sessions: state.sessions.map(session =>
          session.id === action.payload.sessionId
            ? {
                ...session,
                exercises: session.exercises.map(exercise =>
                  exercise.id === action.payload.exerciseId
                    ? {
                        ...exercise,
                        sets: exercise.sets.filter(set => set.id !== action.payload.setId)
                      }
                    : exercise
                )
              }
            : session
        )
      };
    }

    default:
      return state;
  }
}
