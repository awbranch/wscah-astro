import { z } from "zod";

export const PhraseLoopItemSchema = z.object({
  _type: z.literal("phraseLoopItem"),
  _key: z.string(),
  text: z.string(),
});