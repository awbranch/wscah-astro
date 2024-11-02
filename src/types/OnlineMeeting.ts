import { z } from "zod";
import { OnlineMeetingSchema } from "@/schemas/OnlineMeetingSchema";

export type OnlineMeeting = z.infer<typeof OnlineMeetingSchema>;
