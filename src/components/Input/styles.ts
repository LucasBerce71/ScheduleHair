import styled from "styled-components";

export const Container = styled.div`
  background: #232129;
  border-radius: 10px;
  width: 26rem;

  border: 2px solid #232129;
  color: #666360;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px
  } 

  input {
    flex: 1;
    background: transparent;
    border: none;
    color: #f4ede8;
    height: 3rem;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;