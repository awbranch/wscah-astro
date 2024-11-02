import { z } from "zod";
import { GridSchema } from "@/schemas/GridSchema";

export type Grid = z.infer<typeof GridSchema>;
