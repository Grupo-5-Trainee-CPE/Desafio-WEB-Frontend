import styled from "styled-components";
import { Modal, Select, Form as AntdForm, Button } from "antd";

export const ModalStyled = styled(Modal)`
  .ant-modal-content {
    background-color: #222;
    color: white;
  }

  .ant-modal-header {
    background-color: #333;
    border-bottom: none;
  }

  .ant-modal-title {
    color: #fff;
  }

  .ant-modal-close-x {
    color: #fff;
  }

  .ant-modal-body {
    color: #fff;
  }

  .ant-form-item-label {
    color: #fff;
  }

  .ant-select-selector {
    background-color: #444;
    color: white;
  }

  .ant-input-textarea {
    background-color: #444;
    color: white;
  }
`;

export const FormStyled = styled(AntdForm)`
  .ant-form-item-label {
    color: #fff;
    font-size: 18px;
  }

  .ant-input,
  .ant-select-selector {
    background-color: #444;
    color: white;
  }
`;

export const FormItemStyled = styled(AntdForm.Item)`
  .ant-form-item-label > label {
    color: #fff !important;
  }
`;

export const SelectCustomizado = styled(Select)`
  .ant-select-selector {
    background-color: #444 !important;
    color: white !important;
  }

  .ant-select-selection-item {
    color: white !important;
  }
`;

export const OkButtonStyled = styled(Button)`
  background-color: #fadb14;
  color: black;
  border: none;

  &:hover,
  &:focus {
    background-color: #fadb14;
    color: black;
  }
`;

export const CancelButtonStyled = styled(Button)`
  background-color: #333;
  color: white;
  border: none;

  &:hover,
  &:focus {
    background-color: #333;
    color: white;
  }
`;

export const Titulo = styled.div`
  text-align: center;
  margin-left: center;
  color: #333;
  font-weight: bold; /* Negrito */
  font-size: 26px;
`;
