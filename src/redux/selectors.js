import { createSelector } from 'reselect';

// Basic input selector to get the tasks list from the state
const selectTasks = (state) => state.tasks.tasks;

// Memoized selector for sorting tasks
export const selectSortedTasks = createSelector(
  [selectTasks],
  (tasks) => {
    return [...tasks].sort((a, b) => {
      // Sort by completion status: pending tasks first (completed: false)
      if (a.completed === b.completed) {
        // If both have the same completion status, sort by creation date (newest first)
        return new Date(b.createdAt) - new Date(a.createdAt);
      }

      // Pending tasks (completed: false) should come before completed tasks (completed: true)
      return a.completed ? 1 : -1;
    });
  }
);