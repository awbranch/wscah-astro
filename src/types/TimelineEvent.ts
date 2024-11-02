import { z } from "zod";
import { TimelineEventSchema } from "@/schemas/TimelineEventSchema";

export type TimelineEvent = z.infer<typeof TimelineEventSchema>;
