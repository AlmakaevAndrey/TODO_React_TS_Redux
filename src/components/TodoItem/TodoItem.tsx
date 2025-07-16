import React from 'react';
import type { ITodo } from '../../types/todo';
import { Checkbox, DeleteButton, Item, Text } from './TodoItem.styles';

interface TodoItemProps {
  todo: ITodo;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  toggleTodo,
  deleteTodo,
}) => {
  return (
    <Item>
      <Checkbox checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
      <Text $completed={todo.completed}>{todo.text}</Text>
      <DeleteButton onClick={() => deleteTodo(todo.id)}>&times;</DeleteButton>
    </Item>
  );
};

export default TodoItem;
