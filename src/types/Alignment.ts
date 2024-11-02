import { z } from "zod";
import { AlignmentSchema } from "@/schemas/AlignmentSchema";

export type Alignment = z.infer<typeof AlignmentSchema>;
