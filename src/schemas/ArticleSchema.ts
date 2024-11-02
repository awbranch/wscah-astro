import { z } from "zod";
import { ComponentContextSchema } from "@/schemas/ContextSchema";
import { PortableTextBlockArraySchema } from "@/schemas/PortableTextBlockArraySchema";

export const ArticleSchema = z.object({
  _type: z.literal("article"),
  _key: z.string(),
  context: ComponentContextSchema,
  text: PortableTextBlockArraySchema.optional(),
  columns: z.number().min(1).max(4),
});
