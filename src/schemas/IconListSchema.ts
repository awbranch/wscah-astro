import { z } from "zod";
import { ComponentContextSchema } from "@/schemas/ContextSchema";
import { IconListItemSchema } from "@/schemas/IconListItemSchema";

export const IconListSchema = z.object({
  _type: z.literal("iconList"),
  _key: z.string(),
  context: ComponentContextSchema,
  columns: z.number(),
  items: z.array(IconListItemSchema),
});
