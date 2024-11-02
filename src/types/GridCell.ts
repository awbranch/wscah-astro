import { z } from "zod";
import { GridCellSchema } from "@/schemas/GridCellSchema";

export type GridCell = z.infer<typeof GridCellSchema>;
