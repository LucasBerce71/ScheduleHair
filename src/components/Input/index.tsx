import React from "react";
import { IconBaseProps } from "react-icons";
import { Container } from "./styles";

interface IInputProps {
  name: string;
  icon?: React.ComponentType<IconBaseProps> 
}

function Input({ name, icon }: IInputProps) {
  return (
    <Container>
      <input placeholder={name} />
    </Container>
  );
};

export default Input;