import { z } from "zod";
import { PortableTextBlockArraySchema } from "@/schemas/PortableTextBlockArraySchema";

export const ButtonLabelSchema = z.object({
  _type: z.literal("buttonLabel"),
  _key: z.string(),
  text: PortableTextBlockArraySchema,
});
