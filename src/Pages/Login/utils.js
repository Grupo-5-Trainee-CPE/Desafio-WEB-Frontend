import { z } from "zod";

export const loginUser = z.object({
  email: z
    .string({ required_error: "Obrigatório" })
    .email({ message: "Email inválido" })
    .min(2, { message: "No mínimo 2 caracteres" })
    .max(50, { message: "No máximo 50 caracteres" }),

  senha: z
    .string({ required_error: "Obrigatório" })
    .min(6, { message: "No mínimo 6 caracteres" })
    .max(50, { message: "No máximo 50 caracteres" }),
});
