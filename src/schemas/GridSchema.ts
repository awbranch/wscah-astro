import { z } from "zod";
import { GridCellSchema } from "@/schemas/GridCellSchema";
import { ComponentContextSchema } from "@/schemas/ContextSchema";

export const GridSchema = z.object({
  _type: z.literal("grid"),
  _key: z.string(),
  context: ComponentContextSchema,
  columns: z.number(),
  cells: z.array(GridCellSchema),
});
