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

function ModalEdit({ projetoeditar, closeModal }) {
  const {
    handleSubmit,
    register,
    formState: { errors = {} },
  } = useForm({ resolver: zodResolver(validador) });

  const onSubmit = (data) => {
    console.log(data);
    createProjeto(data);
    window.location.reload();
  };

  return (
    <div>
      <Caixa>
        <Fechar onClick={closeModal}>
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

          <Sbutton
            type="submit"
            onClick={() => alert("Seu projeto foi salvo com sucesso!")}
          >
            SALVAR
          </Sbutton>
        </Forms>
      </Caixa>
    </div>
  );
}

export default ModalEdit;
