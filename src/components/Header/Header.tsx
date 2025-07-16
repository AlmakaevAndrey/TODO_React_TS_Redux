import React from 'react';
import { ThemeSwitch } from '../ThemeSwitch/ThemeSwitch';
import { CurrantDate } from '../CurrantDate/CurrantDate';
import { DivDateAndSwitcher, HeaderWrapper, Title } from './Header.styles';

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
