import { z } from "zod";
import { ComponentContextSchema } from "@/schemas/ContextSchema";
import { TagSchema } from '@/schemas/TagSchema';

export const NewsListSchema = z.object({
  _type: z.literal("newsList"),
  _key: z.string(),
  context: ComponentContextSchema,
  storiesPerPage: z.number().min(1),
  newsCategories: z.array(TagSchema).optional(),
});