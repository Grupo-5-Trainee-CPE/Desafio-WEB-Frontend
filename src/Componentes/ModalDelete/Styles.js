import styled from "styled-components";
import { CloseOutlined } from "@ant-design/icons";
import { Modal } from "antd";

export const Caixa = styled.div`
  width: 588px;
  height: 358px;
  top: -185px;
  left: 7615px;
  gap: 0px;
  border-radius: 40px;
  opacity: 0px;
  background-color: white;
  align-items: center;
  margin: auto;
  margin-bottom: 40px;

  @media (max-width: 600px) {
    justify-content: space-between;
  }
`;

export const Titulo = styled.div`
  text-align: center;
  margin-left: center;
  color: #333;
  font-weight: bold; /* Negrito */
  font-size: 26px;
`;

export const SubTitulo = styled.h2`
  width: 75%;
  height: 78px;
  text-align: center;
  margin-top: 20px;
  color: #555;
  font-size: 24px;
  margin-left: 70px;
`;

export const BotExcluir = styled.button`
  border: solid orange;
  border-radius: 15px;
  background-color: white;
  margin: auto;
  margin-top: 30px;
  width: 214px;
  height: 50px;
  color: orange;
  font-size: 24px;
  display: flex;
  justify-content: center; //centraliza a palavra o lado
  align-items: center; //centraliza a palavra para baixo
  cursor: pointer; //coloca a maoziha

  @media (max-width: 0px) {
    justify-content: space-between;
  }
`;

export const Fechar = styled(CloseOutlined)`
  margin-left: 85%;
  margin-top: 15px;
  font-size: 50px;
  color: black;
  cursor: pointer;
`;

export const ModalDel = styled(Modal)`
  .ant-modal-content {
    width: 588px;
    height: 358px;
    gap: 0px;
    border-radius: 40px;
    opacity: 0px;
    background-color: white;
    align-items: center;
    margin: auto;
    margin-bottom: 40px;
    margin-top: 222px;
  }
  @media (max-width: 600px) {
    justify-content: space-between;
  }
`;
