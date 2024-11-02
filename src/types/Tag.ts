import { z } from "zod";
import { TagSchema } from "@/schemas/TagSchema";

export type Tag = z.infer<typeof TagSchema>;
