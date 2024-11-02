import { z } from "zod";

export const DataPointSchema = z.object({
  _type: z.literal("dataPoint"),
  _key: z.string(),
  year: z.number(),
  value: z.number(),
});