import { Titulo,Botao,Input,Container } from './Styles.js';
import React from 'react';

function Cadastro() {
  return (
      <Container>
        <Titulo>CADASTRO</Titulo>
        <Botao onClick={() => alert('Conta criada!')}
        >
          CRIAR CONTA
        </Botao>
        <Input >E-mail</Input>
        <Input >Senha</Input>
        <Input >Nome</Input>
        <Input >Cargo</Input>
        <Input >Status</Input>
      </Container>
  );
}

export default Cadastro;