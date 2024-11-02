import { z } from "zod";
import { ContactFormSchema } from "@/schemas/ContactFormSchema";

export type ContactForm = z.infer<typeof ContactFormSchema>;
