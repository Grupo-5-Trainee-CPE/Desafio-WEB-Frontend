import { z } from "zod";

export const ProjetoSchema = z.object({
  nome: z
    .string({ required_error: "O nome é obrigatório" })
    .min(2, { message: "No mínimo 2 caracteres" })
    .max(50, { message: "No máximo 50 caracteres" }),

  descricao: z
    .string({ required_error: "A descrição é obrigatória" })
    .min(10, { message: "A descrição deve ter pelo menos 10 caracteres" })
    .max(120, { message: "No máximo 50 caracteres" }),
});
