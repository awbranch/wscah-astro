import { z } from "zod";
import { DocumentListSchema } from "@/schemas/DocumentListSchema";

export type DocumentList = z.infer<typeof DocumentListSchema>;
