import { z } from "zod";
import { PhraseLoopSchema } from "@/schemas/PhraseLoopSchema";

export type PhraseLoop = z.infer<typeof PhraseLoopSchema>;
