import { z } from "zod";export const taskSchema = z.object({
  title: z
    .string({ required_error: "O titulo é obrigatorio!" })
    .min(3, "O título deve ter pelo menos 3 caracteres!")
    .max(20, "O título deve conter no maximo 20 caracteres"),
  description: z
    .string({ required_error: "A descrição é obrigatoria!" })
    .min(5, "A descrição deve conter pelo menos 5 caracteres!")
    .max(250, "A descrição deve conter no maximo 250 caracteres!"),
  projectId: z.string({ required_error: "O id do projeto é necessario!" }),
});

export type ITaskSchema = z.infer<typeof taskSchema>;
