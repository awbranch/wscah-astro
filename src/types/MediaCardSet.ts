import { z } from "zod";
import { MediaCardSetSchema } from "@/schemas/MediaCardSetSchema";

export type MediaCardSet = z.infer<typeof MediaCardSetSchema>;
