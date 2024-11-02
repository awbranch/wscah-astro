import { z } from "zod";

export const RedirectSchema = z.object({
  _type: z.literal("redirect"),
  _key: z.string(),
  source: z.string(),
  destination: z.string(),
});