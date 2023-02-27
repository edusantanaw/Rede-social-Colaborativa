import { z } from "zod";

export const authSchema = z.object({
  email: z.string({required_error: "Email is required!"}).email(),
  password: z
    .string({required_error: "Password is required!"})
    .min(5, "Password must have more than 5 characteres!")
    .max(20, "Password must have less than 20 characteres!"),
});

export type IAuthSchema = z.infer<typeof authSchema>;

