import styled from "styled-components";

export const DivFaixa = styled.div`
    width: 100%;
    height: 130px; 
    background-color: #FFE712;
`

export const DivLogin = styled.div`
    font-family: 'Roboto', sans-serif;
    color: #FFE712;
    font-size: 3.0rem;
    width: 100%;
    height: 600px; 
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
`
export const DivInput = styled.div`
  display: flex;
  padding: 3rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  width: 100%;
  gap: 30px;
`
export const Frase = styled.p `
    color: white;
    font-family: Roboto;
    font-size: 18px;
    font-weight: 400;
    line-height: 19.92px;
    text-align: left;
    align-items: center;
    margin-bottom: 65px;

`

export const Título = styled.h3 `
    font-size: 42px;
    font-weight: 600;
    line-height: 50px;
    text-align: left;
`
export const Button = styled.button`

display: inline-block;
font-size: 28px;
font-weight: bold;
line-height: 38px;
border: none;
cursor: pointer;
background: #FFE712;/* Cor de fundo */
color: black; /* Cor do texto */
transition: background-color 0.3s ease; /* Transição suave */
width: 200px;
height: 50px;
border-radius: 15px;

/* Estilo do hover */
&:hover {
  background-color: #FFE712 /* Altera a cor de fundo no hover */
}
`   
export const Form = styled.form `
    font-family: 'Roboto', sans-serif;
    gap: 20px;
    color: #FFE712;
    font-size: 3.0rem;
    width: 100%; 
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`
export const Label = styled.label`
`

export const Input = styled.input`
    border-radius: 25px;
    width: 40%;
    height: 50px;
    font-family: Roboto;
    font-size: 18px;
    font-weight: 400;
    text-align: left;
    left: 50px;
`