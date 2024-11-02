import { z } from "zod";
import { PaletteSchema } from "@/schemas/PaletteSchema";

export type Palette = z.infer<typeof PaletteSchema>;
