import styled from "styled-components";
//import { Table } from "antd";

export const Faixa = styled.div`
  border: solid yellow;
  height: 132px;
  width: 100%;
  display: flex;
  margin: auto;
  background-color: yellow;
  margin-top: 0px;

  @media (max-width: 0px) {
    justify-content: space-between;
  }
`;

export const Titulo = styled.div`
  //border: solid; //borda
  width: 100%; //largura
  height: 100%; //altura
  margin-top: 123px; //distancia do bordo de cima
  margin-left: 15px; //distancia do bordo da tela
  // padding-left: 50%; //distancia de dentro da div
  display: flex;
  justify-content: center; // Centraliza horizontalmente
  //align-items: center; // Centraliza verticalmente
  color: yellow;

  @media (max-width: 405px) {
    flex-direction: column;
    justify-content: center;
    font-size: 30px;
    // margin-left: 20%;
  }
`;

export const Caixa = styled.div`
  border: #363636;
  height: 410px;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-right: 50px;
  padding-left: 30px;
  margin: auto;
  border-radius: 10px;
  background-color: #363636;
  margin-top: 50px;
  max-width: 716px;

  @media (max-width: 0px) {
    justify-content: space-between;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 25px;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: start;
  }
`;

export const Input = styled.input`
  border-radius: 25px;
  background-color: white;
  text-indent: 10px;
  width: 75%;
  height: 65px;
  color: black;
  font-size: 26px;
  margin-left: 50px;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media (max-width: 700px) {
    width: 100%;
    margin: 0px;
  }
`;

export const Descriçao = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 26px;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const InputMaior = styled.input`
  border-radius: 25px;
  background-color: white;
  text-indent: 10px;
  width: 75%;
  height: 140px;
  margin-left: 40px;
  color: black;
  font-size: 26px;
  //justify-content: center;
  //align-items: center;
  cursor: pointer;

  @media (max-width: 700px) {
    width: 100%;
    margin: 0px;
  }
`;

export const SubTitulo = styled.div`
  //border: solid; //borda
  width: 100%; //largura
  height: 100%; //altura
  margin-top: 80px; //distancia do bordo de cima
  margin-bottom: 50px;
  margin-left: 15px; //distancia do bordo da tela
  // padding-left: 50%; //distancia de dentro da div
  display: flex;
  justify-content: center; // Centraliza horizontalmente
  //align-items: center; // Centraliza verticalmente
  color: yellow;

  @media (max-width: 405px) {
    flex-direction: column;
    justify-content: center;
    font-size: 30px;
    // margin-left: 20%;
  }
`;

export const Sbutton = styled.button`
  border: solid yellow;
  border-radius: 10px;
  background-color: black;
  margin: auto;
  margin-top: 50px;
  width: 214px;
  height: 50px;
  color: yellow;
  font-size: 20px;
  display: flex;
  justify-content: center; //centraliza a palavra o lado
  align-items: center; //centraliza a palavra para baixo
  cursor: pointer; //coloca a maoziha

  @media (max-width: 0px) {
    justify-content: space-between;
  }
`;

export const Linha = styled.div`
  color: white;
  display: flex;
  width: 20%;
  margin-top: 30px;
  margin-left: 40.6%;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 500px) {
    flex-direction: column;
    max-width: 300px;
    align-items: flex-start;
    font-size: 25px;
  }
`;

export const ProjetoButtons = styled.div`
  cursor: pointer;
`;
