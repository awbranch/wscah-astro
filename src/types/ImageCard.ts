import { z } from "zod";
import { ImageCardSchema } from "@/schemas/ImageCardSchema";

export type ImageCard = z.infer<typeof ImageCardSchema>;
