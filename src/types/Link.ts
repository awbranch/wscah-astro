import { z } from "zod";
import { LinkSchema } from "@/schemas/LinkSchema";

export type Link = z.infer<typeof LinkSchema>;
