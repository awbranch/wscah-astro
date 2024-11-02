import { z } from "zod";
import { PaletteSchema } from "@/schemas/PaletteSchema";
import { ComponentSchema } from "@/schemas/ComponentSchema";
import { PageWidthSchema } from "@/schemas/PageWidthSchema";
import { ImageSchema } from "@/schemas/ImageSchema";

export const BlockSchema = z.object({
  _type: z.literal("pageBlock"),
  _key: z.string(),
  id: z.string(),
  hidden: z.boolean(),
  palette: PaletteSchema,
  components: z.array(ComponentSchema).optional(),
  maxWidth: PageWidthSchema,
  wallpaper: ImageSchema.optional(),
});
