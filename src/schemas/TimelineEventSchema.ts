import { z } from "zod";
import { ImageSchema } from "@/schemas/ImageSchema";

export const TimelineEventSchema = z.object({
  _type: z.literal("timelineEvent"),
  _key: z.string(),
  time: z.string(),
  descripion: z.string(),
  image: ImageSchema,
});
