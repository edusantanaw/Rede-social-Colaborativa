import { z } from "zod";

export const projectSchema = z.object({
  name: z
    .string({ required_error: "Name is required!" })
    .min(3, "Name must have more than 3 characteres!")
    .max(15, "Name must have less than 15 characteres!"),
  description: z
    .string({ required_error: "Description is required!" })
    .min(1)
    .max(250),
  ownerId: z.string({ required_error: "Owner id is required!" }),
});

export type IProjectSchema = z.infer<typeof projectSchema>;
