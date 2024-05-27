import {
  Titulo,
  Caixa,
  Faixa,
  Sbutton,
  Input,
  InputMaior,
  Container,
  Descriçao,
} from "./Styles";

function Projeto() {
  return (
    <div>
      <Faixa></Faixa>
      <Titulo>GERENCIAR PROJETOS</Titulo>

      <Caixa>
        <Container>
          <label>Nome:</label>
          <Input />
        </Container>

        <Descriçao>
          <label>Descrição:</label>
          <InputMaior />
        </Descriçao>

        <Container>
          <label>Equipe:</label>
          <Input />
        </Container>
      </Caixa>

      <Sbutton onClick={() => alert("Seu projeto foi salvo com sucesso!")}>
        SALVAR
      </Sbutton>
    </div>
  );
}

export default Projeto;
