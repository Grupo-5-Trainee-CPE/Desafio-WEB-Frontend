import { useNavigate } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {CarouselStyled} from "./Styles";

function Home() 
{
  const navigate = useNavigate();

  return (
    <div>
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
    </div>
  );
}


export default Home;

