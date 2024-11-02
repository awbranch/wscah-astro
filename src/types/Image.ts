import { z } from "zod";
import { ImageSchema } from "@/schemas/ImageSchema";

export type Image = z.infer<typeof ImageSchema>;
