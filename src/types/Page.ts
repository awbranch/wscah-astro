import { z } from "zod";
import { PageCoreSchema, PageSchema } from "@/schemas/PageSchema";

export type PageCore = z.infer<typeof PageCoreSchema>;
export type Page = z.infer<typeof PageSchema>;
