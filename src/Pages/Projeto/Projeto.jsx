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
  Table,
  // Form,
  // Campo,
  // Label,
  // Escrita,
  //Botão,
  // Caixão,
} from "./Styles";
import { FaTrash, FaEdit } from "react-icons/fa";
import { useState } from "react";

function Projeto() {
  const projetos = [
    { name: "Ana" },
    { name: "Stéphanie" },
    { name: "Henrique" },
  ];

  const [nome, setNome] = useState("");
  const [descrição, setDescrição] = useState("");
  const [equipe, setEquipe] = useState("");

  return (
    <div>
      <Titulo>CRIAR PROJETOS</Titulo>

      <Caixa>
        <Container>
          <label htmlFor="nome">Nome:</label>
          <Input type="text" name="nome" id="nome" required />
        </Container>

        <Descriçao>
          <label htmlFor="descrição">Descrição:</label>
          <InputMaior type="text" name="descrição" id="descrição" required />
        </Descriçao>

        <Container>
          <label htmlFor="equipe">Equipe:</label>
          <Input type="text" name="equipe" id="equipe" required />
        </Container>
      </Caixa>
      <Sbutton onClick={() => alert("Seu projeto foi salvo com sucesso!")}>
        SALVAR
      </Sbutton>

      <SubTitulo>GERENCIAR PROJETOS</SubTitulo>
      <Table>
        {projetos.map((projeto, index) => (
          <Linha key={index}>
            <span> {projeto.name} </span>
            <ProjetoButtons>
              <FaEdit />
              <FaTrash />
            </ProjetoButtons>
          </Linha>
        ))}
      </Table>
    </div>
  );
}

export default Projeto;
