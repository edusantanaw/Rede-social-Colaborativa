import { z } from "zod";

export const postSchema = z.object({
  userId: z.string({ required_error: "User id is required!" }),
});

export type IPostSchema = z.infer<typeof postSchema>;
