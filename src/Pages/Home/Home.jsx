import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CarouselStyled, TableSessoes } from "./Styles";
import { Tag } from 'antd';
import { useEffect, useState } from "react";
import api from '../../Services/api/api';
import { Container } from "./Styles";
import useAuthStore from "../../../Stores/auth";

function Home() 
{
  const usuario = useAuthStore((state) => state.usuario);
  const [sessoes, setSessoes] = useState([]);
  const [carregando, setCarregando] = useState(false);

  const columns = [
    {
      title: 'MEMBRO',
      dataIndex: 'nome',
      render: (text, record) => (
        <div>
          <span style={{ fontWeight: 'bold' }}>{record.nome} </span>
          <span style={{ fontWeight: 'lighter' }}>{record.projeto}</span>
          <p style={{ fontWeight: 'bold', color: '#fadb14'}}>{record.cargo}</p>
        </div>
      ),
    },
    {
      dataIndex: 'inicio',
      align: 'center',
      render: inicio => <Tag style={{ borderColor: '#fadb14', color: '#fadb14', background: 'transparent' }}>{inicio}</Tag>,
    },
    {
      title: 'TEMPO',
      dataIndex: 'time',
      align: 'center',
      render: time => <Tag style={{ borderColor: '#fadb14', color: '#fadb14', background: 'transparent' }}>{time}</Tag>,
    },
  ];

  const getSessoes = async () => {
    try {
      const res = await api.get("/sessoes");
      setSessoes(res.data);
    } catch (erro) {
      console.error(erro);
      alert(erro.response.data.message);
    }
  };

  getSessoes();

  useEffect(() => {
    const apiInterval = setInterval(() => {
      getSessoes();
    }, 6000); // Faz a chamada à API a cada minuto

    return () => clearInterval(apiInterval); // Limpa o intervalo quando o componente for desmontado
  }, []);

  if(carregando) {
    return (
      <Container>
        <h1>Carregando...</h1>
      </Container>
    )
  }

  return (
    <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      HOME
      <CarouselStyled showThumbs={false} infiniteLoop={true}>
        <Container style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
          <img src="./src/Images/CPE-Home.png"/>
        </Container>
        <Container style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
          <img src="../src/Images/CPE-PSTrainee.png"/>
        </Container>
        <Container style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
          <img src="../src/Images/CPE-NossosServiços.png"/>
        </Container>
        <Container style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
          <img src="../src/Images/CPE-NossaHistoria.png"/>
        </Container>
      </CarouselStyled>
      <TableSessoes
        dataSource={sessoes}
        columns={columns}
        scroll={{ y: 180}}
        pagination={false}
      />
    </Container>
  );
}

export default Home;
