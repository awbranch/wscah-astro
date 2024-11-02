import { z } from "zod";
import { EventCardSchema } from "@/schemas/EventCardSchema";

export type EventCard = z.infer<typeof EventCardSchema>;
