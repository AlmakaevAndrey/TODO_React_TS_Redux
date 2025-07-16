import styled from 'styled-components';

interface StyledProps {
  $isOrange: boolean;
}

export const LayoutWrapper = styled.main<StyledProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100dvh;
  background-color: ${({ theme }) => theme.background};
`;

export const MyFooter = styled.footer`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.footer};
  color: ${({ theme }) => theme.footerText};
`;

export const IS_ORANGE = styled.div<StyledProps>`
  padding: 10px;
  background-color: ${({ theme }) => theme.text};
`;
