import styled from "styled-components";

export const Container = styled.div``;

export const Titulo = styled.h1`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  margin-left: 20px;
  padding-top: 70px;
  font-family: "Roboto", sans-serif;
  font-size: 40px;
  font-weight: normal;
  color: yellow;
  margin: 0 auto;

  @media (max-width: 1200px) {
    height: 40px;
    flex-direction: center;
    position: absolute;
    top: 0.5%;
    transform: translateY(50%);
  }

  @media (max-width: 350px) {
    display: flex;
    height: 40px;
    align-items: center;
    flex-direction: column;
    font-size: 30px;
    text-align: center;
  }
`;

export const Botao = styled.button`
  display: flex;
  background-color: yellow;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 50px;
  border-radius: 40px;
  font-size: 17px;
  font-weight: bold;
  margin-top: 30px;
  position: absolute;
  bottom: 20px;
  left: 50%;
  top: 350px;
  transform: translate(-50%, -50%);

  @media (max-width: 1200px) {
    justify-content: center;
    height: 50px;
    flex-direction: center;
    bottom: 10%;
  }

  @media (max-width: 350px) {
    justify-content: center;
    height: 50px;
    width: 48%;
    font-size: 50%;
    flex-direction: center;
  }
`;

/*export const DivInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 300px;

  @media (max-width: 1200px) {
    position: absolute;
    top: 50%;
  }
`; */

export const Input = styled.input`
  width: 300px;
  height: 40px;
  border-radius: 15px;
  background-color: white;
  color: gray;
  font-size: 15px;
  font-weight: normal;
  padding: 10px;
  margin-top: 10px;

  @media (max-width: 1200px) {
    justify-content: center;
    height: 35px;
    flex-direction: center;
    margin: 10px;
  }

  @media (max-width: 350px) {
    justify-content: center;
    height: 35px;
    width: 170%;
    flex-direction: center;
    margin: 10px;
  }
`;

export const Forms = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 300px;

  @media (max-width: 1200px) {
    position: absolute;
    top: 50%;
  }
`;

export const Frase = styled.p`
  color: red;
  font-family: Roboto;
  font-size: 15px;
  font-weight: 400;
  line-height: 19.92px;
  text-align: left;
  align-items: center;
`;
