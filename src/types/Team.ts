import { z } from "zod";
import { TeamSchema } from "@/schemas/TeamSchema";

export type Team = z.infer<typeof TeamSchema>;
