import { z } from "zod";
import { ComponentContextSchema } from "@/schemas/ContextSchema";

export const PressListSchema = z.object({
  _type: z.literal("pressList"),
  _key: z.string(),
  context: ComponentContextSchema,
  itemsPerPage: z.number().min(1),
});