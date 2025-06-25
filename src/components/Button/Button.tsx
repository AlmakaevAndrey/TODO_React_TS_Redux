import React from "react";
import styled from "styled-components";

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
};

const MyButton = styled.button`
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
    content: "";
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

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  disabled = false,
  type = "button",
}) => {
  return (
    <MyButton type={type} onClick={onClick} disabled={disabled}>
      <span>
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 
              1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 
              12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"
            fill="currentColor"
          />
        </svg>
        {children}
      </span>
    </MyButton>
  );
};

export default Button;
