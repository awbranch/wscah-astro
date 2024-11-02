import { z } from "zod";
import { FileSchema } from '@/schemas/FileSchema';

export const DocumentListItemSchema = z.object({
  _type: z.literal("documentListItem"),
  _key: z.string(),
  name: z.string(),
  description: z.string().optional(),
  file: FileSchema,
});