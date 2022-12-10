import React from "react";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";
import Input from "../../components/Input";
import { Container, Content, Background } from "./styles";

function SignIn () {
  return (
    <Container>
      <Content>
        <h1>Faça seu login</h1>
        <Input name="Login" />
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;