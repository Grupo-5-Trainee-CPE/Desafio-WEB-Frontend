import { Form, Input, Modal, Select } from "antd";
import {
  ModalStyled,
  FormStyled,
  FormItemStyled,
  SelectCustomizado,
  OkButtonStyled,
  CancelButtonStyled
} from "./Styles";
import { useState } from "react";

function ModalLogin({ closeModal, visible }) {
  const handleLogin = () => {
    closeModal();
  };

  return (
    <ModalStyled
      title="Confirmação de Login"
      visible={visible}
      onOk={handleLogin}
      onCancel={closeModal}
      okButtonProps={{ className: "ok-button" }}
      cancelButtonProps={{ className: "cancel-button" }}
    >
      <FormStyled>
        <FormItemStyled label="Como deseja logar Trainee?">
          <SelectCustomizado>
            <Select.Option value="Remoto">Remoto</Select.Option>
            <Select.Option value="Presencial">Presencial</Select.Option>
          </SelectCustomizado>
        </FormItemStyled>
        <FormItemStyled label="O que você pretende fazer nesse horário?">
          <SelectCustomizado>
            <Select.Option value="Diversos">Diversos</Select.Option>
            <Select.Option value="Reunião">Reunião</Select.Option>
            <Select.Option value="Operacional">Operacional</Select.Option>
          </SelectCustomizado>
        </FormItemStyled>
        <FormItemStyled label="Vai trabalhar em algum projeto?">
          <SelectCustomizado>
            <Select.Option value="Projeto 1">Projeto 1</Select.Option>
            <Select.Option value="Projeto 2">Projeto 2</Select.Option>
            <Select.Option value="Projeto 3">Projeto 3</Select.Option>
          </SelectCustomizado>
        </FormItemStyled>
        <FormItemStyled label="Deseja descrever melhor o que irá fazer?">
          <Input.TextArea />
        </FormItemStyled>
      </FormStyled>
    </ModalStyled>
  );
}

export default ModalLogin;
