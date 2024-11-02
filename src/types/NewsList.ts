import { z } from "zod";
import { NewsListSchema } from "@/schemas/NewsListSchema";

export type NewsList = z.infer<typeof NewsListSchema>;
