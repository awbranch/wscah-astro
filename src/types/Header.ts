import { z } from "zod";
import { HeaderSchema, AlertPaletteSchema } from "@/schemas/HeaderSchema";

export type AlertPalette = z.infer<typeof AlertPaletteSchema>;
export type Header = z.infer<typeof HeaderSchema>;
