import { z } from "zod";

export const authSchema = z.object({
  email: z.string({required_error: "O email é obrigatorio!"}).email(),
  password: z
    .string({required_error: "A senha é necessaria!"})
    .min(5, "Password must have more than 5 characteres!")
    .max(20, "Password must have less than 20 characteres!"),
});

export type IAuthSchema = z.infer<typeof authSchema>;

