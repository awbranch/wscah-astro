import { z } from "zod";

export const LinkSchema = z.object({
  _type: z.literal("link"),
  _key: z.string(),
  name: z.string(),
  href: z.string(),
});
