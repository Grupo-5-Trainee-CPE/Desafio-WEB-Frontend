import { useQueryClient } from "@tanstack/react-query";
import { useCreateUsuarios } from "../../Hooks/query/usuarios";
import { Titulo, Botao, Input, Container, Forms, Frase } from "./Styles";
import { useForm } from "react-hook-form";
import { validador } from "./utils";
import { zodResolver } from "@hookform/resolvers/zod";

function Cadastro() {
  const queryClient = useQueryClient();

  const { mutate: createUsuarios } = useCreateUsuarios({
    onSucess: () => {
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
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: zodResolver(validador) });

  return (
    <Container>
      <Titulo>CADASTRO</Titulo>

      <Forms onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="email"
          name="email"
          {...register("email")}
          placeholder="E-mail"
          error={!!errors?.email?.message}
        />
        {errors?.email?.message && <Frase>{errors?.email?.message}</Frase>}

        <Input
          id="senha"
          name="senha"
          {...register("senha")}
          placeholder="Senha"
          error={!!errors?.senha?.message}
        />
        {errors?.senha?.message && <Frase>{errors?.senha?.message}</Frase>}

        <Input
          id="nome"
          name="nome"
          {...register("nome")}
          placeholder="Nome"
          error={!!errors?.nome?.message}
        />
        {errors?.nome?.message && <Frase>{errors?.nome?.message}</Frase>}

        <Input
          id="cargo"
          name="cargo"
          {...register("cargo")}
          placeholder="Cargo"
          error={!!errors?.cargo?.message}
        />
        {errors?.cargo?.message && <Frase>{errors?.cargo?.message}</Frase>}

        <Input
          id="status"
          name="status"
          {...register("status")}
          placeholder="Status"
          error={!!errors?.status?.message}
        />
        {errors?.status?.message && <Frase>{errors?.status?.message}</Frase>}

        <Botao type="submit" onClick={() => alert("Conta criada!")}>
          CRIAR CONTA
        </Botao>
      </Forms>
    </Container>
  );
}

export default Cadastro;
