import React from 'react';
import styled from 'styled-components';
import { Header } from '../Header';
import { Input } from '../Input';
import { TodoList } from '../TodoList';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { deleteTodo, toggleTodo } from '../../store/todoSlice';
import dayjs from 'dayjs';

const LayoutWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  min-height: 100%;
`;

export const MainLayout: React.FC = () => {
  const todos = useAppSelector(state => state.todos.todos);
  const dispatch = useAppDispatch();
  dayjs.locale('en');
  const currentYear = dayjs().format('YYYY');

  return (
    <LayoutWrapper>
      <div>
        <Header />
        <Input />
        <TodoList
          todos={todos}
          toggleTodo={id => dispatch(toggleTodo(id))}
          deleteTodo={id => dispatch(deleteTodo(id))}
        />
      </div>
      <footer
        style={{
          padding: '1rem',
          textAlign: 'center',
          background: '#f3f3f3',
          color: '#444',
        }}
      >
        Simple Todo App | {currentYear} <br />
        by Almakaev Andrey
      </footer>
    </LayoutWrapper>
  );
};

export default MainLayout;
