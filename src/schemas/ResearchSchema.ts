import { z } from "zod";
import { ImageSchema } from "@/schemas/ImageSchema";

export const ResearchSchema = z.object({
  _type: z.literal("research"),
  _id: z.string(),
  source: z.string(),
  date: z.string(),
  title: z.string(),
  logo: ImageSchema,
  link: z.string(),
});