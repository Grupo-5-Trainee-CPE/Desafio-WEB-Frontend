import { Titulo, SubTitulo, BotExcluir, Fechar, ModalDel } from "./Styles";
import { CloseOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useDeleteProjeto } from "../../Hooks/query/projetos";

function ModalDelete({ closeModal, projetoexcluir }) {
  const [modalVisivel, setModalVisivel] = useState(true);

  const { mutate: deleteProjeto } = useDeleteProjeto({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["projeto"],
      });
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const handleDelete = () => {
    deleteProjeto(projetoexcluir);
    closeModal();
  };

  return (
    <ModalDel open={modalVisivel} footer={null} closeIcon={null}>
      <Fechar onClick={closeModal}>
        <CloseOutlined />
      </Fechar>
      <Titulo>Excluir projeto</Titulo>
      <SubTitulo>Tem certeza que você deseja excluir esse projeto?</SubTitulo>
      <BotExcluir onClick={handleDelete}>EXCLUIR</BotExcluir>
    </ModalDel>
  );
}

export default ModalDelete;
