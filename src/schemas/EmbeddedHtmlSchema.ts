import { z } from "zod";
import { ComponentContextSchema } from "@/schemas/ContextSchema";

export const EmbeddedHtmlSchema = z.object({
  _type: z.literal("embeddedHtml"),
  _key: z.string(),
  context: ComponentContextSchema,
  html: z.string(),
});
