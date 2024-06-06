import { useQueryClient } from "@tanstack/react-query";
import { useCreateUsuarios } from "../../Hooks/query/usuarios";
import { Titulo, Botao, Input, Container, Forms, Frase, HeaderCadastro } from "./Styles";
import { useForm } from "react-hook-form";
import { validador } from "./utils";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";

function Cadastro() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: createUsuarios } = useCreateUsuarios({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["usuarios"],
      });
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const onSubmit = (data) => {
    createUsuarios(data);
    navigate("/login");
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: zodResolver(validador) });

  return (
    <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <HeaderCadastro/>
      <Titulo>CADASTRO</Titulo>
      <Forms onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="nome"
          name="nome"
          {...register("nome")}
          placeholder="Nome"
          error={!!errors?.nome?.message}
        />
        {errors?.nome?.message && <Frase>{errors?.nome?.message}</Frase>}
        <Input
          id="email"
          name="email"
          {...register("email")}
          placeholder="E-mail"
          error={!!errors?.email?.message}
        />
        {errors?.email?.message && <Frase>{errors?.email?.message}</Frase>}
        <Input
          id="cargo"
          name="cargo"
          {...register("cargo")}
          placeholder="Cargo"
          error={!!errors?.cargo?.message}
        />
        {errors?.cargo?.message && <Frase>{errors?.cargo?.message}</Frase>}

        <Input
          id="senha"
          name="senha"
          {...register("senha")}
          placeholder="Senha"
          error={!!errors?.senha?.message}
        />
        {errors?.senha?.message && <Frase>{errors?.senha?.message}</Frase>}

        <Botao type="submit">CRIAR CONTA</Botao>
      </Forms>
    </Container>
  );
}

export default Cadastro;
