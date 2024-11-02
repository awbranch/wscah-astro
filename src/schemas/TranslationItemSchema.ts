import { z } from "zod";

export const TranslationItemSchema = z.object({
  _type: z.literal("translationItem"),
  _key: z.string(),
  key: z.string(),
  value: z.string(),
});
