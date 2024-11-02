import { z } from "zod";
import { EnhancedImageSchema } from "@/schemas/EnhancedImageSchema";

export const ImageGridItemSchema = z.object({
  _type: z.literal("imageGridItem"),
  _key: z.string(),
  image: EnhancedImageSchema,
  href: z.string().optional(),
});