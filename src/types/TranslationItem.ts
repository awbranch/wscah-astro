import { z } from "zod";
import { TranslationItemSchema } from "@/schemas/TranslationItemSchema";

export type TranslationItem = z.infer<typeof TranslationItemSchema>;
