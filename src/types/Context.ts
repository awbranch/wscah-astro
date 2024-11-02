import { z } from "zod";
import { PageContextSchema } from "@/schemas/ContextSchema";
import { BlockContextSchema } from "@/schemas/ContextSchema";
import { ComponentContextSchema } from "@/schemas/ContextSchema";

export type PageContext = z.infer<typeof PageContextSchema>;
export type BlockContext = z.infer<typeof BlockContextSchema>;
export type ComponentContext = z.infer<typeof ComponentContextSchema>;
