import { z } from "zod";
import { ComponentContextSchema } from "@/schemas/ContextSchema";
import { PhraseLoopItemSchema } from "@/schemas/PhraseLoopItemSchema";

export const PhraseLoopSchema = z.object({
  _type: z.literal("phraseLoop"),
  _key: z.string(),
  context: ComponentContextSchema,
  items: z.array(PhraseLoopItemSchema),
});
