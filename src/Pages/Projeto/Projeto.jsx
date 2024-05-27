import {
  Titulo,
  SubTitulo,
  Caixa,
  Sbutton,
  Input,
  InputMaior,
  Container,
  Descriçao,
  ProjetoButtons,
  Linha,
} from "./Styles";
import { FaTrash, FaEdit } from "react-icons/fa";

function Projeto() {
  const projetos = [
    { name: "Ana" },
    { name: "Stéphanie" },
    { name: "Henrique" },
  ];

  return (
    <div>
      <Titulo>CRIAR PROJETOS</Titulo>

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

      <SubTitulo>GERENCIAR PROJETOS</SubTitulo>

      {projetos.map((projeto, index) => (
        <Linha key={index}>
          <span> {projeto.name} </span>
          <ProjetoButtons>
            <FaEdit />
            <FaTrash />
          </ProjetoButtons>
        </Linha>
      ))}
    </div>
  );
}

export default Projeto;
