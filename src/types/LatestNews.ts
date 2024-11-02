import { z } from "zod";
import { LatestNewsSchema } from "@/schemas/LatestNewsSchema";

export type LatestNews = z.infer<typeof LatestNewsSchema>;
