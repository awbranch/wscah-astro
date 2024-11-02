import { z } from "zod";
import { ComponentContextSchema } from "@/schemas/ContextSchema";
import { ContactFormTopicSchema } from "@/schemas/ContactFormTopicSchema";
import { TranslationItemSchema } from "@/schemas/TranslationItemSchema";

export const ContactFormSchema = z.object({
  _type: z.literal("contactForm"),
  _key: z.string(),
  context: ComponentContextSchema,
  topics: z.array(ContactFormTopicSchema),
  confSubject: z.string(),
  confTemplate: z.string(),
  tagLine: z.string().optional(),
  copyright: z.string().optional(),
  fieldTranslations: z.array(TranslationItemSchema),
});
