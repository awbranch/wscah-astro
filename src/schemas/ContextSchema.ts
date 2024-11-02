import { z } from "zod";
import { RouteSegmentSchema } from "@/schemas/RouteSegmentSchema";
import { PaletteSchema } from "@/schemas/PaletteSchema";
import { PageWidthSchema } from "@/schemas/PageWidthSchema";

export const PageContextSchema = z.object({
  path: z.string(),
  route: z.array(RouteSegmentSchema),
  routePrefix: z.string(),
  preview: z.boolean(),
  tab: z.string().optional(),
  pagingGroup: z.number().optional(),
});

export const BlockContextSchema = z.object({
  id: z.string(),
  palette: PaletteSchema,
  index: z.number(),
  count: z.number(),
  maxWidth: PageWidthSchema,
});

export const ComponentContextSchema = z.object({
  page: PageContextSchema,
  block: BlockContextSchema,
});
