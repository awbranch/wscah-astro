import { z } from "zod";
import { MediaCardSchema } from "@/schemas/MediaCardSchema";

export type MediaCard = z.infer<typeof MediaCardSchema>;
