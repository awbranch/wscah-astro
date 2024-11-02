import { z } from "zod";
import { NewsletterSchema } from "@/schemas/NewsletterSchema";

export type Newsletter = z.infer<typeof NewsletterSchema>;
