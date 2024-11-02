import { z } from "zod";
import { ComponentContextSchema } from "@/schemas/ContextSchema";

export const LatestNewsSchema = z.object({
  _type: z.literal("latestNews"),
  _key: z.string(),
  context: ComponentContextSchema,
  count: z.number().min(1),
  includeEvents: z.boolean().optional(),
});
