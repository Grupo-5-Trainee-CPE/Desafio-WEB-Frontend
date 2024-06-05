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
import { useState } from "react";
import { ModalDelete } from "../../Componentes";

function Projeto() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [projetoToDelete, setProjetoToDelete] = useState("");

  const openModal = (projeto) => {
    setProjetoToDelete(projeto);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setProjetoToDelete(null);
  };

  const handleDelete = () => {
    if (projetoToDelete) {
      deleteProjeto(projetoToDelete._id);
      closeModal();
    }
  };

  const { data: projeto } = useGetProjeto({
    onError: (err) => {
      console.log(err);
    },
  });

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
      {modalIsOpen && (
        <ModalDelete closeModal={closeModal} projetoexcluir={projetoToDelete} />
      )}
      <Table>
        {projeto?.map((projeto, index) => (
          <Linha key={index}>
            <span> {projeto.nome} </span>
            <ProjetoButtons>
              <FaEdit />
              <FaTrash onClick={() => openModal(projeto?._id)} />
            </ProjetoButtons>
          </Linha>
        ))}
      </Table>
    </div>
  );
}

export default Projeto;
