import { z } from "zod";
import { ComponentContextSchema } from "@/schemas/ContextSchema";
import { LogoGridItemSchema } from "@/schemas/LogoGridItemSchema";

export const LogoGridSchema = z.object({
  _type: z.literal("logoGrid"),
  _key: z.string(),
  context: ComponentContextSchema,
  columns: z.number(),
  items: z.array(LogoGridItemSchema),
});
