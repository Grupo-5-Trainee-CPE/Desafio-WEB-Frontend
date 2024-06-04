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
import { validador } from "./utils";
import { useCreateProjeto, useGetProjeto } from "../../Hooks/query/projetos";
import { useQueryClient } from "@tanstack/react-query";

function Projeto() {
  const projetos = [
    { name: "Ana" },
    { name: "Stéphanie" },
    { name: "Henrique" },
  ];

  const { data: projeto } = useGetProjeto({
    onError: (err) => {
      console.log(err);
    },
  });
  console.log(projeto);

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
          {errors.nome && <p>{errors.nome.message}</p>}

          <label htmlFor="descrição">Descrição:</label>
          <InputMaior
            type="text"
            name="descricao"
            id="descricao"
            placeholder="Descrição"
            {...register("descricao")}
          />
          {errors.descricao && <p>{errors.descricao.message}</p>}

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
        {projeto?.map((projeto, index) => (
          <Linha key={index}>
            <span> {projeto.nome} </span>
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
