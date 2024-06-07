import styled from "styled-components";
import backgroundImage from "../../Images/LogoCPE.png";

export const Container = styled.div``;

export const HeaderLogin = styled.div`
  position: absolute;
  top: 0; 
  left: 0;
  width: 100%; 
  display: flex;
  align-items: center;
  padding: 35px;
  background-color: #fadb14;
  background-image: url(${backgroundImage});
  background-size: 120px;
  background-repeat: no-repeat;
  background-position: left;
  min-width: 480px;
`;

export const DivLogin = styled.div`
  font-family: "Roboto", sans-serif;
  color: #fadb14;
  font-size: 3rem;
  width: 100%;
  height: 600px;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
`;

export const DivInput = styled.div`
  display: flex;
  padding: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  width: 100%;
  gap: 30px;
`;

export const Frase = styled.p`
  color: white;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 400;
  line-height: 19.92px;
  text-align: left;
  align-items: center;
  margin-bottom: 65px;
`;

export const Título = styled.h3`
  font-size: 42px;
  font-weight: 600;
  line-height: 50px;
  text-align: left;
`;

export const Button = styled.button`
  display: inline-block;
  font-size: 28px;
  font-weight: bold;
  line-height: 38px;
  border: none;
  cursor: pointer;
  background: #fadb14; /* Cor de fundo */
  color: black; /* Cor do texto */
  transition: background-color 0.3s ease; /* Transição suave */
  width: 200px;
  height: 50px;
  border-radius: 15px;

  /* Estilo do hover */
  &:hover {
    background-color: #fadb14; /* Altera a cor de fundo no hover */
  }
`;

export const Form = styled.form`
  font-family: "Roboto", sans-serif;
  gap: 20px;
  color: #fadb14;
  font-size: 3rem;
  width: 100%;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

export const Label = styled.label``;

export const Input = styled.input`
  border-radius: 25px;
  width: 40%;
  height: 50px;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 400;
  text-align: left;
  left: 50px;
`;
