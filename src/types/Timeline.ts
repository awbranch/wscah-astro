import { z } from "zod";
import { TimelineSchema } from "@/schemas/TimelineSchema";

export type Timeline = z.infer<typeof TimelineSchema>;
