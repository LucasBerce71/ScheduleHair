import styled, { keyframes } from "styled-components";

import signInBackgroundImg from "../../assets/images/sign-in-background.svg";

interface IStyledProps {
  isError: boolean;
}

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  place-content: center;

  width: 100%;
  max-width: 700px;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }

  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;
`;

export const Text = styled.p`
  color: white;
  margin-top: 1.5rem;

  transition: 0.2s;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

export const InputContainer = styled.div`
  background: #232129;
  border-radius: 10px;
  width: 26rem;

  border: ${(props: IStyledProps) => props?.isError ? "2px solid red" : "2px solid #232129"};
  color: #666360;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px
  } 

  svg {
    margin-right: 16px;
  }
`;

export const Input = styled.input`
    flex: 1;
    background: transparent;
    border: none;
    color: #f4ede8;
    height: 1rem;
    padding: 1rem;

    &::placeholder {
      color: #666360;
    }
`;