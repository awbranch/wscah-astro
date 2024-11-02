import { z } from "zod";
import { ImageSchema } from "@/schemas/ImageSchema";
import { SlugSchema } from "@/schemas/SlugSchema";

export const ContactFormTopicSchema = z.object({
  _type: z.literal("contactFormTopic"),
  _key: z.string(),
  id: SlugSchema,
  name: z.string(),
  emailTo: z.string(),
  image: ImageSchema.optional(),
});
