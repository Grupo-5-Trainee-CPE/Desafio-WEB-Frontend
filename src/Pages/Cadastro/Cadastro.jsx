import { Titulo, Botao, Input, Container, DivInput } from "./Styles.js";

function Cadastro() {
  return (
    <Container>
      <Titulo>CADASTRO</Titulo>
      <Botao onClick={() => alert("Conta criada!")}>CRIAR CONTA</Botao>
      <DivInput>
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
      </DivInput>
    </Container>
  );
}

export default Cadastro;
