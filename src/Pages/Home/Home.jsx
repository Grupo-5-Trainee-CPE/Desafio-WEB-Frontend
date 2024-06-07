import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Tag } from "antd";
import { useEffect, useState } from "react";
import api from "../../Services/api/api";
import useAuthStore from "../../../Stores/auth";
import {
  CarouselStyled,
  TableSessoes,
  Container,
  BotaoLogin,
  HeaderHome,
} from "./Styles";
import { ModalLogin } from "../../Componentes";

function Home() {
  const [usuarios, setUsuarios] = useState([]);
  const usuario = useAuthStore((state) => state.usuario);
  const [sessoes, setSessoes] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const columns = [
    {
      title: "MEMBRO",
      dataIndex: "nome",
      render: (text, record) => (
        <div>
          <span style={{ fontWeight: "bold" }}>{record.nome} </span>
          <span style={{ fontWeight: "lighter" }}>{record.projeto}</span>
          <p style={{ fontWeight: "bold", color: "#fadb14" }}>{record.cargo}</p>
        </div>
      ),
    },
    {
      dataIndex: "inicio",
      align: "center",
      render: (inicio) => (
        <Tag
          style={{
            borderColor: "#fadb14",
            color: "#fadb14",
            background: "transparent",
          }}
        >
          {inicio}
        </Tag>
      ),
    },
    {
      title: "TEMPO",
      dataIndex: "time",
      align: "center",
      render: (time) => (
        <Tag
          style={{
            borderColor: "#fadb14",
            color: "#fadb14",
            background: "transparent",
          }}
        >
          {time}
        </Tag>
      ),
    },
  ];

  const data = [];

  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      nome: `${usuarios.map((usuario) => usuario.nome)}`,
      projeto: `Projeto ${i}`,
      cargo: `${usuarios.map((usuario) => usuario.cargo)}`,
      inicio: `London, Park Lane no. ${i}`,
      time: `${i}`,
    });
  }

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
      getUsuarios();
    }, 6000); // Faz a chamada à API a cada minuto

    return () => clearInterval(apiInterval); // Limpa o intervalo quando o componente for desmontado
  }, []);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  if (carregando) {
    setCarregando(false);
    return (
      <Container>
        <h1>Carregando...</h1>
      </Container>
    );
  }

  return (
    <Container
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <HeaderHome />
      <CarouselStyled showThumbs={false} infiniteLoop={true}>
        <Container
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <img src="./src/Images/CPE-Home.png" alt="CPE Home" />
        </Container>
        <Container
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <img src="../src/Images/CPE-PSTrainee.png" alt="CPE PSTrainee" />
        </Container>
        <Container
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <img
            src="../src/Images/CPE-NossosServiços.png"
            alt="CPE Nossos Serviços"
          />
        </Container>
        <Container
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <img
            src="../src/Images/CPE-NossaHistoria.png"
            alt="CPE Nossa História"
          />
        </Container>
      </CarouselStyled>
      <TableSessoes
        dataSource={data}
        columns={columns}
        scroll={{ y: 180 }}
        pagination={false}
      />
      {usuarios.map((usuario) => (
        <h1 key={usuario.id}>{usuario.nome}</h1>
      ))}
      <BotaoLogin onClick={showModal}>Fazer Login</BotaoLogin>
      <ModalLogin visible={isModalVisible} closeModal={handleCancel} />
    </Container>
  );
}

export default Home;
