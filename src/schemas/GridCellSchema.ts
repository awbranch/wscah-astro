import { z } from "zod";

import { ArticleSchema } from "@/schemas/ArticleSchema";
import { ButtonRowSchema } from "@/schemas/ButtonRowSchema";
import { IconListSchema } from "@/schemas/IconListSchema";
import { TitleSchema } from "@/schemas/TitleSchema";

const GridCellComponentSchema = z.union([
  ArticleSchema,
  ButtonRowSchema,
  IconListSchema,
  TitleSchema,
]);

export const GridCellSchema = z.object({
  _type: z.literal("gridCell"),
  _key: z.string(),
  components: z.array(GridCellComponentSchema),
});
