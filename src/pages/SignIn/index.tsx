import React, { ChangeEvent, useState } from "react";
import Button from "../../components/Button";
import { Container, Content, Background, Text, Input, InputContainer } from "./styles";

function SignIn() {
  const [loginInputValue, setLoginInputValue] = useState<string>("");
  const [passwordInputValue, setPasswordInputValue] = useState<string>("");
  const [formInvalid, setFormInvalid] = useState<boolean>(false);

  function handleSubmit() {
    if (!loginInputValue || !passwordInputValue) {
      setFormInvalid(true);
      alert("Informe as credenciais corretamente!");
    } else {
      setFormInvalid(false);
    }
  }

  return (
    <Container>
      <Content>
        <h1>Faça seu login</h1>

        <InputContainer isError={formInvalid}>
          <Input
            name="Login"
            placeholder="Informe seu login"
            value={loginInputValue}
            onChange={(event: ChangeEvent<HTMLInputElement>) => setLoginInputValue(event.target.value)}
          />
        </InputContainer>

        <InputContainer isError={formInvalid}>
          <Input
            name="Senha"
            type="password"
            placeholder="Informe sua senha"
            value={passwordInputValue}
            onChange={(event: ChangeEvent<HTMLInputElement>) => setPasswordInputValue(event.target.value)}
          />
        </InputContainer>

        <Button onClick={handleSubmit} />

        <Text>
          Esqueci minha senha
        </Text>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;