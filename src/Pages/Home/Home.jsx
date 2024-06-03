import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CarouselStyled, TableSessoes } from "./Styles";
import { Tag } from 'antd';
import { useEffect, useState } from "react";
import api from '../../Services/api/api';
import { Container } from "./Styles";

function Home() 
{
  const [usuarios, setUsuarios] = useState([]);
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
  
  const data = [];
  
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      nome: `${usuarios.map((usuario) => (usuario.nome))}`,
      projeto: `Projeto ${i}`,
      cargo: `${usuarios.map((usuario) => (usuario.cargo))}`,
      inicio: `London, Park Lane no. ${i}`,
      time: `${i}`,
    });
  }

  const getUsuarios = async () => {
    try {
      setCarregando(true);
      const res = await api.get("/usuarios");
      setUsuarios(res.data);
    } catch (erro) {
      console.error(erro);
      alert(erro.response.data.message);
    } finally { 
      setCarregando(false);
    }
  };
  
  useEffect(() => { getUsuarios() }, [])
  
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
          dataSource={data}
          columns={columns}
          scroll={{ y: 180}}
          pagination={false}
        />
      {usuarios.map((usuario) => (<h1>{usuario.nome}</h1>))}
    </Container>
  );
}

export default Home;
