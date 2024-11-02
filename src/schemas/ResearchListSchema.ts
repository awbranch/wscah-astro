import { z } from "zod";
import { ComponentContextSchema } from "@/schemas/ContextSchema";

export const ResearchListSchema = z.object({
  _type: z.literal("researchList"),
  _key: z.string(),
  context: ComponentContextSchema,
  itemsPerPage: z.number().min(1),
  totalItems: z.number().optional(),
});