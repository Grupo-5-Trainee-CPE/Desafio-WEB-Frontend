import styled from "styled-components";

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
  margin-left: 0px; //distancia do bordo da tela
  // padding-left: 50%; //distancia de dentro da div
  display: flex;
  justify-content: center; // Centraliza horizontalmente
  //align-items: center; // Centraliza verticalmente
  color: yellow;

  @media (max-width: 0px) {
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0px;
  }
`;

export const Caixa = styled.div`
  border: #363636;
  height: 410px;
  width: 716px;
  display: flex; //
  flex-direction: column;
  justify-content: space-evenly;
  padding-right: 20px;
  padding-left: 20px;
  margin: auto;
  border-radius: 10px;
  background-color: #363636;
  margin-top: 50px;

  @media (max-width: 0px) {
    justify-content: space-between;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 25px;
`;

export const Input = styled.input`
  border-radius: 25px;
  background-color: white;
  text-indent: 10px;
  width: 477px;
  height: 65px;
  color: black;
  font-size: 26px;
  margin-left: 50px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Descriçao = styled.div`
  display: flex;
  //justify-content: space-between;
  width: 100%;
  font-size: 26px;
`;

export const InputMaior = styled.input`
  border-radius: 25px;
  background-color: white;
  text-indent: 10px;
  width: 477px;
  height: 140px;
  margin-left: 40px;
  color: black;
  font-size: 26px;
  //justify-content: center;
  //align-items: center;
  cursor: pointer;
`;

export const Sbutton = styled.button`
  border: solid yellow;
  border-radius: 10px;
  background-color: black;
  margin: auto;
  margin-top: 30px;
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
