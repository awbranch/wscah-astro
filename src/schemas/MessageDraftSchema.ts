import { z } from "zod";
import { ComponentContextSchema } from "@/schemas/ContextSchema";
import { ButtonVariantSchema } from "@/schemas/ButtonSchema";

export const MessageDraftSchema = z.object({
  _type: z.literal("messageDraft"),
  _key: z.string(),
  context: ComponentContextSchema,
  text: z.string(),
  rows: z.number().min(1),
  copyVariant: ButtonVariantSchema,
  copyLabel: z.string(),
});