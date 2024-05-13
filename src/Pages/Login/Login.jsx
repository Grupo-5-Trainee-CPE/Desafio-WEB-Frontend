import { Link, useNavigate } from "react-router-dom";
import BotaoPadrao from "../../Components/BotaoPadrao/BotaoPadrao";
import { Frase, DivInput, DivLogin, Container, Titulo } from "./Styles.js";
import { Input } from "antd";
import "./style.css";

function Login() {
  const navigate = useNavigate();
  return (
    <Container>
      <DivLogin>
        <Titulo> LOGIN </Titulo>
        <DivInput>
          <Input
            className="StyleInput"
            name="email"
            placeholder="E-mail"
            type="email"
          />
          <Input
            className="StyleInput"
            name="password"
            placeholder="Senha"
            type="password"
          />

          <Frase>
            {" "}
            Não tem login? Faça seu cadastro{" "}
            <Link to="/cadastro" className="link">
              {" "}
              aqui
            </Link>{" "}
          </Frase>
        </DivInput>

        <BotaoPadrao onClick={() => navigate("/")}></BotaoPadrao>
      </DivLogin>
    </Container>
  );
}

export default Login;
