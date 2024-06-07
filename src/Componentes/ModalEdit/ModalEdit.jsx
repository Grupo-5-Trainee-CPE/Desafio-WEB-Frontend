import {
  Titulo,
  Sbutton,
  Input,
  InputMaior,
  Forms,
  Fechar,
  Caixa,
} from "./Styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { validador } from "../../Pages/Projeto/utils";
import { CloseOutlined } from "@ant-design/icons";
import { useUpdateProjeto } from "../../Hooks/query/projetos";

function ModalEdit({ projetoeditar, closeModalEdit }) {
  const {
    handleSubmit,
    register,
    formState: { errors = {} },
  } = useForm({ resolver: zodResolver(validador) });

  const { mutate: updateProjeto } = useUpdateProjeto({
    onSuccess: (data) => {
      console.log("Projeto atualizado com sucesso:", data);
    },
    onError: (err) => {
      console.error("Erro ao atualizar projeto:", err);
    },
  });

  const onSubmit = (data) => {
    updateProjeto({ _id: projetoeditar, body: data });
    closeModalEdit;
    window.location.reload;
  };

  return (
    <div>
      <Caixa>
        <Fechar onClick={closeModalEdit}>
          <CloseOutlined />
        </Fechar>
        <Titulo>Editar informações</Titulo>

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

          <Sbutton type="submit">SALVAR</Sbutton>
        </Forms>
      </Caixa>
    </div>
  );
}

export default ModalEdit;
