import { z } from "zod";
import { EnhancedImageSchema } from "@/schemas/EnhancedImageSchema";

export type EnhancedImage = z.infer<typeof EnhancedImageSchema>;
