import { z } from "zod";
import { ComponentContextSchema } from "@/schemas/ContextSchema";
import { ReferenceSchema } from "@/schemas/ReferenceSchema";

export const ComponentSetReferenceSchema = z.object({
  _type: z.literal("componentSetReference"),
  _key: z.string(),
  context: ComponentContextSchema,
  componentSet: ReferenceSchema,
});
