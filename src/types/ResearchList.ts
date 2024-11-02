import { z } from "zod";
import { ResearchListSchema } from "@/schemas/ResearchListSchema";

export type ResearchList = z.infer<typeof ResearchListSchema>;