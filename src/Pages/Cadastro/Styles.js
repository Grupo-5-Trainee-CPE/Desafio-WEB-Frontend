import styled from "styled-components";

export const Container = styled.div``
;

export const Titulo = styled.h1`height: 150px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
/*    margin-bottom: 50px;  */
padding: 30px; 
margin-left: 20px;
padding-top: 20px;
font-family: "Roboto",sans-serif;
font-size: 50px;
font-weight: normal;
color: yellow;
/* left: 50%;
transform: translateX(-50%); */

@media (max-width: 900px){
    justify-content: space-between;
    height: 400px;
    flex-direction: center;
}`
;

export const Botao = styled.button`display: flex;justify-content: center;margin-top: 50px;width: '480px'; height: '200px'; border-radius: '80px'; font-size: '60px'; font-weight: 'bold'; position: 'absolute'; bottom: '20px'; left: '50%'; transform: 'translate(-50%, -50%)'`
;

export const Input = styled.input`width: 1100px;
    height: auto;
    border-radius: 15px;
    background-color: white;
    color: gray;
    font-size: 40px;
    font-weight: normal;
    position: relative;
    padding: 20px;
    top: 300px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    position: absolute;`
;