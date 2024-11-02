import { z } from "zod";
import { IconButtonSchema } from "@/schemas/IconButtonSchema";

export type IconButton = z.infer<typeof IconButtonSchema>;
