import { z } from "zod";
import { PageWidthSchema } from "@/schemas/PageWidthSchema";

export type PageWidth = z.infer<typeof PageWidthSchema>;
