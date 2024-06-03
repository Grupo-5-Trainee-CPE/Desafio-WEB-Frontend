import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import { Table } from "antd";

export const Container = styled.div``;

export const CarouselStyled = styled(Carousel)`
  width: 480px;
  height: 80px;
  margin: auto;
  margin-top: 50px;
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
  .ant-table-cell>td{
    border: 'black' !important;
  }
  .ant-table-tbody>tr>td {
    color: #ffffff;
    background-color: #434343;
    border: none; 
  }
  .ant-table-row {
    height: 50px;
    font-size: 15px;
  }
`