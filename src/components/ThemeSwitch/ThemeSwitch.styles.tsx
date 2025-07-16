import styled from 'styled-components';

export const CheckboxAppleWrapper = styled.div`
  position: relative;
  width: 50px;
  height: 25px;
  margin: 20px;
  user-select: none;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  width: 0;
  height: 0;
`;
export const StyledLabel = styled.label<{ $checked: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 25px;
  border-radius: 50px;
  background: ${({ $checked }) =>
    $checked
      ? 'linear-gradient(to bottom, #4cd964, #5de24e)'
      : 'linear-gradient(to bottom, #b3b3b3, #e6e6e6)'};
  cursor: pointer;
  transition: all 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    top: 1px;
    left: 1px;
    width: 23px;
    height: 23px;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
    transform: ${({ $checked }) =>
      $checked ? 'translateX(25px)' : 'translateX(0)'};
  }

  &:hover {
    background: linear-gradient(to bottom, #b3b3b3, #e6e6e6);
  }

  &:hover::after {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  }
`;
