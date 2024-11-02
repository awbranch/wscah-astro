import { z } from "zod";
import { ComponentContextSchema } from "@/schemas/ContextSchema";

export const EventListSchema = z.object({
  _type: z.literal("eventList"),
  _key: z.string(),
  context: ComponentContextSchema,
  eventsPerPage: z.number().min(1),
});