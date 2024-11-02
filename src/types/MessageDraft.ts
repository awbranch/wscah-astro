import { z } from "zod";
import { MessageDraftSchema } from "@/schemas/MessageDraftSchema";

export type MessageDraft = z.infer<typeof MessageDraftSchema>;
