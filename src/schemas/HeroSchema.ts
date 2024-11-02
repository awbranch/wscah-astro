import { z } from "zod";
import { ComponentContextSchema } from "@/schemas/ContextSchema";
import { PortableTextBlockArraySchema } from "@/schemas/PortableTextBlockArraySchema";
import { ButtonSchema } from "@/schemas/ButtonSchema";
import { ImageRefSchema } from "@/schemas/ImageRefSchema";
import { AlignmentSchema } from "@/schemas/AlignmentSchema";

export const HeroSchema = z.object({
  _type: z.literal("hero"),
  _key: z.string(),
  context: ComponentContextSchema,
  alignment: AlignmentSchema.optional(),
  text: PortableTextBlockArraySchema,
  display: z.enum(["fan", "single"]),
  images: z.array(ImageRefSchema).optional(),
  buttons: z.array(ButtonSchema).optional(),
  supplemental: PortableTextBlockArraySchema.optional(),
  garnish: z.boolean().optional(),
});
