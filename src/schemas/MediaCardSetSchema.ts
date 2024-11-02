import { z } from "zod";
import { ComponentContextSchema } from "@/schemas/ContextSchema";
import { PaletteSchema } from "@/schemas/PaletteSchema";
import { MediaCardSchema } from "@/schemas/MediaCardSchema";

export const MediaCardSetSchema = z.object({
  _type: z.literal("mediaCardSet"),
  _key: z.string(),
  context: ComponentContextSchema,
  palette: PaletteSchema.optional(),
  columns: z.number().min(2).max(4).optional(),
  cards: z.array(MediaCardSchema),
});
