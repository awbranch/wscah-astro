import { z } from "zod";
import { ImageSchema } from "@/schemas/ImageSchema";
import { RedirectSchema } from "@/schemas/RedirectSchema";

export const SettingsSchema = z.object({
  _id: z.string(),
  _type: z.literal("settings"),
  title: z.string(),
  description: z.string(),
  socialImage: ImageSchema,
  redirects: z.array(RedirectSchema).optional(),
});
