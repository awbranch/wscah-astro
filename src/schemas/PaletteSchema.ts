import { z } from "zod";

export const PaletteSchema = z.enum(["white", "gray", "blue"]);
