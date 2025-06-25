import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import type { ITodo } from '../types/todo';
import type { PayloadAction } from '@reduxjs/toolkit';

interface TodoState {
  todos: ITodo[];
}

const loadFromLocalStorage = (): ITodo[] => {
  try {
    const data = localStorage.getItem('todos');
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.warn('Reading mistakes from localstorage');
    return [];
  }
};

const initialState: TodoState = {
  todos: loadFromLocalStorage(),
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push({
        id: uuidv4(),
        text: action.payload,
        completed: false,
      });
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find(t => t.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter(t => t.id !== action.payload);
    },
    clearAll: state => {
      state.todos = [];
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, clearAll } = todoSlice.actions;
export default todoSlice.reducer;
