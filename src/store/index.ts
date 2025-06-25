import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

store.subscribe(() => {
  try {
    const state = store.getState();
    localStorage.setItem('todos', JSON.stringify(state.todos.todos));
  } catch (error) {
    console.warn('Writing mistakes from localstorage');
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
