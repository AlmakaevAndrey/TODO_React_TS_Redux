import React from 'react';
import * as S from './ThemeSwitch.styles';
import { useTheme } from './ThemeContext';

export const ThemeSwitch: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <S.CheckboxAppleWrapper>
      <S.HiddenCheckbox
        id="check-apple"
        checked={isDark}
        onChange={toggleTheme}
      />
      <S.StyledLabel htmlFor="check-apple" $checked={isDark} />
    </S.CheckboxAppleWrapper>
  );
};

export default ThemeSwitch;
