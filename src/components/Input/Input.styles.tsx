import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 20px 0;
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SearchInput = styled.input`
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

export const SearchButton = styled.button`
  border: none;
  background-color: #f4f2f2;
  margin-top: 0.1em;

  &:hover {
    cursor: pointer;
  }
`;

export const SearchIcon = styled.svg`
  height: 1.3em;
  width: 1.3em;
  fill: #b4b4b4;
`;
