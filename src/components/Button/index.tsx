import React, { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

function Button({ isLoading, children, ...rest }: IButtonProps) {
  return( 
    <Container {...rest}> 
      Entrar      
    </Container> 
  )
}

export default Button