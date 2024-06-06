import styled from "styled-components";
import { CloseOutlined } from "@ant-design/icons";

export const Titulo = styled.div`
  text-align: center;
  margin-left: center;
  color: black;
  font-weight: bold; /* Negrito */
  font-size: 30px;
  padding-top: 10px;
`;

export const Caixa = styled.div`
  width: 588px;
  height: 600px;
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

export const Forms = styled.form`
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 25px;
  color: black;
  margin-left: 60px;
  margin-top: 30px;
  display: center;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: start;
  }
`;

export const Input = styled.input`
  border-radius: 15px;
  background-color: white;
  text-indent: 10px;
  width: 75%;
  height: 65px;
  color: black;
  font-size: 26px;
  display: flex;
  margin-bottom: 15px;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media (max-width: 700px) {
    width: 100%;
    margin: 0px;
  }
`;

export const InputMaior = styled.input`
  border-radius: 15px;
  background-color: white;
  text-indent: 10px;
  width: 75%;
  height: 140px;
  display: flex;
  margin-left: 0px;
  color: black;
  font-size: 26px;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media (max-width: 700px) {
    width: 100%;
    margin: 0px;
  }
`;

export const Sbutton = styled.button`
  border: solid orange;
  border-radius: 15px;
  background-color: white;
  margin: auto;
  margin-left: 125px;
  margin-top: 50px;
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
  margin-top: 20px;
  font-size: 50px;
  color: black;
  cursor: pointer;
`;
