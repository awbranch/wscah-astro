import { z } from "zod";

export const RouteSegmentSchema = z.object({
  name: z.string(),
  path: z.string(),
});  