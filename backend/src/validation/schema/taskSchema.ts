import { z } from "zod";

export const taskSchema = z.object({
  title: z
    .string({ required_error: "title is required!" })
    .min(3, "Name must have more than 1 characteres!")
    .max(15, "Name must have less than 20 characteres!"),
  description: z
    .string({ required_error: "Description is required!" })
    .min(1)
    .max(250),
  projectId: z.string({ required_error: "Project id is required!" }),
});

export type ITaskSchema = z.infer<typeof taskSchema>;
