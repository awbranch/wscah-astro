import { z } from "zod";
import { ClickAreaSchema } from "@/schemas/ClickAreaSchema";
import { ButtonSchema } from "@/schemas/ButtonSchema";
import { PortableTextBlockArraySchema } from "@/schemas/PortableTextBlockArraySchema";

export const ImpactCardSchema = z.object({
  _type: z.literal("impactCard"),
  _key: z.string(),
  title: z.string().optional(),
  value: z.string(),
  text: PortableTextBlockArraySchema.optional(),
  clickArea: ClickAreaSchema,
  button: ButtonSchema.omit({ _key: true }).optional(),
  href: z.string().optional(),
});