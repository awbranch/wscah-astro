import { z } from "zod";

export const  TagSchema = z.object({
  _type: z.literal("tag"),
  _key: z.string(),
  label: z.string(),
  value: z.string(),
});