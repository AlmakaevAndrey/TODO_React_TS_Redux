import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const List = styled.ul`
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

export const Paragraph = styled.p`
  color: '#666',
  display: 'flex',
  justifyContent: 'center',
  fontSize: '24px',
  margin: '45px',
`;
