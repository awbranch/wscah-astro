import { z } from "zod";
import { ImageSchema } from "@/schemas/ImageSchema";

export const IconButtonSchema = z.object({
  _type: z.literal("iconButton"),
  _key: z.string(),
  icon: ImageSchema,
  hoverIcon: ImageSchema.optional(),
  href: z.string().optional(),
  width: z.number(),
  height: z.number(),
});
