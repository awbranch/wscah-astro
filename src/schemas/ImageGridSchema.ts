import { z } from "zod";
import { ComponentContextSchema } from "@/schemas/ContextSchema";
import { ImageGridItemSchema } from "@/schemas/ImageGridItemSchema";

export const ImageGridSchema = z.object({
  _type: z.literal("imageGrid"),
  _key: z.string(),
  context: ComponentContextSchema,
  columns: z.number(),
  items: z.array(ImageGridItemSchema),
});
