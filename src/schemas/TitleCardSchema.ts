import { z } from "zod";
import { PortableTextBlockArraySchema } from "@/schemas/PortableTextBlockArraySchema";

export const TitleCardSchema = z.object({
  _type: z.literal("titleCard"),
  _key: z.string(),
  eyebrow: z.string().optional(),
  text: PortableTextBlockArraySchema,
});
