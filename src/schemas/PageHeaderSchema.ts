import { z } from "zod";
import { ComponentContextSchema } from "@/schemas/ContextSchema";
import { PortableTextBlockArraySchema } from "@/schemas/PortableTextBlockArraySchema";
import { ButtonSchema } from "@/schemas/ButtonSchema";
import { ImageSchema } from "@/schemas/ImageSchema";

export const PageHeaderSchema = z.object({
  _type: z.literal("pageHeader"),
  _key: z.string(),
  context: ComponentContextSchema,
  breadcrumbs: z.boolean().optional(),
  text: PortableTextBlockArraySchema.optional(),
  buttons: z.array(ButtonSchema).optional(),
  image: ImageSchema.optional(),
  garnish: z.boolean().optional(),
});