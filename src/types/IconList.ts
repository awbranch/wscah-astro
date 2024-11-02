import { z } from "zod";
import { IconListSchema } from "@/schemas/IconListSchema";

export type IconList = z.infer<typeof IconListSchema>;
