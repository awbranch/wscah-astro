import { z } from "zod";
import { ContactPayloadSchema } from "@/schemas/ContactPayloadSchema";

export type ContactPayload = z.infer<typeof ContactPayloadSchema>;
