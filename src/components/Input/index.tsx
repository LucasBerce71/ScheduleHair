import React from "react";
import { IconBaseProps } from "react-icons";
import { Container } from "./styles";

interface IInputProps {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  value: string;
  onChange: Function; 
}

function Input({ name, icon, value, onChange }: IInputProps) {
  return (
    <Container>
      <input 
        placeholder={name} 
        value={value}
        onChange={() => onChange}
      />
    </Container>
  );
};

export default Input;