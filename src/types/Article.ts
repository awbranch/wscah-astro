import { z } from "zod";
import { ArticleSchema } from "@/schemas/ArticleSchema";

export type Article = z.infer<typeof ArticleSchema>;
