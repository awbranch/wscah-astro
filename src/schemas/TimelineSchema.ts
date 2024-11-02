import { z } from "zod";
import { ComponentContextSchema } from "@/schemas/ContextSchema";
import { TimelineEventSchema } from "@/schemas/TimelineEventSchema";

export const TimelineSchema = z.object({
  _type: z.literal("timeline"),
  _key: z.string(),
  context: ComponentContextSchema,
  events: z.array(TimelineEventSchema),
});
