import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.6rem 1rem;
  border-bottom: 1px solid #ddd;
  background-color: #fafafa;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const Text = styled.span<{ $completed: boolean }>`
  flex-grow: 1;
  margin-left: 0.5rem;
  text-decoration: ${props => (props.$completed ? 'line-through' : 'none')};
  color: ${props => (props.$completed ? '#999' : '#333')};
`;

export const DeleteButton = styled.button`
  background: transparent;
  border: none;
  color: #e74c3c;
  cursor: pointer;
  font-size: 1.1rem;
  padding: 0 0.5rem;
  &:hover {
    color: #c0392b;
  }
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  cursor: pointer;
  width: 18px;
  height: 18px;
`;
