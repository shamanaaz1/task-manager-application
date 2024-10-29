import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../redux/tasksReducer';

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

export default store;