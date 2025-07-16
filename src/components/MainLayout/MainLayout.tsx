import React from 'react';
import { Header } from '../Header';
import { Input } from '../Input';
import { TodoList } from '../TodoList';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { deleteTodo, toggleTodo } from '../../store/todoSlice';
import * as S from './MainLayout.styles';

const IS_ORANGE = false;

export const MainLayout: React.FC = () => {
  const todos = useAppSelector(state => state.todos.todos);
  const dispatch = useAppDispatch();
  const myDate = new Date();
  const currentYear = myDate.getFullYear();

  return (
    <S.LayoutWrapper $isOrange={IS_ORANGE}>
      <div>
        <Header />
        <Input />
        <TodoList
          todos={todos}
          toggleTodo={id => dispatch(toggleTodo(id))}
          deleteTodo={id => dispatch(deleteTodo(id))}
        />
      </div>
      <S.MyFooter>
        Simple Todo App | {currentYear} <br />
        by Almakaev Andrey
      </S.MyFooter>
    </S.LayoutWrapper>
  );
};

export default MainLayout;
