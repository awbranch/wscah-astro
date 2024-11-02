import { z } from "zod";
import { ImageSchema } from "@/schemas/ImageSchema";
import { ClickAreaSchema } from "@/schemas/ClickAreaSchema";
import { ButtonSchema } from "@/schemas/ButtonSchema";

export const IconCardSchema = z.object({
  _type: z.literal("iconCard"),
  _key: z.string(),
  icon: ImageSchema,
  title: z.string().optional(),
  text: z.string().optional(),
  clickArea: ClickAreaSchema,
  button: ButtonSchema.omit({ _key: true }).optional(),
  href: z.string().optional(),
});
