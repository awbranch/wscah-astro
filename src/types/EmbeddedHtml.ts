import { z } from "zod";
import { EmbeddedHtmlSchema } from "@/schemas/EmbeddedHtmlSchema";

export type EmbeddedHtml = z.infer<typeof EmbeddedHtmlSchema>;
