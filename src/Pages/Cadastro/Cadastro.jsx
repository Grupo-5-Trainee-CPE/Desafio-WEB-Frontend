import { Titulo, Botao, Input, Container, DivInput } from "./Styles";

function Cadastro() {
  return (
    <Container>
      <Titulo>CADASTRO</Titulo>
      <Botao onClick={() => alert("Conta criada!")}>CRIAR CONTA</Botao>
      <DivInput>
        <Input placeholder="E-mail" />
        <Input placeholder="Senha" />
        <Input placeholder="Nome" />
        <Input placeholder="Cargo" />
        <Input placeholder="Status" />
      </DivInput>
    </Container>
  );
}

export default Cadastro;
