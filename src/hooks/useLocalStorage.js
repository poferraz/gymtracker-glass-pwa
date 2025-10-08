import { useState, useEffect } from 'react';
import * as storage from '../services/localStorage';

/**
 * Custom hook for managing localStorage with React state
 * 
 * @param {string} key - Storage key
 * @param {*} initialValue - Initial value if nothing in storage
 * @returns {[*, Function]} Current value and setter function
 * 
 * @example
 * const [name, setName] = useLocalStorage('user_name', 'Guest');
 */
export function useLocalStorage(key, initialValue) {
  // Initialize state with value from localStorage or initial value
  const [storedValue, setStoredValue] = useState(() => {
    return storage.getItem(key, initialValue);
  });

  // Update localStorage when state changes
  useEffect(() => {
    storage.setItem(key, storedValue);
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}
