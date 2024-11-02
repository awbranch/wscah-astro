import { z } from "zod";

export const NewsletterSchema = z.object({
  eyebrow: z.string().optional(),
  title: z.string().optional(),
  text: z.string().optional(),
  label: z.string().optional(),
  href: z.string().optional(),
});
