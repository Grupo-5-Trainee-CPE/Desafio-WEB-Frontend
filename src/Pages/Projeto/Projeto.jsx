import {
  Titulo,
  SubTitulo,
  Caixa,
  Sbutton,
  Input,
  InputMaior,
  Forms,
  Descriçao,
  ProjetoButtons,
  Linha,
  Table,
} from "./Styles";
import { FaTrash, FaEdit } from "react-icons/fa";

import { Form, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { validador } from "../Cadastro/utils";
import { useCreateProjeto } from "../../Hooks/query/projetos";
import { useQueryClient } from "@tanstack/react-query";

function Projeto() {
  const projetos = [
    { name: "Ana" },
    { name: "Stéphanie" },
    { name: "Henrique" },
  ];

  const queryClient = useQueryClient();
  const { mutate: createProjeto } = useCreateProjeto({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["projetos"],
      });
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    createProjeto(data);
  };

  const {
    handleSubmit,
    register,
    formState: { errors = {} },
  } = useForm({ resolver: zodResolver(validador) });

  return (
    <div>
      <Titulo>CRIAR PROJETOS</Titulo>

      <Caixa>
        <Forms onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="nome">Nome:</label>
          <Input
            type="text"
            name="nome"
            id="nome"
            placeholder="Nome"
            {...register("nome")}
          />
          {errors.name && <p>{errors.name.message}</p>}

          <Descriçao>
            <label htmlFor="descrição">Descrição:</label>
            <InputMaior
              type="text"
              name="descricao"
              id="descricao"
              placeholder="Descrição"
              {...register("descricao")}
            />
            {errors.descricao && <p>{errors.descricao.message}</p>}
          </Descriçao>

          <Sbutton
            type="submit"
            onClick={() => alert("Seu projeto foi salvo com sucesso!")}
          >
            SALVAR
          </Sbutton>
        </Forms>
      </Caixa>
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
