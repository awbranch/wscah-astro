import { z } from "zod";
import { ReferenceSchema } from "@/schemas/ReferenceSchema";

export const ImageSchema = z.object({
  _type: z.literal("image"),
  alt: z.string().optional(),
  asset: ReferenceSchema.optional(),
  hotspot: z
    .object({
      _type: z.literal("sanity.imageHotspot"),
      x: z.number(),
      y: z.number(),
      height: z.number(),
      width: z.number(),
    })
    .optional(),
  crop: z
    .object({
      _type: z.literal("sanity.imageCrop"),
      top: z.number(),
      bottom: z.number(),
      left: z.number(),
      right: z.number(),
    })
    .optional(),
});
