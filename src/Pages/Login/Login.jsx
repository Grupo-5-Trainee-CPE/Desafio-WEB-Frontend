import { Link, useNavigate } from "react-router-dom";
import {
  DivFaixa,
  Frase,
  DivInput,
  DivLogin,
  Input,
  Button,
  Label,
  Form,
  Título,
} from "./Styles.js";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ email, senha });
  };

  return (
    <div>
      <DivFaixa>Imagem</DivFaixa>

      <DivLogin>
        <Título> LOGIN </Título>
        <DivInput>
          <Form onSubmit={handleSubmit}>
            <Label htmlFor="email"> </Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="E-mail"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <Label htmlFor="senha"></Label>
            <Input
              type="password"
              name="senha"
              id="senha"
              placeholder="Senha"
              required
              onChange={(e) => setSenha(e.target.value)}
            />

            <Frase>
              {" "}
              Não tem login? Faça seu cadastro{" "}
              <Link to="/Cadastro" style={{ color: "white" }}>
                {" "}
                aqui
              </Link>{" "}
            </Frase>
            <Button type="submit" >
              {" "}
              ENTRAR{" "}
            </Button>
          </Form>
        </DivInput>
      </DivLogin>
    </div>
  );
}

export default Login;
