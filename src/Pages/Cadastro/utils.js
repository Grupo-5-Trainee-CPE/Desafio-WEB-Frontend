import { z } from "zod";

export const validador = z.object({
  nome: z
    .string({ required_error: "Obrigatório" })
    .min(2, { message: "No mínimo 2 caracteres" })
    .max(50, { message: "No máximo 50 caracteres" }),

  email: z
    .string({ required_error: "Obrigatório" })
    .min(2, { message: "No mínimo 2 caracteres" })
    .max(50, { message: "No máximo 50 caracteres" }),

  senha: z
    .string({ required_error: "Obrigatório" })
    .min(2, { message: "No mínimo 2 caracteres" })
    .max(50, { message: "No máximo 50 caracteres" }),

  cargo: z
    .string({ required_error: "Obrigatório" })
    .min(2, { message: "No mínimo 2 caracteres" })
    .max(50, { message: "No máximo 50 caracteres" }),
});
