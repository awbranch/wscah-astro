import { z } from "zod";

import { ComponentContextSchema } from "@/schemas/ContextSchema";
import { PortableTextBlockArraySchema } from "@/schemas/PortableTextBlockArraySchema";
import { ButtonSchema } from "@/schemas/ButtonSchema";
import { ImageSchema } from "@/schemas/ImageSchema";
import { AlignmentSchema } from "@/schemas/AlignmentSchema";

export const OrientationSchema = z.enum(["left", "right"]);

export const CallToActionSchema = z.object({
  _type: z.literal("callToAction"),
  _key: z.string(),
  context: ComponentContextSchema,
  orientation: OrientationSchema,
  image: ImageSchema,
  alignment: AlignmentSchema.optional(),
  eyebrow: z.string().optional(),
  text: PortableTextBlockArraySchema.optional(),
  buttons: z.array(ButtonSchema).optional(),
});
