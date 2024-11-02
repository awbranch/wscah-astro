import { z } from "zod";

import { PortableTextBlockArraySchema} from "@/schemas/PortableTextBlockArraySchema";
import { SlugSchema } from "@/schemas/SlugSchema";
import { ImageSchema } from "@/schemas/ImageSchema";
import { BlockSchema } from "@/schemas/BlockSchema";
import { TagSchema } from "@/schemas/TagSchema";

export const NewsCoreSchema = z.object({
  _type: z.literal("news"),
  _id: z.string(),
  categories: z.array(TagSchema),
  date: z.string(),
  title: z.string(),
  slug: SlugSchema,
  summary: z.string(),
  previewImage: ImageSchema,
  text: PortableTextBlockArraySchema,
});

export const NewsSchema = NewsCoreSchema.and(
  z.object({
    blocks: z.array(BlockSchema).optional(),
  }),
);
