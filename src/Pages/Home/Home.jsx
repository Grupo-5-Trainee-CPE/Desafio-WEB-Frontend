import BotaoPadrao from "../../Components/BotaoPadrao/BotaoPadrao";
import { useNavigate } from "react-router-dom";

function Home() {

const navigate = useNavigate();

    return (

     <div>
        PAGINA HOME
        <BotaoPadrao onClick = {() => navigate("/login")}></BotaoPadrao>
      </div>

 
    )

}

export default Home;

