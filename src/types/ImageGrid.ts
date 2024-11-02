import { z } from "zod";
import { ImageGridSchema } from "@/schemas/ImageGridSchema";

export type ImageGrid = z.infer<typeof ImageGridSchema>;
