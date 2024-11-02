import { z } from "zod";
import { EventSchema, EventCoreSchema } from "@/schemas/EventSchema";

export type EventCore = z.infer<typeof EventCoreSchema>;
export type Event = z.infer<typeof EventSchema>;
