import { z } from "zod";
import { SlugSchema } from "@/schemas/SlugSchema";

export type Slug = z.infer<typeof SlugSchema>;