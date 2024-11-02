import { z } from "zod";
import { ComponentContextSchema } from "@/schemas/ContextSchema";
import { TabBarItemSchema } from "@/schemas/TabBarItemSchema";

export const TabBarSchema = z.object({
  _type: z.literal("tabBar"),
  _key: z.string(),
  context: ComponentContextSchema,
  tabs: z.array(TabBarItemSchema),
});
