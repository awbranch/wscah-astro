import { z } from "zod";
import { ImageSchema } from "@/schemas/ImageSchema";

export const LogoGridItemSchema = z.object({
  _type: z.literal("logoGridItem"),
  _key: z.string(),
  image: ImageSchema,
  href: z.string().optional(),
});