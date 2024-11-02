import { z } from "zod";
import { ContactFormTopicSchema } from "@/schemas/ContactFormTopicSchema";

export type ContactFormTopic = z.infer<typeof ContactFormTopicSchema>;
