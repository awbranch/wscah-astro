import { z } from "zod";
import { LogoGridItemSchema } from "@/schemas/LogoGridItemSchema";

export type LogoGridItem = z.infer<typeof LogoGridItemSchema>;
