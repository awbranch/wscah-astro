import { z } from "zod";

export const OnlineMeetingSchema = z.object({
  _type: z.literal("onlineMeeting"),
  url: z.string().url(),
  details: z.string().optional(),
});
