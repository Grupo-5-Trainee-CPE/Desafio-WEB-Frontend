import { Link, useNavigate } from "react-router-dom";
import {
  HeaderLogin,
  Container,
  Frase,
  DivInput,
  DivLogin,
  Input,
  Button,
  Label,
  Form,
  Título,
} from "./Styles.js";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginUser } from "./utils";
import { useCheckLogin } from "../../Hooks/query/login.js";

function Login() {
  const navigate = useNavigate();
  const { mutate: checkLogin } = useCheckLogin({
    onSuccess: () => {
      navigate("/");
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginUser),
  });

  const onSubmit = async (data) => {
    try {
      checkLogin(data);
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };

  return (
    <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <HeaderLogin/>
      <DivLogin> 
        <Título> LOGIN </Título>
        <DivInput>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Label htmlFor="email"></Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="E-mail"
              {...register("email")}
            />
            {errors.email && <p>{errors.email.message}</p>}

            <Label htmlFor="senha"></Label>
            <Input
              type="password"
              name="senha"
              id="senha"
              placeholder="Senha"
              {...register("senha")}
            />
            {errors.senha && <p>{errors.senha.message}</p>}

            <Frase>
              Não tem login? Faça seu cadastro{" "}
              <Link to="/Cadastro" style={{ color: "white" }}>
                aqui
              </Link>
            </Frase>
            <Button type="submit">ENTRAR</Button>
          </Form>
        </DivInput>
      </DivLogin>
    </Container>
  );
}

export default Login;
