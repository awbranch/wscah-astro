import { z } from "zod";

export const ReferenceSchema = z.object({
  _type: z.literal("reference"),
  _ref: z.string(),
});
