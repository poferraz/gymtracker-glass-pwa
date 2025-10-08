/**
 * Action creator helper functions for session management
 * Provides properly formatted action objects for dispatching
 */

import {
  SET_SESSIONS,
  CREATE_SESSION,
  UPDATE_SESSION,
  DELETE_SESSION,
  SET_CURRENT_SESSION,
  SET_FOCUSED_SESSION,
  ADD_EXERCISE,
  UPDATE_EXERCISE,
  DELETE_EXERCISE,
  ADD_SET,
  UPDATE_SET,
  DELETE_SET
} from './sessionReducer';

// Session actions
/**
 * Create an action to set sessions
 * @param {Array} sessions - Array of session objects
 * @returns {Object} Action object
 */
export const setSessionsAction = (sessions) => ({
  type: SET_SESSIONS,
  payload: { sessions }
});

/**
 * Create an action to create a new session
 * @param {string} date - Session date
 * @param {string} startTime - Session start time
 * @param {string} [notes=''] - Optional session notes
 * @returns {Object} Action object
 */
export const createSessionAction = (date, startTime, notes = '') => ({
  type: CREATE_SESSION,
  payload: { date, startTime, notes }
});

/**
 * Create an action to update a session
 * @param {string} sessionId - ID of the session to update
 * @param {Object} updates - Updates to apply to the session
 * @returns {Object} Action object
 */
export const updateSessionAction = (sessionId, updates) => ({
  type: UPDATE_SESSION,
  payload: { sessionId, updates }
});

/**
 * Create an action to delete a session
 * @param {string} sessionId - ID of the session to delete
 * @returns {Object} Action object
 */
export const deleteSessionAction = (sessionId) => ({
  type: DELETE_SESSION,
  payload: { sessionId }
});

/**
 * Create an action to set the current session
 * @param {string} sessionId - ID of the session to set as current
 * @returns {Object} Action object
 */
export const setCurrentSessionAction = (sessionId) => ({
  type: SET_CURRENT_SESSION,
  payload: { sessionId }
});

/**
 * Create an action to set the focused session
 * @param {string} sessionId - ID of the session to set as focused
 * @returns {Object} Action object
 */
export const setFocusedSessionAction = (sessionId) => ({
  type: SET_FOCUSED_SESSION,
  payload: { sessionId }
});

// Exercise actions
/**
 * Create an action to add an exercise
 * @param {string} sessionId - ID of the session to add the exercise to
 * @param {string} name - Name of the exercise
 * @returns {Object} Action object
 */
export const addExerciseAction = (sessionId, name) => ({
  type: ADD_EXERCISE,
  payload: { sessionId, name }
});

/**
 * Create an action to update an exercise
 * @param {string} sessionId - ID of the session containing the exercise
 * @param {string} exerciseId - ID of the exercise to update
 * @param {string} name - New name for the exercise
 * @returns {Object} Action object
 */
export const updateExerciseAction = (sessionId, exerciseId, name) => ({
  type: UPDATE_EXERCISE,
  payload: { sessionId, exerciseId, name }
});

/**
 * Create an action to delete an exercise
 * @param {string} sessionId - ID of the session containing the exercise
 * @param {string} exerciseId - ID of the exercise to delete
 * @returns {Object} Action object
 */
export const deleteExerciseAction = (sessionId, exerciseId) => ({
  type: DELETE_EXERCISE,
  payload: { sessionId, exerciseId }
});

// Set actions
/**
 * Create an action to add a set
 * @param {string} sessionId - ID of the session containing the exercise
 * @param {string} exerciseId - ID of the exercise to add the set to
 * @param {number} reps - Number of repetitions
 * @param {number} weight - Weight used
 * @returns {Object} Action object
 */
export const addSetAction = (sessionId, exerciseId, reps, weight) => ({
  type: ADD_SET,
  payload: { sessionId, exerciseId, reps, weight }
});

/**
 * Create an action to update a set
 * @param {string} sessionId - ID of the session containing the exercise
 * @param {string} exerciseId - ID of the exercise containing the set
 * @param {string} setId - ID of the set to update
 * @param {Object} updates - Updates to apply to the set
 * @returns {Object} Action object
 */
export const updateSetAction = (sessionId, exerciseId, setId, updates) => ({
  type: UPDATE_SET,
  payload: { sessionId, exerciseId, setId, updates }
});

/**
 * Create an action to delete a set
 * @param {string} sessionId - ID of the session containing the exercise
 * @param {string} exerciseId - ID of the exercise containing the set
 * @param {string} setId - ID of the set to delete
 * @returns {Object} Action object
 */
export const deleteSetAction = (sessionId, exerciseId, setId) => ({
  type: DELETE_SET,
  payload: { sessionId, exerciseId, setId }
});
