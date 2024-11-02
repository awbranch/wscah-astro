import { z } from "zod";
import { PressListSchema } from "@/schemas/PressListSchema";

export type PressList = z.infer<typeof PressListSchema>;