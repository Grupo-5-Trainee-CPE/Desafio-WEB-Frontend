import { Link, useNavigate } from "react-router-dom";
import BotaoPadrao from "../../Components/BotaoPadrao/BotaoPadrao";
import { DivFaixa, Frase, DivInput, DivLogin } from "./Styles.js";
import { Input } from 'antd';
import {logo} from "./Images/LogoCPE.png"
import "./style.css"; 


function Login() {

  const navigate = useNavigate();
    return (

     <div>
      <DivFaixa>
        <img src= "{logo}" />
      </DivFaixa> 

      <DivLogin>
        <Login> LOGIN </Login>
        <DivInput>
          
        <Input
          className="StyleInput"
          name='email'
          placeholder='E-mail'
          type='email'
        
        />
        <Input
          className="StyleInput"
          name='password'
          placeholder='Senha'
          type='password'
        />
       
        <Frase> Não tem login? Faça seu cadastro <Link to= "Cadastro" className="link"> aqui</Link> </Frase>
        </DivInput>
    
         
        <BotaoPadrao onClick = {() => navigate("/")}></BotaoPadrao>
        </DivLogin>
      </div>

 
    )

}

export default Login;