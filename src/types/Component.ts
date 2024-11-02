import { z } from "zod";
import { ComponentSchema } from "@/schemas/ComponentSchema";

export type Component = z.infer<typeof ComponentSchema>;
