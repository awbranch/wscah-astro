
import { z } from "zod";
import { ContactMessageSchema } from "@/schemas/ContactMessageSchema";

export const ContactPayloadSchema = z.object({
  pagePath: z.string().min(1, "Page path is required"),
  formKey: z.string().min(1, "Form key is required"),
  message: ContactMessageSchema,
});
