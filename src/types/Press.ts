import { z } from "zod";
import { PressSchema } from "@/schemas/PressSchema";

export type Press = z.infer<typeof PressSchema>;