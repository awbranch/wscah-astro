import { z } from "zod";
import { ImageSchema } from "@/schemas/ImageSchema";

export const EnhancedImageSchema = ImageSchema.extend({
  caption: z.string().optional(),
});