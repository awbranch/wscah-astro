import { z } from "zod";
import { ImageSchema } from "@/schemas/ImageSchema";

export const PressSchema = z.object({
  _type: z.literal("press"),
  _id: z.string(),
  source: z.string(),
  date: z.string(),
  title: z.string(),
  logo: ImageSchema,
  link: z.string(),
});