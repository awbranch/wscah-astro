import { z } from "zod";
import { TeamListSchema, TeamListStyleSchema } from "@/schemas/TeamListSchema";

export type TeamListStyle = z.infer<typeof TeamListStyleSchema>;
export type TeamList = z.infer<typeof TeamListSchema>;
