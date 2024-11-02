import { z } from "zod";
import { ResearchSchema } from "@/schemas/ResearchSchema";

export type Research = z.infer<typeof ResearchSchema>;