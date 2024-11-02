import { z } from "zod";
import { RouteSegmentSchema } from "@/schemas/RouteSegmentSchema";

export type RouteSegment = z.infer<typeof RouteSegmentSchema>;
