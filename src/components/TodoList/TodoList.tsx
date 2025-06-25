import styled from 'styled-components';
import type React from 'react';
import type { ITodo } from '../../types/todo';
import { TodoItem } from '../TodoItem';

interface TodoListProps {
  todos: ITodo[];
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 1rem 0 0;
  padding: 0;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  background-color: #fff;
`;

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleTodo,
  deleteTodo,
}) => {
  if (todos.length === 0) {
    return (
      <p
        style={{
          color: '#666',
          display: 'flex',
          justifyContent: 'center',
          fontSize: '24px',
          margin: '45px',
        }}
      >
        Add new task!
      </p>
    );
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
