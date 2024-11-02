import { z } from "zod";
import { ImageGridItemSchema } from "@/schemas/ImageGridItemSchema";

export type ImageGridItem = z.infer<typeof ImageGridItemSchema>;
