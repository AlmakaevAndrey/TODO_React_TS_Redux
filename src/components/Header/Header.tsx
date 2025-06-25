import React from 'react';
import styled from 'styled-components';
import { ThemeSwitch } from '../ThemeSwitch/ThemeSwitch';
import { CurrantDate } from '../CurrantDate/CurrantDate';

const HeaderWrapper = styled.header`
  background: linear-gradient(90deg, #667eea, #764ba2);
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

const DivDateAndSwitcher = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Title = styled.h1`
  color: white;
  display: flex;
  justify-content: end;
`;

export const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Title> TODO </Title>
      <DivDateAndSwitcher>
        <ThemeSwitch />
        <CurrantDate />
      </DivDateAndSwitcher>
    </HeaderWrapper>
  );
};

export default Header;
