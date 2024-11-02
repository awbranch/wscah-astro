import { z } from "zod";
import { EventListSchema } from "@/schemas/EventListSchema";

export type EventList = z.infer<typeof EventListSchema>;
