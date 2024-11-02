import { z } from "zod";
import { PhraseLoopItemSchema } from "@/schemas/PhraseLoopItemSchema";

export type PhraseLoopItem = z.infer<typeof PhraseLoopItemSchema>;
