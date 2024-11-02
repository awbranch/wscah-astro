import { z } from "zod";

export const SlugSchema = z.object({
  _type: z.literal("slug"),
  current: z.string(),
});
