import { z } from "zod";

export const ContactMessageSchema = z.object({
  topic: z.string({ required_error: "topic.error.required" }),
  firstName: z.string().trim().min(1, "firstName.error.required"),
  lastName: z.string().trim().min(1, "lastName.error.required"),
  email: z
    .string()
    .trim()
    .min(1, "email.error.required")
    .email({ message: "email.error.format" }),
  phoneNumber: z.string().optional(),
  subject: z.string().trim().min(1, "subject.error.required"),
  message: z
    .string()
    .min(1, "message.error.required")
    .max(10000, "message.error.maxLength"),
});
