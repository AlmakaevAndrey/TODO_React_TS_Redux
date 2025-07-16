import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background: ${({ theme }) => theme.headerBackground};
  color: white;
  padding: 1rem 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  margin: 0 0 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DivDateAndSwitcher = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Title = styled.h1`
  color: white;
  display: flex;
  justify-content: end;
`;
