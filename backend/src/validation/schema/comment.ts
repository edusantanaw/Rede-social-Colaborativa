import { z } from "zod";

export const commentSchema = z.object({
  userId: z.string({ required_error: "User id is required!" }),
  content: z.string({ required_error: "Content is required!" }),
});

export type ICommentSchema = z.infer<typeof commentSchema>;
