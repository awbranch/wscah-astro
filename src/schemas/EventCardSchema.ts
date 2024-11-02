import { z } from "zod";
import { ClickAreaSchema } from "@/schemas/ClickAreaSchema";
import { ButtonSchema } from "@/schemas/ButtonSchema";
import { ImageSchema } from "@/schemas/ImageSchema";

export const EventCardSchema = z.object({
  _type: z.literal("eventCard"),
  _key: z.string(),
  eyebrow: z.string().optional(),
  title: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  slug: z.string(),
  summary: z.string(),
  previewImage: ImageSchema.optional(),
  clickArea: ClickAreaSchema,
  button: ButtonSchema.omit({ _key: true }).optional(),
  href: z.string().optional(),
});
