import type React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addTodo } from '../../store/todoSlice';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 20px 0;
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SearchInput = styled.input`
  font-family: inherit;
  font-size: inherit;
  background-color: #f4f2f2;
  border: none;
  color: #646464;
  padding: 0.7rem 1rem;
  border-radius: 30px;
  max-width: 20rem;
  width: 45em;
  transition: all ease-in-out 0.5s;
  margin-right: -2rem;
`;

const SearchButton = styled.button`
  border: none;
  background-color: #f4f2f2;
  margin-top: 0.1em;

  &:hover {
    cursor: pointer;
  }
`;

const SearchIcon = styled.svg`
  height: 1.3em;
  width: 1.3em;
  fill: #b4b4b4;
`;

export const Input: React.FC = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    const trimmed = inputValue.trim();
    if (!trimmed) return;
    dispatch(addTodo(trimmed));
    setInputValue('');
  };

  return (
    <Wrapper>
      <SearchBox>
        <SearchInput
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleAddTodo()}
          placeholder="Type your to do"
        />
        <SearchButton onClick={handleAddTodo}>
          <SearchIcon aria-hidden="true" viewBox="0 0 24 24">
            <g>
              <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </g>
          </SearchIcon>
        </SearchButton>
      </SearchBox>
    </Wrapper>
  );
};

export default Input;
