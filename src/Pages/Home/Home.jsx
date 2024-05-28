import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CarouselStyled, TableSessoes } from "./Styles";
import { Tag } from 'antd';

const columns = [
  {
    title: 'MEMBRO',
    dataIndex: 'name',
    render: (text, record) => (
      <div>
        <span style={{ fontWeight: 'bold' }}>{record.name} </span>
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
    name: `Edward King ${i}`,
    projeto: `Projeto ${i}`,
    cargo: `Cargo ${i}`,
    inicio: `London, Park Lane no. ${i}`,
    time: `${i}`,
  });
}

function Home() 
{
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      HOME
      <CarouselStyled showThumbs={false} infiniteLoop={true}>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
          <img src="./src/Images/CPE-Home.png"/>
        </div>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
          <img src="../src/Images/CPE-PSTrainee.png"/>
        </div>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
          <img src="../src/Images/CPE-NossosServiços.png"/>
        </div>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
          <img src="../src/Images/CPE-NossaHistoria.png"/>
        </div>
      </CarouselStyled>
      <TableSessoes
          dataSource={data}
          columns={columns}
          scroll={{ y: 180}}
          pagination={false}
        />
    </div>
  );
}

export default Home;
