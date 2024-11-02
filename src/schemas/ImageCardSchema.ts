import { z } from "zod";
import { ImageSchema } from "@/schemas/ImageSchema";
import { ClickAreaSchema } from "@/schemas/ClickAreaSchema";
import { ButtonSchema } from "@/schemas/ButtonSchema";

export const ImageCardSchema = z.object({
  _type: z.literal("imageCard"),
  _key: z.string(),
  image: ImageSchema.optional(),
  eyebrow: z.string().optional(),
  title: z.string().optional(),
  text: z.string().optional(),
  clickArea: ClickAreaSchema,
  button: ButtonSchema.omit({ _key: true }).optional(),
  href: z.string().optional(),
});

