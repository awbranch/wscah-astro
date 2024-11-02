import { z } from "zod";
import { IconCardSchema } from "@/schemas/IconCardSchema";

export type IconCard = z.infer<typeof IconCardSchema>;

