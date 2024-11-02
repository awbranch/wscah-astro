import { z } from "zod";
import { ImageRefSchema } from "@/schemas/ImageRefSchema";

export type ImageRef = z.infer<typeof ImageRefSchema>;
