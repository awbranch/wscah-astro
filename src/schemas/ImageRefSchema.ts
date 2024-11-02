import { z } from "zod";
import { ImageSchema } from "@/schemas/ImageSchema";

export const ImageRefSchema = z.object({
  _type: z.literal("imageRef"),
  image: ImageSchema,
}); 