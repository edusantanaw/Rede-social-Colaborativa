import { z } from "zod";

export const userSchema = z.object({
  name: z
    .string()
    .min(3, "Name must have more than 3 characteres!")
    .max(15, "Name must have less than 15 characteres!"),
  email: z.string().email(),
  password: z
    .string()
    .min(5, "Password must have more than 5 characteres!")
    .max(20, "Password must have less than 20 characteres!"),
});
export type IUserSchema = z.infer<typeof userSchema>;

export type ICreateUserSchema = z.ZodObject<any>