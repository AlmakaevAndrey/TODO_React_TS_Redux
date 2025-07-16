import styled from 'styled-components';

export const MyButton = styled.button`
  position: relative;
  font-family: inherit;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 0.05em;
  border-radius: 0.8em;
  cursor: pointer;
  border: none;
  background: linear-gradient(to right, #667eea, #764ba2);
  color: black;
  overflow: hidden;

  svg {
    width: 1.2em;
    height: 1.2em;
    margin-right: 0.5em;
  }

  span {
    position: relative;
    z-index: 10;
    transition: color 0.4s;
    display: inline-flex;
    align-items: center;
    padding: 0.8em 1.2em 0.8em 1.05em;
  }

  &::before {
    content: '';
    background: #fff;
    width: 120%;
    height: 100%;
    position: absolute;
    top: 0;
    left: -10%;
    transform: skew(30deg);
    transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
    z-index: 0;
  }

  &:hover::before {
    transform: translate3d(100%, 0, 0);
  }

  &:active {
    transform: scale(0.95);
  }
`;
