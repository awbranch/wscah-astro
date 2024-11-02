import { z } from "zod";
import { NewsCoreSchema, NewsSchema } from "@/schemas/NewsSchema";

export type NewsCore = z.infer<typeof NewsCoreSchema>;
export type News = z.infer<typeof NewsSchema>;
