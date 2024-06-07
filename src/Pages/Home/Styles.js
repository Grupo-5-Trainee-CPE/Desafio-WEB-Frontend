import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import backgroundImage from "../../Images/LogoCPE.png";
import { Table, Button } from "antd";

export const HeaderHome = styled.div`
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

export const Container = styled.div``;

export const CarouselStyled = styled(Carousel)`
  width: 480px;
  height: 80px;
  margin: auto;
  margin-top: 120px;
`;

export const BotaoLogin = styled(Button)`
  background-color: yellow !important;
  color: black !important;
  font-size: 35px !important;
  border: none;
  width: auto;
  height: auto;

  &:hover,
  &:focus {
    background-color: yellow !important;
    color: black !important;
  }
`;

export const BotaoLogin = styled(Button)`
  background-color: yellow !important;
  color: black !important;
  font-size: 35px !important;
  border: none;
  width: auto;
  height: auto;

  &:hover,
  &:focus {
    background-color: yellow !important;
    color: black !important;
  }
`;

export const TableSessoes = styled(Table)`
  width: 800px;
  margin: auto;
  margin-top: 250px;
  align-self: center;
  min-width: 480px;
  margin-bottom: 50px;

  .ant-table-thead .ant-table-cell {
    color: #000000;
    background-color: #fadb14;
    height: 50px;
    font-size: 20px;
    font-weight: 650;
    text-align: center;
  }
  .ant-table-cell > td {
    border: "black" !important;
  }
  .ant-table-tbody > tr > td {
    color: #ffffff;
    background-color: #434343;
    border: none;
  }
  .ant-table-row {
    height: 50px;
    font-size: 15px;
  }
`;
