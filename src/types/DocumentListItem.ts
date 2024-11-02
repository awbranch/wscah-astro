import { z } from "zod";
import { DocumentListItemSchema } from "@/schemas/DocumentListItemSchema";

export type DocumentListItem = z.infer<typeof DocumentListItemSchema>;
