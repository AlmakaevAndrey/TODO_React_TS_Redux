import type React from 'react';
import type { ITodo } from '../../types/todo';
import { TodoItem } from '../TodoItem';
import { List, Paragraph, Wrapper } from './TodoList.styles';

interface TodoListProps {
  todos: ITodo[];
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleTodo,
  deleteTodo,
}) => {
  if (todos.length === 0) {
    return <Paragraph>Add new task!</Paragraph>;
  }

  return (
    <Wrapper>
      <List>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </List>
    </Wrapper>
  );
};

export default TodoList;
