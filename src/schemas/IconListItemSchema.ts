import { z } from "zod";
import { ImageSchema } from "@/schemas/ImageSchema";
import { PortableTextBlockArraySchema } from "@/schemas/PortableTextBlockArraySchema";

export const IconListItemSchema = z.object({
  _type: z.literal("iconListItem"),
  _key: z.string(),
  icon: ImageSchema,
  title: z.string(),
  text: PortableTextBlockArraySchema.optional(),
});
