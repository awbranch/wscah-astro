import { z } from "zod";
import {
  AnnouncementStyleSchema,
  AnnouncementSchema,
} from "@/schemas/AnnouncementSchema";

export type AnnouncementStyle = z.infer<typeof AnnouncementStyleSchema>;
export type Announcement = z.infer<typeof AnnouncementSchema>;
