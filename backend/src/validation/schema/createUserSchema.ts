import { z } from "zod";

export const userSchema = z.object({
  name: z
    .string({required_error: "Name is required!"})
    .min(3, "Name must have more than 3 characteres!")
    .max(15, "Name must have less than 15 characteres!"),
  email: z.string({required_error: "Email is required!"}).email(),
  password: z
    .string({required_error: "Password is required!"})
    .min(5, "Password must have more than 5 characteres!")
    .max(20, "Password must have less than 20 characteres!"),
});

export type IUserSchema = z.infer<typeof userSchema>;

