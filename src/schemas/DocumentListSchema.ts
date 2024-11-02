import { z } from "zod";
import { ComponentContextSchema } from "@/schemas/ContextSchema";
import { DocumentListItemSchema } from "@/schemas/DocumentListItemSchema";

export const DocumentListSchema = z.object({
  _type: z.literal("documentList"),
  _key: z.string(),
  context: ComponentContextSchema,
  items: z.array(DocumentListItemSchema),
});
