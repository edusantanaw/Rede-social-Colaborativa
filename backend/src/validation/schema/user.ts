import { z } from "zod";

export const userSchema = z.object({
  email: z.string({ required_error: "O email é obrigatorio!" }).email(),
  id: z.string({ required_error: "O id do usuario é obrigatorio!" }),
});

