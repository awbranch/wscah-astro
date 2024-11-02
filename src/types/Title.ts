import { z } from "zod";
import { TitleSchema, TitleWidthSchema } from "@/schemas/TitleSchema";

export type TitleWidth = z.infer<typeof TitleWidthSchema>;
export type Title = z.infer<typeof TitleSchema>;
